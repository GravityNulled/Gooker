import React from "react";

const CardItem = ({ data }) => {
  return (
    <div className="relative flex flex-col rounded py-7 px-4 w-[250px]  duration-300 ease-in-out">
      <img src={data.cover} className="w-full" alt="" />
      <p className="absolute top-0 bg-pink-500 text-white rounded-lg px-2">
        {data.discount}% off
      </p>
      <p className="font-semibold">{data.name}</p>
      <div className="flex items-center justify-between">
        <p className="text-pink-500 font-bold">${data.price}</p>
        <button className="text-pink-500 text-3xl font-bold">+</button>
      </div>
    </div>
  );
};

export default CardItem;
