import type { IconType } from "react-icons";

export interface Contact {
  id: number;
  icon: IconType;
  title: string;
  value: string;
  href: string;
}
