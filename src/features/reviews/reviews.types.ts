import type { IconType } from "react-icons";

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  motorcycle: string;
  icon: IconType;
}
