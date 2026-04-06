export default function ServiceWhyDoctorSection({ city, service }) {
  const items = service?.idealFor ?? [];

  return (
    <section className="bg-white py-10 px-4 md:py-16">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
          Who Should Use {service.name} Service in{" "}
          <span className="text-teal-600">{city}</span>?
        </h2>

        <p className="text-gray-600 mt-3 mb-4 text-sm md:text-base">
          Our {service.keyword} service in {city} is ideal for:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm md:text-base">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

      </div>
    </section>
  );
}