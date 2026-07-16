import { CountUp } from "../../shared/components";

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
}

export default function StatCard({ value, label, suffix }: StatCardProps) {
  return (
    <div className="rounded-xl bg-blue-600 p-6 text-center text-white shadow-md">
      <h3 className="text-3xl font-bold">
        <CountUp
          from={0}
          to={value}
          separator=","
          direction="up"
          duration={2}
          delay={0}
          className="count-up-text"
        />
        {suffix}
      </h3>
      <p className="mt-2 text-sm">{label}</p>
    </div>
  );
}
