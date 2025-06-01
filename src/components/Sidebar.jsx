import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    return location.reload();
  };

  return (
    <>
      {/* Hamburger button for mobile */}
      <div className="md:hidden p-4 py-7 bg-slate-800 text-white flex justify-between">
        <button onClick={toggleSidebar} className="py-0.5">
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-slate-950 text-white p-5 w-64 z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:block text-center `}
      >
        <h2 className="text-4xl font-bold mb-20">Vaultify</h2>
        <ul className="space-y-4 tracking-widest my-5">
          <li className="hover:text-yellow-400 cursor-pointer">DASHBOARD</li>
          <li className="hover:text-yellow-400 cursor-pointer">PASSWORDS</li>
          <li className="hover:text-yellow-400 cursor-pointer">SETTINGS</li>
          <li
            className="hover:text-red-400 cursor-pointer sticky"
            onClick={handleLogout}
          >
            LOGOUT
          </li>
        </ul>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        ></div>
      )}
    </>
  );
}

export default Sidebar;
