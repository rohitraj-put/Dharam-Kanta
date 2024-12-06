import React from "react";
import logo from "../assets/image/unnamed.png";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { GrMenu } from "react-icons/gr";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <header className="flex h-[48px] justify-between px-8 max-md:px-2 bg-white items-center shadow-md sticky top-0 z-10">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle Button */}
        <button className="hidden max-md:block">
          <GrMenu className="text-2xl" />
        </button>
        {/* Logo */}
        <img src={logo} alt="Company Logo" className="w-24 h-12" />
      </div>

      {/* Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex items-center gap-2 bg-gray-100 py-2 px-3 text-black hover:bg-gray-200">
            <img
              className="h-8 w-8 rounded-full"
              src="https://th.bing.com/th/id/R.6ae74c5f86466ef4f6fc6253c767381a?rik=5DSgIRvIaK7UPw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fProfile-Avatar-PNG.png&ehk=GVMh4KTpyOBERsOt5H%2b8TcGp%2bS8DdbR6niBs54kRaYA%3d&risl=&pid=ImgRaw&r=0"
              alt="User Avatar"
            />
            <span className="capitalize">Rohit Rajput</span>
            <MdKeyboardArrowDown />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white shadow-lg rounded-md py-2 w-64">
          {/* User Info */}
          <DropdownMenuItem className="hover:bg-gray-200 flex items-center gap-4 bg-gray-100 border-b p-4">
            <img
              className="h-12 w-12 rounded-full"
              src="https://th.bing.com/th/id/R.6ae74c5f86466ef4f6fc6253c767381a?rik=5DSgIRvIaK7UPw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fProfile-Avatar-PNG.png&ehk=GVMh4KTpyOBERsOt5H%2b8TcGp%2bS8DdbR6niBs54kRaYA%3d&risl=&pid=ImgRaw&r=0"
              alt="User Avatar"
            />
            <div>
              <p className="font-semibold">Rohit Rajput</p>
              <a
                href="tel:+91 8586065128"
                className="text-sm text-gray-500 block"
              >
                +91 8586065128
              </a>
              <a
                href="/profile"
                className="text-blue-600 text-sm flex items-center gap-1"
              >
                Profile <MdKeyboardArrowRight />
              </a>
            </div>
          </DropdownMenuItem>

          {/* Settings */}
          <DropdownMenuItem className="hover:bg-gray-100 py-4 px-4 flex items-center gap-2">
            <FiSettings className="text-gray-500" />
            <span>Settings</span>
          </DropdownMenuItem>

          {/* Logout */}
          <DropdownMenuItem className="hover:bg-gray-100 text-red-500 py-4 px-4 flex items-center gap-2">
            <FiLogOut className="text-red-500" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

export default Header;
