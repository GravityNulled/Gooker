import React from "react";
import { BiCategory } from "react-icons/bi";
import Cat from "./Cat";
import top from "./Top";
const TopCat = () => {
  return (
    <section className="py-10 bg-blue-50">
      <div className="container mx-auto">
        <div className="flex items-center gap-4">
          <BiCategory size={40} className="text-pink-500 mb-5" />
          <h3 className="font-bold text-2xl mb-5">Top Categories</h3>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {top.map((data, index) => {
            return <Cat data={data} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default TopCat;
