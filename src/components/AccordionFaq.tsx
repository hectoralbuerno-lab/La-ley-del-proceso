/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, BookOpen, Compass, AlertCircle, Award } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  content: string;
  bullets?: string[];
}

const RESOURCES: AccordionItem[] = [
  {
    id: "interes-compuesto",
    title: "El Interés Compuesto en el Carácter",
    subtitle: "La matemática espiritual del crecimiento regular",
    icon: Compass,
    content: "La Ley del Proceso está gobernada por la misma lógica de los fondos indexados: la acumulación progresiva. Un líder que invierte tan solo un 1% extra cada día en perfeccionar su empatía, conocimiento teológico y autocontrol se convertirá en un líder 37 veces más sabio al cabo de un año.",
    bullets: [
      "Inversión de 15 minutos de lectura bíblica por la mañana.",
      "El desvío consciente de los murmullos ajenos.",
      "La constancia vence a la intensidad pasajera de un fin de semana de euforia."
    ]
  },
  {
    id: "quiasmo-teologico",
    title: "Estructuras Literarias del Silencio",
    subtitle: "Cómo el autor canónico resalta el desierto en las escrituras",
    icon: BookOpen,
    content: "En la hermenéutica bíblica, los periodos de silencio no son vacíos históricos; son recursos del climax literario. El narrador hebreo utiliza la técnica del alargamiento temporal (por ejemplo, los 40 años de Moisés resumidos en 2 versículos, frente a las zarzas ardientes descritas en capítulos completos) para denotar que el proceso silencioso es el prerequisito obligatorio para la revelación.",
    bullets: [
      "El desierto purifica al líder de sus inclinaciones idolátricas anteriores.",
      "El retraso intencional expone los verdaderos motivos del corazón.",
      "La simetría literaria culmina siempre con la restauración y resurrección."
    ]
  },
  {
    id: "estancamiento-guia",
    title: "Diagnóstico ante el Estancamiento",
    subtitle: "¿Qué hacer si te sientes varado en las Etapas 2 o 3?",
    icon: AlertCircle,
    content: "Es natural sentir frustración cuando practicas hábitos diarios y los resultados del grupo no cambian de inmediato. Estás en la 'Meseta del Potencial Latente' de Maxwell. El agua no hierve hasta llegar a los 100°C, aunque cada grado anterior esté acumulando calor.",
    bullets: [
      "No abortes los hábitos: la racha de tu agenda diaria es tu única garantía real.",
      "Busca rendición de cuentas (mentoría): un líder externo puede señalar tus puntos ciegos.",
      "Re-evalúa tus motivos: ¿buscas el aplauso rápido de la multitud o la fidelidad delante de Dios?"
    ]
  }
];

export default function AccordionFaq() {
  const [openId, setOpenId] = useState<string | null>("interes-compuesto");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="resources-accordion-section" className="bg-white rounded-2xl border border-stone-200/80 p-5 md:p-6 shadow-sm">
      <div className="mb-4">
        <h4 className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold mb-1">
          Recursos Avanzados & Hermenéutica
        </h4>
        <p className="text-sm text-stone-500 font-sans">
          Profundiza en la teoría teológica y técnica detrás de la Ley del Proceso de Maxwell.
        </p>
      </div>

      <div className="space-y-3">
        {RESOURCES.map((item) => {
          const isOpen = openId === item.id;
          const Icon = item.icon;

          return (
            <div 
              key={item.id} 
              className={`rounded-xl border transition-all overflow-hidden ${
                isOpen 
                  ? "border-amber-300 bg-amber-50/10" 
                  : "border-stone-150 bg-white hover:border-amber-250 hover:bg-stone-50/40"
              }`}
            >
              {/* Trigger header */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-4 text-left cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className={`p-2 rounded-lg shrink-0 ${
                    isOpen ? "bg-amber-100 text-amber-850" : "bg-stone-100 text-stone-500"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <div>
                    <h5 className="text-sm font-sans font-bold text-stone-800">
                      {item.title}
                    </h5>
                    <span className="text-[10px] text-stone-400 font-mono block mt-0.5">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-amber-600" : "rotate-0"
                }`} />
              </button>

              {/* Collapsed block */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="px-4 pb-4 pt-1.5 border-t border-stone-100 space-y-3 text-xs md:text-sm text-stone-600 font-sans leading-relaxed">
                      <p>{item.content}</p>
                      
                      {item.bullets && item.bullets.length > 0 && (
                        <div className="bg-white/60 rounded-lg p-3.5 border border-stone-150 space-y-2 mt-2">
                          <h6 className="text-[10px] font-mono uppercase text-amber-800 tracking-wider font-extrabold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            Directrices de Acción Práctica:
                          </h6>
                          <div className="space-y-1.5">
                            {item.bullets.map((bullet, idx) => (
                              <div key={idx} className="flex items-start gap-1.5 text-xs text-stone-700">
                                <span className="text-amber-600 shrink-0 select-none">•</span>
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
