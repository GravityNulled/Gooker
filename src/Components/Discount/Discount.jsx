import React from "react";
import Card from "../Arrivals/Card";
import Ddata from "./Discountdata";
const Discount = () => {
  return (
    <section className="py-10 bg-blue-50">
      <div className="container mx-auto">
        <div className="flex gap-4 mb-4">
          <p className="font-bold text-2xl">Big Discount</p>
        </div>
        <div className="grid grid-cols-4 justify-evenly shadow-sm">
          {Ddata.map((data, i) => {
            return <Card data={data} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Discount;
