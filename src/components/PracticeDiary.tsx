/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { DailyHabit } from "../types";
import { ListChecks, Calendar, Check, Zap, Plus, X, Award, Trash2, Heart } from "lucide-react";

const PRESET_HABITS: Omit<DailyHabit, "id" | "streak" | "completedDays">[] = [
  { title: "Silencio y Oración en Madián (Despojo)", category: "Lectura" },
  { title: "Servir en el Calabozo sin Quejas (Invisibilidad)", category: "Servicio" },
  { title: "Estudio Sistemático de la Palabra", category: "Reflexión" },
  { title: "Interceder por mis Líderes y Compañeros", category: "Disciplina" }
];

export default function PracticeDiary() {
  const [habits, setHabits] = useState<DailyHabit[]>([]);
  const [newHabitTitle, setNewHabitTitle] = useState("");
  const [newHabitCat, setNewHabitCat] = useState<DailyHabit["category"]>("Disciplina");

  // Load habits from local storage if available
  useEffect(() => {
    const saved = localStorage.getItem("ley_proceso_habits");
    if (saved) {
      try {
        setHabits(JSON.parse(saved));
      } catch (e) {
        initializePresets();
      }
    } else {
      initializePresets();
    }
  }, []);

  const saveHabits = (updated: DailyHabit[]) => {
    setHabits(updated);
    localStorage.setItem("ley_proceso_habits", JSON.stringify(updated));
  };

  const initializePresets = () => {
    const presets: DailyHabit[] = PRESET_HABITS.map((preset, index) => ({
      ...preset,
      id: `preset_${index}`,
      streak: 0,
      completedDays: []
    }));
    saveHabits(presets);
  };

  const getTodayString = () => {
    // Return date string formatted as e.g. "2026-05-23"
    return new Date().toISOString().split("T")[0];
  };

  const getPastDateString = (daysAgo: number) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString().split("T")[0];
  };

  // Generate the last 5 days for interactive checks
  const last5Days = [4, 3, 2, 1, 0].map((daysAgo) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    const label = date.toLocaleDateString("es-ES", { weekday: "short", day: "numeric" });
    const isoString = date.toISOString().split("T")[0];
    return { label, isoString, isToday: daysAgo === 0 };
  });

  const toggleDayCompletion = (habitId: string, isoDate: string) => {
    const updated = habits.map((habit) => {
      if (habit.id === habitId) {
        let completedDays = [...habit.completedDays];
        if (completedDays.includes(isoDate)) {
          completedDays = completedDays.filter((d) => d !== isoDate);
        } else {
          completedDays.push(isoDate);
        }

        // Recompute streak
        let streak = 0;
        let checkDate = new Date();
        while (true) {
          const checkStr = checkDate.toISOString().split("T")[0];
          if (completedDays.includes(checkStr)) {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
          } else {
            break;
          }
        }

        return { ...habit, completedDays, streak };
      }
      return habit;
    });
    saveHabits(updated);
  };

  const addNewHabit = (e: FormEvent) => {
    e.preventDefault();
    if (!newHabitTitle.trim()) return;

    const newHabit: DailyHabit = {
      id: `custom_${Date.now()}`,
      title: newHabitTitle.trim(),
      category: newHabitCat,
      streak: 0,
      completedDays: []
    };

    saveHabits([...habits, newHabit]);
    setNewHabitTitle("");
  };

  const deleteHabit = (id: string) => {
    const updated = habits.filter((h) => h.id !== id);
    saveHabits(updated);
  };

  const restorePresets = () => {
    if (window.confirm("¿Deseas restaurar la agenda diaria a la configuración inicial por defecto?")) {
      initializePresets();
    }
  };

  const totalStreak = habits.reduce((max, h) => Math.max(max, h.streak), 0);

  // Compute stats
  const totalCompletedChecks = habits.reduce((sum, h) => sum + h.completedDays.length, 0);

  return (
    <section id="diary-practice-section" className="bg-white rounded-2xl border border-stone-200/80 p-6 md:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 border-b border-amber-100 mb-6 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full font-medium inline-flex items-center gap-1.5">
            <ListChecks className="w-3.5 h-3.5" /> El Secreto de la Agenda Diaria
          </span>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-900 mt-2">
            Bitácora de Crecimiento Espiritual
          </h3>
          <p className="text-xs text-stone-500 max-w-xl italic mt-1 font-serif">
            «El secreto de nuestro éxito se encuentra en nuestra agenda diaria. El carácter no surge instantáneamente; se trabaja de gota en gota». — John C. Maxwell
          </p>
        </div>

        {/* Global Stats Badge */}
        <div className="flex items-center gap-3 bg-amber-50 rounded-xl p-3 border border-amber-200">
          <Zap className="w-7 h-7 text-amber-600 fill-amber-300 animate-pulse" />
          <div>
            <span className="text-[10px] font-mono text-stone-500 uppercase block font-semibold">
              Racha Máxima Actual
            </span>
            <span className="text-base font-bold text-amber-900 font-mono">
              {totalStreak} {totalStreak === 1 ? "Día" : "Días"} Seguidos
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Habits Matrix */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold">
              Hábitos de Liderazgo Forjados en la Agenda
            </h4>
            <button 
              onClick={restorePresets}
              className="text-[10px] text-stone-400 hover:text-amber-600 underline font-mono cursor-pointer"
            >
              Reiniciar Valores
            </button>
          </div>

          <div className="space-y-3">
            {habits.map((habit) => (
              <div 
                key={habit.id} 
                className="p-4 rounded-xl border border-stone-150 hover:border-amber-200 hover:shadow-2xs transition-all flex flex-col md:flex-row md:items-center gap-4 bg-stone-50/20"
              >
                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded uppercase">
                      {habit.category}
                    </span>
                    <span className="text-[10px] text-stone-400 font-mono flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-500" />
                      Racha: {habit.streak} d.
                    </span>
                  </div>
                  <h5 className="text-sm font-sans font-semibold text-stone-850 truncate mt-1">
                    {habit.title}
                  </h5>
                </div>

                {/* Calendar Selector (Checks of last 5 days) */}
                <div className="flex items-center gap-2 md:gap-3 shrink-0">
                  {last5Days.map((day) => {
                    const isCompleted = habit.completedDays.includes(day.isoString);
                    return (
                      <button
                        key={day.isoString}
                        onClick={() => toggleDayCompletion(habit.id, day.isoString)}
                        className={`w-11 h-11 rounded-lg border flex flex-col items-center justify-center transition-all cursor-pointer ${
                          isCompleted
                            ? "bg-amber-600 border-amber-600 text-white shadow-sm"
                            : day.isToday
                            ? "border-amber-300 bg-amber-50/40 text-stone-700 hover:bg-amber-100/30"
                            : "border-stone-200 bg-white text-stone-500 hover:bg-stone-50"
                        }`}
                      >
                        <span className="text-[8px] font-mono uppercase font-bold leading-tight">
                          {day.label.split(" ")[0]}
                        </span>
                        {isCompleted ? (
                          <Check className="w-4 h-4 mt-0.5" />
                        ) : (
                          <span className="text-xs font-mono mt-0.5">
                            {day.label.split(" ")[1]}
                          </span>
                        )}
                      </button>
                    );
                  })}

                  {/* Delete Option for Custom ones */}
                  {habit.id.startsWith("custom_") && (
                    <button 
                      onClick={() => deleteHabit(habit.id)}
                      className="p-2 text-stone-400 hover:text-red-500 transition-colors"
                      title="Eliminar este hábito personalizado"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </div>
            ))}
          </div>

          {totalCompletedChecks > 4 && (
            <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100/70 flex gap-3 items-center">
              <Award className="w-8 h-8 text-amber-600 flex-shrink-0 animate-bounce" />
              <div>
                <h6 className="text-xs font-sans font-bold text-amber-900">
                  ¡Excelente Disciplina de Liderazgo!
                </h6>
                <p className="text-[11px] text-stone-600 leading-relaxed font-sans mt-0.5">
                  Llevas <strong className="text-stone-850 font-mono">{totalCompletedChecks} casillas marcadas</strong> en los últimos días. Consolidar el crecimiento diario es la clave bíblica para recibir mayores desafíos de influencia celestial.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Add Custom Habit Form */}
        <div className="lg:col-span-4 bg-stone-50 rounded-xl border border-stone-150 p-5 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold">
            Agregar Hábito Personalizado
          </h4>
          <p className="text-xs text-stone-500 leading-relaxed font-sans">
            ¿Qué hábito o paso de acción clave necesitas tallar de manera ininterrumpida frente a tus desafíos actuales?
          </p>

          <form onSubmit={addNewHabit} className="space-y-3.5">
            <div>
              <label htmlFor="habit-title-input" className="text-[10px] font-mono uppercase text-stone-500 tracking-wider font-semibold block mb-1">
                Título del Hábito
              </label>
              <input
                id="habit-title-input"
                type="text"
                maxLength={45}
                placeholder="Ejemplo: Examinar motivaciones del ego"
                value={newHabitTitle}
                onChange={(e) => setNewHabitTitle(e.target.value)}
                className="w-full text-stone-800 text-xs bg-white border border-stone-200 rounded-lg p-2 md:p-2.5 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-50 transition-all font-sans"
              />
            </div>

            <div>
              <label htmlFor="habit-cat-select" className="text-[10px] font-mono uppercase text-stone-500 tracking-wider font-semibold block mb-1">
                Categoría Disciplinar
              </label>
              <select
                id="habit-cat-select"
                value={newHabitCat}
                onChange={(e) => setNewHabitCat(e.target.value as any)}
                className="w-full text-stone-850 text-xs bg-white border border-stone-200 rounded-lg p-2.5 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-50 transition-all cursor-pointer font-sans"
              >
                <option value="Lectura">Lectura Bíblica (Doctrina)</option>
                <option value="Servicio">Servicio Anónimo (Humildad)</option>
                <option value="Reflexión">Reflexión y Autoanálisis</option>
                <option value="Disciplina">Disciplina y Constancia</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={!newHabitTitle.trim()}
              className="w-full py-2 bg-stone-900 hover:bg-amber-600 disabled:opacity-40 text-white font-sans text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> Agregar a Agenda Diaria
            </button>
          </form>

          <div className="pt-3 border-t border-stone-200 text-center">
            <p className="text-[10px] text-stone-400 font-serif italic">
              «Al que es fiel en lo poco, se le confiará mucho más en el reino».
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
