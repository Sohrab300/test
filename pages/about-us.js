import React, { useContext } from "react";
import { StateContext } from "./_app";
import Head from "@/Head";
import Header from "@/Components/aboust-us/Header";
import AboutAS from "@/Components/aboust-us/AboutAS";
import Values from "@/Components/aboust-us/Values";
import Location from "@/Components/aboust-us/Location";
import DownloadApp from "@/Components/Home/DownloadApp";

const AboutUs = () => {
  const { setPageName } = useContext(StateContext);
  setPageName("");
  setPageName("ABOUT US");

  return (
    <div className="bg-[#fbf5ff] pt-24 pb-16">
      <Head
        title={"About Us"}
        description={
          "For people who are looking to find meaningful social & professional connections, MingleWise provides a network that helps them to build healthy relationships."
        }
      />
      <Header />
      <AboutAS />
      <Values />
      <Location />
      <DownloadApp />
    </div>
  );
};

export default AboutUs;
