import React, { useState } from "react";
import { FiDownload, FiArrowDown, FiArrowUp, FiBarChart } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import AddTransaction from "../AddTransaction";

const Cashbook = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    details: "",
    category: "",
    mode: "",
    bill: "",
    amount: "",
    type: "cashIn",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State for showing the popup

  const handleAddTransaction = () => {
    const newTransaction = { ...formData, id: Date.now() };
    setTransactions((prev) => [...prev, newTransaction]);
    setFormData({
      date: "",
      details: "",
      category: "",
      mode: "",
      bill: "",
      amount: "",
      type: "cashIn",
    });
    setShowPopup(false); // Close the popup after adding the transaction
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const editTransaction = transactions.find((item) => item.id === id);
    setFormData(editTransaction);
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  const cashIn = transactions
    .filter((item) => item.type === "cashIn")
    .reduce((acc, item) => acc + parseFloat(item.amount || 0), 0);
  const cashOut = transactions
    .filter((item) => item.type === "cashOut")
    .reduce((acc, item) => acc + parseFloat(item.amount || 0), 0);
  const netBalance = cashIn - cashOut;

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Filters */}
      <div className="flex justify-between gap-12 w-full">
        <div className="mb-4 ">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <Button className="text-blue-500 bg-white hover:bg-gray-100 shadow-none text-md border-[1px] flex items-center gap-2">
          <FiDownload />
          Reports
        </Button>
      </div>

      {/* Cash Summary */}
      <div className="mb-6 flex justify-between gap-4">
        <div className="text-lg font-medium bg-white py-6 px-8 w-1/3 text-green-600 shadow rounded flex items-center gap-4">
          <FiArrowUp size={24} />
          <span>Cash In: {cashIn}</span>
        </div>
        <div className="text-lg font-medium bg-white py-6 px-8 w-1/3 text-red-600 shadow rounded flex items-center gap-4">
          <FiArrowDown size={24} />
          <span>Cash Out: {cashOut}</span>
        </div>
        <div className="text-lg font-medium bg-white py-6 px-8 w-1/3 text-blue-600 shadow rounded flex items-center gap-4">
          <FiBarChart size={24} />
          <span>Net Balance: {netBalance}</span>
        </div>
      </div>

      {/* Add Entry Button */}
      <Button
        onClick={() => setShowPopup(true)} // Show the popup on click
        className="bg-blue-600 w-1/4 text-white py-2 px-4 rounded hover:bg-blue-700 mb-4"
      >
        Add Entry
      </Button>

      {/* Show AddTransactionPopup if showPopup is true */}
      {showPopup && (
        <AddTransaction
          formData={formData}
          setFormData={setFormData}
          handleAddTransaction={handleAddTransaction}
          closePopup={closePopup}
        />
      )}

      {/* Transaction Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left">Date & Time</th>
              <th className="p-4 text-left">Details</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Mode</th>
              <th className="p-4 text-left">Bill</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions
              .filter((item) =>
                item.details.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="p-4">{transaction.date}</td>
                  <td className="p-4">{transaction.details}</td>
                  <td className="p-4">{transaction.category}</td>
                  <td className="p-4">{transaction.mode}</td>
                  <td className="p-4">{transaction.bill}</td>
                  <td className="p-4">{transaction.amount}</td>
                  <td className="p-4">
                    {transaction.type === "cashIn" ? "Credit" : "Debit"}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleEdit(transaction.id)}
                      className="mr-2 bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(transaction.id)}
                      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cashbook;
