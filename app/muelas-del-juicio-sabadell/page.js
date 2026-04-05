export default function Page() {
  const appointmentUrl =
    'https://portaldelpaciente.hmhospitales.com/peticion-cita';

  const hospitalPhone = '+34932545167';
  const hospitalPhoneDisplay = '932 545 167';
  const whatsappUrl = 'https://wa.me/34608944914';
  const whatsappDisplay = '608 94 49 14';

  return (
    <main className="min-h-screen bg-white pb-24 text-slate-900 selection:bg-sky-100">
      <section className="border-b border-slate-200 bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <span className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-1 text-sm font-medium text-sky-700 shadow-sm">
            Cirugía Oral y Maxilofacial · HM Nou Delfos · Barcelona
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Extracción de muelas del juicio en Barcelona
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Las muelas del juicio o cordales son los últimos molares en aparecer. En
            algunos pacientes erupcionan correctamente, pero en otros quedan retenidas,
            parcialmente erupcionadas o sin espacio suficiente, lo que puede provocar
            dolor, inflamación, infecciones repetidas o daño en los dientes vecinos.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
            >
              Pedir cita
            </a>

            <a
              href={hospitalPhone}
              className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-50"
            >
              Llamar al {hospitalPhoneDisplay}
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-50"
            >
              WhatsApp
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            También puedes escribirnos por WhatsApp al {whatsappDisplay} para resolver
            dudas o solicitar una primera valoración.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-900">
          ¿Cuándo conviene valorar su extracción?
        </h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Dolor o inflamación en la zona posterior de la boca</li>
          <li>• Infecciones repetidas alrededor del cordal</li>
          <li>• Falta de espacio o presión sobre el diente vecino</li>
          <li>• Cordales incluidos o mal posicionados</li>
          <li>• Dificultad para una correcta higiene de la zona</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Valoración y planificación
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          Antes de indicar la extracción, realizamos una exploración clínica y un estudio
          radiológico completo. En algunos casos se solicita un TAC dental para conocer
          con precisión la posición del cordal y su relación con estructuras anatómicas
          cercanas, lo que permite planificar la cirugía de forma más segura.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Extracción de cordales complejos
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          Los cirujanos maxilofaciales están especialmente formados para tratar muelas del
          juicio incluidas, cordales con posiciones complejas o situaciones que requieren
          una cirugía más avanzada. El objetivo es realizar un tratamiento preciso,
          seguro y adaptado a cada paciente.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Recuperación después de la cirugía
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          Tras la extracción puede aparecer inflamación, molestias o limitación para abrir
          la boca durante los primeros días. En la mayoría de los casos la evolución es
          favorable con medicación, frío local y siguiendo las recomendaciones
          postoperatorias. El seguimiento adecuado ayuda a una recuperación más cómoda y
          segura.
        </p>

        <div className="mt-12 rounded-[28px] border border-slate-200 bg-sky-50/70 p-8">
          <h3 className="text-xl font-semibold text-slate-900">
            ¿Quieres valorar la extracción de una muela del juicio en Barcelona?
          </h3>
          <p className="mt-3 leading-7 text-slate-700">
            Nuestro equipo en HM Nou Delfos puede estudiar tu caso y orientarte sobre la
            necesidad de extracción, el tipo de procedimiento y la recuperación esperable.
            La consulta está ubicada en la planta -1 del hospital.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
            >
              Pedir cita online
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-100"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
