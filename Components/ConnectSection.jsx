import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  ShieldCheck,
  Image,
  Shield,
  Search,
} from "lucide-react";

const features = [
  {
    title: "Discover Clubs",
    src: "/assets/connect-svg/Vector-1.svg",
    description:
      "Wide range of hobby-based clubs and communities that match your interests. From sports and music to games, fitness, and creative activities, there's always a club waiting for you.",
    icon: <Users size={32} />,
  },
  {
    title: "Join Exciting Events",
    src: "/assets/connect-svg/Vector-2.svg",
    description:
      "Participate in events hosted by clubs and community leaders. Discover activities happening around you and join activities you enjoy.",
    icon: <Calendar size={32} />,
  },
  {
    title: "Host Your Own Club",
    src: "/assets/connect-svg/Vector-3.svg",
    description:
      "Create your own club, host events, and build a community around your passion. Create clubs, organize events, and bring people together.",
    icon: <ShieldCheck size={32} />,
  },
  {
    title: "Share Moments",
    src: "/assets/connect-svg/Vector-4.svg",
    description:
      "Capture and share memories from your events with the community. Post photos and highlights so others can see the fun across different clubs.",
    icon: <Image size={32} />,
  },
  {
    title: "Safe and Supportive Community",
    src: "/assets/connect-svg/Vector-5.svg",
    description:
      "Connect directly with club hosts and members through chats. Stay updated about upcoming events & discussion.",
    icon: <Shield size={32} />,
  },
  {
    title: "Explore Communities",
    src: "/assets/connect-svg/Vector-6.svg",
    description:
      "Connect directly with club hosts and members through chats. Stay updated about upcoming events & discussion.",
    icon: <Search size={32} />,
  },
];

const ConnectSection = () => {
  // Gradient from your image at 8:14 PM: 0% #CC71FF to 100% #FB8568
  const hoverGradient = "linear-gradient(135deg, #CC71FF 0%, #FB8568 100%)";

  return (
    <section className="bg-[#FDF5FF] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-[900] text-center text-[#4B4B4B] mb-16 tracking-tight">
          Everything You Need to Connect
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              initial="initial"
              className="relative cursor-pointer group rounded-[2.5rem] overflow-hidden"
            >
              {/* Default State Background & Border */}
              <div className="absolute inset-0 bg-white border-2 border-[#EBE9FE] transition-opacity duration-300 group-hover:opacity-0 rounded-[2.5rem]" />

              {/* Hover State Background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[2.5rem]"
                style={{ background: hoverGradient }}
              />

              {/* Card Content */}
              <div className="relative z-10 p-10 h-[320px] flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:justify-start group-hover:items-start group-hover:text-left">
                {/* Icon Box */}
                {/* ICON BOX - MODIFIED FOR EXTERNAL SVGs */}
                <div className="mb-6 w-20 h-20 flex items-center justify-center rounded-2xl transition-all duration-300 bg-[#F3EAFF] group-hover:bg-white/20">
                  <img
                    src={feature.src}
                    alt={feature.title}
                    className="w-10 h-10 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-[#111] transition-colors duration-300 group-hover:text-white mb-4">
                  {feature.title}
                </h3>

                {/* Description (Visible only on hover) */}
                <motion.p
                  variants={{
                    initial: { opacity: 0, y: 10, height: 0 },
                    hover: { opacity: 1, y: 0, height: "auto" },
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-white text-[15px] leading-relaxed font-medium"
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
