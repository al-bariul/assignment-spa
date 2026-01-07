import React from "react";

const Banner = ({ progress, resolved }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1200px] mx-auto mt-10 px-4 gap-6">
      <div className="w-full lg:w-[48%] h-[200px] md:h-[250px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white flex flex-col items-center justify-center rounded-2xl shadow-lg">
        <p className="text-xl md:text-2xl font-medium">In-Progress</p>
        <p className="text-5xl md:text-6xl font-bold mt-2">{progress}</p>
      </div>
      <div className="w-full lg:w-[48%] h-[200px] md:h-[250px] bg-gradient-to-br from-[#54CF68] to-[#00827A] flex flex-col items-center justify-center text-white rounded-2xl shadow-lg">
        <p className="text-xl md:text-2xl font-medium">Resolved</p>
        <p className="text-5xl md:text-6xl font-bold mt-2">{resolved}</p>
      </div>
    </div>
  );
};

export default Banner;
