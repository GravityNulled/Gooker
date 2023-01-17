import React from "react";
import { BsPersonFill, BsSearch } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import Announcment from "../Announcment/Announcment";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="shadow-xl">
      <Announcment />
      <div className="container mx-auto pt-6">
        <div className="flex items-center justify-between">
          <div className="logo">
            <span className="text-2xl font-semibold text-pink-500">
              OMAR SHOP
            </span>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search and Press Enter..."
              className="outline-none border rounded-3xl text-center h-10 min-w-[700px]"
            />
            <BsSearch className="hover:scale-110 duration-300 absolute top-3 left-4" />
          </div>
          <div className="flex items-center justify-center gap-3">
            <BsPersonFill size={25} className="hover:scale-110 duration-300" />
            <HiShoppingBag size={25} className="hover:scale-110 duration-300" />
          </div>
        </div>
        <div className="flex items-center justify-between py-5">
          <div className="bg-slate-300 p-2 rounded">
            <div className="flex items-center gap-3 justify-around">
              <BiCategory size={20} />
              <p>Category</p>
              <AiOutlineDown size={20} />
            </div>
          </div>
          <ul className="flex gap-3">
            <li className="hover:scale-105 duration-300 font-semibold">
              <a href="#">Home</a>
            </li>
            <li className="hover:scale-105 duration-300 font-semibold">
              <a href="#">User Account</a>
            </li>
            <li className="hover:scale-105 duration-300 font-semibold">
              <a href="#">Vendor Account</a>
            </li>
            <li className="hover:scale-105 duration-300 font-semibold">
              <a href="#">Track My Order</a>
            </li>
            <li className="hover:scale-105 duration-300 font-semibold">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
