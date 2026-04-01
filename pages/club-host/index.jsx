import React from "react";
import FolksLovesUs from "@/Components/Home/FolksLovesUs";
import DownloadApp from "@/Components/Home/DownloadApp";
import Header from "@/Components/club-host/Header";
import Roles from "@/Components/club-host/Roles";
import Benefits from "@/Components/club-host/Benefits";
import Help from "@/Components/club-host/Help";
import Lead from "@/Components/club-host/Lead";

const index = () => {
  return (
    <div className="bg-[#fbf5ff]">
      <div id="header">
        <Header />
      </div>
      <div id="roles">
        <Roles />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="help">
        <Help />
      </div>
      <div id="lead">
        <Lead />
      </div>
      <div id="reviews">
        <FolksLovesUs />
      </div>
      <div id="download-the-app">
        {" "}
        <DownloadApp />
      </div>
    </div>
  );
};

export default index;
