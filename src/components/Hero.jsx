export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Background */}
      <img
        src="/hero.jpg"
        alt="Skincare hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay чуть глубже — чтобы чёрный текст navbar читался */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center px-6 max-w-3xl pt-24">
        <h1 className="text-5xl md:text-6xl font-display mb-6 leading-tight">
          Your Skin — Elevated
        </h1>

        <p className="text-lg md:text-xl mb-10 opacity-95">
          Personal skincare consultations
        </p>

        <a
          href="#booking"
          className="bg-white text-neutral-900 px-10 py-4 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
        >
          Book Session
        </a>
      </div>

    </section>
  );
}
