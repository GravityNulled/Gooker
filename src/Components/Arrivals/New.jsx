import React from "react";
import Card from "./Card";
import Ndata from "./NewArrivalData";
const New = () => {
  return (
    <section className=" bg-blue-50 py-10">
      <div className="container mx-auto">
        <div className="flex gap-4 mb-5">
          <p className="font-bold text-2xl">New Arrivals</p>
        </div>
        <div className="w-full bg-white flex gap-5 items-center justify-evenly shadow-sm">
          {Ndata.map((data, i) => {
            return <Card data={data} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default New;
