import React from "react";
import banner1 from "../../assets/images/banner-1.png";
import banner2 from "../../assets/images/banner-2.png";
const Banner = () => {
  return (
    <section className="py-10 bg-blue-50">
      <div className="container w-full mx-auto">
        <div className="flex items-center justify-center gap-7">
          <img src={banner1} alt="" />
          <img src={banner2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
