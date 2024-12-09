import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AiOutlineDashboard, AiOutlineBook } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { MdBusiness } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

function Sidebar({ isSidebarOpen }) {
  return (
    <>
      <div
        className={`bg-gray-900 h-full w-[250px] fixed left-0 top-0 bottom-0 max-md:hidden`}
      >
        <div className="h-[48px] bg-white flex items-center justify-center text-white font-bold"></div>
        <nav className="flex flex-col">
          {/* open pop up */}
          <Link
            to="/"
            className="text-white py-4 font-bold px-4 hover:bg-gray-700 flex items-center gap-2"
          >
            <AiOutlineHome size={20} /> Home
          </Link>

          <Link
            to="/dashboard"
            className="text-white py-4 font-bold px-4 hover:bg-gray-700 flex items-center gap-2"
          >
            <AiOutlineDashboard size={20} /> Dashboard
          </Link>
          <Link
            to="/bussiness"
            className="text-white py-4 font-bold px-4 hover:bg-gray-700 flex items-center gap-2"
          >
            <MdBusiness size={20} /> Business
          </Link>
          <Link
            to="/cashbooks"
            className="text-white py-4 font-bold px-4 hover:bg-gray-700 flex items-center gap-2"
          >
            <AiOutlineBook size={20} /> Cashbooks
          </Link>
          <Link
            to="/cashbooks-settings"
            className="text-white py-4 font-bold px-4 hover:bg-gray-700 flex items-center gap-2"
          >
            <BsGear size={20} /> Business Settings
          </Link>
        </nav>
        {/* <Button className="absolute bottom-0 w-full rounded-none bg-gray-700 text-white hover:bg-gray-800">
          Rohit Rajput
        </Button> */}
      </div>
     
    </>
  );
}

export default Sidebar;
