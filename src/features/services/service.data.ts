import {
  HiOutlineBeaker,
  HiOutlineBolt,
  HiOutlineCog6Tooth,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import type { Service } from "./service.types";

export const services: Service[] = [
  {
    id: 1,
    title: "Servis Berkala",
    description: "Perawatan rutin agar performa motor tetap optimal.",
    icon: HiOutlineWrenchScrewdriver,
    image: "/images/remote.jpeg",
  },
  {
    id: 2,
    title: "Tune Up",
    description: "Penyetelan mesin agar lebih bertenaga dan hemat bahan bakar",
    icon: HiOutlineCog6Tooth,
    image: "/images/remote.jpeg",
  },
  {
    id: 3,
    title: "Ganti Oli",
    description: "Menggunakan oli berkualitas untuk menjaga mesin tetap awet.",
    icon: HiOutlineBeaker,
    image: "/images/remote.jpeg",
  },
  {
    id: 4,
    title: "Perbaikan Mesin",
    description: "Diagnosis dan perbaikan mesin oleh teknisi berpengalaman.",
    icon: HiOutlineBolt,
    image: "/images/remote.jpeg",
  },
  {
    id: 5,
    title: "Servis Kelistrikan",
    description: "Pengecekan dan perbaikan sistem kelistrikan motor.",
    icon: HiOutlineShieldCheck,
    image: "/images/remote.jpeg",
  },
  {
    id: 6,
    title: "Cuci & Detailing",
    description: "Membersihkan motor hingga tampak seperti baru kembali.",
    icon: HiOutlineSparkles,
    image: "/images/remote.jpeg",
  },
];
