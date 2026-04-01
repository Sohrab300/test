import FormBody from "@/Components/venue-partner/FormBody";
import FormHeader from "@/Components/venue-partner/FormHeader";
import React from "react";

const form = () => {
  return (
    <div className="bg-[#fbf5ff]">
      <div id="form-header">
        <FormHeader />
      </div>
      <div id="form-body">
        <FormBody />
      </div>
    </div>
  );
};

export default form;
