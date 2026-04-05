// SEO CONFIG FOR DOMAIN
// Recommended domain: https://maxilofacialbarcelona.com
// Secondary domain redirect: https://cirujanomaxilofacial.info

export default function LandingHMNouDelfos() {
  const appointmentUrl =
    'https://portaldelpaciente.hmhospitales.com/peticion-cita';

  const hospitalPhone = '+34932545167';
  const hospitalPhoneDisplay = '932 545 167';
  const whatsappUrl = 'https://wa.me/34608944914';
  const whatsappDisplay = '608 94 49 14';

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Unidad de Cirugía Oral y Maxilofacial - HM Nou Delfos',
    description:
      'Unidad especializada en cirugía oral y maxilofacial en Barcelona. Especialistas en muelas del juicio, implantes dentales y cirugía oral compleja.',
    telephone: '+34 932 545 167',
    url: 'https://maxilofacialbarcelona.com',
    medicalSpecialty: 'Oral and Maxillofacial Surgery',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avinguda de Vallcarca, 151',
      addressLocality: 'Barcelona',
      addressRegion: 'Barcelona',
      postalCode: '08023',
      addressCountry: 'ES',
    },
  };

  const treatments = [
    {
      title: 'Muelas del juicio',
      text: 'Extracción de cordales incluidos y cirugía compleja con planificación personalizada.',
    },
    {
      title: 'Implantes dentales',
      text: 'Implantes en casos simples y complejos para recuperar función y estética.',
    },
    {
      title: 'Cirugía oral',
      text: 'Tratamiento de quistes, infecciones y patología oral avanzada.',
    },
  ];

  const doctors = [
    {
      name: 'Dr. Alfonso Mogedas Vegara',
      role: 'Jefe de Servicio',
      img: '/doctors/mogedas.jpg',
      bio: 'Especialista en Cirugía Oral y Maxilofacial vía MIR en Vall d’Hebron. Doctor Cum Laude por la UAB.',
    },
    {
      name: 'Dr. Nil Valentínes',
      role: 'Cirujano Oral y Maxilofacial',
      img: '/doctors/valentines.png',
      bio: 'Licenciado en Medicina por la UAB. Especialista MIR en Bellvitge. Experto en implantología y planificación quirúrgica avanzada.',
    },
    {
      name: 'Dra. Paula Donate',
      role: 'Cirujana Oral y Maxilofacial',
      img: '/doctors/donate.jpg',
      bio: 'Especialista MIR con formación en implantología, estética facial y cirugía avanzada.',
    },
    {
      name: 'Dr. Radek Lewko',
      role: 'Cirujano Oral y Maxilofacial',
      img: '/doctors/lewko.png',
      bio: 'Especialista en cirugía maxilofacial con enfoque en precisión y recuperación rápida.',
    },
    {
      name: 'Dr. Roderick Bonilla',
      role: 'Cirujano Maxilofacial y Estético',
      img: '/doctors/roderick.jpg',
      bio: 'Especialista en cirugía estética facial: blefaroplastia, lifting, rinoplastia y feminización facial.',
    },
  ];

  function DoctorCard({ doctor }) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-4 border">
        <img src={doctor.img} className="w-full h-64 object-cover rounded-xl" />
        <h3 className="mt-3 font-semibold">{doctor.name}</h3>
        <p className="text-sm text-blue-600">{doctor.role}</p>
        <p className="text-sm mt-2 text-gray-600">{doctor.bio}</p>
      </div>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* HEADER */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <img src="/logo-ocm.png" className="h-10" />
          <a
            href={appointmentUrl}
            className="bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Pedir cita
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold">
            Cirujanos maxilofaciales en Barcelona
          </h1>
          <p className="mt-4 text-lg">
            Especialistas en muelas del juicio, implantes dentales y cirugía oral
            compleja en HM Nou Delfos.
          </p>

          <div className="mt-6 flex gap-4">
            <a href={appointmentUrl} className="bg-blue-700 text-white px-5 py-3 rounded-lg">
              Pedir cita
            </a>
            <a href={hospitalPhone} className="border px-5 py-3 rounded-lg">
              Llamar {hospitalPhoneDisplay}
            </a>
            <a href={whatsappUrl} className="border px-5 py-3 rounded-lg">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* TRATAMIENTOS */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold">Tratamientos</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {treatments.map((t) => (
            <div key={t.title} className="p-5 border rounded-xl">
              <h3 className="font-semibold">{t.title}</h3>
              <p className="text-sm mt-2">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPO */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Equipo médico</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {doctors.map((doc) => (
              <DoctorCard key={doc.name} doctor={doc} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold">Dónde estamos</h2>
        <p className="mt-4">
          HM Nou Delfos<br />
          Avinguda de Vallcarca, 151<br />
          Planta -1
        </p>

        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps?q=HM+Nou+Delfos+Barcelona&output=embed"
            width="100%"
            height="300"
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">
          ¿Necesitas valoración por un cirujano maxilofacial?
        </h2>
        <div className="mt-6 flex justify-center gap-4">
          <a href={appointmentUrl} className="bg-white text-blue-700 px-6 py-3 rounded-lg">
            Pedir cita
          </a>
          <a href={hospitalPhone} className="border px-6 py-3 rounded-lg">
            Llamar
          </a>
        </div>
      </section>
    </>
  );
}
