import React from "react";
import pic from "../../src/profile-pic.png"; // Updated path to src folder
import pythonIcon from "../../src/pythonicon.png";
import excelIcon from "../../src/excelicon.jpeg";
import powerBiIcon from "../../src/powerbiicon.png";
import sqlIcon from "../../src/sqlicon.jpeg";
import { AiOutlineDownload } from "react-icons/ai";
import { FaGithubSquare, FaLinkedin, FaTelegram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-10 mt-6 md:mt-10"
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:pr-8 lg:pr-12 order-1 md:w-1/2">
            <img
              src={pic}
              className="w-[180px] h-[180px] md:w-[350px] md:h-[350px] rounded-full hover:scale-110 duration-200 hover:shadow-md transition-all mt-12 md:mt-0"
              alt="Profile"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 mt-14 md:mt-24 space-y-4 order-2">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Data Analyst", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hello, my name is <b>Prathmesh Tiwari</b>. I am a proud graduate
              of K.K. Wagh College, where I completed my{" "}
              <b>Bachelor of Computer Applications (BCA)</b> and{" "}
              <b>Master of Computer Applications (MCA)</b> under the University
              of Pune. My academic journey has equipped me with a strong
              foundation in computer science and advanced skills in software
              development, database management, and programming.
            </p>
            <br />
            {/* Social Media and Total Projects Row */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              {/* Available on */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li className="relative group">
                    <a
                      href="https://github.com/prathmesh6374"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithubSquare className="text-4xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                    <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      GitHub
                    </span>
                  </li>
                  <li className="relative group">
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-4xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                    <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      LinkedIn
                    </span>
                  </li>
                  <li className="relative group">
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoYoutube className="text-4xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                    <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      YouTube
                    </span>
                  </li>
                  <li className="relative group">
                    <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                      <FaTelegram className="text-4xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                    <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Telegram
                    </span>
                  </li>
                </ul>
              </div>
              {/* Total Projects */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Total Projects Completed</h1>
                <div className="flex space-x-5 justify-center md:justify-start">
                  <div className="relative group">
                    <img
                      src={pythonIcon}
                      alt="Python"
                      className="w-12 h-12 hover:scale-110 duration-200 cursor-pointer"
                    />
                    <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Python (2)
                    </span>
                  </div>
                  <div className="relative group">
                    <img
                      src={excelIcon}
                      alt="Excel"
                      className="w-12 h-12 hover:scale-110 duration-200 cursor-pointer"
                    />
                    <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Excel (2)
                    </span>
                  </div>
                  <div className="relative group">
                    <img
                      src={powerBiIcon}
                      alt="Power BI"
                      className="w-12 h-12 hover:scale-110 duration-200 cursor-pointer"
                    />
                    <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Power BI (2)
                    </span>
                  </div>
                  <div className="relative group">
                    <img
                      src={sqlIcon}
                      alt="SQL"
                      className="w-12 h-12 hover:scale-110 duration-200 cursor-pointer"
                    />
                    <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      SQL (1)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <br />
            {/* Resume Button */}
            <div className="mt-6 flex sm:justify-start justify-center">
              <a
                href="/PrathmeshTiwari.pdf"
                download="PrathmeshTiwari_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Download Resume &nbsp;
                <AiOutlineDownload className="mr-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
    </>
  );
}

export default Home;
