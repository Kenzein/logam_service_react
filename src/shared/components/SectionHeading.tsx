import Reveal from "./Reveal";

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div
        className={
          align === "center" ? "mx-auto max-w-2xl text-center" : "text-left"
        }
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2rem] text-blue-600">
          {badge}
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
          {title} <span className="text-blue-600">{highlight}</span>
        </h2>
        {description && (
          <p className="mt-5 text-slate-600 leading-relaxed">{description}</p>
        )}
      </div>
    </Reveal>
  );
}
