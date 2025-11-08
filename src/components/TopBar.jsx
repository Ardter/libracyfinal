import React from "react";

export default function TopBar() {
  return (
    <header className="flex justify-between items-center bg-white border-b p-4">
      <h2 className="text-xl font-semibold text-gray-800">Library System</h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 text-sm">
          + Add Book
        </button>
      </div>
    </header>
  );
}