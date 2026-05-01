export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">

        <div className="font-display text-xl tracking-wide text-neutral-900">
          Elia Skin
        </div>

        <div className="space-x-8 text-sm font-medium text-neutral-900">
          <a href="#about" className="hover:opacity-70 transition">
            About
          </a>

          <a href="#skinquiz" className="hover:opacity-70 transition">
            Services
          </a>

          <a href="#booking" className="hover:opacity-70 transition">
            Booking
          </a>
        </div>

      </div>
    </div>
  );
}
