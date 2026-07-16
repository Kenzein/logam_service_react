import {
  HiOutlineWrench,
  HiOutlineCog,
  HiOutlineShieldCheck,
  HiOutlineCheck,
  HiOutlineBolt,
} from "react-icons/hi2";
import type { Feature, Stat } from "./about.types";

export const features: Feature[] = [
  {
    id: 1,
    title: "Servis",
    icon: HiOutlineWrench,
  },
  {
    id: 2,
    title: "Sparepart",
    icon: HiOutlineCog,
  },
  {
    id: 3,
    title: "Cepat",
    icon: HiOutlineBolt,
  },
  {
    id: 4,
    title: "Terjamin",
    icon: HiOutlineShieldCheck,
  },

  {
    id: 5,
    title: "Garansi",
    icon: HiOutlineCheck,
  },
];

export const stats: Stat[] = [
  {
    id: 1,
    value: 500,
    label: "Motor Ditangani",
    suffix: "+",
  },
  {
    id: 2,
    value: 5,
    suffix: "+",
    label: "Tahun Pengalaman",
  },
  {
    id: 3,
    value: 100,
    suffix: "%",
    label: "Kepuasan Pelanggan",
  },
];
