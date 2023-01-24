import React from "react";
import Shopfilter from "./Shopfilter";
const Categories = () => {
  return (
    <section>
      <div className="shadow-2xl p-3">
        <div className="">
          <div className="flex my-5 justify-between items-center">
            <p className="font-bold text-2xl">Brands</p>
            <p>|</p>
            <p className="font-light text-xl">Shops</p>
          </div>
          <ul className="flex w-48 flex-col gap-5">
            {Shopfilter.map((cat, index) => {
              return (
                <li key={index}>
                  <div className="flex gap-5 hover:bg-pink-100 hover:font-semibold">
                    <img src={cat.img} className="w-8" alt="" />
                    <p>{cat.name}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Categories;
