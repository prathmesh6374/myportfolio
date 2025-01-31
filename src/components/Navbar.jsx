import React, { useState } from "react";
import pic from "../../src/1.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { AiOutlineHome, AiOutlineProject, AiOutlineInfoCircle, AiOutlineContacts } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { BsFillAwardFill } from "react-icons/bs";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home", icon: <AiOutlineHome size={24} /> },
    { id: 2, text: "Portfolio", icon: <AiOutlineProject size={24} /> },
    { id: 3, text: "About", icon: <AiOutlineInfoCircle size={24} /> },
    { id: 4, text: "Experience", icon: <MdWorkOutline size={24} /> }, // Added Experience
    { id: 5, text: "Certification", icon: <BsFillAwardFill size={24} /> },
    { id: 6, text: "Contact", icon: <AiOutlineContacts size={24} /> },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-1">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Prathmes<span className="text-green-500 text-2xl">H</span>
              <p className="text-sm text-blue-500">DATA ANALYST</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-4">
              {navItems.map(({ id, text }) => (
                <li className="relative group cursor-pointer" key={id}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="px-2 py-1 text-lg font-medium transition-all duration-300 rounded-md group-hover:bg-sky-500 group-hover:text-white group-hover:scale-105"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Right-Side Sidebar */}
        {menu && (
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transition-transform transform translate-x-0">
            <div className="flex items-center justify-between p-4 border-b border-gray-300">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={() => setMenu(false)} className="text-gray-500">
                <IoCloseSharp size={24} />
              </button>
            </div>
            <ul className="flex flex-col items-start p-4 space-y-4 text-xl">
              {navItems.map(({ id, text, icon }) => (
                <li key={id}>
                  <Link
                    onClick={() => setMenu(false)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="flex items-center space-x-3 px-2 py-2 text-lg font-medium transition-all duration-300 rounded-md hover:bg-sky-500 hover:text-white"
                  >
                    {icon}
                    <span>{text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <style jsx>{`
        .active {
          background-color: #38bdf8; /* Tailwind's sky-500 color */
          color: white;
          border-radius: 0.375rem; /* Equivalent to Tailwind's rounded-md */
        }
      `}</style>
    </>
  );
}

export default Navbar;
