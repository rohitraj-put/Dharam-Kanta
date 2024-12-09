// AddTransaction.js
import React from "react";
import { Button } from "@/components/ui/button";
import { FiArrowDown, FiArrowUp, FiBarChart } from "react-icons/fi";

const AddTransaction = ({
  formData,
  setFormData,
  handleAddTransaction,
  closePopup,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-2/3 shadow">
        <h3 className="text-xl font-semibold mb-4">Add Transaction</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="datetime-local"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Details"
            value={formData.details}
            onChange={(e) =>
              setFormData({ ...formData, details: e.target.value })
            }
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Mode"
            value={formData.mode}
            onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Bill"
            value={formData.bill}
            onChange={(e) => setFormData({ ...formData, bill: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Amount"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            className="p-2 border border-gray-300 rounded"
          />
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="cashIn">Cash In</option>
            <option value="cashOut">Cash Out</option>
          </select>
        </div>
        <div className="mt-4 flex justify-between gap-4">
          <Button
            onClick={handleAddTransaction}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Save Transaction
          </Button>
          <Button
            onClick={closePopup}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
