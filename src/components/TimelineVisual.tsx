/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LEADERSHIP_PHASES } from "../data/leadershipData";
import { Award, Compass, Zap, BookOpen, Sparkles, CheckCircle } from "lucide-react";

const PHASE_ICONS = [Compass, BookOpen, Zap, Award, Sparkles];

interface TimelineVisualProps {
  onViewLeaders?: () => void;
}

export default function TimelineVisual({ onViewLeaders }: TimelineVisualProps) {
  const [selectedPhase, setSelectedPhase] = useState<number>(3); // Default to Phase 3: "Crezco y sé, y comienza a notarse"

  return (
    <section id="timeline-process-section" className="bg-white rounded-2xl border border-stone-200/80 p-6 md:p-8 shadow-sm transition-all relative overflow-hidden">
      {/* Background glow flare */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-60 pointer-events-none -mr-20 -mt-20" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-amber-100/60 relative z-10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full font-medium">
            Estudio Conceptual (John C. Maxwell)
          </span>
          <h3 className="text-2xl font-serif text-stone-900 mt-2 font-semibold">
            Las 5 Etapas de la Ley del Proceso
          </h3>
          <p className="text-sm text-stone-500 mt-1 max-w-xl">
            El liderazgo se consolida día a día, no en un solo día. Explora la evolución natural de la influencia.
          </p>
        </div>
        <div className="mt-4 md:mt-0 bg-stone-50 rounded-lg p-2.5 border border-stone-150 inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-xs font-mono text-stone-600">
            Fase Seleccionada: Etapa {selectedPhase} de 5
          </span>
        </div>
      </div>

      {/* Interactive Stepper Row */}
      <div className="relative z-10 mb-8">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-stone-100 -translate-y-1/2 hidden md:block z-0" />
        {/* Fill Line (Animated) */}
        <div 
          className="absolute top-1/2 left-0 h-1 bg-amber-200 -translate-y-1/2 hidden md:block z-0 transition-all duration-500 ease-out"
          style={{ width: `${((selectedPhase - 1) / 4) * 100}%` }}
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 relative z-10">
          {LEADERSHIP_PHASES.map((phase, index) => {
            const Icon = PHASE_ICONS[index] || Compass;
            const isSelected = selectedPhase === phase.number;
            const isCompleted = phase.number < selectedPhase;

            return (
              <button
                key={phase.number}
                onClick={() => setSelectedPhase(phase.number)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                  isSelected
                    ? "bg-amber-50/70 border-amber-300 shadow-md ring-2 ring-amber-100/50"
                    : "bg-white border-stone-200 hover:border-amber-200 hover:bg-stone-50/60"
                } relative overflow-hidden cursor-pointer flex flex-col justify-between min-h-[110px] md:min-h-[130px]`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isSelected ? "bg-amber-600 text-white" : isCompleted ? "bg-stone-200 text-stone-700" : "bg-stone-100 text-stone-500"
                  }`}>
                    ETAPA {phase.number}
                  </span>
                  {isCompleted && (
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                  )}
                </div>

                <div className="mt-2.5">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${isSelected ? "text-amber-600 animate-pulse" : "text-stone-400"}`} />
                    <h4 className={`text-xs font-sans md:text-sm font-semibold truncate ${
                      isSelected ? "text-stone-900" : "text-stone-600"
                    }`}>
                      {phase.title}
                    </h4>
                  </div>
                  <span className="text-[10px] text-stone-400 block mt-0.5 font-mono truncate">
                    {phase.subtitle}
                  </span>
                </div>

                {/* Golden glowing border effect for active */}
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail Pane of Selected Stage */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPhase}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-amber-50/30 rounded-xl border border-amber-100/60 p-5 md:p-6 relative z-10"
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
            <div>
              <span className="text-xs font-mono text-amber-700 font-semibold uppercase bg-amber-100/60 px-2.5 py-0.5 rounded">
                Definición y Síntomas de la Etapa {selectedPhase}
              </span>
              <h4 className="text-xl font-serif text-stone-800 font-bold mt-2">
                {LEADERSHIP_PHASES[selectedPhase - 1].title}
              </h4>
              <p className="text-xs text-amber-800 italic mt-0.5 font-sans font-medium">
                «{LEADERSHIP_PHASES[selectedPhase - 1].subtitle}»
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="text-stone-700 bg-white border border-stone-200 px-4 py-3 rounded-lg max-w-sm shadow-xs italic text-xs leading-relaxed relative font-serif">
                <span className="text-amber-600 font-mono text-xl absolute -top-1 -left-1">“</span>
                <p className="pl-3 pr-2 inline text-stone-600">
                  {LEADERSHIP_PHASES[selectedPhase - 1].quote}
                </p>
                <div className="text-right text-[10px] text-amber-600 mt-1.5 font-semibold not-italic">
                  — J. C. Maxwell
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 pt-3 border-t border-amber-100/30">
            <div>
              <h5 className="text-xs font-mono text-stone-500 uppercase tracking-wider font-semibold mb-2">
                Descripción Dinámica
              </h5>
              <p className="text-sm text-stone-600 leading-relaxed">
                {LEADERSHIP_PHASES[selectedPhase - 1].description}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-stone-150 shadow-xs">
              <h5 className="text-xs font-mono text-amber-700 uppercase tracking-wider font-bold mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Acción Práctica Requiere
              </h5>
              <p className="text-sm text-stone-700 font-sans leading-relaxed">
                {LEADERSHIP_PHASES[selectedPhase - 1].keyAction}
              </p>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-400">
                  ¿Cómo aplicar esto hoy en la Biblia?
                </span>
                <button 
                  onClick={onViewLeaders}
                  className="text-[11px] font-semibold text-amber-600 hover:underline cursor-pointer bg-transparent border-none p-0 outline-none"
                >
                  Ver Líderes Sugeridos
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
