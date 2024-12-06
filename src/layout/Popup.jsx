import { Button } from "@/components/ui/button";
import React from "react";
import { MdClose } from "react-icons/md";

function Popup({ isOpen, onClose, onSave }) {
  if (!isOpen) return null; // Don't render the popup if it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[50%] max-md:w-[90%]">
        <div className="flex justify-between px-4 items-center py-4">
          <h2 className="text-2xl">Add New Book</h2>
          <Button onClick={onClose} className=" bg-gray-100  hover:bg-gray-300">
            <MdClose className="text-black text-2xl" />
          </Button>
        </div>
        <div className="my-4">
          <label className="mb-2 text-sm">Book Name</label>
          <input
            type="text"
            placeholder="e.g. Daily Expense"
            className="w-full border px-3 py-2 rounded mb-4"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
