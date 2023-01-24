import React from "react";

const Cat = ({ data }) => {
  return (
    <div className="shadow relative border">
      <img src={data.img} alt="" className="w-full" />
      <span className="absolute ml-3 mt-2 top-0 py-1 px-2 bg-blue-800 rounded-md text-white">
        {data.cat}
      </span>
      <span className="absolute bg-blue-50 rounded-xl font-semibold mr-3 mt-2 py-1 px-3 top-0 right-0">
        {data.text}
      </span>
    </div>
  );
};

export default Cat;
