import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

export default function MinglewiseHelpCarousel() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const textGradient =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#F0015F] via-[#ED006A] via-[#D602AF] to-[#C301EA]";

  const slides = [
    {
      title: "Build Real Connections",
      description:
        "Minglewise helps turn shared interests into real connections. Members can interact, participate in activities together, and create meaningful friendships through engaging club events and shared experiences.",
      image: "/club-host/chs3-1.png",
    },
    {
      title: "Grow Your Community",
      description:
        "Expand your club by reaching new members who share your interests. As more people discover your events and activities, Minglewise provides the platform where your community continues to grow stronger.",
      image: "/club-host/chs3-2.png",
    },
    {
      title: "Host & Manage Events Easily",
      description:
        "Plan, organize, and manage events seamlessly. From scheduling events to tracking attendees, Minglewise provides simple tools to help hosts run successful meetups.",
      image: "/club-host/chs3-3.png",
    },
    {
      title: "Spread the Word",
      description:
        "Minglewise helps promote your club and events to the right audience. Through the platform, your events can reach people who are actively looking for activities and communities to join.",
      image: "/club-host/chs3-4.png",
    },
    {
      title: "Club's Online Home",
      description:
        "Create a dedicated space for your club where members can stay updated, communicate, and discover upcoming events. It becomes the central hub for everything related to your community.",
      image: "/club-host/chs3-5.png",
    },
    {
      title: "The Art of Community",
      description:
        "Minglewise brings people together through shared interests. With different clubs and hobby groups, you can easily connect with individuals who share the same passions and build meaningful communities.",
      image: "/club-host/chs3-6.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true, // Helps with varying content heights
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <section className="py-20 px-6 bg-[#FDF9FF]">
      <div className="max-w-7xl mx-auto">
        {/* Header Text */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-[800] text-[#3D3D3D] leading-tight mb-6">
            Lets talk about how <br /> Minglewise can help you
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            As a Minglewise Club Leader, your passion is our priority. We handle
            the behind-the-scenes work, so you can focus on building your club.
          </p>
        </div>

        {/* 
            CRITICAL FIX: 
            The div below MUST be 'block' and 'w-full'. 
            Slider should not be a direct child of a Flex container. 
        */}
        <div className="block w-full relative">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="outline-none !flex flex-col md:!flex-row items-center gap-10 md:gap-20"
              >
                {/* Text Content */}
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <h3
                    className={`text-4xl md:text-5xl font-[900] mb-8 ${textGradient}`}
                  >
                    {slide.title}
                  </h3>
                  <p className="text-[#3D3D3D] text-xl md:text-2xl font-medium leading-[1.6] mb-12">
                    {slide.description}
                  </p>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                  <div className="relative w-full aspect-[4/3] max-w-xl">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Controls */}
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 mt-12">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    currentSlide === i
                      ? "w-10 bg-[#3D3D3D]"
                      : "w-10 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-4 ml-0 md:ml-10">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors bg-white text-gray-400 hover:text-black shadow-sm"
              >
                <HiArrowLeft size={24} />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors bg-white text-gray-400 hover:text-black shadow-sm"
              >
                <HiArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
