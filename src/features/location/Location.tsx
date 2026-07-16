import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineClock,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import { Reveal, SectionHeading } from "../../shared/components";
import LocationInfoCard from "./components/LocationInfoCard";
import { location } from "./location.data";

export default function Location() {
  return (
    <section id="lokasi" className="bg-slate-200 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Lokasi"
          title="Temukan"
          highlight="Kami"
          description="Kunjungi bengkel kami untuk mendapatkan pelayanan terbaik bagi kendaraan Anda."
          align="center"
        />
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Google Maps */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Reveal delay={0.1}>
              <iframe
                src={location.mapEmbedUrl}
                className="h-105 w-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </Reveal>
          </div>
          {/* Informasi */}
          <div className="flex flex-col justify-center space-y-5">
            <Reveal delay={0.3}>
              <LocationInfoCard
                icon={HiOutlineMapPin}
                title="Alamat"
                value={location.address}
              />
              <LocationInfoCard
                icon={HiOutlineClock}
                title="Jam Operasional"
                value={location.hours}
              />
              <LocationInfoCard
                icon={HiOutlinePhone}
                title="Telepon"
                value={location.phone}
              />
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-medium  text-blue-300 transition-colors hover:text-blue-700"
              >
                Buka di Google Maps
                <HiOutlineArrowTopRightOnSquare className="text-lg" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
