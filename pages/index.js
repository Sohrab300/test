import Head from "next/head";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Header from "../Components/Home/Header";
import FolksLovesUs from "@/Components/Home/FolksLovesUs";
import DownloadApp from "@/Components/Home/DownloadApp";
import axios from "axios";
import HowItWorks from "@/Components/HowItWorks";
import HobbiesGrid from "@/Components/HobbiesGrid";
import ConnectSection from "@/Components/ConnectSection";
import USP from "@/Components/USP";
import Newsletter from "@/Components/Newsletter";

export default function Home() {
  const observer = useRef(null);

  // url update according to section
  useEffect(() => {
    const sectionIds = [
      "home-carousel",
      "why-create-profile",
      "dating-profile-feature",
      "professional-networking-features",
      "what-makes-us-loved",
      "in-app-features",
      "reviews",
      "download-the-app",
      "footer",
    ];

    const options = {
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.3,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.history.replaceState(null, null, `#${entry.target.id}`);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const domElem = document.querySelector(`#${id}`);

      if (domElem) {
        observer.current.observe(domElem);
      }
    });

    return () => observer.current.disconnect();
  }, []);

  const debounce = (func, delay) => {
    let inDebounce;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const [lastTrackedSection, setLastTrackedSection] = useState("");

  useEffect(() => {
    const sections = [
      "home-carousel",
      "why-create-profile",
      "dating-profile-feature",
      "professional-networking-features",
      "what-makes-us-loved",
      "in-app-features",
      "reviews",
      "download-the-app",
      "footer",
    ];

    const formatEventName = (str) => {
      const splitStr = str.toLowerCase().split("-");
      for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      return splitStr.join("-") + "-Page";
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    };

    let timeout;
    const handleScroll = debounce(() => {
      sections.forEach((section) => {
        const sectionEl = document.getElementById(section);
        if (sectionEl && isInViewport(sectionEl)) {
          if (window.fbq && section !== lastTrackedSection) {
            setLastTrackedSection(section);
            const eventName = formatEventName(section);
            window.fbq("track", eventName, {
              content_name: `https://minglewise.com/#${section}`,
              content_category: "URL",
            });
          }
        }
      });
    }, 300); // Debounce time

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // onclick button url event
  useEffect(() => {
    const trackUrl = () => {
      const urls = [
        "#download-app",
        "#instagram",
        "#facebook",
        "#linkedin",
        "#twitter",
        "#contact-call",
        "#contact-whatsapp",
        "#contact-mail",
        "#whatsapp",
      ];

      const formatEventName = (str) => {
        const splitStr = str.toLowerCase().split("-");
        for (let i = 0; i < splitStr.length; i++) {
          splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join("-") + "-Button-Click";
      };

      urls.forEach((url) => {
        if (window.location.href.includes(url)) {
          if (window.fbq) {
            const eventName = formatEventName(url.slice(1));
            window.fbq("track", eventName, {
              content_name: `https://minglewise.com/${url}`,
              content_category: "URL",
            });
          }
        }
      });
    };

    trackUrl();

    window.onhashchange = trackUrl;

    return () => {
      window.onhashchange = null;
    };
  }, []);

  // scroll depth

  const [scrollDepthsReached, setScrollDepthsReached] = useState({
    25: false,
    50: false,
    75: false,
    100: false,
  });
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const docHeight = document.body.offsetHeight;

    const scrolled = window.scrollY + windowHeight;
    const scrollPercent = Math.floor((scrolled / docHeight) * 100);

    if (window.fbq) {
      if (scrollPercent >= 25 && !scrollDepthsReached["25"]) {
        window.fbq("trackCustom", "ScrollDepth25", {
          scroll_percent: 25,
        });
        setScrollDepthsReached((prevState) => ({
          ...prevState,
          25: true,
        }));
      } else if (scrollPercent >= 50 && !scrollDepthsReached["50"]) {
        window.fbq("trackCustom", "ScrollDepth50", {
          scroll_percent: 50,
        });
        setScrollDepthsReached((prevState) => ({
          ...prevState,
          50: true,
        }));
      } else if (scrollPercent >= 75 && !scrollDepthsReached["75"]) {
        window.fbq("trackCustom", "ScrollDepth75", {
          scroll_percent: 75,
        });
        setScrollDepthsReached((prevState) => ({
          ...prevState,
          75: true,
        }));
      } else if (scrollPercent === 100 && !scrollDepthsReached["100"]) {
        window.fbq("trackCustom", "ScrollDepth100", {
          scroll_percent: 100,
        });
        setScrollDepthsReached((prevState) => ({
          ...prevState,
          100: true,
        }));
        window.removeEventListener("scroll", handleScroll);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDepthsReached]);

  const fetchBlogCategories = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-minglewise2019.cloudfunctions.net/getBlogCategories",
      );
      // console.log("Blog Categories:", response.data);
      return response.data;
    } catch (error) {
      // console.error("Error fetching blog categories:", error);
    }
  };

  const fetchUserBlogs = async () => {
    const requestBody = {
      categories: "",
      sortName: "All",
    };

    try {
      const response = await axios.post(
        "https://us-central1-minglewise2019.cloudfunctions.net/blogsApis/get-user-blogs",
        requestBody,
      );
      // console.log("User Blogs:", response.data);
      return response.data;
    } catch (error) {
      // console.error("Error fetching user blogs:", error);
    }
  };

  fetchUserBlogs();

  fetchBlogCategories();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <main>
        <>
          <div id="home-carousel">
            <Header />
          </div>
          <div id="how-it-works">
            <HowItWorks />
          </div>
          <div id="hobbies-grid">
            <HobbiesGrid />
          </div>
          <div id="connect">
            <ConnectSection />
          </div>
          <div id="usp">
            <USP />
          </div>
          {/* <div id="why-create-profile">
            <WhyMingleWise />{" "}
          </div>
          <div id="dating-profile-feature">
            {" "}
            <DatingProfile />
          </div>
          <div id="professional-networking-features">
            {" "}
            <ProfessionalNetworking />
          </div>
          <div id="what-makes-us-loved">
            <WhatMakesUsLove />
          </div>
          <div id="in-app-features">
            <InAppFeatures />
          </div> */}
          <div id="reviews">
            <FolksLovesUs />
          </div>
          <div id="download-the-app">
            {" "}
            <DownloadApp />
          </div>
          <div id="newsletter-signup">
            <Newsletter />
          </div>
          <div id="footer"></div>
        </>
      </main>
    </>
  );
}
