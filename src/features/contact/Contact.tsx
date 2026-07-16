import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineClock, HiOutlinePhone } from "react-icons/hi2";

import { Reveal, SectionHeading } from "../../shared/components";

export default function Contact() {
  return (
    <section id="kontak" className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Kontak"
          title="Hubungi"
          highlight="Kami"
          description="Siap melayani konsultasi maupun reservasi servis kendaraan Anda."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-white p-10 shadow-lg ">
          <Reveal delay={0.1}>
            <div className="space-y-8">
              {/* Nomor WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-3">
                  <HiOutlinePhone className="text-2xl text-green-600" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Nomor WhatsApp
                  </h3>

                  <p className="mt-1 text-slate-600">+62 812 3456 7890</p>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <HiOutlineClock className="text-2xl text-blue-600" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Jam Operasional
                  </h3>

                  <p className="mt-1 text-slate-600">
                    Senin - Sabtu
                    <br />
                    08.00 - 17.00 WIB
                  </p>
                </div>
              </div>
            </div>

            {/* Tombol WhatsApp */}
            <div className="mt-10 text-center">
              <a
                href="https://wa.me/6285270473551"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-600"
              >
                <FaWhatsapp className="text-2xl" />
                Hubungi via WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
