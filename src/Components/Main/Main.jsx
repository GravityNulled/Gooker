import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Categories from "../Category/Categories";
import Sdata from "../MainPdata";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
const Main = () => {
  return (
    <section className="pt-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Categories />
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              disableOnInteractionChange: false,
              delay: 2000,
            }}
            className="flex-1"
          >
            {Sdata.map((data, index) => {
              return (
                <SwiperSlide className="flex mt-5 justify-between">
                  <div className="flex px-3 flex-col">
                    <h1 className="text-5xl font-bold mb-5">{data.title}</h1>
                    <p className="mb-4">{data.desc}</p>
                    <button className="p-2 bg-pink-500 text-white w-[150px] rounded-md">
                      Visit Collection
                    </button>
                  </div>
                  <img src={data.cover} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Main;
