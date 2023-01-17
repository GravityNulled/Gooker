import React from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import { AiOutlineMail, AiOutlineDown } from "react-icons/ai";
const Announcment = () => {
  return (
    <div className="bg-blue-900 w-full py-2">
      <div className="container text-white mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex gap-5">
            <BsTelephoneInbound size={25} />
            <p>+254720179897</p>
            <AiOutlineMail size={25} />
            <p>annexomar@gmail.com</p>
          </div>
          <div className="flex space-x-6">
            <p>Theme FAQ's</p>
            <p> Need Help</p>
            <p className="flex gap-2 items-center">
              EN <AiOutlineDown />
            </p>
            <p>USD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcment;
