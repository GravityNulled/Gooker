import React from "react";

const CardItem = ({ data }) => {
  return (
    <div className="shadow-md flex flex-col rounded py-7 px-4 w-[250px] hover:scale-105 duration-300 ease-in-out">
      <img src={data.cover} className="w-full" alt="" />
      <p className="font-semibold">{data.name}</p>
      <div className="flex items-center justify-between">
        <p className="text-pink-500 font-bold">${data.price}</p>
        <p className="text-pink-500 text-3xl font-bold">+</p>
      </div>
    </div>
  );
};

export default CardItem;
