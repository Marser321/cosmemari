// ============================================
// Datos enriquecidos de cada servicio dental
// ============================================

export interface Servicio {
    slug: string;
    titulo: string;
    descripcionCorta: string;
    descripcionLarga: string;
    beneficios: string[];
    proceso: { paso: string; detalle: string }[];
    icono: string; // nombre del icono Lucide
    color: string; // clase de color Tailwind
    colorHex: string; // para efectos de glow
    splineUrl?: string; // URL del modelo 3D interactivo
}

export const servicios: Servicio[] = [
    {
        slug: 'blanqueamiento-dental',
        titulo: 'Blanqueamiento Dental',
        descripcionCorta:
            'Recuperá el blanco natural de tu sonrisa con técnicas profesionales seguras y resultados visibles desde la primera sesión.',
        descripcionLarga:
            'Nuestro blanqueamiento dental profesional utiliza geles de última generación activados con luz LED de alta potencia. A diferencia de los kits caseros, el tratamiento es supervisado por el Dr. Mari para garantizar resultados uniformes de hasta 8 tonos más blancos, sin dañar el esmalte ni causar sensibilidad prolongada. Ideal para eliminar manchas de café, té, vino o tabaco.',
        beneficios: [
            'Hasta 8 tonos más blancos en una sola sesión',
            'Sin daño al esmalte dental',
            'Resultados visibles inmediatos',
            'Procedimiento indoloro y rápido (45-60 min)',
            'Efectos duraderos con cuidado adecuado',
        ],
        proceso: [
            { paso: 'Evaluación', detalle: 'Análisis del color actual y salud dental' },
            { paso: 'Protección', detalle: 'Aislamiento de encías y tejidos blandos' },
            { paso: 'Aplicación', detalle: 'Gel blanqueador de concentración profesional' },
            { paso: 'Activación', detalle: 'Luz LED de alta potencia durante 15-20 min' },
            { paso: 'Resultado', detalle: 'Evaluación del nuevo tono y recomendaciones' },
        ],
        icono: 'Sparkles',
        color: 'text-yellow-400',
        colorHex: '#FBBF24',
        splineUrl: 'https://prod.spline.design/T-gJmC1D1pS0i1gC/scene.splinecode', // Placeholder (ej: un diente o diamante abstracto)
    },
    {
        slug: 'bruxismo',
        titulo: 'Bruxismo',
        descripcionCorta:
            'Protección personalizada contra el rechinar de dientes. Placas de descarga que cuidan tu salud dental mientras dormís.',
        descripcionLarga:
            'El bruxismo es el hábito involuntario de apretar o rechinar los dientes, generalmente durante el sueño. Puede provocar desgaste dental severo, dolor de mandíbula, cefaleas y problemas en la articulación temporomandibular (ATM). En nuestra clínica diseñamos placas de descarga personalizadas con materiales de alta calidad que se ajustan perfectamente a tu mordida, distribuyendo la presión y protegiendo tus dientes.',
        beneficios: [
            'Previene el desgaste prematuro de los dientes',
            'Reduce dolor de mandíbula y cefaleas',
            'Placa 100% personalizada a tu mordida',
            'Material hipoalergénico y durable',
            'Mejora la calidad del sueño',
        ],
        proceso: [
            { paso: 'Diagnóstico', detalle: 'Evaluación de desgaste y síntomas' },
            { paso: 'Impresión', detalle: 'Toma de moldes digitales de alta precisión' },
            { paso: 'Fabricación', detalle: 'Confección de placa personalizada en laboratorio' },
            { paso: 'Ajuste', detalle: 'Prueba y calibración de la placa' },
            { paso: 'Seguimiento', detalle: 'Control periódico y ajustes si necesitás' },
        ],
        icono: 'ShieldCheck',
        color: 'text-purple-400',
        colorHex: '#C084FC',
        splineUrl: 'https://prod.spline.design/1G4h8R0c00k88H3C/scene.splinecode', // Placeholder (bruxismo/placa)
    },
    {
        slug: 'carillas-dentales',
        titulo: 'Carillas Dentales',
        descripcionCorta:
            'Transformá tu sonrisa con láminas ultrafinas de porcelana. Resultado natural, duradero y de diseño personalizado.',
        descripcionLarga:
            'Las carillas dentales son láminas ultrafinas de porcelana o composite que se adhieren a la cara visible del diente, transformando por completo tu sonrisa. En nuestra clínica utilizamos porcelana de alta gama (e.max) que replica la translucidez natural del diente. El Dr. Mari trabaja con diseño digital de sonrisa (DSD) para mostrar el resultado antes de comenzar, asegurando que cada carilla se adapte a tu rostro y personalidad.',
        beneficios: [
            'Resultado estético natural e imperceptible',
            'Corrige color, forma, tamaño y alineación',
            'Porcelana resistente a manchas',
            'Durabilidad de 10-15 años con cuidado adecuado',
            'Diseño digital previo para ver el resultado antes',
        ],
        proceso: [
            { paso: 'Diseño Digital', detalle: 'Análisis facial y diseño de sonrisa digital' },
            { paso: 'Preparación', detalle: 'Mínimo tallado conservador del diente' },
            { paso: 'Provisorios', detalle: 'Carillas temporales mientras se fabrican las definitivas' },
            { paso: 'Cementado', detalle: 'Adhesión precisa de carillas de porcelana' },
            { paso: 'Pulido', detalle: 'Ajuste oclusal y pulido final perfecto' },
        ],
        icono: 'Layers',
        color: 'text-pink-400',
        colorHex: '#F472B6',
        splineUrl: 'https://prod.spline.design/V7B-5Yq2x2mR0GzF/scene.splinecode', // Placeholder (carillas)
    },
    {
        slug: 'cirugia-bucal',
        titulo: 'Cirugía Bucal',
        descripcionCorta:
            'Intervenciones quirúrgicas precisas y seguras. Extracciones complejas, muelas de juicio y más, con recuperación acelerada.',
        descripcionLarga:
            'El Dr. Diego Mari cuenta con especialización en cirugía bucal, realizando desde extracciones simples hasta procedimientos complejos como remoción de muelas de juicio impactadas, cirugías preprotésicas y biopsias de tejidos blandos. Utilizamos técnicas mínimamente invasivas y protocolos de sedación para garantizar tu comodidad. La recuperación es rápida gracias a protocolos farmacológicos modernos.',
        beneficios: [
            'Especialista con formación en Ucudal',
            'Técnicas mínimamente invasivas',
            'Protocolos de recuperación acelerada',
            'Sedación consciente disponible',
            'Seguimiento post-operatorio incluido',
        ],
        proceso: [
            { paso: 'Evaluación', detalle: 'Radiografías y planificación quirúrgica' },
            { paso: 'Anestesia', detalle: 'Anestesia local o sedación según el caso' },
            { paso: 'Intervención', detalle: 'Procedimiento con técnica mínimamente invasiva' },
            { paso: 'Sutura', detalle: 'Cierre con suturas reabsorbibles si es necesario' },
            { paso: 'Recuperación', detalle: 'Indicaciones y medicación para recuperación rápida' },
        ],
        icono: 'Scissors',
        color: 'text-red-400',
        colorHex: '#F87171',
        splineUrl: 'https://prod.spline.design/5F4mE1C0A1V2B3D4/scene.splinecode', // Placeholder (cirugía)
    },
    {
        slug: 'implantes-dentales',
        titulo: 'Implantes Dentales',
        descripcionCorta:
            'La solución definitiva para dientes perdidos. Implantes de titanio que se integran al hueso y funcionan como dientes naturales.',
        descripcionLarga:
            'Los implantes dentales son raíces artificiales de titanio que se colocan en el hueso maxilar para reemplazar dientes perdidos. El Dr. Mari es especialista en cirugía y rehabilitación sobre implantes (Ucudal), lo que garantiza un manejo integral: desde la planificación quirúrgica digital hasta la corona final. Trabajamos con sistemas de implantes de primera línea mundial, ofreciendo garantía y seguimiento a largo plazo.',
        beneficios: [
            'Solución permanente y definitiva',
            'Sensación y función idéntica a un diente natural',
            'No afecta dientes adyacentes',
            'Preserva el hueso maxilar',
            'Especialista certificado en rehabilitación sobre implantes',
        ],
        proceso: [
            { paso: 'Planificación 3D', detalle: 'Tomografía y planificación digital del implante' },
            { paso: 'Cirugía', detalle: 'Colocación del implante de titanio en el hueso' },
            { paso: 'Osteointegración', detalle: 'Período de integración hueso-implante (3-4 meses)' },
            { paso: 'Pilar', detalle: 'Colocación del conector sobre el implante' },
            { paso: 'Corona', detalle: 'Instalación de la corona definitiva personalizada' },
        ],
        icono: 'Anchor',
        color: 'text-cyan-400',
        colorHex: '#22D3EE',
        splineUrl: 'https://prod.spline.design/T-gJmC1D1pS0i1gC/scene.splinecode', // Placeholder (implantes)
    },
    {
        slug: 'odontologia-general',
        titulo: 'Odontología General',
        descripcionCorta:
            'Prevención y cuidado integral de tu salud bucal. Controles periódicos, limpiezas y restauraciones para mantener tu sonrisa sana.',
        descripcionLarga:
            'La odontología general es la base de una boca sana. Realizamos controles preventivos, limpiezas profesionales (detartraje), restauraciones estéticas con resinas de alta calidad y detección temprana de caries y enfermedades periodontales. Creemos en la prevención como la mejor inversión en salud bucal: una consulta a tiempo puede evitar tratamientos complejos y costosos.',
        beneficios: [
            'Detección temprana de problemas dentales',
            'Limpiezas profesionales con ultrasonido',
            'Restauraciones estéticas del color natural del diente',
            'Plan de cuidado preventivo personalizado',
            'Ahorro a largo plazo evitando tratamientos complejos',
        ],
        proceso: [
            { paso: 'Historia Clínica', detalle: 'Registro completo de antecedentes y hábitos' },
            { paso: 'Examen', detalle: 'Revisión completa de dientes, encías y tejidos' },
            { paso: 'Diagnóstico', detalle: 'Plan de tratamiento personalizado con opciones' },
            { paso: 'Tratamiento', detalle: 'Realización del procedimiento indicado' },
            { paso: 'Prevención', detalle: 'Plan de controles periódicos y cuidado en casa' },
        ],
        icono: 'Stethoscope',
        color: 'text-blue-400',
        colorHex: '#60A5FA',
        splineUrl: 'https://prod.spline.design/X6s-KjZ0P2qU0wW4/scene.splinecode', // Placeholder (general)
    },
    {
        slug: 'odontologia-ninos',
        titulo: 'Odontología para Niños',
        descripcionCorta:
            'Atención especializada y cálida para los más chicos. Consultas lúdicas que crean hábitos de salud bucal desde la infancia.',
        descripcionLarga:
            'Sabemos que la primera experiencia dental marca la relación del niño con el dentista para toda la vida. Por eso, nuestras consultas pediátricas son diseñadas para ser experiencias positivas y divertidas. Trabajamos con técnicas de manejo conductual, explicando cada paso con lenguaje amigable. Realizamos selladores, fluoración, control de hábitos (chupete, dedo) y educación en higiene bucal adaptada a cada edad.',
        beneficios: [
            'Ambiente amigable y libre de miedos',
            'Profesionales entrenados en odontopediatría',
            'Selladores preventivos contra caries',
            'Educación en higiene dental divertida',
            'Seguimiento del desarrollo dental del niño',
        ],
        proceso: [
            { paso: 'Bienvenida', detalle: 'Recorrido del consultorio y presentación amigable' },
            { paso: 'Revisión', detalle: 'Examen adaptado con explicaciones para el niño' },
            { paso: 'Prevención', detalle: 'Aplicación de flúor y/o selladores' },
            { paso: 'Educación', detalle: 'Técnica de cepillado con demostración práctica' },
            { paso: 'Seguimiento', detalle: 'Plan de controles adaptado al crecimiento' },
        ],
        icono: 'Baby',
        color: 'text-green-400',
        colorHex: '#4ADE80',
        splineUrl: 'https://prod.spline.design/C7r-HyT1F3lE1oN5/scene.splinecode', // Placeholder (niños)
    },
    {
        slug: 'ortodoncia',
        titulo: 'Ortodoncia',
        descripcionCorta:
            'Alineación perfecta de tus dientes con brackets o alineadores invisibles. Especialización dedicada para resultados precisos.',
        descripcionLarga:
            'Nuestra clínica cuenta con especialización en ortodoncia, ofreciendo soluciones para maloclusiones, apiñamiento, mordida cruzada y otros problemas de alineación dental. Trabajamos con brackets metálicos, estéticos (cerámicos) y alineadores transparentes. Cada tratamiento es planificado digitalmente para predecir el resultado final y optimizar los tiempos, logrando sonrisas alineadas y funcionales.',
        beneficios: [
            'Especialista dedicado en ortodoncia',
            'Opciones de brackets estéticos e invisibles',
            'Planificación digital del resultado final',
            'Mejora funcional de la mordida',
            'Tratamientos para todas las edades',
        ],
        proceso: [
            { paso: 'Diagnóstico', detalle: 'Radiografías, fotos y modelos de estudio' },
            { paso: 'Plan Digital', detalle: 'Simulación del movimiento dental y timeline' },
            { paso: 'Colocación', detalle: 'Instalación de aparatología elegida' },
            { paso: 'Controles', detalle: 'Ajustes mensuales para guiar el movimiento' },
            { paso: 'Retención', detalle: 'Retenedores para mantener el resultado para siempre' },
        ],
        icono: 'AlignCenter',
        color: 'text-indigo-400',
        colorHex: '#818CF8',
        splineUrl: 'https://prod.spline.design/T-gJmC1D1pS0i1gC/scene.splinecode', // Placeholder (ortodoncia)
    },
    {
        slug: 'periodoncia',
        titulo: 'Periodoncia (Encías)',
        descripcionCorta:
            'Cuidado especializado de encías y tejidos de soporte. Tratamiento de gingivitis y periodontitis para preservar tus dientes.',
        descripcionLarga:
            'La periodoncia es la especialidad que trata las enfermedades de las encías y los tejidos que sostienen los dientes. La gingivitis (encías inflamadas y sangrantes) y la periodontitis (pérdida de hueso alrededor de los dientes) son enfermedades silenciosas que, sin tratamiento, llevan a la pérdida dental. Realizamos raspaje y alisado radicular, cirugía periodontal y regeneración de tejidos para devolver la salud a tus encías.',
        beneficios: [
            'Detiene la progresión de enfermedad periodontal',
            'Elimina encías sangrantes e inflamadas',
            'Preserva piezas dentales comprometidas',
            'Regeneración de tejidos con biomateriales',
            'Mejora el aliento y la salud general',
        ],
        proceso: [
            { paso: 'Sondaje', detalle: 'Medición de bolsas periodontales alrededor de cada diente' },
            { paso: 'Diagnóstico', detalle: 'Radiografías para evaluar nivel de hueso' },
            { paso: 'Raspaje', detalle: 'Limpieza profunda bajo la encía (raspaje y alisado)' },
            { paso: 'Reevaluación', detalle: 'Control de la respuesta al tratamiento' },
            { paso: 'Mantenimiento', detalle: 'Programa de higiene periodontal periódica' },
        ],
        icono: 'HeartPulse',
        color: 'text-rose-400',
        colorHex: '#FB7185',
        splineUrl: 'https://prod.spline.design/X6s-KjZ0P2qU0wW4/scene.splinecode', // Placeholder (encías)
    },
    {
        slug: 'rayos-x',
        titulo: 'Rayos X Dentales',
        descripcionCorta:
            'Diagnóstico digital de precisión instantánea. Radiografías digitales con mínima radiación y máxima resolución.',
        descripcionLarga:
            'Contamos con equipamiento de radiología digital de última generación que permite obtener imágenes de alta resolución con hasta un 90% menos de radiación que los métodos tradicionales. Las radiografías periapicales, panorámicas y bite-wing son herramientas fundamentales para diagnosticar caries interproximales, evaluar el estado del hueso, planificar implantes y controlar tratamientos de conducto.',
        beneficios: [
            'Hasta 90% menos radiación que métodos convencionales',
            'Imágenes disponibles al instante',
            'Alta resolución para diagnósticos precisos',
            'Fundamental para planificación de implantes',
            'Almacenamiento digital para seguimiento histórico',
        ],
        proceso: [
            { paso: 'Indicación', detalle: 'El profesional determina el tipo de radiografía necesaria' },
            { paso: 'Preparación', detalle: 'Colocación del sensor digital y protección' },
            { paso: 'Toma', detalle: 'Exposición de milisegundos con equipo digital' },
            { paso: 'Visualización', detalle: 'Imagen instantánea en pantalla de alta resolución' },
            { paso: 'Análisis', detalle: 'Interpretación y explicación al paciente' },
        ],
        icono: 'ScanLine',
        color: 'text-emerald-400',
        colorHex: '#34D399',
        splineUrl: 'https://prod.spline.design/X6s-KjZ0P2qU0wW4/scene.splinecode', // Placeholder (Rayos X)
    },
    {
        slug: 'tratamiento-de-conducto',
        titulo: 'Tratamiento de Conducto',
        descripcionCorta:
            'Eliminación del dolor preservando tu pieza dental. Endodoncia moderna con instrumental rotatorio de precisión.',
        descripcionLarga:
            'El tratamiento de conducto (endodoncia) es el procedimiento que permite salvar un diente cuando la pulpa dental (nervio) está infectada o inflamada. Utilizamos instrumental rotatorio de níquel-titanio, localizadores electrónicos de ápice y radiografías digitales para lograr una limpieza y obturación precisa de los conductos. Bajo anestesia local, el procedimiento es completamente indoloro y permite mantener tu diente natural en boca.',
        beneficios: [
            'Elimina el dolor de forma definitiva',
            'Salva el diente natural evitando la extracción',
            'Procedimiento indoloro bajo anestesia',
            'Instrumental rotatorio de última generación',
            'Una o dos sesiones según complejidad',
        ],
        proceso: [
            { paso: 'Anestesia', detalle: 'Bloqueo completo de la zona sin dolor' },
            { paso: 'Acceso', detalle: 'Apertura controlada para acceder a los conductos' },
            { paso: 'Limpieza', detalle: 'Instrumentación rotatoria y desinfección' },
            { paso: 'Obturación', detalle: 'Sellado hermético de los conductos' },
            { paso: 'Restauración', detalle: 'Reconstrucción del diente para su función completa' },
        ],
        icono: 'Crosshair',
        color: 'text-orange-400',
        colorHex: '#FB923C',
        splineUrl: 'https://prod.spline.design/1G4h8R0c00k88H3C/scene.splinecode', // Placeholder (Conducto)
    },
];

export function getServicioBySlug(slug: string): Servicio | undefined {
    return servicios.find((s) => s.slug === slug);
}
