import React from "react";
import DownloadApp from "@/Components/Home/DownloadApp";
import Header from "@/Components/venue-partner/Header";
import VenueImpact from "@/Components/venue-partner/VenueImpact";
import VenueHowItWorks from "@/Components/venue-partner/VenueHowItWorks";
import VenuePartner from "@/Components/venue-partner/VenuePartner";
import VenueHost from "@/Components/venue-partner/VenueHost";

const index = () => {
  return (
    <div className="relative bg-[#fbf5ff]">
      <div id="vp-header">
        <Header />
      </div>
      <div id="venue-impact">
        <VenueImpact />
      </div>
      <div id="venue-how-it-works">
        <VenueHowItWorks />
      </div>
      <div id="venue-partner">
        <VenuePartner />
      </div>
      <div id="venue-host">
        <VenueHost />
      </div>
      <div id="download-the-app">
        {" "}
        <DownloadApp />
      </div>
    </div>
  );
};

export default index;
