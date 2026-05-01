import { useState } from "react";

export default function Gallery() {
  const imgs = ["/g1.jpg", "/g2.jpg", "/g3.jpg", "/g4.jpg"];
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      {/* responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {imgs.map((i, idx) => (
          <img
            key={idx}
            src={i}
            onClick={() => setOpen(i)}
            className="cursor-pointer rounded-2xl object-cover aspect-square hover:scale-[1.03] transition shadow-sm"
          />
        ))}
      </div>

      {/* modal */}
      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
        >
          <img
            src={open}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl"
          />
        </div>
      )}

    </section>
  );
}
