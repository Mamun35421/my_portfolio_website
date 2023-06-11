import React from "react";
import LeftBanner from "./LeftBanner";


const Banner = () => {

  return (
    <section
      id="home"
      className="w-full pt-10 py-20 pb-10 flex border-b-[1px] font-titleFont  border-b-black">
        <LeftBanner/>
      <div className="W-1/2"></div>
    </section>
  );
};

export default Banner;
