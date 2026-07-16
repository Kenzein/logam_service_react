import { Reveal, SectionHeading } from "../../shared/components";
import { features, stats } from "./about.data";
import FeatureCard from "./FeatureCard";
import StatCard from "./StatCard";

export default function About() {
  return (
    <section id="tentang" className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Tentang Kami"
          title="Bengkel Motor"
          highlight="Kepercayaan"
          description="Logam Service adalah bengkel sepeda motor profesional yang menyediakan layanan servis, tune up , ganti oli, hingga perbaikan mesin dengan teknisi berpengalaman"
          align="center"
        />
        <Reveal delay={0.2}>
          {/* Stat */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.id}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.1}>
                <FeatureCard
                  key={feature.id}
                  icon={feature.icon}
                  title={feature.title}
                />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
