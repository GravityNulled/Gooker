import React from "react";
import shopItems from "./Shopdata";
import CardItem from "../CardItem/CardItem";
import Shopcat from "./Shopcat";
const Shops = () => {
  return (
    <section className="py-10 bg-blue-50">
      <div className="container mx-auto">
        <div className="flex justify-around items-center">
          <Shopcat />
          <div className="grid items-center gap-3 grid-cols-3">
            {shopItems.map((item, index) => {
              return <CardItem data={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shops;
