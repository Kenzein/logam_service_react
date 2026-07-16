import type { IconType } from "react-icons";

export interface Feature {
  id: number;
  title: string;
  icon: IconType;
}

export interface Stat {
  id: number;
  value: number;
  label: string;
  suffix?: string;
}
