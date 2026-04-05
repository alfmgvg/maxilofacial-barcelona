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
            Implantes dentales en Barcelona
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Los implantes dentales permiten sustituir dientes perdidos mediante una raíz
            artificial de titanio que se integra en el hueso. Sobre este implante se coloca
            posteriormente una corona dental que reproduce la forma, la función y la estética
            del diente natural.
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
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-900">
          ¿Cuándo están indicados?
        </h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Pérdida de uno o varios dientes</li>
          <li>• Dificultad para masticar con normalidad</li>
          <li>• Problemas estéticos por ausencia dental</li>
          <li>• Rehabilitación completa de la dentición</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Planificación del tratamiento
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          Antes de colocar un implante dental se realiza un estudio clínico y radiológico
          completo. En muchos casos utilizamos TAC dental para evaluar la cantidad y calidad
          del hueso disponible y planificar la cirugía con precisión.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Implantes en casos complejos
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          Los cirujanos maxilofaciales están especialmente formados para tratar situaciones
          complejas como pérdida de hueso, dientes retenidos o rehabilitaciones completas
          que requieren una planificación quirúrgica avanzada.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Duración y mantenimiento
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          Con una correcta planificación quirúrgica, una buena higiene oral y revisiones
          periódicas, los implantes dentales pueden mantenerse en buen estado durante muchos
          años. El seguimiento adecuado es fundamental para su éxito a largo plazo.
        </p>

        <div className="mt-12 rounded-[28px] border border-slate-200 bg-sky-50/70 p-8">
          <h3 className="text-xl font-semibold text-slate-900">
            ¿Quieres valorar un tratamiento con implantes en Barcelona?
          </h3>
          <p className="mt-3 leading-7 text-slate-700">
            Nuestro equipo en HM Nou Delfos puede estudiar tu caso y orientarte tanto en
            tratamientos sencillos como en situaciones quirúrgicas más complejas. La consulta
            está ubicada en la planta -1 del hospital.
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
