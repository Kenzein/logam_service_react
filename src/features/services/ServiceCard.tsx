import type { IconType } from "react-icons";

interface ServiceCardProps {
  image: string;
  icon: IconType;
  title: string;
  description: string;
}

export default function ServiceCard({
  image,
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="h-52 w-full rounded-xl object-cover"
      />
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 gap-3">
          <Icon className="text-4xl text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-800">{description}</p>
    </article>
  );
}
