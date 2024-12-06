import React, { useState } from "react";
import logo from "../assets/image/unnamed.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { GrMenu } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";

function Header() {
  return (
    <div className="flex h-[48px] justify-between px-8 max-md:px-2 bg-white items-center shadow-md sticky top-0 z-10">
      {/* Logo */}
      <div className="flex items-center gap-4">
        {/* ToggleButton */}

        <span className=" hidden max-md:block">
          <GrMenu className=" text-2xl" />
        </span>
        <img src={logo} alt="logo" className="w-24 h-12" />
        {/* <h4 className="uppercase font-bold text-xl text-blue-700">
          dharam Kanta
        </h4> */}
      </div>

      {/* Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex justify-center items-center gap-2 bg-gray-100 py-2 text-black hover:bg-gray-200">
            <span className="w-6 h-6 p-[2px] rounded-full bg-gray-400">R</span>
            <span className="capitalize">Rohit Rajput</span>
            <span>
              <MdKeyboardArrowDown />
            </span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white shadow-lg rounded-md py-2 w-60">
          <DropdownMenuItem className="hover:bg-gray-100 flex gap-6">
            <img
              className="h-12 w-12"
              src="https://th.bing.com/th/id/R.6ae74c5f86466ef4f6fc6253c767381a?rik=5DSgIRvIaK7UPw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fProfile-Avatar-PNG.png&ehk=GVMh4KTpyOBERsOt5H%2b8TcGp%2bS8DdbR6niBs54kRaYA%3d&risl=&pid=ImgRaw&r=0"
              alt="logo"
            />
            <ul>
              <li>Rohit Rajput</li>
              <li>
                <a href="tel:+91 8586065128">+91 8586065128</a>
              </li>
              <li>
                <a href="/profile" className="text-blue-600">
                  Profile <MdKeyboardArrowRight />
                </a>
              </li>
            </ul>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-100">
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-100 text-red-500">
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Header;
