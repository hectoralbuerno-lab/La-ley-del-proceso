/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LeadershipPhase, BiblicalLeader, QuizQuestion, AudioTrack } from "../types";

export const LEADERSHIP_PHASES: LeadershipPhase[] = [
  {
    number: 1,
    title: "No sé lo que no sé",
    subtitle: "La Ignorancia del Proceso",
    description: "Muchos subordinan el liderazgo a la posición o al carisma natural, ignorando que requiere un set de habilidades que se deben pulir día a día. Se cree que liderar es dictar órdenes, pero se desconoce el peso real de la influencia.",
    quote: "Quien cree que lidera y no tiene a nadie siguiéndole, solo está dando un paseo.",
    keyAction: "Despertar la curiosidad y admitir que liderar es un arte que se adquiere, no que se hereda completo."
  },
  {
    number: 2,
    title: "Sé lo que no sé",
    subtitle: "El Despertar de la Autoconciencia",
    description: "En algún momento de la vida somos colocados en una posición de influencia y descubrimos que nadie nos sigue o que fallamos al guiar. Es el instante doloroso pero crucial donde tomamos conciencia de nuestras limitaciones.",
    quote: "El primer paso hacia el crecimiento es reconocer la necesidad de crecer.",
    keyAction: "Identificar las debilidades personales y elaborar una agenda intencional de mejora continua."
  },
  {
    number: 3,
    title: "Crezco y sé, y comienza a notarse",
    subtitle: "La Disciplina Diaria del Hábito",
    description: "El cambio no ocurre en un día, ocurre diariamente. Aquí es donde se establece la disciplina de estudiar, reflexionar, recibir mentoría y poner en práctica hábitos de valor. El liderazgo se consolida en la agenda diaria.",
    quote: "El secreto de nuestro éxito se encuentra en nuestra agenda diaria.",
    keyAction: "Mantener la constancia y el compromiso diario, confiando en el interés compuesto del crecimiento continuo."
  },
  {
    number: 4,
    title: "Actúo por lo que sé",
    subtitle: "El Crecimiento Dirigido",
    description: "La influencia fluye con mayor naturalidad. El líder ya no tiene que forzar sus respuestas, pues ha asimilado los principios. El conocimiento se ha convertido en competencia real y el equipo empieza a prosperar de manera notable.",
    quote: "La habilidad de liderar surge de la preparación meticulosa previa.",
    keyAction: "Delegar con sabiduría, formar a otros líderes intermedios y guiar mediante el ejemplo activo."
  },
  {
    number: 5,
    title: "Actúo de forma automática",
    subtitle: "El Instinto del Liderazgo Trascendente",
    description: "El liderazgo se vuelve un reflejo casi subconsciente y empático. Las decisiones estratégicas se toman con alta precisión e intuición basada en años de proceso. La prioridad se voltea hacia el legado continuo de la organización.",
    quote: "Los verdaderos líderes no crean seguidores, crean más líderes.",
    keyAction: "Enfocar el esfuerzo total en el mentorazgo de la siguiente generación y en preservar los valores nucleares."
  }
];

export const BIBLICAL_LEADERS: BiblicalLeader[] = [
  {
    id: "jose",
    name: "José",
    category: "Prueba",
    title: "El Líder de la Providencia y la Resiliencia",
    bibleReference: "Génesis 37 - 50",
    coreVerse: "Génesis 50:20",
    coreVerseText: "Vosotros pensasteis mal contra mí, mas Dios lo encaminó a bien, para hacer lo que vemos hoy, para mantener en vida a mucho pueblo.",
    shortDescription: "Un proceso de 13 años transcurrido de la cisterna y la esclavitud a la máxima administración de Egipto. José demostró que el carácter del líder se forja bajo la injusticia impuesta sin amargura.",
    biography: "José fue el hijo preferido de Jacob, lo que despertó el celo de sus hermanos, quienes lo vendieron como esclavo. En Egipto, sirvió en casa de Potifar, donde fue falsamente acusado y encarcelado. Durante años en prisión, lideró sirviendo a otros presos. Su proceso concluyó cuando interpretó los sueños de Faraón, siendo nombrado gobernador. Su liderazgo evitó una hambruna mundial y salvó a su propia familia.",
    processDuration: "13 Años de Forja Continua (De los 17 a los 30 años de edad)",
    keyPrinciples: [
      "La integridad personal es innegociable, incluso cuando nadie te observa.",
      "El servicio en el anonimato y la adversidad te prepara para administrar las mayores riquezas con humildad.",
      "El proceso no busca castigarte, sino posicionarte para ser un canal de providencia y salvación.",
      "El verdadero liderazgo culmina en el perdón absoluto y la reconciliación comunitaria."
    ],
    literaryStructure: {
      type: "Quiasmo",
      title: "La Estructura Quiástica del Proceso de José",
      intro: "La narrativa literaria de Génesis muestra un paralelismo inverso que resalta cómo cada descenso físico y social representaba una preparación idéntica para su posterior exaltación soberana:",
      elements: [
        { label: "A. El Sueño del Joven José", text: "José sueña con gavillas e influencias divinas, incomodando a su familia.", verse: "Génesis 37:5-11" },
        { label: "B. Descenso a la Cisterna", text: "Traicionado por sus propios hermanos, despojado de su túnica de colores.", verse: "Génesis 37:24" },
        { label: "C. Esclavitud en Casa de Potifar", text: "Aprende a administrar una casa ajena bajo el favor del Señor.", verse: "Génesis 39:1-6" },
        { label: "D. Descenso al Calabozo Real", text: "Falsamente acusado, prisionero pero encargado de cuidar a los demás.", verse: "Génesis 39:20-23" },
        { label: "C'. Elevación en la Prisión e Interpretación", text: "Administra revelaciones para el copero y el panadero, esperando el tiempo sutil.", verse: "Génesis 40:1-23" },
        { label: "B'. Elevación al Trono de Egipto", text: "Investido con lino fino, anillo real y túnica de honra por Faraón.", verse: "Génesis 41:41-43" },
        { label: "A'. Cumplimiento del Sueño y Reconciliación", text: "Los hermanos se postran ante él y José les provee sustento en amor.", verse: "Génesis 45:1-15" }
      ]
    },
    practicalApplication: {
      habitSuggested: "Diario de Fidelidad Oculta",
      actionSteps: [
        "Realiza todas tus tareas laborales o ministeriales con el máximo estándar de calidad, aunque tu superior actual no te valore o no te supervise.",
        "Cuando sientas el impulso de quejarte por una injusticia, guarda silencio 24 horas y escribe tres formas en que esa prueba puede estar tallando tu paciencia."
      ],
      reflectionQuestion: "¿Cómo estás reaccionando en tu 'cisterna' u ocularidad actual? ¿Estás preparándote con excelencia para el palacio o limitándote a quejarte por los muros?"
    }
  },
  {
    id: "david",
    name: "David",
    category: "Preparación",
    title: "El Pastor Conforme al Corazón de Dios",
    bibleReference: "1 Samuel 16 - 2 Samuel 5",
    coreVerse: "Salmo 78:72",
    coreVerseText: "Y los apacentó conforme a la integridad de su corazón, los pastoreó con la pericia de sus manos.",
    shortDescription: "Ungido rey en su juventud, David esperó más de 15 años cuidando ovejas, huyendo de Saúl en cuevas y liderando a hombres marginados antes de recibir formalmente la corona de todo Israel.",
    biography: "El profeta Samuel ungió en secreto al joven pastor de Belén, David. En lugar de mudarse al palacio de inmediato, David regresó a cuidar el rebaño, enfrentó a Goliat, sirvió como músico y general para Saúl, y luego sufrió persecución implacable por parte del celoso rey. En las áridas cuevas de Adulam, congregó a 400 hombres endeudados y amargados, formándolos como sus 'valientes'. Respetó el proceso rehusando quitarle la vida a Saúl por sus propias manos.",
    processDuration: "15 Años de Espera y Persecución en el Desierto",
    keyPrinciples: [
      "El desierto no es una pérdida de tiempo; es el taller de tratamiento para tu corazón y pericia técnica.",
      "El liderazgo legítimo nunca busca atajos violentos ni destruye los procesos divinos establecidos.",
      "Quien sabe gobernar a un grupo de marginados en una cueva, sabrá guiar a una nación entera.",
      "La adoración constante edifica una actitud inquebrantable frente a las peores amenazas externas."
    ],
    literaryStructure: {
      type: "Cronológico",
      title: "La Pedagogía de la Cueva de Adulam",
      intro: "El mapa formativo de David muestra las etapas indispensables del carácter que formó en el calvario de la persecución:",
      elements: [
        { label: "Fase de Ungimiento", text: "La elección soberana. Se recibe la visión y el destino futuro, pero sin la capacitación del camino.", verse: "1 Samuel 16:13" },
        { label: "Fase del Anonimato Activo", text: "Enfrentar leones y osos en soledad donde nadie aplaude, forjando el coraje interior y la fe.", verse: "1 Samuel 17:34-36" },
        { label: "Fase de la Corte Real", text: "Aprender el protocolo de palacio, tolerar el temperamento destructivo ajeno y servir con humildad.", verse: "1 Samuel 18:10" },
        { label: "Fase del Quebrantamiento Absoluto", text: "Habitar en la cueva de Adulam, liderar desposeídos y tallar el carácter pastoril que no se envanece.", verse: "1 Samuel 22:1-2" },
        { label: "Fase de la Prueba del Respeto", text: "No tocar al ungido del Señor. Decidir voluntariamente no tomar el trono por la fuerza bruta.", verse: "1 Samuel 24:6" },
        { label: "Fase de la Doble Coronación", text: "Gobernar primero sobre Judá y 7 años después sobre todo el reino integrado.", verse: "2 Samuel 5:1-5" }
      ]
    },
    practicalApplication: {
      habitSuggested: "Guardia del Respeto e Integridad",
      actionSteps: [
        "Identifica a una autoridad difícil con la que interactúes habitualmente. Esfuérzate por no hablar mal de ella a sus espaldas.",
        "Dedica 15 minutos diarios a evaluar tus motivaciones de liderazgo: ¿Deseas la influencia por la fama del palacio o por el cuidado fiel de las ovejas?"
      ],
      reflectionQuestion: "Si tuvieras la oportunidad de dar un atajo a tus metas destruyendo a alguien o saltándote reglas éticas, ¿elegirías de verdad esperar el tiempo correcto del proceso?"
    }
  },
  {
    id: "moises",
    name: "Moisés",
    category: "Servicio",
    title: "El Proceso de Desaprendizaje del Líder",
    bibleReference: "Éxodo 2 - 4",
    coreVerse: "Hebreos 11:24-25",
    coreVerseText: "Por la fe Moisés, hecho ya grande, rehusó llamarse hijo de la hija de Faraón, escogiendo antes ser maltratado con el pueblo de Dios.",
    shortDescription: "Un triple proceso existencial de 120 años dividido de forma perfecta en tres bloques de 40 años: Convertirse en alguien, desaprender a ser alguien, y guiar a un pueblo entero de esclavos.",
    biography: "Moisés creció en el esplendor de las cortes de Egipto, aprendiendo ciencia y estrategia militar. Intentó liberar a sus hermanos con sus propios puños y sabiduría mundana, cometiendo homicidio. Huyó al desierto de Madián, donde pasó 40 años como un humilde pastor de ovejas de su suegro. En ese silencio absoluto, Dios desmanteló su orgullo faraónico y orgullo personal, capacitándolo para recibir la encomienda de liberar a Israel.",
    processDuration: "80 Años de Preparación antes de su Ministerio Público (120 años totales)",
    keyPrinciples: [
      "No puedes dirigir al pueblo de Dios usando los métodos autoritarios y altivos del sistema del mundo.",
      "El desierto nos humilla y despoja de la autosuficiencia humana para que la gloria repose en el poder divino.",
      "La queja e impaciencia de los dirigidos es el mayor crisol donde se prueba la mansedumbre del líder.",
      "El liderazgo eficaz sabe estructurar el trabajo y delegar tareas (Consejo de Jetro, Éxodo 18)."
    ],
    literaryStructure: {
      type: "Estilo Narrativo",
      title: "La Trilogía de los Cuarenta Años",
      intro: "La vida de Moisés es referenciada de forma teológica por Esteban en Hechos 7, revelando los tres ciclos del modelamiento del líder:",
      elements: [
        { label: "Primer Periodo (Egipto)", text: "Aprende la sabiduría de Faraón. Se siente poderoso e intenta liberar confiando en sus propias fuerzas carnales.", verse: "Hechos 7:22-25" },
        { label: "Segundo Periodo (Madián)", text: "El desaprendizaje total. Trepa montañas lejanas, pastorea ovejas, y vive como extranjero anónimo. Aprende mansedumbre.", verse: "Hechos 7:29-30" },
        { label: "Llamado en la Zarza", text: "Su autosuficiencia está tan muerta que incluso inventa excusas de su oratoria. Dios activa el poder real.", verse: "Éxodo 3:1-12" },
        { label: "Tercer Periodo (Desierto)", text: "Dirige a millones en condiciones áridas, intercede por rebeldes y recibe las tablas de la ley de Dios.", verse: "Hechos 7:35-36" }
      ]
    },
    practicalApplication: {
      habitSuggested: "Desapego de la Autosuficiencia",
      actionSteps: [
        "En tu próxima reunión o proyecto, en lugar de imponer tu idea brillante de primero, haz dos preguntas reflexivas y escucha a los demás.",
        "Aparta un día de ayuno de reconocimiento social: evita autopromocionarte o subir logros a tus redes sociales por una semana completa."
      ],
      reflectionQuestion: "¿Estás dispuesto a transcurrir el tiempo necesario en Madián (anonimato total) para que Dios te entregue la verdadera vara de dominio y servicio bíblico?"
    }
  },
  {
    id: "pablo",
    name: "Pablo",
    category: "Legado",
    title: "El Apóstol de la Revelación y el Sufrimiento Forjado",
    bibleReference: "Hechos 9, Gálatas 1:11-24",
    coreVerse: "Filipenses 4:12",
    coreVerseText: "Sé vivir humildemente, y sé tener abundancia; en todo y por todo estoy enseñado, así para estar saciado como para tener hambre.",
    shortDescription: "Un erudito religioso quebrantado en el camino a Damasco, quien pasó años de profundo retiro y estudio en Arabia antes de ser aceptado y enviado como apóstol a las naciones paganas.",
    biography: "Saulo de Tarso perseguía con rabia a la iglesia hasta que Cristo se le reveló en una luz cegadora. Quedó ciego temporalmente para aprender dependencia. Tras recuperar la vista y ser bautizado, no fue de inmediato al liderazgo central en Jerusalén, sino que se retiró a Arabia durante tres años para reinterpretar las Escrituras y asimilar las enseñanzas de la gracia. Soportó naufragios, azotes, prisiones y apedreamientos, considerando cada prueba del proceso como un leve momento de aflicción.",
    processDuration: "Aproximadamente 10 a 14 Años de Transición silenciosa hasta su primer viaje misionero",
    keyPrinciples: [
      "Hasta la mayor formación intelectual o académica debe pasar por la cruz para ser útil en el Reino de Dios.",
      "El desierto intelectual (Arabia) consolida la teología y la base doctrinaria del líder moderno.",
      "Para ganar influencia espiritual de peso, hay que estar dispuesto a perderlo todo en lo material.",
      "La perseverancia feliz ante el dolor es la credencial máxima del apostolado íntegro."
    ],
    literaryStructure: {
      type: "Estilo Narrativo",
      title: "La Conversión y Preparación Oculta del Apóstol",
      intro: "La epístola a los Gálatas aclara que su transformación no fue instantánea en términos ministeriales, sino un proceso maduro de revelación:",
      elements: [
        { label: "La Caída del Caballo", text: "Derrumbe del ego fariseo. La ceguera física despierta el entendimiento espiritual latente.", verse: "Hechos 9:3-9" },
        { label: "Retiro en Arabia y Damasco", text: "Pasa 3 años en silencio y estudio profundo orando y asimilando la teología del Cristo resucitado.", verse: "Gálatas 1:15-18" },
        { label: "Regreso y Rechazo Inicial", text: "Es mirado con temor receloso por los apóstoles en Jerusalén hasta que Bernabé intercede por él.", verse: "Hechos 9:26-28" },
        { label: "Espera en Tarso", text: "Regresa a su ciudad natal por años en silencio productivo, esperando que las puertas ministeriales se abran.", verse: "Hechos 9:30" },
        { label: "Llamado a Antioquía", text: "Bernabé lo busca; co-lideran un avivamiento ejemplar y se produce el envío apostólico organizado.", verse: "Hechos 11:25-26" }
      ]
    },
    practicalApplication: {
      habitSuggested: "Estudio Sistemático y Retiro Individual",
      actionSteps: [
        "Establece una hora de lectura y estudio diario sin distracciones digitales para solidificar tu conocimiento doctrinario y técnico.",
        "Acepta con gozo el rechazo pasajero u olvido de tus compañeros de liderazgo; confía en que tu llamado se activará en el momento exacto."
      ],
      reflectionQuestion: "¿Estás dispuesto a que tu teología, pasiones y métodos sean completamente reformulados por el Espíritu Santo antes de salir a conquistar tus metas?"
    }
  }
];

export const PROCESS_QUIZZES: QuizQuestion[] = [
  {
    id: 1,
    question: "¿De acuerdo con la Ley del Proceso de John C. Maxwell, cómo se adquiere fundamentalmente el liderazgo efectivo?",
    options: [
      "A través de un nombramiento jerárquico o herencia repentina.",
      "De manera diaria, paulatina y constante, mediante la disciplina de hábitos de crecimiento.",
      "Instantáneamente tras experimentar una revelación mística de un solo instante.",
      "Por medio de la elocuencia y carisma innato que no requiere esfuerzo de desarrollo."
    ],
    correctIndex: 1,
    biblicalContext: "El desarrollo de David cuidando ovejas antes de portar la corona real de Judá e Israel.",
    explanation: "El liderazgo es un proceso dinámico de adquisición diaria. No se construye de la noche a la mañana, sino a través de la acumulación diaria de experiencias, estudios y maduración de carácter."
  },
  {
    id: 2,
    question: "En el proceso de adiestramiento de Moisés, ¿cuántos años pasó cuidando rebaños en el desierto de Madián para desaprender su soberbia de Egipto?",
    options: [
      "10 años laborando de jardinero.",
      "3 años con la dirección de los apóstoles.",
      "40 años en la humilde soledad del desierto.",
      "Sólo unos meses de ayuno en una cueva."
    ],
    correctIndex: 2,
    biblicalContext: "Éxodo Hechos 7:30 - Vida de Moisés en Madián.",
    explanation: "Moisés pasó 40 años enteros pastoreando en Madián. Dios usó este extenso periodo de silencio e incomodidad para quebrar el orgullo intelectual adquirido en las cortes de Faraón."
  },
  {
    id: 3,
    question: "Qué actitud adoptó José ante las injusticias graves cometidas por sus hermanos y en la calabozo real?",
    options: [
      "Planificó en secreto una revancha sangrienta contra Potifar y sus cercanos familiares.",
      "Se amargó permanentemente y se rehusó a colaborar en los quehaceres de la prisión.",
      "Sirvió activamente a otros en soledad y perdonó de corazón, viendo la mano de providencia detrás de cada azote.",
      "Huyó de noche saltándose los muros de la prisión para auto-proclamarse rey."
    ],
    correctIndex: 3,
    biblicalContext: "Génesis 50:20 - Declaración profunda de José a sus hermanos.",
    explanation: "José entendió que Dios gobierna los acontecimientos. Sirvió a los prisioneros con excelencia y más tarde perdonó a sus hermanos, interpretando su sufrimiento como providencia divina para preservar al pueblo."
  },
  {
    id: 4,
    question: "Dentro de las 5 Etapas del Crecimiento del Liderazgo planteadas por Maxwell, ¿qué caracteriza a la Etapa 3 ('Crezco y sé, y comienza a notarse')?",
    options: [
      "Completa ignorancia de que liderar requiere destrezas especiales.",
      "La toma de conciencia sobre nuestras limitaciones personales, aunque aún no sepamos cómo resolverlas.",
      "El establecimiento férreo del estudio y hábitos diarios, donde el cambio progresivo empieza a reflejarse en los resultados del grupo.",
      "Un liderazgo automático e intuitivo basado únicamente en el carisma heredado de generación en generación."
    ],
    correctIndex: 2,
    biblicalContext: "El hábito constante de David de componer cánticos complejos y pastorear con esmero continuo.",
    explanation: "La Etapa 3 se cimenta en la constancia diaria. Cuando un líder adopta el hábito del desarrollo intencional diario, el avance acumulativo es tan marcado que es visible para todos a su alrededor."
  },
  {
    id: 5,
    question: "Según Gálatas 1:15-18, ¿a dónde se retiró el Apóstol Pablo luego de su conversión milagrosa antes de iniciar su ministerio masivo a los gentiles?",
    options: [
      "De inmediato a Jerusalén a reclamar un título de apóstol jefe.",
      "A Roma para convencer a los senadores del cristianismo.",
      "A Arabia y Damasco durante 3 años de profundo estudio y revelación.",
      "A Corinto a fundar una academia de liderazgo secular remunerada."
    ],
    correctIndex: 2,
    biblicalContext: "Gálatas 1:17 - Retiro de Pablo en Arabia antes del ministerio público.",
    explanation: "Pablo no se apresuró a buscar visibilidad ministerial pública. Pasó tres años en Arabia y Damasco interpretando las escrituras hebreas con la luz de Cristo resucitado antes de sumarse plenamente al equipo apostólico."
  }
];

export const AUDIO_TRACKS: AudioTrack[] = [
  {
    id: "jos_nar",
    title: "El Silencio de la Cisterna: La Preparación de José",
    narrator: "La Ley del Proceso",
    description: "Una reflexión sobre cómo los periodos de encierro e injusticia forjan la capacidad de administrar imperios enteros.",
    audioText: "El proceso de José es el testimonio clásico de la soberanía divina. A los 17 años, José tenía sueños de grandeza, pero carecía de la madurez para gestionarlos. Dios comenzó su proceso no en un trono, sino en una cisterna vacía. Posteriormente, en casa de Potifar, José tuvo que aprender sumisión, administración técnica y resistencia a la tentación moral en el anonimato. Finalmente, en el calabozo, cargó con la humillación pacientemente, hasta el tiempo perfecto. El proceso de José nos enseña que la providencia divina se nutre de la paciencia y del carácter tallado en el dolor."
  },
  {
    id: "dav_nar",
    title: "El Templo de las Cuevas: La Unción de David",
    narrator: "La Ley del Proceso",
    description: "Descubre por qué David tuvo que pastorear marginados en cuevas de asilo antes de heredar el trono de Jerusalén.",
    audioText: "Muchos desean la unción y la corona de David, pero pocos aprueban caminar por su desierto de Adulam. Cuando David fue ungido por Samuel, no fue conducido al palacio de inmediato; regresó al campo a proteger los rebaños en solitario. La persecución de Saúl fue su campo de entrenamiento más estricto. En la cueva de Adulam, David asumió la tutela de 400 desesperados y marginados, transformándolos en un ejército virtuoso gracias a su paciencia. El proceso enseña que el trono legítimo se erige únicamente respetando la vida de nuestros oponentes y esperando el tiempo oportuno."
  },
  {
    id: "moi_nar",
    title: "Madián y el Repliegue Faraónico: La Mansedumbre de Moisés",
    narrator: "La Ley del Proceso",
    description: "Cómo 40 años en el más profundo anonimato derribaron la autosuficiencia real del libertador de Israel.",
    audioText: "Moisés creía que podía salvar a su nación con el vigor y entrenamiento egipcio. Hizo justicia por mano propia y falló. Tuvo que refugiarse en Madián para iniciar su proceso transformador más radical: 40 años cuidando ovejas de otro hombre. El desierto silenció su elocuencia presuntuosa y le enseñó la mansedumbre absoluta. Cuando Dios le habló en la zarza, Moisés ya no confiaba en sus fuerzas. Un líder eficaz debe primero desaprender la altivez de Egipto para poder portar la vara de la liberación espiritual del pueblo."
  }
];
