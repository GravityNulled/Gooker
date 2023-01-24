import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="py-24 px-4 bg-blue-600">
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-4">
          <div className="flex gap-3 text-white flex-col">
            <span className="text-pink-500 font-bold text-2xl">OMAR SHOP</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              reiciendis odit eius fugit provident rerum, accusamus deleniti
              vero similique natus.
            </p>
            <div className="flex mt-10 gap-3">
              <button className="flex p-4 bg-blue-900 items-center text-white gap-2">
                <FaGooglePlay />
                <p>Google Play</p>
              </button>
              <button className="flex p-4 bg-blue-900 items-center text-white gap-2">
                <AiFillApple />
                <p>Apple Store</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col text-white gap-2">
            <h2 className="text-2xl font-bold mb-5">About Us</h2>
            <p>Careers</p>
            <p>Our Stories</p>
            <p>Our Cares</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex flex-col text-white gap-2">
            <h2 className="text-2xl font-bold mb-5">Customer care</h2>
            <p>Help Center</p>
            <p>How To Buy</p>
            <p>Track Your Order</p>
            <p>Corporate & Bulk Purchasing</p>
            <p>Returns & Refunds</p>
          </div>
          <div className="flex flex-col text-white gap-2">
            <h2 className="text-2xl font-bold mb-5">About Us</h2>
            <p>PO BOX 80100-98150</p>
            <p>Our Stories</p>
            <p>Mombasa, Kenya</p>
            <p>email: annexomar@gmail.com</p>
            <p>+254 72017 9897</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
