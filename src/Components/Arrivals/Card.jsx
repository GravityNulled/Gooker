import React from "react";

const Card = ({ data }) => {
  return (
    <div className="flex bg-white flex-col p-4 justify-center shadow-lg hover:scale-110 duration-300 transition-all rounded m-6">
      <img src={data.cover} alt="" width={200} />
      <p className="font-semibold mt-2">{data.name}</p>
      <p className="font-semibold">{data.price}</p>
    </div>
  );
};

export default Card;
