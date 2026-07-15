import { SectionHeading } from "../../shared/components";
import ReviewCard from "./ReviewCard";
import { reviews } from "./reviews.data";

export default function Reviews() {
  return (
    <section id="ulasan" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Ulasan"
          title="Ulasan"
          highlight="Pelanggan"
          description="Testimoni nyata dari pelanggan yang telah merasakan pelayanan profesional di bengkel kami."
          align="center"
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              icon={review.icon}
              name={review.name}
              motorcycle={review.motorcycle}
              rating={review.rating}
              comment={review.comment}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
