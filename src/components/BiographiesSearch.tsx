/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { BIBLICAL_LEADERS } from "../data/leadershipData";
import { BiblicalLeader } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Search, BookOpen, Clock, Heart, Award, HelpCircle, ChevronRight, CornerDownRight } from "lucide-react";

export default function BiographiesSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"bio" | "structure" | "principles" | "practice">("bio");
  const [selectedLeaderId, setSelectedLeaderId] = useState<string>("jose");
  const [selectedCategory, setSelectedCategory] = useState<string>("TODOS");

  const categories = ["TODOS", "Preparación", "Servicio", "Prueba", "Legado"];

  const filteredLeaders = useMemo(() => {
    return BIBLICAL_LEADERS.filter((leader) => {
      const matchesSearch =
        leader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        leader.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        leader.bibleReference.toLowerCase().includes(searchTerm.toLowerCase()) ||
        leader.coreVerseText.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === "TODOS" || leader.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const selectedLeader = useMemo(() => {
    return (
      BIBLICAL_LEADERS.find((leader) => leader.id === selectedLeaderId) ||
      BIBLICAL_LEADERS[0]
    );
  }, [selectedLeaderId]);

  return (
    <section id="biographies-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Sidebar / Left Column: Directory & Search */}
      <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200/80 p-5 shadow-sm">
        <h3 className="text-lg font-serif text-stone-900 font-bold mb-1 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-600" />
          Archivo de Líderes Bíblicos
        </h3>
        <p className="text-xs text-stone-500 mb-4 font-sans">
          Busca y explora personajes santos moldeados bajo la Ley del Proceso de Dios.
        </p>

        {/* Search Input */}
        <div className="relative mb-4">
          <input
            id="leader-search-input"
            type="text"
            placeholder="Buscar por nombre, pasaje, frase..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-stone-800 bg-stone-50 text-xs border border-stone-200 rounded-lg pl-9 pr-4 py-2.5 outline-none focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100 transition-all font-sans"
          />
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5 pb-3 border-b border-stone-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[11px] px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-amber-600 text-white border-amber-600 font-medium"
                  : "bg-stone-50 text-stone-600 border-stone-250 hover:bg-stone-100 hover:border-stone-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Leader cards list */}
        <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
          {filteredLeaders.length > 0 ? (
            filteredLeaders.map((leader) => {
              const isSelected = leader.id === selectedLeaderId;
              return (
                <button
                  key={leader.id}
                  onClick={() => {
                    setSelectedLeaderId(leader.id);
                    // Reset active detail tab if appropriate to prevent disorientation
                  }}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden flex items-start gap-3 group ${
                    isSelected
                      ? "bg-amber-50/50 border-amber-300 ring-2 ring-amber-100/30"
                      : "bg-white border-stone-150 hover:border-amber-200 hover:bg-stone-50/50"
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-serif font-bold shrink-0 ${
                    isSelected ? "bg-amber-600 text-white" : "bg-stone-100 text-stone-600"
                  }`}>
                    {leader.name.charAt(0)}
                  </span>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1.5">
                      <h4 className={`text-xs font-bold font-sans truncate ${isSelected ? "text-amber-800" : "text-stone-800 group-hover:text-amber-700"}`}>
                        {leader.name}
                      </h4>
                      <span className="text-[9px] font-mono font-medium px-1.5 py-0.5 rounded-full bg-stone-100 text-stone-500 uppercase">
                        {leader.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-400 font-mono mt-0.5">
                      {leader.bibleReference} • {leader.processDuration.split(" ")[0]} {leader.processDuration.split(" ")[1]}
                    </p>
                    <p className="text-[11px] text-stone-500 line-clamp-1 mt-1 font-sans">
                      {leader.shortDescription}
                    </p>
                  </div>

                  {isSelected && (
                    <div className="absolute top-0 right-0 w-1.5 h-full bg-amber-500" />
                  )}
                </button>
              );
            })
          ) : (
            <div className="text-center py-8 bg-stone-50 rounded-xl border border-dashed border-stone-250">
              <p className="text-xs text-stone-400 font-mono">No se encontraron líderes que coincidan.</p>
              <button 
                onClick={() => { setSearchTerm(""); setSelectedCategory("TODOS"); }}
                className="text-xs text-amber-600 font-semibold hover:underline mt-2 cursor-pointer"
              >
                Limpiar Filtros
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Column: Tabs and Interactive Details of Selected Leader */}
      <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden flex flex-col min-h-[500px]">
        {/* Banner with golden soft premium style */}
        <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 p-6 text-white relative">
          <div className="absolute top-0 right-0 w-80 h-full bg-radial from-amber-500/10 to-transparent pointer-events-none" />
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="bg-amber-500 text-stone-950 text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded">
              {selectedLeader.category} • PROCESO ESTABLECIDO
            </span>
            <span className="text-amber-300 text-xs font-mono ml-auto flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {selectedLeader.processDuration}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-100">
            {selectedLeader.name}
          </h2>
          <p className="text-xs md:text-sm text-stone-300 font-sans italic mt-1 max-w-2xl">
            {selectedLeader.title}
          </p>

          <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-col md:flex-row gap-3 md:items-center">
            <div className="text-[11px] font-mono text-amber-200 tracking-wider">
              Pasaje Clave: <span className="font-sans font-bold">{selectedLeader.coreVerse}</span>
            </div>
            <div className="text-xs italic text-stone-200 bg-white/5 py-1 px-3 rounded-lg border border-white/10 pl-5 relative grow font-serif text-left">
              <span className="absolute left-2 text-amber-500 font-serif font-bold text-base -top-1">“</span>
              {selectedLeader.coreVerseText}
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-stone-150 bg-stone-50/50">
          {[
            { id: "bio", label: "Historia Integral", desc: "Biografía interactiva" },
            { id: "structure", label: "Estructura Literaria", desc: "Simetría textual bautista" },
            { id: "principles", label: "Principios de Carácter", desc: "Claves de John Maxwell" },
            { id: "practice", label: "Aplicabilidad Diaria", desc: "Hábitos y agenda" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-3 px-2 border-b-2 text-center transition-all cursor-pointer relative ${
                activeTab === tab.id
                  ? "border-amber-600 bg-white text-stone-900"
                  : "border-transparent text-stone-500 hover:text-stone-800 hover:bg-stone-100/50"
              }`}
            >
              <span className="text-xs font-sans md:text-sm font-bold block">
                {tab.label}
              </span>
              <span className="text-[8px] md:text-[9px] text-stone-400 font-mono block">
                {tab.desc}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content Canvas */}
        <div className="p-6 md:p-8 flex-1 bg-stone-50/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedLeaderId + "_" + activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {activeTab === "bio" && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold">
                    El Rigor Histórico del Proceso
                  </h4>
                  <p className="text-sm text-stone-700 leading-relaxed font-sans first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-600 first-letter:mr-1.5 first-letter:float-left">
                    {selectedLeader.biography}
                  </p>
                  <div className="bg-amber-50/40 p-4 rounded-xl border border-amber-100/50 mt-6">
                    <h5 className="text-xs font-mono font-semibold text-amber-800 uppercase tracking-wide flex items-center gap-1.5 mb-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      Significado del Factor Tiempo:
                    </h5>
                    <p className="text-xs text-stone-600">
                      Dios no tiene afán. El proceso de <strong className="text-stone-800">{selectedLeader.name}</strong> revela que años de anonimato consolidan un carácter capaz de soportar la grandeza sin quebrarse. Quien se salta el proceso aborta el propósito de liderazgo.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "structure" && (
                <div className="space-y-5">
                  <div className="pb-3 border-b border-stone-150">
                    <span className="text-[10px] bg-amber-100 text-amber-800 font-mono font-extrabold uppercase px-2 py-0.5 rounded mb-2 inline-block">
                      Diseño Literario: {selectedLeader.literaryStructure.type}
                    </span>
                    <h4 className="text-base font-serif text-stone-800 font-bold">
                      {selectedLeader.literaryStructure.title}
                    </h4>
                    <p className="text-xs text-stone-500 mt-1">
                      {selectedLeader.literaryStructure.intro}
                    </p>
                  </div>

                  {/* Iterative Literature Blocks */}
                  <div className="relative border-l-2 border-amber-200 pl-4 md:pl-6 space-y-4">
                    {selectedLeader.literaryStructure.elements.map((elem, i) => (
                      <div key={i} className="relative group">
                        {/* Stepper Dot */}
                        <div className="absolute -left-[21px] md:-left-[29px] top-1 w-3 h-3 rounded-full bg-white border-2 border-amber-500 group-hover:scale-125 transition-transform" />
                        
                        <div>
                          <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest block">
                            {elem.label}
                          </span>
                          <span className="text-xs text-stone-800 font-medium font-sans">
                            {elem.text}
                          </span>
                          {elem.verse && (
                            <span className="text-[10px] text-stone-400 font-mono block mt-0.5 group-hover:text-amber-600 transition-colors">
                              ({elem.verse})
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "principles" && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold">
                    Leyes de Liderazgo Forjadas en {selectedLeader.name}
                  </h4>
                  <p className="text-xs text-stone-500 mb-2">
                    Principios esenciales aplicados según el libro «Las 21 Leyes Irrefutables del Liderazgo».
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedLeader.keyPrinciples.map((principle, i) => (
                      <div 
                        key={i} 
                        className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-2xs hover:shadow-xs hover:border-amber-300 transition-all flex gap-3"
                      >
                        <span className="w-6 h-6 rounded-lg bg-amber-50 text-amber-700 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <p className="text-xs text-stone-700 font-sans leading-relaxed">
                          {principle}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "practice" && (
                <div className="space-y-4">
                  <div className="bg-amber-100/40 p-5 rounded-2xl border border-amber-200/60">
                    <h4 className="text-xs font-mono text-amber-800 uppercase tracking-wider font-extrabold flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-amber-600 animate-bounce" />
                      Hábito Clave Recomendado: {selectedLeader.practicalApplication.habitSuggested}
                    </h4>
                    <p className="text-xs text-stone-600 font-sans">
                      Maxwell enfatiza: «No cambiarás tu vida hasta que no cambies algo que haces diariamente». Comienza este proceso hoy:
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-[11px] font-mono text-stone-500 uppercase tracking-wider font-bold">
                      Pasos de Acción Concretos:
                    </h5>
                    <div className="space-y-2">
                      {selectedLeader.practicalApplication.actionSteps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CornerDownRight className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span className="text-xs text-stone-700 font-sans font-medium">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-150 mt-6">
                    <h5 className="text-xs font-serif font-bold text-stone-800">
                      Pregunta de Auto-Reflexión:
                    </h5>
                    <p className="text-xs text-amber-900 bg-amber-50/50 p-3 rounded-lg border border-amber-100 mt-1.5 italic font-sans">
                      «{selectedLeader.practicalApplication.reflectionQuestion}»
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
