import { Reveal, SectionHeading } from "../../shared/components";
import ReviewCarousel from "./ReviewCarousel";
import { reviews } from "./reviews.data";

export default function Reviews() {
  return (
    <section id="ulasan" className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Ulasan"
          title="Ulasan"
          highlight="Pelanggan"
          description="Testimoni nyata dari pelanggan yang telah merasakan pelayanan profesional di bengkel kami."
          align="center"
        />
        <Reveal delay={0.2}>
          <div className="mt-16 ">
            <ReviewCarousel reviews={reviews} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
