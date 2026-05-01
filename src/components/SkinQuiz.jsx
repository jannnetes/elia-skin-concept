import { useState } from "react";
import { motion } from "framer-motion";

<section id="skinquiz" className="py-24 max-w-4xl mx-auto px-6"></section>

export default function SkinQuiz() {
  const [type, setType] = useState(null);

  const options = [
    {
      id: "dry",
      label: "Dry Skin",
      tip: "Focus on barrier repair, rich creams, and gentle cleansing. Avoid foaming washes.",
    },
    {
      id: "oily",
      label: "Oily Skin",
      tip: "Use lightweight gel moisturizers and niacinamide. Don’t skip hydration.",
    },
    {
      id: "combo",
      label: "Combination",
      tip: "Balance with light layers — gel in T-zone, richer cream on dry areas.",
    },
    {
      id: "sensitive",
      label: "Sensitive",
      tip: "Keep routine minimal. Fragrance-free products and barrier support only.",
    },
  ];

  const selected = options.find(o => o.id === type);

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        <h2 className="text-4xl font-display text-center mb-4">
          Skin Quiz
        </h2>

        <p className="text-center text-neutral-600 mb-12">
          Select your skin type to personalize your routine
        </p>

        {/* progress */}
        <div className="w-full h-2 bg-neutral-200 rounded-full mb-12 overflow-hidden">
          <div
            className={`h-full bg-neutral-800 transition-all duration-500 ${
              type ? "w-full" : "w-1/4"
            }`}
          />
        </div>

        {/* options */}
        <div className="grid md:grid-cols-4 gap-6">
          {options.map((o) => {
            const active = type === o.id;

            return (
              <button
                key={o.id}
                onClick={() => setType(o.id)}
                className={`
                  p-6 rounded-2xl transition-all duration-300
                  border text-sm font-medium
                  hover:scale-105 hover:shadow-md
                  ${active
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-neutral-50 border-neutral-200 hover:border-neutral-400"}
                `}
              >
                {o.label}
              </button>
            );
          })}
        </div>

        {/* result */}
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-14 text-center"
          >
            <div className="inline-block bg-neutral-100 px-8 py-6 rounded-2xl max-w-xl shadow-sm">
              <div className="font-medium mb-2">
                Recommended profile: {selected.label}
              </div>
              <div className="text-neutral-600 text-sm">
                {selected.tip}
              </div>
            </div>
          </motion.div>
        )}

      </motion.div>
    </section>
  );
}
