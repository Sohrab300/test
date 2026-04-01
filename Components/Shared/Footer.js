import Image from "next/image";
import React from "react";
import { useRouter } from "next/router"; // 1. Import useRouter
import { MdEmail, MdLocationPin } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const router = useRouter(); // 2. Initialize router

  // Helper function to check if link is active
  const isActive = (path) => router.pathname === path;

  // Link styling logic
  const linkClasses = (path) =>
    `${isActive(path) ? "text-white font-extrabold text-lg" : "text-gray-300"} hover:text-white transition-colors`;

  const companyLinks = [
    { name: "Venue Partner", href: "/venue-partner" },
    { name: "Club Host", href: "/club-host" },
    { name: "Features", href: "/features/profile" },
    { name: "About", href: "/about-us" },
    { name: "FAQs", href: "/support" },
    { name: "Contact us", href: "/contact-us" },
  ];

  const legalLinks = [
    { name: "Terms of Use", href: "/terms-of-use" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Community Rules", href: "/community-rules" },
    { name: "Intellectual Property", href: "/intellectual-property" },
  ];

  return (
    <footer className="relative w-full text-white overflow-hidden bg-gradient-to-r from-[#333333] to-[#1E2124] pt-12 px-6 pb-3">
      {/* Centered Background Image Logo */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <img
          src="/footer-bg.png"
          alt="background logo"
          className="w-auto h-[100%] object-contain opacity-50"
        />
      </div>

      <div className="w-full relative z-10">
        <div className="flex flex-col sm:flex-row justify-between w-full">
          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col md:items-center gap-6 w-full md:w-[30%]">
            <Link href="/">
              <Image
                src="/Logo-MW.png"
                alt="MingleWise Logo"
                width={170}
                height={165}
              />
            </Link>

            <div className="flex gap-3">
              {[
                {
                  icon: <FaFacebookF />,
                  href: "https://facebook.com/minglewise",
                },
                { icon: <FaTwitter />, href: "https://twitter.com/minglewise" },
                {
                  icon: <FaInstagram />,
                  href: "https://instagram.com/mingle.wise",
                },
                {
                  icon: <FaLinkedinIn />,
                  href: "https://linkedin.com/company/minglewise",
                },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors border border-white/5"
                >
                  <span className="text-gray-300">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full md:w-[60%] gap-12 grid grid-cols-2 md:flex md:justify-end max-md:mt-8">
            {/* Column 2: Company */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="flex flex-col gap-2">
                {companyLinks.map((link) => (
                  <li key={link.href} className="whitespace-nowrap">
                    <Link href={link.href} className={linkClasses(link.href)}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <ul className="flex flex-col gap-2">
                {legalLinks.map((link) => (
                  <li key={link.href} className="whitespace-nowrap">
                    <Link href={link.href} className={linkClasses(link.href)}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="min-w-[200px]">
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="flex flex-col gap-3 text-gray-300">
                <li
                  className={`flex items-center gap-4 ${isActive("/tel") ? "text-white font-bold" : ""}`}
                >
                  <FaPhoneAlt className="text-sm" />
                  <a
                    href="tel:+447544802677"
                    className="hover:text-white text-sm"
                  >
                    +44 7544802677
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <MdEmail className="text-lg" />
                  <a
                    href="mailto:info@minglewise.com"
                    className="hover:text-white text-sm"
                  >
                    info@minglewise.com
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <MdLocationPin className="text-lg" />
                  <span className="text-sm">London, UK</span>
                </li>
                <li className="flex items-center gap-4">
                  <IoLogoWhatsapp className="text-lg" />
                  <a
                    href="https://wa.me/919967067419"
                    target="_blank"
                    className="hover:text-white text-sm"
                  >
                    +91 9967067419
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-gray-500">
            © Copyright {new Date().getFullYear()} MingleWise | All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
