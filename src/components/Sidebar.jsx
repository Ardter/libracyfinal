import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Books", path: "/books" },
    { name: "Members", path: "/members" },
    { name: "Loans", path: "/loans" },
    { name: "Export", path: "/export" }
  ];

  return (
    <aside className="bg-white border-r w-60 p-4 hidden md:block">
      <h1 className="text-xl font-semibold mb-6">📚 Library</h1>
      <nav className="space-y-2">
        {navItems.map(item => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-lg ${isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}