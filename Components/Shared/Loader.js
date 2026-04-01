import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <MutatingDots
        height="100"
        width="100"
        color="#F95A62"
        secondaryColor="#6D04D1"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
