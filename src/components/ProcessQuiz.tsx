/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PROCESS_QUIZZES } from "../data/leadershipData";
import { motion, AnimatePresence } from "motion/react";
import { Award, BookOpen, Clock, HelpCircle, Check, X, RefreshCw, Sparkles, ChevronRight } from "lucide-react";

export default function ProcessQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = PROCESS_QUIZZES[currentIdx];

  const handleSubmitOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedOpt(optionIndex);
    setIsSubmitted(true);
    if (optionIndex === question.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    setSelectedOpt(null);
    setIsSubmitted(false);
    if (currentIdx + 1 < PROCESS_QUIZZES.length) {
      setCurrentIdx((idx) => idx + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setIsSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <section id="quiz-process-section" className="bg-white rounded-2xl border border-stone-200/80 p-6 md:p-8 shadow-sm relative overflow-hidden">
      {/* Glow flare */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-50 pointer-events-none -ml-20 -mt-20" />

      {/* Finished Screen */}
      <AnimatePresence mode="wait">
        {isFinished ? (
          <motion.div
            key="finished"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-8 px-4 flex flex-col items-center max-w-lg mx-auto"
          >
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <Award className="w-10 h-10 text-amber-600 animate-bounce" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full font-bold">
              Evaluación Concluida
            </span>

            <h3 className="text-2xl font-serif text-stone-900 mt-3 font-semibold">
              Tu Puntuación: {score} / {PROCESS_QUIZZES.length}
            </h3>

            {score >= 4 ? (
              <div className="mt-4 text-sm text-stone-600 font-sans leading-relaxed">
                <p className="font-bold text-amber-800 flex items-center justify-center gap-1.5 mb-1 bg-amber-50/40 p-2.5 rounded-lg border border-amber-200">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  ¡Excelente, Líder de Procesos!
                </p>
                <p>
                  Has demostrado un entendimiento teológico sobresaliente sobre cómo Dios moldea pacientemente a Sus siervos en el desierto. Tienes integrados los principios del liderazgo reflexivo.
                </p>
              </div>
            ) : (
              <div className="mt-4 text-sm text-stone-600 font-sans leading-relaxed">
                <p className="font-bold text-stone-850 mb-1 bg-stone-50 p-2.5 rounded-lg border border-stone-250">
                  Discípulo en Formación
                </p>
                <p>
                  El crecimiento requiere perseverancia activa y regularidad. Te recomendamos repasar detenidamente las etapas históricas de José, David o Moisés, y continuar tu registro diario en la agenda.
                </p>
              </div>
            )}

            <button
              onClick={resetQuiz}
              className="mt-8 px-6 py-2.5 bg-stone-900 hover:bg-amber-600 text-white text-xs font-semibold rounded-lg flex items-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reintentar Cuestionario
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="quiz-body"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Header / Tracker */}
            <div className="flex justify-between items-center border-b border-stone-100 pb-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-600" />
                <div>
                  <span className="text-xs font-mono text-stone-400">Autocomprobación</span>
                  <p className="text-sm font-serif font-bold text-stone-850">
                    Cuestionario Interactivo Le Ley del Proceso
                  </p>
                </div>
              </div>
              <div className="text-xs font-mono text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
                Pregunta {currentIdx + 1} de {PROCESS_QUIZZES.length}
              </div>
            </div>

            {/* Question Text */}
            <div>
              <h4 className="text-base md:text-lg font-serif text-stone-900 leading-snug font-bold">
                {question.question}
              </h4>
            </div>

            {/* Options Interactive Checklist */}
            <div className="space-y-2.5">
              {question.options.map((option, idx) => {
                const isSelected = selectedOpt === idx;
                const isCorrect = idx === question.correctIndex;
                const showSuccess = isSubmitted && isCorrect;
                const showFailure = isSubmitted && isSelected && !isCorrect;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSubmitOption(idx)}
                    disabled={isSubmitted}
                    className={`w-full p-4 rounded-xl border text-left transition-all relative flex items-start gap-3 cursor-pointer ${
                      showSuccess
                        ? "bg-amber-50/70 border-amber-500 text-amber-900 ring-2 ring-amber-100/30 font-medium"
                        : showFailure
                        ? "bg-red-50 border-red-300 text-red-900"
                        : isSelected
                        ? "bg-amber-50 border-amber-300 ring-1 ring-amber-100/50"
                        : "bg-white border-stone-150 hover:bg-stone-50/50 hover:border-amber-200"
                    }`}
                  >
                    {/* Index Bubble / Icon */}
                    <span className={`w-6 h-6 rounded-lg text-xs font-sans font-bold flex items-center justify-center shrink-0 ${
                      showSuccess 
                        ? "bg-amber-600 text-white" 
                        : showFailure 
                        ? "bg-red-500 text-white" 
                        : "bg-stone-100 text-stone-500"
                    }`}>
                      {showSuccess ? <Check className="w-3.5 h-3.5" /> : showFailure ? <X className="w-3.5 h-3.5" /> : String.fromCharCode(65 + idx)}
                    </span>

                    {/* Content */}
                    <span className="text-xs md:text-sm font-sans block flex-1">
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Explanatory Panel (After Submission) */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-stone-50 rounded-xl p-5 border border-stone-200 shadow-3xs space-y-3"
              >
                <div className="flex items-start gap-2 text-stone-700">
                  <div className="bg-amber-100 rounded p-1">
                    <BookOpen className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-mono text-amber-800 uppercase tracking-wider font-extrabold">
                      Contexto y Justificación Bíblica
                    </h5>
                    <p className="text-xs mt-1.5 text-stone-600 font-sans leading-relaxed">
                      {question.explanation}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-stone-400">
                    Sustento: <span className="font-sans font-semibold text-stone-600">{question.biblicalContext}</span>
                  </span>
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg flex items-center gap-1 font-sans cursor-pointer"
                  >
                    Siguiente <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
