import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Start by creating your profile and adding your hobbies, interests, and preferences. This helps MingleWise recommend clubs and events that match your vibe.",
  },
  {
    number: "02",
    title: "Discover Clubs",
    description:
      "Browse through a variety of clubs based on different hobbies such as sports, outdoor activities, arts, games, music, dance, and more. Find communities that match your interests.",
  },
  {
    number: "03",
    title: "Join a Community",
    description:
      "Become a member of clubs you like and start connecting with people who share the same passions as you.",
  },
  {
    number: "04",
    title: "Explore Events",
    description:
      "Check out upcoming events and meetups organized by different clubs. From hobby sessions to fun group activities, there's always something happening.",
  },
  {
    number: "05",
    title: "Attend and Connect",
    description:
      "Join events, participate in activities, and meet new people. Build friendships and enjoy experiences together with your community.",
  },
  {
    number: "06",
    title: "Become a Host",
    description:
      "Want to build your own community? Create your own club or host events around the hobbies you love and bring people together.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#FBF5FF] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#333] mb-6"
          >
            How MingleWise Works ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto text-gray-700 text-lg font-medium leading-relaxed"
          >
            MingleWise makes it easy to connect with people who share your
            interests. In just a few simple steps, you can discover communities,
            join clubs, attend events, and build meaningful connections.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border-2 border-[#EBE9FE] rounded-[2.5rem] p-10 h-full overflow-hidden flex flex-col justify-start transition-all hover:shadow-xl hover:border-[#D602AF]/30"
            >
              {/* Card Title */}
              <h3 className="text-2xl font-bold text-[#D602AF] mb-6 relative z-10">
                {step.title}
              </h3>

              {/* Card Description */}
              <p className="text-gray-600 text-[15px] leading-relaxed relative z-10 mb-8">
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

export default HowItWorks;
