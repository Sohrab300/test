import Image from "next/image";
import React, { useState } from "react";

const VenuePartner = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const purpleGradient =
    "bg-[linear-gradient(135deg,_#6810B8_0%,_#CF99FF_100%)]";
  const orangeGradient =
    "bg-[linear-gradient(135deg,_#FF7858_0%,_#FFB8B8_100%)]";

  const cards = [
    {
      id: 1,
      title: "Attract More Visitors",
      desc: "Get discovered by communities actively looking for venues to host meetups, workshops, and social gatherings. Bring more people to your space through engaging community-driven events.",
      img: "/venue-partner/vps3-1.png",
      imageWidth: 588,
      imageHeight: 372,
      gradient: purpleGradient,
      defaultWide: false,
      row: 1,
      // Adjusted sizes to be more responsive
      size: "top-10 scale-[1.1] md:scale-[1.2] right-4 md:right-10",
    },
    {
      id: 2,
      title: "Reach the Right Audience",
      desc: "Connect with people who share hobbies, interests, and activities happening around your venue. Engage with a highly relevant audience that values experiences and social interactions.",
      img: "/venue-partner/vps3-2.png",
      imageWidth: 553,
      imageHeight: 359,
      gradient: orangeGradient,
      defaultWide: true,
      row: 1,
      size: "right-2 md:right-3 scale-[1.1] md:scale-[1.2]",
    },
    {
      id: 3,
      title: "Showcase Your Venue",
      desc: "Feature your space inside the Minglewise app where club hosts and community members explore event locations. Highlight your venue's ambience, facilities, and unique experiences to potential visitors.",
      img: "/venue-partner/vps3-3.png",
      imageWidth: 432,
      imageHeight: 418,
      gradient: orangeGradient,
      defaultWide: true,
      row: 2,
      size: "bottom-0 right-0 scale-[1] md:scale-[1.1]",
    },
    {
      id: 4,
      title: "Grow Through Community Events",
      desc: "Collaborate with club hosts to organize recurring events and turn your venue into a popular community hub. Build long-term relationships with communities that bring regular engagement to your venue.",
      img: "/venue-partner/vps3-4.png",
      imageWidth: 411,
      imageHeight: 354,
      gradient: purpleGradient,
      defaultWide: false,
      row: 2,
      size: "top-3 right-0 scale-[1] md:scale-[1.08]",
    },
  ];

  // Helper to determine if a specific card should be wide (only relevant for md and up)
  const isWide = (card) => {
    const rowHovered = cards.find(
      (c) => c.row === card.row && c.id === hoveredId,
    );
    if (rowHovered) {
      return hoveredId === card.id;
    }
    return card.defaultWide;
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto font-sans overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#4A4A4A] mb-4">
          What’s in it for our venue partners?
        </h2>
        <p className="text-base md:text-lg text-[#4A4A4A] max-w-4xl mx-auto leading-relaxed">
          What adds a pop of personality to Minglewise meet-ups is the venue
          where they are hosted! Whether you own a cafe, studio, turf or a
          ground, the benefits are manifold.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[400px]">
          <ExpandableCard
            data={cards[0]}
            active={isWide(cards[0])}
            onHover={setHoveredId}
          />
          <ExpandableCard
            data={cards[1]}
            active={isWide(cards[1])}
            onHover={setHoveredId}
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[400px]">
          <ExpandableCard
            data={cards[2]}
            active={isWide(cards[2])}
            onHover={setHoveredId}
          />
          <ExpandableCard
            data={cards[3]}
            active={isWide(cards[3])}
            onHover={setHoveredId}
          />
        </div>
      </div>
    </section>
  );
};

const ExpandableCard = ({ data, active, onHover }) => {
  return (
    <div
      onMouseEnter={() => onHover(data.id)}
      onMouseLeave={() => onHover(null)}
      className={`relative flex flex-col md:flex-row overflow-hidden rounded-[30px] md:rounded-[40px] p-6 md:p-8 text-white transition-all duration-700 ease-in-out cursor-pointer min-h-[fit-content] md:min-h-0
        ${data.gradient}
        ${active ? "md:flex-[2.5]" : "md:flex-1"}
      `}
    >
      <div className="flex flex-col z-10 w-full">
        <h3 className="max-md:text-3xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-10 leading-tight">
          {data.title}
        </h3>
        <p
          className={`text-sm lg:text-base opacity-90 leading-snug transition-all duration-700 
          w-full ${active ? "md:w-[45%]" : "md:w-full"}`}
        >
          {data.desc}
        </p>
      </div>

      {/* Image Container */}
      <div
        className={`
        md:absolute ${data.size} flex items-center justify-center transition-all duration-700 px-4 md:px-6
        ${active ? "opacity-100 translate-x-0" : "opacity-100 md:opacity-0 md:translate-x-10 pointer-events-none md:pointer-events-auto"}
        w-full md:w-[55%] h-full
      `}
      >
        <Image
          src={data.img}
          alt={data.title}
          width={data.imageWidth}
          height={data.imageHeight}
          sizes="(min-width: 768px) 55vw, 100vw"
          unoptimized
          className="max-w-full max-h-[100%] object-contain"
        />
      </div>
    </div>
  );
};

export default VenuePartner;
