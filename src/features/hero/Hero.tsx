import HeroBrands from "./HeroBrands";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center bg-linear-to-r from-slate-950 via-slate-900 to-blue-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-32">
        <span className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white">
          Bengkel Terpercaya Sidikalang
        </span>
        <h1 className="mt-6 text-5xl font-black text-white md:text-7xl">
          LOGAM <br />
          <span className="text-blue-500">SERVICE</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Bengkel Sepeda Motor Profesional
        </p>
        <p className="mt-6 max-w-xl text-gray-400">
          Melayani kebutuhan servis motor dengan teknisi berpengalaman dan
          peralatan modern
        </p>
        <div className="mt-10 flex gap-4">{/* Button */}</div>
        <HeroBrands />
      </div>
    </section>
  );
}
