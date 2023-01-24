import React from "react";
import Data from "../Data";
import CardItem from "../CardItem/CardItem";
import { IoIosFlash } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
const FlashDeals = () => {
  return (
    <section className="py-10 bg-blue-50">
      <div className="container mx-auto">
        <div className="flex gap-4">
          <IoIosFlash size={40} className="text-yellow-400" />
          <h3 className="font-bold mb-4 text-2xl">Flash Deals</h3>
        </div>
        <div className="elative w-[800px]">
          <Swiper
            slidesPerView={3}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            modules={[Pagination, Navigation]}
            autoplay={{
              disableOnInteractionChange: true,
              delay: 2000,
            }}
          >
            {Data.productItems.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <CardItem data={data} key={index} />
                </SwiperSlide>
              );
            })}
            {/* <div className="absolute top-[50%] -right-4 z-10 cursor-pointer bg-black rounded-lg text-white button-next">
              <GrFormNextLink size={40} />
            </div>
            <div className="absolute top-[50%] -left-3 z-10 cursor-pointer bg-black text-white rounded-lg  button-prev">
              <GrFormPreviousLink size={40} />
            </div> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
