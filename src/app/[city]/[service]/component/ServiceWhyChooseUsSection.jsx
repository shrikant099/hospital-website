export default function ServiceWhyChooseSection({ city, service }) {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Why Choose Our {service.name} in {city.name}?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {service.whyChoose.map((item, i) => (
            <div key={i} className="border rounded-xl p-5 bg-gray-50">
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc.replace("{city}", city.name)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}