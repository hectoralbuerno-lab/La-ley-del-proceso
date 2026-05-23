/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  BookOpen, 
  Calendar, 
  HelpCircle, 
  Sparkles, 
  Award, 
  ChevronRight, 
  ShieldAlert, 
  Volume2, 
  Heart, 
  CheckCircle2, 
  Clock,
  Download,
  FileText,
  X
} from "lucide-react";

import TimelineVisual from "./components/TimelineVisual";
import BiographiesSearch from "./components/BiographiesSearch";
import AudioPlayerSection from "./components/AudioPlayerSection";
import PracticeDiary from "./components/PracticeDiary";
import ProcessQuiz from "./components/ProcessQuiz";
import AccordionFaq from "./components/AccordionFaq";

export default function App() {
  const [activeTab, setActiveTab] = useState<"etapas" | "heroes" | "agenda" | "examen">("etapas");
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);

  const handlePrintPdf = () => {
    setShowPrintModal(true);
    try {
      window.print();
    } catch (error) {
      console.warn("La impresión automática fue bloqueada por el navegador dentro del iframe:", error);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50/40 text-stone-850 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* Premium Cinematic Header Bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-md relative overflow-hidden">
              <Sparkles className="w-5 h-5 text-stone-900 opacity-90 animate-pulse" />
              <div className="absolute inset-0 bg-white/10" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-extrabold text-stone-900 tracking-tight flex items-center gap-2">
                La Ley del Proceso
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 uppercase leading-none">
                  Ley #3
                </span>
              </h1>
              <p className="text-xs text-stone-500 font-sans font-medium">
                Academia Interactiva de Liderazgo Bíblico & Carácter
              </p>
            </div>
          </div>

          {/* Expert Presenter Tag */}
          <div className="flex items-center gap-2.5 bg-stone-50 border border-stone-150 rounded-lg p-2 max-w-sm">
            <div className="w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center text-[10px] font-mono font-bold shrink-0">
              LP
            </div>
            <div className="text-left min-w-0">
              <span className="text-[10px] font-mono text-amber-700 block uppercase tracking-widest font-bold leading-none">
                Especialista & Desarrollador
              </span>
              <p className="text-[11px] text-stone-600 truncate font-sans font-medium">
                Soporte en Liderazgo & Web Moderno
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Welcome Panel (Cinematic, illuminated premium style) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-transparent py-10 md:py-16 border-b border-stone-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-amber-400/10 to-transparent pointer-events-none -mr-20 -mt-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-radial from-amber-500/5 to-transparent pointer-events-none -ml-40 -mb-40 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-amber-100/60 text-amber-900 text-xs px-3.5 py-1.5 rounded-full font-serif font-bold border border-amber-200/50 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            «El liderazgo se desarrolla diariamente, no en un día»
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-stone-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Forja hoy el Carácter indispensable que sostendrá tu Destino de Influencia
          </h2>

          <p className="text-sm md:text-base text-stone-500 max-w-3xl mx-auto leading-relaxed font-sans">
            La Ley del Proceso es la tercera ley inrefutable de John C. Maxwell. Esta plataforma educativa de estudio bíblico te guiará de forma interactiva y multisensorial por los crisoles de <strong>José</strong>, el pastoreo de <strong>David</strong>, los desiertos del desaprendizaje de <strong>Moisés</strong> y los retiros doctrinales de <strong>Pablo</strong>.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-3 no-print">
            <button
              onClick={handlePrintPdf}
              className="px-6 py-3 bg-stone-900 hover:bg-amber-600 active:bg-amber-700 text-white font-sans text-xs font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer border border-stone-800"
              title="Descargar versión PDF e imprimible"
              id="cta-descargar-pdf"
            >
              <Download className="w-4 h-4 text-amber-400" />
              Descargar Guía Completa de Estudio (PDF)
            </button>
          </div>

          {/* Interactive Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-6">
            {[
              { id: "etapas", label: "Las 5 Etapas", icon: Compass, color: "border-amber-200 hover:border-amber-400 bg-white" },
              { id: "heroes", label: "Héroes del Proceso", icon: BookOpen, color: "border-amber-200 hover:border-amber-400 bg-white" },
              { id: "agenda", label: "Mi Agenda Diaria", icon: Calendar, color: "border-amber-200 hover:border-amber-400 bg-white" },
              { id: "examen", label: "Autoevaluación", icon: HelpCircle, color: "border-amber-200 hover:border-amber-400 bg-white" }
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`p-4 rounded-xl border text-center transition-all duration-300 relative overflow-hidden group flex flex-col items-center justify-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-amber-50/70 border-amber-400 shadow-md ring-2 ring-amber-100/50"
                      : "bg-white border-stone-200/80 hover:bg-stone-50/50 hover:border-amber-300"
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-transform duration-300 group-hover:scale-110 ${
                    isSelected ? "bg-amber-600 text-white" : "bg-stone-100 text-stone-500"
                  }`}>
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className={`text-xs md:text-sm font-bold font-sans ${
                    isSelected ? "text-stone-900" : "text-stone-600 group-hover:text-amber-800"
                  }`}>
                    {tab.label}
                  </span>
                  
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Educational Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-12">
        
        {/* Active Tab Canvas (Content wrapper) */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === "etapas" && <TimelineVisual onViewLeaders={() => setActiveTab("heroes")} />}
              {activeTab === "heroes" && <BiographiesSearch />}
              {activeTab === "agenda" && <PracticeDiary />}
              {activeTab === "examen" && <ProcessQuiz />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global Immersive Audio Section - Place in grid or dedicated section */}
        <div id="immersive-audio-player" className="scroll-mt-24">
          <AudioPlayerSection />
        </div>

        {/* Advanced Accordion FAQs & Literary Analysis */}
        <div id="literary-faqs" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <AccordionFaq />
          </div>
          
          {/* Quick interactive visual sidebar note */}
          <div className="md:col-span-4 bg-amber-50/20 rounded-2xl border border-amber-100/50 p-6 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-700 font-extrabold">
              Por qué el Proceso requiere constancia
            </h4>
            <ul className="space-y-3.5 text-xs text-stone-600 leading-relaxed font-sans font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>El secreto está en la agenda:</strong> No existe crecimiento sin la inversión constante de tu agenda diaria.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>El desierto capacita:</strong> Dios utiliza el retiro y el aparente anonimato para erradicar la altivez y el ego mundano.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>No tomes atajos:</strong> Los atajos rápidos comprometen la solidez ética-espiritual del líder.</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-amber-100 flex items-center justify-between text-[11px] font-mono text-stone-400">
              <span>Soporte las pruebas con alegría</span>
              <Heart className="w-4 h-4 text-amber-600 animate-pulse fill-amber-300" />
            </div>
          </div>
        </div>

      </main>

      {/* Architectural Explanations (WCAG and Modern Engineering notes) */}
      <footer className="bg-stone-900 text-stone-400 py-12 md:py-16 mt-20 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-amber-500 flex items-center justify-center text-stone-900 font-serif font-bold text-xs">
                L
              </div>
              <h5 className="font-serif font-bold text-stone-100">
                La Ley del Proceso
              </h5>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed font-sans">
              Estudio sistemático de liderazgo enfocado en el fortalecimiento del carácter a través de la disciplina diaria del hábito íntegro. Hecho con fidelidad bíblica completa.
            </p>
            <p className="text-[10px] text-stone-500 font-mono">
              © 2026 Academia de Liderazgo Bíblico. Todos los derechos reservados.
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-amber-500 font-bold">
              Arquitectura de Software Utilizada
            </h5>
            <ul className="space-y-1.5 text-xs font-mono">
              <li>• Componentes Modulares de React 19</li>
              <li>• Animaciones Fluidas con Motion v12</li>
              <li>• Estilo de Alta Fidelidad con Tailwind CSS v4</li>
              <li>• LocalStorage para la Persistencia de la Agenda</li>
              <li>• Síntesis Verbal TTS Integrada en el Navegador</li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-amber-500 font-bold">
              Directrices Pedagógicas y de Accesibilidad
            </h5>
            <ul className="space-y-1.5 text-xs font-sans leading-relaxed">
              <li>✔ <strong>Cumple WCAG 2.1:</strong> Alto contraste de color y legibilidad asegurada.</li>
              <li>✔ <strong>Contexto Bíblico Completo:</strong> Preservación estricta de versículos para evitar conclusiones sesgadas o erróneas.</li>
              <li>✔ <strong>Interactividad Multisensorial:</strong> Contenido escrito, interactivo, visual y auditivo.</li>
            </ul>
          </div>

        </div>
      </footer>

      {/* COMPONENTE EXCLUSIVO PARA IMPRESIÓN Y PDF */}
      <div id="printable-study-guide" className="hidden print:block p-12 bg-white text-stone-900 space-y-12 font-serif text-sm">
        
        {/* Encabezado Principal */}
        <div className="border-b-4 border-amber-500 pb-6 text-center space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 font-bold">
            Academia Interactiva de Liderazgo Bíblico & Carácter
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-stone-900">
            LA LEY DEL PROCESO
          </h1>
          <p className="text-base text-stone-600 italic">
            «El liderazgo se desarrolla diariamente, no en un día» — Ley #3 de John C. Maxwell
          </p>
          <div className="pt-2 text-[10px] font-mono text-stone-400 flex justify-between items-center px-4">
            <span>Guía Oficial de Estudio Integral</span>
            <span>Estudiante: ___________________________</span>
            <span>Fecha: _________________</span>
          </div>
        </div>

        {/* Cita Inspiradora y Comentario Clave */}
        <div className="bg-stone-50 border-l-4 border-amber-500 p-4 rounded-r-lg space-y-1">
          <p className="text-xs italic text-stone-700 leading-relaxed">
            "El secreto de nuestro buen éxito se encuentra en nuestro orden del día diario. Si desea ver cómo mejora alguien, lo único que tiene que hacer es observar la rutina diaria de esa persona."
          </p>
          <p className="text-[10px] font-mono text-right text-stone-500">— John C. Maxwell</p>
        </div>

        {/* Sección 1: Ilustraciones Históricas */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-1">
            1. Fundamentos Históricos del Crecimiento Autogestionado
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-xs font-bold font-mono text-amber-800 uppercase tracking-wide">
                La Ilustración Financiera: Anne Scheiber
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed">
                Anne Scheiber trabajó 31 años para el IRS como auditora, retirándose en 1943 con un salario anual de apenas $3,150 y ahorros por $5,000. Mediante inversiones maduras, pequeñas decisiones diarias y la reinversión rigurosa de intereses por 50 años, acumuló una fortuna testamentaria de <strong>$22 millones de dólares</strong>. El liderazgo acumula reputación e influencia exactamente bajo la misma ley de interés compuesto moral: pequeñas interacciones diarias multiplican el impacto de por vida.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-bold font-mono text-amber-800 uppercase tracking-wide">
                La Ilustración Biográfica: Theodore Roosevelt
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed">
                Nacido en condiciones de debilidad física extrema, asmático e incapacitado, su padre le advirtió: <em>"Tienes la mente, pero careces del cuerpo; debes hacer tu cuerpo"</em>. Roosevelt asumió la disciplina diaria con fervor indomable: pesas, caminatas, boxeo, equitación y lectura selectiva constante. Construyó una de las figuras de mayor vigor político internacional aplicando la Ley del Proceso diariamente. Murió durmiendo con un libro bajo la almohada, estudiando hasta el fin.
              </p>
            </div>
          </div>
        </div>

        {/* Sección 2: Las 5 Etapas del Desarrollo */}
        <div className="space-y-4 page-break">
          <h2 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-1">
            2. Las Fases del Desarrollo del Liderazgo según la Ley del Proceso
          </h2>
          <p className="text-xs text-stone-600">
            Benjamin Disraeli declaró astutamente: <em>"El ser conscientes de que ignoramos los hechos es un paso decisivo hacia el conocimiento."</em> Estas son las etapas por las que transita todo líder íntegro:
          </p>
          <div className="space-y-3 font-sans">
            <div className="border border-stone-100 p-3 rounded-lg bg-stone-50/50">
              <span className="text-xs font-bold text-stone-900 block">Etapa 1: No sé lo que no sé (Inconciencia)</span>
              <p className="text-[11px] text-stone-600">Muchos creen equivocadamente que el liderazgo es innato o surge por nombramiento. Desconocen el valor sistemático de la influencia.</p>
            </div>
            <div className="border border-stone-100 p-3 rounded-lg bg-stone-50/50">
              <span className="text-xs font-bold text-stone-900 block">Etapa 2: Sé lo que no sé (Conciencia de la Imperfección)</span>
              <p className="text-[11px] text-stone-600">Reconocemos que carecemos de destrezas comunicativas o éticas para guiar a otros. Es la fase del despertar y la búsqueda de sabiduría intencional.</p>
            </div>
            <div className="border border-stone-100 p-3 rounded-lg bg-stone-50/50">
              <span className="text-xs font-bold text-stone-900 block">Etapa 3: Crezco y sé, y comienza a notarse (Disciplina de Crecimiento)</span>
              <p className="text-[11px] text-stone-600"><strong>El secreto está en la agenda.</strong> Aquí el estudiante invierte tiempo diario en el desierto o en el estudio. Brian (joven estudiante de 19 años) aprendió: <em>"Dedícale un par de horas diarias a la lectura y escritura, y en veinte años serás un líder sobresaliente."</em></p>
            </div>
            <div className="border border-stone-100 p-3 rounded-lg bg-stone-50/50">
              <span className="text-xs font-bold text-stone-900 block">Etapa 4: Simplemente actúo por lo que sé (Formación Consciente)</span>
              <p className="text-[11px] text-stone-600">La aplicación activa y deliberada de los principios aprendidos. Ya no improvisamos; actuamos bajo principios y valores sólidos del carácter bíblico.</p>
            </div>
            <div className="border border-stone-100 p-3 rounded-lg bg-stone-50/50">
              <span className="text-xs font-bold text-stone-900 block">Etapa 5: Actúo de forma automática (Influencia Intuitiva y Gracia)</span>
              <p className="text-[11px] text-stone-600">El carácter se fusiona con la conducta ordinaria. La empatía, asertividad y pureza fluyen con gracia sin esfuerzo debido a décadas de hábitos sembrados diariamente.</p>
            </div>
          </div>
        </div>

        {/* Sección 3: Síntesis de los Héroes Bíblicos */}
        <div className="space-y-4 page-break">
          <h2 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-1">
            3. Crisol Bíblico: Los 4 Héroes de la Maduración del Carácter
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-12 gap-4 items-start border-b border-stone-100 pb-3">
              <div className="col-span-3">
                <span className="font-bold text-stone-900 text-xs block">JOSÉ de Egipto</span>
                <span className="text-[10px] font-mono text-stone-500">Génesis 37 - 50</span>
              </div>
              <div className="col-span-9 text-xs text-stone-700">
                <strong>La Forja:</strong> Traicionado por sus hermanos, vendido como esclavo en Egipto, calumniado por la esposa de Potifar y olvidado en prisión. Pasó de la soberbia juvenil a la mansedumbre absoluta para preservar con gloria a toda una nación.
                <span className="text-[10px] font-sans text-amber-800 block mt-1"><em>Hábito clave:</em> Conservar la santidad bajo anonimato absoluto, con plena fe en el Soberano.</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 items-start border-b border-stone-100 pb-3">
              <div className="col-span-3">
                <span className="font-bold text-stone-900 text-xs block">DAVID de Belén</span>
                <span className="text-[10px] font-mono text-stone-500">1 Samuel 16 - 2 Samuel</span>
              </div>
              <div className="col-span-9 text-xs text-stone-700">
                <strong>La Forja:</strong> Consagrado en el silencio de los campos de pastoreo de ovejas. Aprendió el valor de la fidelidad oculta enfrentando osos y leones antes de enfrentar a Goliat. Fue perseguido por Saúl y refinó su misericordia espiritual.
                <span className="text-[10px] font-sans text-amber-800 block mt-1"><em>Hábito clave:</em> La comunión lírica, la adoración personal y el rechazo absoluto a forzar el trono mediante malas artes.</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 items-start border-b border-stone-100 pb-3">
              <div className="col-span-3">
                <span className="font-bold text-stone-900 text-xs block">MOISÉS del Desierto</span>
                <span className="text-[10px] font-mono text-stone-500">Éxodo 2 - Deuteronomio</span>
              </div>
              <div className="col-span-9 text-xs text-stone-700">
                <strong>La Forja:</strong> De príncipe altivo instruido en toda sabiduría egipcia a pastor fugitivo en el desierto de Madián por 40 prolongados años. Sometió su temperamento impulsivo hasta llegar a ser el hombre más manso sobre la tierra.
                <span className="text-[10px] font-sans text-amber-800 block mt-1"><em>Hábito clave:</em> La sumisión atenta y el desaprendizaje sistemático del ego humano.</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 items-start pb-3">
              <div className="col-span-3">
                <span className="font-bold text-stone-900 text-xs block">PABLO de Tarso</span>
                <span className="text-[10px] font-mono text-stone-500">Hechos 9 - Gálatas 1:17</span>
              </div>
              <div className="col-span-9 text-xs text-stone-700">
                <strong>La Forja:</strong> De celoso perseguidor legalista del cristianismo a siervo transformado camino a Damasco. Se retiró por tres años al retiro desértico de Arabia para replantear toda su teología y carácter a la luz de Jesucristo.
                <span className="text-[10px] font-sans text-amber-800 block mt-1"><em>Hábito clave:</em> El estudio profundo, la meditación de la verdad objetiva y la entrega al servicio incondicional.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sección 4: Taller Diario Estudiantil */}
        <div className="space-y-4 page-break">
          <h2 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-1">
            4. Taller de Auto-Reflexión Diaria (Práctica Académica)
          </h2>
          <p className="text-xs text-stone-600">
            Responde intencionalmente de puño y letra para asimilar la Ley del Proceso en su aplicación práctica y espiritual:
          </p>
          <div className="space-y-6 pt-2 font-sans">
            <div className="space-y-2">
              <span className="text-xs font-bold text-stone-800 block">1. ¿Qué disciplina o hábito específico estoy dispuesto a ubicar formalmente hoy en mi Agenda Diaria?</span>
              <div className="border-b border-dashed border-stone-300 h-8" />
              <div className="border-b border-dashed border-stone-300 h-8" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold text-stone-800 block">2. De los cuatro desiertos estudiados (José, David, Moisés, Pablo), ¿cuál describe con mayor precisión tu crisol espiritual en la actualidad? Explica por qué.</span>
              <div className="border-b border-dashed border-stone-300 h-8" />
              <div className="border-b border-dashed border-stone-300 h-8" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold text-stone-800 block">3. ¿Qué atajo rápido o camino cómodo estás tentado a tomar en este ciclo que requiera ser abandonado para preservar tu integridad futura?</span>
              <div className="border-b border-dashed border-stone-300 h-8" />
              <div className="border-b border-dashed border-stone-300 h-8" />
            </div>
          </div>

          <div className="pt-8 text-center text-[10px] font-mono text-stone-400">
            <span>"La prueba del liderazgo no es el poder en un instante, sino el carácter forjado de por vida."</span>
          </div>
        </div>

      </div>

      {/* MODAL INFORMATIVO Y ASISTENTE DE IMPRESIÓN/PDF */}
      <AnimatePresence>
        {showPrintModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs no-print">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 sm:p-7 max-w-lg w-full relative overflow-hidden text-stone-900"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-extrabold text-lg text-stone-900">
                      Asistente de Descarga PDF
                    </h3>
                    <p className="text-xs text-stone-500 font-sans">
                      Optimizado para impresión en papel y exportación digital
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="p-1 rounded-lg hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="py-5 space-y-4 font-sans text-xs sm:text-sm leading-relaxed text-stone-600">
                
                {/* Iframe detection notice */}
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/60 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-bold text-amber-900 block text-xs">
                      ¿La ventana de impresión no se abrió?
                    </span>
                    <p className="text-stone-700 text-[11px]">
                      Al ejecutar la aplicación en el marco de vista previa (iframe) de AI Studio, el navegador suele bloquear la función <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-amber-900">window.print()</code> por políticas de aislamiento.
                    </p>
                  </div>
                </div>

                {/* Step by Step list */}
                <div className="space-y-3 pt-1">
                  <span className="font-extrabold text-stone-900 block text-xs uppercase tracking-wider font-mono">
                    Pasos sencillos para imprimir / guardar PDF:
                  </span>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-stone-900 text-amber-400 flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
                        1
                      </div>
                      <p className="text-stone-700 text-xs">
                        Haz clic en el botón de <strong>"Open in a new tab"</strong> (con un ícono de flecha diagonal) ubicado arriba a la derecha en la barra gris de AI Studio.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-stone-900 text-amber-400 flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
                        2
                      </div>
                      <p className="text-stone-700 text-xs">
                        En la nueva ventana, presiona de nuevo este botón de descarga. Se desplegará la ventana del sistema para imprimir.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-stone-900 text-amber-400 flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
                        3
                      </div>
                      <p className="text-stone-700 text-xs">
                        En el destino de impresión, selecciona <strong>"Guardar como PDF"</strong> o <strong>"Save as PDF"</strong> en lugar de una impresora física.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-2 justify-end">
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 active:bg-stone-300 text-stone-700 font-sans text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Entendido, cerrar
                </button>
                <button
                  onClick={() => {
                    try {
                      window.print();
                    } catch (e) {
                      console.warn(e);
                    }
                  }}
                  className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-sans text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Download className="w-4 h-4 text-amber-300" />
                  Volver a intentar imprimir
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
