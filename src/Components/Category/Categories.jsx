import React from "react";
import categories from "../categories";
const Categories = () => {
  return (
    <section>
      <div className="shadow-2xl p-3">
        <div className="">
          <ul className="flex flex-col gap-2">
            {categories.map((cat, index) => {
              return (
                <li key={index}>
                  <div className="flex gap-3 hover:bg-pink-100 hover:font-semibold">
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
