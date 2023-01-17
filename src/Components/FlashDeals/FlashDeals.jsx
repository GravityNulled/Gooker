import React from "react";
import Data from "../Data";
import CardItem from "../CardItem/CardItem";
import { IoIosFlash } from "react-icons/io";
const FlashDeals = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="flex gap-4">
          <IoIosFlash />
          <h3>Flash Deals</h3>
        </div>
        {Data.productItems.map((data, index) => {
          return <CardItem data={data} key={index} />;
        })}
      </div>
    </section>
  );
};

export default FlashDeals;
