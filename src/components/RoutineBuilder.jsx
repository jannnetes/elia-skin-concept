import { motion } from "framer-motion";

const steps = [
  { name: "Cleanser", icon: "🧼" },
  { name: "Serum", icon: "💧" },
  { name: "Moisturizer", icon: "🧴" },
  { name: "SPF", icon: "☀️" },
];

export default function RoutineBuilder() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-display text-center mb-4"
        >
          Routine Builder
        </motion.h2>

        <p className="text-center text-neutral-600 mb-16">
          Your ideal daily skincare flow
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className="text-lg font-medium">{step.name}</div>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* flow line<div className="mt-14 text-center text-neutral-500 text-lg">
          Cleanser → Serum → Moisturizer → SPF
        </div>
 */}
        
      </div>
    </section>
  );
}
