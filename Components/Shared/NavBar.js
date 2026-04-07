import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight, ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
    setMobileFeaturesOpen(false);
  }, [router.asPath]);

  // Check if the current path is exactly the form page
  const isLogoOnlyPage = router.asPath === "/venue-partner/form";

  const brandGradient =
    "from-[#F0015F] via-[#ED006A] via-[#D602AF] to-[#C301EA]";
  const textGradientClass = `text-transparent bg-clip-text bg-gradient-to-r ${brandGradient}`;
  const bgGradientClass = `bg-gradient-to-r ${brandGradient}`;

  const navLinks = [
    { name: "Club Host", href: "/club-host" },
    { name: "Venue Partner", href: "/venue-partner" },
    { name: "Features", href: "#", hasDropdown: true },
    { name: "About", href: "/about-us" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const featuresItems = [
    { name: "Profile & Personalization", href: "/features/profile" },
    { name: "Clubs & Communities", href: "/features/clubs" },
    { name: "Events & Meetups", href: "/features/events" },
    { name: "Social Experience & Safety", href: "/features/safety" },
  ];

  // Logic for Scroll or Redirect on Join Now
  const handleJoinClick = (e) => {
    e.preventDefault();
    if (router.pathname === "/") {
      const element = document.getElementById("download-the-app");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#download-the-app");
    }
    setSidebarOpen(false);
  };

  const checkActive = (link) => {
    if (link.name === "Features")
      return router.pathname.startsWith("/features");
    if (link.href === "/") return router.pathname === "/";
    if (link.href === "#") return false;
    return router.pathname.startsWith(link.href);
  };

  return (
    <>
      <nav
        className={`fixed top-6 ${isLogoOnlyPage ? "" : "left-0 right-0"} z-[100] px-4`}
      >
        <div
          className={`${
            isLogoOnlyPage ? "w-[fit-content]" : "max-w-7xl"
          } mx-auto bg-white rounded-full border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-6 py-3 flex items-center justify-between relative`}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-gray-100 shadow-sm overflow-hidden">
              <Image
                src="/assets/logo/mingle.webp"
                alt="MingleWise Logo"
                width={32}
                height={32}
                priority
                className="w-7 h-7 md:w-8 md:h-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1
                className={`text-xl md:text-2xl font-bold tracking-wider leading-none ${textGradientClass}`}
              >
                MingleWise
                <span className="text-[10px] align-top ml-0.5">®</span>
              </h1>
              <p className="text-[9px] md:text-[10px] text-[#C56183] font-medium tracking-tight mt-0.5">
                Find Your Tribe. Live Your Passion.
              </p>
            </div>
          </Link>

          {!isLogoOnlyPage && (
            <div className="flex items-center gap-4">
              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() =>
                      link.hasDropdown && setFeaturesOpen(true)
                    }
                    onMouseLeave={() =>
                      link.hasDropdown && setFeaturesOpen(false)
                    }
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 text-[15px] font-semibold transition-colors duration-200 ${
                        checkActive(link) || (link.hasDropdown && featuresOpen)
                          ? textGradientClass
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            featuresOpen
                              ? "rotate-180 text-[#D602AF]"
                              : "text-gray-400"
                          }`}
                        />
                      )}
                    </Link>

                    {link.hasDropdown && (
                      <AnimatePresence>
                        {featuresOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            className="absolute top-full -left-[100%] -translate-x-1/2 mt-4 pt-4 w-72"
                          >
                            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-[#D602AF] rotate-45 z-10" />
                            <div className="bg-white rounded-3xl p-5 shadow-2xl border-2 border-[#D602AF] relative overflow-hidden">
                              <ul className="space-y-4">
                                {featuresItems.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className="flex items-center justify-between group/item"
                                    >
                                      <span className="text-[15px] font-medium text-gray-700 group-hover/item:text-[#D602AF] transition-colors">
                                        {item.name}
                                      </span>
                                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover/item:text-[#D602AF] group-hover/item:translate-x-1 transition-all" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>

              {/* Tablet/Desktop Join Now Button */}
              <button
                onClick={handleJoinClick}
                className={`${bgGradientClass} p-[1px] rounded-full group transition-transform hover:scale-105 active:scale-95 hidden md:block lg:ml-4`}
              >
                <div className="bg-transparent px-5 py-1.5 rounded-full flex items-center gap-3">
                  <span className="text-white font-bold text-sm">Join Now</span>
                  <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center text-[#D602AF]">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Hamburger Menu */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full bg-white z-[120] shadow-2xl w-full md:w-[45%] flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-50">
                <span className={`text-xl font-bold ${textGradientClass}`}>
                  Menu
                </span>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li
                      key={link.name}
                      className="border-b border-gray-50 pb-4 last:border-0"
                    >
                      {link.hasDropdown ? (
                        <div>
                          <button
                            onClick={() =>
                              setMobileFeaturesOpen(!mobileFeaturesOpen)
                            }
                            className="flex items-center justify-between w-full text-lg font-bold text-gray-700"
                          >
                            <span
                              className={
                                router.pathname.startsWith("/features")
                                  ? textGradientClass
                                  : ""
                              }
                            >
                              {link.name}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${mobileFeaturesOpen ? "rotate-180" : ""}`}
                            />
                          </button>
                          <AnimatePresence>
                            {mobileFeaturesOpen && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="mt-4 ml-4 space-y-4 overflow-hidden"
                              >
                                {featuresItems.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className={`block text-base font-medium ${
                                        router.pathname === item.href
                                          ? textGradientClass
                                          : "text-gray-500"
                                      }`}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className={`block text-lg font-bold ${
                            checkActive(link)
                              ? textGradientClass
                              : "text-gray-700"
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Join Now Button */}
              <div className="p-6">
                <button
                  onClick={handleJoinClick}
                  className={`w-full ${bgGradientClass} p-[1px] rounded-2xl group transition-transform active:scale-95`}
                >
                  <div className="bg-transparent py-4 rounded-2xl flex items-center justify-center gap-4">
                    <span className="text-white font-bold text-lg">
                      Join Now
                    </span>
                    <ArrowUpRight className="text-white w-6 h-6" />
                  </div>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
