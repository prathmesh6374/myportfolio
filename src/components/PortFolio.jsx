import React, { useState, useEffect } from "react";
import { AiOutlineFileText, AiOutlineCode, AiOutlineDashboard } from "react-icons/ai";
import ipl from "/src/Ipl-Wallpaper-3-e1641279556700.jpg";
import python from "../../src/python.webp";
import Zomato from "/src/zomato.jpg";
import express from "../../src/express.png";
import reactjs from "../../src/reactjs.png";
import nodejs from "../../src/node.png";

function PortFolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState({ type: "", src: "" });

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [isModalOpen]);

  const cardItem = [
    {
      id: 1,
      logo: Zomato,
      name: "Zomato Sales Analysis",
      sc: "https://github.com/prathmesh6374/zomato-analysis",
      video: "https://www.youtube.com/embed/EZWpKmKZBzw",
      dashboard: "https://docs.google.com/spreadsheets/d/1QY2h83KYCnj1LRNP7R6-MQnmJyoLdEjb/edit?gid=2110708224#gid=2110708224",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      video: "https://www.youtube.com/embed/example-video",
      dashboard: "https://app.powerbi.com/reportEmbed?reportId=a2a422ab-30b9-49f2-979c-22461d82b525&autoAuth=true&ctid=140fbbcf-ffac-45ac-baf2-b05700941b6b",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      video: "https://www.youtube.com/embed/example-react-video",
      dashboard: "https://1drv.ms/x/s!Ai82y5zAgKdhhNRwmQCKcPW9SVlnhg?e=ezmXWk",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      video: "https://www.youtube.com/embed/example-node-video",
      dashboard: "https://example.com/nodejs-dashboard",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
      video: "https://www.youtube.com/embed/example-python-video",
      dashboard: "https://example.com/python-dashboard",
    },
    {
      id: 6,
      logo: ipl,
      name: "IPL Prediction",
      video: "https://www.youtube.com/embed/example-ipl-video",
      dashboard: "https://example.com/ipl-dashboard",
    },
  ];

  const openModal = (type, src) => {
    setCurrentContent({ type, src });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentContent({ type: "", src: "" });
  };

  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-8 my-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold block mb-5">Featured Projects</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardItem.map(({ id, logo, name, sc, video, dashboard }) => (
            <div key={id} className="w-full h-auto border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300 group">
              <img src={logo} className="w-full h-40 object-cover rounded-lg group-hover:brightness-50 transition-all duration-300" alt={name} />
              <div className="font-bold text-lg mb-2">{name}</div>
              <p className="text-gray-700 text-sm mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <div className="flex flex-col space-y-3">
                <button onClick={() => openModal("video", video)} className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded transition duration-300">
                  <AiOutlineFileText className="mr-2" size={20} />
                  Explanation
                </button>
                <button className="flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded transition duration-300">
                  <AiOutlineCode className="mr-2" size={20} />
                  <a href={sc} target="_blank" rel="noopener noreferrer">Source Code</a>
                </button>
                <button onClick={() => openModal("iframe", dashboard)} className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-700 text-white font-bold px-4 py-2 rounded transition duration-300">
                  <AiOutlineDashboard className="mr-2" size={20} />
                  Dashboard
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-[90%] h-[75%] bg-white flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
            <button onClick={closeModal} className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-lg transition duration-300">
              ✖
            </button>
            {currentContent.type === "video" && (
              <iframe src={currentContent.src} title="Explanation Video" className="w-full h-full" allowFullScreen></iframe>
            )}
            {currentContent.type === "iframe" && (
              <iframe
                src={currentContent.src}
                title="Dashboard"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PortFolio;
