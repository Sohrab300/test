import Image from "next/image";
import React from "react";

const impactCards = [
  { id: 1, src: "/venue-partner/Card 1.png", alt: "IFC Social Impact" },
  { id: 2, src: "/venue-partner/Card 2.png", alt: "Corp Turfs Impact" },
  { id: 3, src: "/venue-partner/Card 3.png", alt: "Sparsa Cafe Impact" },
];

export default function VenueImpact() {
  return (
    <section className="py-20 px-6 bg-[#FDF9FF]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[800] text-[#3D3D3D] text-center mb-16 leading-tight">
          How we&apos;ve impacted our <br className="hidden md:block" /> venue
          partners!
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactCards.map((card) => (
            <div
              key={card.id}
              className="relative w-full transition-transform duration-300 hover:scale-[1.03]"
            >
              {/* 
                  Since the text is inside the image, we use w-full h-auto. 
                  Rounded corners are likely in your PNG, but we add overflow-hidden 
                  and rounded-3xl just to ensure a crisp look.
              */}
              <Image
                src={card.src}
                alt={card.alt}
                width={600}
                height={600}
                className="w-full h-auto rounded-[32px] shadow-md border-[2px] border-[#22262B]"
                priority={card.id === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
