import type { IconType } from "react-icons";

interface LocationInfoCardProps {
  icon: IconType;
  title: string;
  value: string;
}

export default function LocationInfoCard({
  icon: Icon,
  title,
  value,
}: LocationInfoCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
        <Icon className="text-2xl text-blue-600" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-800">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{value}</p>
      </div>
    </div>
  );
}
