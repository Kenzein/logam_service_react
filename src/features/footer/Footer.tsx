import {
  HiOutlineClock,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Ulasan", href: "#ulasan" },
  { label: "Lokasi", href: "#location" },
  { label: "Kontak", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-white">LOGAM SERVICE</h2>

            <p className="mt-4 leading-7 text-slate-400">
              Bengkel sepeda motor profesional yang siap membantu perawatan,
              servis berkala, tune up, hingga perbaikan mesin dengan teknisi
              berpengalaman dan peralatan modern.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white">Navigasi</h3>

            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Informasi</h3>

            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <HiOutlineMapPin className="mt-1 text-xl text-blue-400" />
                <span>Jl. Raya Medan</span>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlinePhone className="text-xl text-blue-400" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineClock className="mt-1 text-xl text-blue-400" />
                <span>
                  Senin - Sabtu
                  <br />
                  08:00 AM - 05:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} LOGAM SERVICE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
