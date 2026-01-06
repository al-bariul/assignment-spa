import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center justify-between max-w-[1200px] mx-auto mt-10 ">
      <div className="w-[550px] h-[250px] border-4 bg-red-500 flex flex-col items-center justify-center">
        <p>In-Progress</p>
        <p>0</p>
      </div>
      <div className="right-card w-[550px] h-[250px] border-4 flex flex-col items-center justify-center">
        <p>Resolved</p>
        <p>0</p>
      </div>
    </div>
  );
};

export default Banner;
