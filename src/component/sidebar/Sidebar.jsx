import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        isSidebarOpen
          ? "bg-gray-800 bg-opacity-75 opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 left-0 w-[370px] h-[100vh] bg-black shadow-lg  transform transition-transform duration-500 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}  
      >
        <div className="pt-8 h-[130px] flex justify-center bg-black  sticky top-0">
          <img
            className="w-[200px] h-[60px] "
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/techblog-logo-dark@2x.png"
            alt="Logo"
          />
          <button
          onClick={toggleSidebar}
          className="text-white absolute top-0 right-0 p-2 font-extrabold text-xl bg-[#111]"
        >
          <IoCloseSharp />
        </button>
        </div>
        <div className="bg-black w-[95%] mx-auto h-[430px] border-8 border-[#111] rounded-lg flex items-center flex-col p-10">
          <div className="text-2xl text-white text-center font-bold">
            <h1>Subscribe to Updates</h1>
          </div>
          <div className="text-sm font-semibold text-[#bfbebe] mt-5 text-center">
            <h1>
              Get the latest creative news from FooBar about art, design and
              business.
            </h1>
          </div>
          <div className="w-[100%] flex flex-col items-center">
            <input
              className="bg-[#0f0f11] pr-2 pl-2 w-[250px] mt-5 pb-3 pt-3 border border-gray-700 rounded-sm text-center text-md"
              type="text"
              placeholder="Your email address.."
            />
            <button className="w-[250px] pb-3 pt-3 text-white font-bold text-xs bg-blue-600 mt-3 rounded-sm">
              SUBSCRIBE
            </button>
          </div>
          <div className="flex items-baseline mt-5">
            <input className="w-3 h-3" type="checkbox" name="" id="" />
            <p className="text-center text-sm text-gray-400">
              By signing up, you agree to the our terms and our Privacy Policy
              agreement.
            </p>
          </div>
        </div>
        <div className="mt-10 p-5">
          <div className="flex flex-col justify-center">
            <h1 className="text-lg text-white font-bold">WHAT'S HOT</h1>
            <div className="flex mt-10">
              <div className="">
                <img
                  className="w-40 h-[80px] rounded-xl"
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-1024x683.jpg"
                  alt="Pick 1"
                />
              </div>
              <div className="flex flex-col gap-2 justify-between w-[100%] pl-5">
                <div className="">
                  <p className="hover:cursor-pointer text-white text-sm transition-all duration-300 ease-in-out hover:text-[#3c3fde] font-bold">
                    Game Development This Week: Save On Essential Tools and More
                  </p>
                </div>
                <div className="flex gap-5">
                  <p className="text-gray-400 font-semibold text-xs">Nov 19, 2022</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 h-[1px] mt-5"></div>
            <div className="flex mt-5">
              <div>
                <img
                  className="w-40 h-[80px] rounded-xl"
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-scaled.jpg"
                  alt="Pick 2"
                />
              </div>
              <div className="flex flex-col gap-2 justify-between w-[100%] pl-5">
                <div className="">
                  <p className="hover:cursor-pointer text-sm text-white transition-all duration-300 ease-in-out hover:text-[#3c3fde] font-bold">
                    Is the Hyperloop Doomed? What Elon Musk’s Latest Setback
                    Really Means
                  </p>
                </div>
                <div className="flex gap-5">
                  <p className="text-gray-400 font-semibold text-xs">Mar 10, 2022</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 h-[1px] mt-5"></div>
            <div className="flex mt-5">
              <div>
                <img
                  className="w-40 h-[80px] rounded-xl"
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash.jpg"
                  alt="Pick 3"
                />
              </div>
              <div className="flex flex-col gap-2 justify-between w-[100%] pl-5">
                <div className="">
                  <p className="hover:cursor-pointer text-sm  text-white transition-all duration-300 ease-in-out hover:text-[#3c3fde] font-bold">
                    The Best Early Black Friday Deals on Gaming Laptops and
                    Accessories
                  </p>
                </div>
                <div className="flex gap-5">
                  <p className="text-gray-400 font-semibold text-xs">Mar 10, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-lg text-white flex justify-center gap-2 w-[100%] mt-10 mb-10 ">
          <div className=" flex justify-center items-center transition-all duration-300 ease-in-out hover:text-[#3c3fde] bg-[#0f0f11] h-10 w-10 rounded-full  ">
            <FaFacebookF />
          </div>
          <div className=" flex justify-center items-center transition-all duration-300 ease-in-out hover:text-[#3c3fde] bg-[#0f0f11]  h-10 w-10 rounded-full  ">
            <FaXTwitter />
          </div>
          <div className=" flex justify-center items-center transition-all duration-300 ease-in-out hover:text-[#3c3fde] bg-[#0f0f11]  h-10 w-10 rounded-full  ">
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
