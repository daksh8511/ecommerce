import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="min-h-screen flex flex-col sm:flex-row relative">
      <div className="flex md:hidden p-4 bg-gray-900 z-20 text-white">
        <button onClick={toggleSidebar}>
          <FaBars size={22} />
        </button>
        <h2 className="ml-4 text-xl font-medium">Admin Dashboard</h2>
      </div>

      {/* overlay for mobile screen */}
      {isSidebarOpen && (
        <div
          className="fixed bg-black opacity-50 z-10 inset-0 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* sidebar */}
      <div
        className={`bg-gray-900 w-64 min-h-screen absolute text-white md:relative transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}
      >
        <AdminSidebar />
      </div>

      {/* main content */}
      <div className="grow p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
