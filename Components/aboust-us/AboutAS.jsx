import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react"; // If you don't have lucide-react, you can use standard SVG

export default function AboutAS() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 font-sans">
      <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center">
        {/* LEFT CARD: LOGO & TITLE */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            scale: { type: "tween", damping: 50, stiffness: 200 },
          }}
          className="flex flex-col gap-10 items-center justify-center p-12 flex-1 md:max-w-[380px]"
          style={{
            backgroundColor: "#FFF9F2",
            borderColor: "#6D3F04",
            borderWidth: "2px",
            borderRadius: "32px",
          }}
        >
          <div className="w-48 h-48 relative flex items-center justify-center">
            <Image
              width={192}
              height={189}
              src="/assets/logo/appsynergies.svg"
              alt="AppSynergies Logo"
              className="object-contain"
            />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-black text-center">
            APPSYNERGIES
          </h3>
        </motion.div>

        {/* RIGHT CARD: DESCRIPTION & BUTTON */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            scale: { type: "tween", damping: 50, stiffness: 200 },
          }}
          className="flex flex-col justify-between p-10 flex-1 relative"
          style={{
            backgroundColor: "#FFF9F2",
            borderColor: "#6D3F04",
            borderWidth: "2px",
            borderRadius: "32px",
          }}
        >
          <p className="text-[#4A4A4A] text-xl leading-relaxed font-normal poppins-text">
            A fast-growing SaaS-based start-up with a very talented and rapidly
            expanding team. We develop cutting-edge AI driven Apps. We put value
            at the heart of our process & focus on what&apos;s important to our
            users. This way, we can prove the value of our app idea before we
            begin development. We then build on this mobile strategy throughout
            discovery, design, development and optimization.
          </p>

          {/* VIEW WEBSITE BUTTON AT BOTTOM RIGHT */}
          <div className="flex justify-end mt-8">
            <a
              href="https://appsynergies.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-white text-[#E01B84] font-semibold border border-purple-400 hover:border-[#E01B84]
                  transition-all duration-200 px-6 py-2.5 rounded-full flex items-center gap-1.5 
                  shadow-sm hover:shadow active:scale-95"
              >
                View Website
                <img
                  src="/about-us/resize.svg"
                  className="pl-2 w-7 h-7"
                  alt=""
                />
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
