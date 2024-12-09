import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Import your button component
import { AiOutlineBook } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import Popup from "@/layout/Popup";

const generateRandomCashbooks = () => {
  return Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `Cashbook ${i + 1}`,
    balance: `$${(Math.random() * 1000).toFixed(2)}`,
    createdAt: new Date().toISOString().slice(0, 10), // Current date
  }));
};

function Home() {
  const [cashbooks, setCashbooks] = useState(generateRandomCashbooks());
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("lastUpdated");
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);

  const handleSave = () => {
    console.log("Saved!");
    setPopupOpen(false);
  };

  const filters = [
    { label: "Last Updated", value: "lastUpdated" },
    { label: "Name (A to Z)", value: "nameAZ" },
    { label: "Net Balance (High to Low)", value: "netBalanceHighLow" },
    { label: "Net Balance (Low to High)", value: "netBalanceLowHigh" },
    { label: "Last Created", value: "lastCreated" },
  ];

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const applyFilter = (list) => {
    switch (selectedFilter) {
      case "nameAZ":
        return list.sort((a, b) => a.name.localeCompare(b.name));
      case "netBalanceHighLow":
        return list.sort(
          (a, b) =>
            parseFloat(b.balance.slice(1)) - parseFloat(a.balance.slice(1))
        );
      case "netBalanceLowHigh":
        return list.sort(
          (a, b) =>
            parseFloat(a.balance.slice(1)) - parseFloat(b.balance.slice(1))
        );
      case "lastCreated":
        return list.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      default:
        return list;
    }
  };

  const handleEdit = (id) => {
    alert(`Edit cashbook with ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this cashbook?")) {
      setCashbooks(cashbooks.filter((cashbook) => cashbook.id !== id));
    }
  };

  const handleRowClick = (id) => {
    navigate(`/cashbook/${id}`);
  };

  const filteredCashbooks = applyFilter(
    cashbooks.filter(
      (cashbook) =>
        cashbook.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cashbook.balance.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <div className="border-b-[1px] flex justify-between items-center p-4">
        <h1 className="text-[20px] font-semibold">Namrata Universal</h1>
        <Button
          className="text-white text-[18px] py-4 rounded-none bg-blue-700 font-semibold px-4 hover:bg-blue-600 flex items-center gap-2"
          onClick={handleOpenPopup}
        >
          <GoPlus size={20} /> Add New Customer
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex justify-start items-center m-4 gap-8">
        <fieldset className="w-80 space-y-1 dark:text-gray-800">
          <div className="relative border-[1px]">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by book name..."
              className="w-80 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600"
            />
          </div>
        </fieldset>

        <select
          value={selectedFilter}
          onChange={handleFilterChange}
          className="p-[8px] border-[1px] focus:outline-none text-sm"
        >
          {filters.map((filter) => (
            <option key={filter.value} value={filter.value}>
              Sort By: {filter.label}
            </option>
          ))}
        </select>
      </div>

      {/* Cashbook Table */}
      <div className="w-[97%] mx-auto mt-8">
        {filteredCashbooks.map((cashbook) => (
          <div
            key={cashbook.id}
            className="flex justify-start items-center gap-8 text-[#212121] hover:bg-gray-100 px-8 border-b-[1px] "
          >
            <AiOutlineBook className="w-12 h-12 rounded-full p-2 text-blue-700" />
            <div
              className="w-full flex items-center text-[18px] font-bold py-4 cursor-pointer"
              onClick={() => handleRowClick(cashbook.id)}
            >
              {cashbook.name}
            </div>
            <div className="flex gap-8  ">
              <span
                className="text-blue-600 text-xl cursor-pointer"
                title="Edit"
                onClick={() => handleEdit(cashbook.id)}
              >
                <GrEdit />
              </span>
              <span
                className="text-rose-700 text-2xl cursor-pointer"
                title="Delete"
                onClick={() => handleDelete(cashbook.id)}
              >
                <AiOutlineDelete />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Component */}
      {isPopupOpen && (
        <Popup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default Home;
