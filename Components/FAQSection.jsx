import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("MINGLEWISE");
  const [openIndex, setOpenIndex] = useState(0); // Set first item open by default

  const tabs = ["MINGLEWISE", "CLUBS", "CLUB HOST", "VENUE PARTNERS"];

  const faqData = {
    MINGLEWISE: [
      {
        question: "What is Minglewise and how does it work?",
        answer:
          "Minglewise is a community platform that helps people connect through shared hobbies, interests, and local events. Users can discover clubs, join communities, attend events, and meet like-minded individuals who share similar passions.",
      },
      {
        question: "How can I find hobby groups or clubs near me?",
        answer:
          "With Minglewise, you can explore a variety of clubs and hobby groups based on your interests. The platform helps you discover communities and events where you can connect with people who enjoy the same activities.",
      },
      {
        question: "How do I join events on Minglewise?",
        answer:
          "After creating your account, you can browse upcoming events hosted by clubs and communities. Simply select an event you like and join directly through the platform.",
      },
      {
        question: "Can I create my own club on Minglewise?",
        answer:
          "Yes, Minglewise allows users to create and manage their own clubs. As a host, you can invite members, organize events, and grow a community around your shared interests.",
      },
      {
        question: "Is Minglewise only for social events?",
        answer:
          "No, Minglewise supports many types of communities including hobbies, networking groups, learning clubs, fitness groups, creative communities, and more.",
      },
      {
        question: "How does Minglewise help communities grow?",
        answer:
          "Minglewise provides tools for hosts to promote their clubs, organize events, and attract members who share similar passions. This makes it easier to build and grow active communities.",
      },
      {
        question: "Is Minglewise available as a mobile app?",
        answer:
          "Yes, Minglewise is designed to be accessible on mobile devices, allowing users to discover clubs, connect with communities, and manage events anytime, anywhere.",
      },
      {
        question: "Why should I use Minglewise to meet new people?",
        answer:
          "Minglewise focuses on meaningful connections through shared interests. Instead of random networking, it helps people build genuine relationships through hobbies, communities, and real-world activities.",
      },
    ],
    CLUBS: [
      {
        question: "What are clubs on Minglewise?",
        answer:
          "Clubs on Minglewise are communities built around shared interests such as fitness, travel, music, books, networking, and more. They bring people together to connect, learn, and participate in activities.",
      },
      {
        question: "How can I find clubs that match my interests?",
        answer:
          "You can explore different clubs on Minglewise based on hobbies, passions, or activities you enjoy. The platform helps you discover communities where you can meet like-minded people.",
      },
      {
        question: "Are Minglewise clubs free to join?",
        answer:
          "Most clubs on Minglewise are free to join. However, some events may have participation fees depending on the activity organized by the host.",
      },
      {
        question: "Can I join multiple clubs at the same time?",
        answer:
          "Yes, you can join multiple clubs on Minglewise and explore different interests, hobbies, or communities simultaneously.",
      },
      {
        question: "What type of activities do clubs organize?",
        answer:
          "Clubs may organize meetups, workshops, discussions, hobby sessions, networking events, outdoor activities, and social gatherings.",
      },
      {
        question: "Can clubs host both online and offline events?",
        answer:
          "No, clubs can organize in-person events depending on the activity and the preferences of the host.",
      },
      {
        question: "How do I stay updated about club events?",
        answer:
          "Once you join a club on Minglewise, you will receive updates about upcoming events, announcements, and community activities.",
      },
      {
        question: "Can I leave a club if it’s not the right fit?",
        answer:
          "Yes, you can leave any club at any time if it no longer matches your interests.",
      },
    ],
    "CLUB HOST": [
      {
        question: "How can I become a club host on Minglewise?",
        answer:
          "You can become a club host by creating your own club on Minglewise and inviting people who share similar interests to join your community.",
      },
      {
        question: "What are the benefits of hosting a club on Minglewise?",
        answer:
          "Club hosts can build communities, organize events, connect with like-minded people, and grow their audience around shared passions.",
      },
      {
        question: "Can club hosts organize events on Minglewise?",
        answer:
          "Yes, hosts can easily create and manage events, invite members, track attendees, and communicate with participants through the platform.",
      },
      {
        question: "How does Minglewise help promote my club?",
        answer:
          "Minglewise helps showcase your club and events to users who share similar interests, making it easier to reach new members and grow your community.",
      },
      {
        question: "Can club hosts charge for events?",
        answer:
          "Yes, hosts can set participation fees for certain events depending on the type of activity or experience being offered.",
      },
      {
        question: "Can I manage members in my club?",
        answer:
          "Yes, club hosts can manage members, approve join requests, and maintain a positive and engaging community environment.",
      },
      {
        question: "Can I host multiple clubs on Minglewise?",
        answer:
          "Yes, if you manage different interests or communities, you can create and manage multiple clubs on the platform.",
      },
      {
        question: "What responsibilities do club hosts have?",
        answer:
          "Club hosts are responsible for organizing events, managing their community, ensuring respectful interactions, and following Minglewise community guidelines.",
      },
    ],
    "VENUE PARTNERS": [
      {
        question: "What is a Venue Partner on Minglewise?",
        answer:
          "A Venue Partner is a restaurant, café, activity space, or venue that allows clubs and communities on Minglewise to host events and gatherings at their location.",
      },
      {
        question: "What type of venues can partner with Minglewise?",
        answer:
          "Venues such as cafés, restaurants, coworking spaces, studios, play areas, lounges, and activity centers can partner with Minglewise.",
      },
      {
        question: "How do I become a Venue Partner?",
        answer:
          "You can become a Venue Partner by filling out the partnership form on the website. Our team will review your details and connect with you to complete the onboarding process.",
      },
      {
        question: "Is there a cost to list my venue on Minglewise?",
        answer:
          "Listing details may vary depending on the partnership model. Our team will share the available options once your venue details are submitted.",
      },
      {
        question: "How will my venue get event bookings?",
        answer:
          "Club hosts and event organizers using Minglewise can discover your venue and contact you to host their community events.",
      },
      {
        question: "Can I choose which events to host?",
        answer:
          "Yes. Venue partners have full control over which events they want to host and can coordinate directly with event organizers.",
      },
      {
        question: "What kind of events can take place at my venue?",
        answer:
          "Events may include hobby meetups, workshops, networking sessions, community gatherings, and other social activities organized by clubs.",
      },
      {
        question: "How does partnering with Minglewise help my business?",
        answer:
          "Partnering with Minglewise helps increase venue visibility, attract new customers, and bring recurring community events to your space.",
      },
    ],
  };

  const activeFaqs = faqData[activeTab] || [];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Tabs Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null); // Close accordions when switching tabs
              }}
              className={`py-4 px-2 rounded-xl font-bold text-sm transition-all duration-300 border-2 ${
                isActive
                  ? "bg-gradient-to-r from-[#F0015F] via-[#ED006A] to-[#C301EA] text-white border-transparent shadow-lg"
                  : "bg-white text-[#8B5CF6] border-[#8B5CF6] hover:bg-purple-50"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Accordion Section */}
      <div className="space-y-4">
        {activeFaqs.map((faq, index) => {
          const isOpen = openIndex === index;

          // Determine colors based on even/odd index to match image
          const isEven = index % 2 === 0;
          const bgColor = isEven ? "bg-[#F9D7FF]" : "bg-[#FFD1E5]";
          const iconBg = isEven
            ? "bg-[linear-gradient(90deg,_#8800E1_0%,_#4A00E0_100%)]"
            : "bg-[linear-gradient(90deg,_#FA7558_5%,_#F95A63_100%)]";

          return (
            <div
              key={index}
              className={`${bgColor} rounded-2xl overflow-hidden transition-all duration-300 p-5 md:p-6`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-gray-800 font-semibold text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <div
                  className={`${iconBg} p-1.5 rounded-full text-white flex-shrink-0`}
                >
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="text-gray-600 text-left text-sm md:text-[15px] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
