import React from "react";
import { FiTruck } from "react-icons/fi";
import { FaAddressCard } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";

const Cta = () => {
  return (
    <section className="bg-blue-50 px-4 pt-10 pb-24 ">
      <div className="container mx-auto">
        <div className="grid gap-4 grid-cols-4">
          <div className="bg-white rounded-xl shadow-lg border px-3">
            <div className="flex items-center flex-col">
              <FiTruck size={30} className="mt-3" />
              <h2 className="my-3 font-bold text-2xl">World Wide Delivery</h2>
              <p className="text-center mb-4">
                We offer competitive delivery to any country in the globe
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border px-3">
            <div className="flex items-center flex-col">
              <FaAddressCard size={30} className="mt-3" />
              <h2 className="my-3 font-bold text-2xl">Safe Payment</h2>
              <p className="text-center mb-4">
                We offer competitive delivery to any country in the globe
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border px-3">
            <div className="flex items-center flex-col">
              <BsShieldFillCheck size={30} className="mt-3" />
              <h2 className="my-3 font-bold text-2xl">Shop with Confidence</h2>
              <p className="text-center mb-4">
                We offer competitive delivery to any country in the globe
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border px-3">
            <div className="flex items-center flex-col">
              <MdSupportAgent size={30} className="mt-3" />
              <h2 className="my-3 font-bold text-2xl">24/7 Support</h2>
              <p className="text-center mb-4">
                We offer competitive delivery to any country in the globe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
