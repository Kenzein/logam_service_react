import { SectionHeading } from "../../shared/components";
import ServiceCard from "./ServiceCard";
import { services } from "./service.data";

export default function Service() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Layanan"
          title="Layanan"
          highlight="Unggulan"
          description="Kami menyediakan berbagai layanan perawatan dan perbaikan motor menggunakan peralatan modern dan teknisi yang profesional"
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              image={service.image}
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
