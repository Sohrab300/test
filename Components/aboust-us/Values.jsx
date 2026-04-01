import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Kindness",
    description:
      "Treating each other with compassion and respect. Honouring each person's dignity and boundaries.",
  },
  {
    number: "02",
    title: "Welcoming",
    description:
      "Ensuring everyone feels welcome regardless of background, gender or identity.",
  },
  {
    number: "03",
    title: "Gratitude",
    description:
      "Promoting appreciation for contributions and acts of kindness",
  },
  {
    number: "04",
    title: "Authenticity",
    description: "Encouraging genuine interactions and self-expression.",
  },
];

const Values = () => {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#333] mb-6"
          >
            What We Stand For
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border-2 border-[#B3B3B3] rounded-[13px] p-4 min-h-[294px] h-full overflow-hidden flex flex-col justify-start transition-all hover:shadow-xl hover:border-[#D602AF]/30"
            >
              {/* Card Title */}
              <h3 className="text-4xl font-bold text-[#D602AF] mb-6 relative z-10">
                {step.title}
              </h3>

              {/* Card Description */}
              <p className="text-gray-600 text-[18px] leading-relaxed relative z-10 mb-12">
                {step.description}
              </p>

              {/* Large Background Number */}
              <span className="absolute -bottom-6 -right-2 text-[150px] font-bold text-[#EFECFF] leading-none select-none pointer-events-none transition-transform group-hover:scale-110 duration-500">
                {step.number}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
