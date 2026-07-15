import type { IconType } from "react-icons";
import { HiStar } from "react-icons/hi2";

interface ReviewCardProps {
  icon: IconType;
  name: string;
  rating: number;
  comment: string;
  motorcycle: string;
}

export default function ReviewCard({
  icon: Icon,
  name,
  rating,
  comment,
  motorcycle,
}: ReviewCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        {/* Profile */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
            <Icon className="text-3xl text-blue-600" />
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">{name}</h3>

            <p className="text-sm text-slate-500">{motorcycle}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, index) => (
            <HiStar key={index} className="text-lg text-yellow-400" />
          ))}
        </div>
      </div>

      {/* Comment */}
      <p className="mt-6 leading-7 text-slate-600 italic">"{comment}"</p>
    </article>
  );
}
