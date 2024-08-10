import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Sidebar from "../../sidebar/Sidebar";
import { useTheme } from "../../Dark&Lightmode/ThemeContext";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className={isDarkMode ? "dark" : "light"}>
      <div className= {` w-full z-[9999] scroll- fixed top-0  ${isDarkMode ? "text-white bg-black" : " bg-white text-black"}`} >
        <div className="container mx-auto pl-20 relative z-20 pr-20">
          <div className="flex justify-between items-center ">
            <div className="flex items-center">
              <button
                className={isDarkMode ? "text-white" : "text-black"}
                onClick={toggleSidebar}
              >
                <GiHamburgerMenu className="text-xl font-bold" />
              </button>
              <div>
                <img
                  className="w-[150px]"
                  src={
                    isDarkMode
                      ? "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/techblog-logo-dark@2x.png"
                      : "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png"
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="w-[60%]">
              <ul className="flex justify-start gap-10 ml-5 text-md font-bold">
                <li className="border-b-0 hover:border-blue-600 hover:border-b-2 pt-5 py-5">
                  <Link to="/">Home</Link>
                </li>
                <li className="border-b-0 hover:border-blue-600 hover:border-b-2 pt-5 py-5">
                  <Link to="/">
                    <h1 className="flex items-center gap-1">
                      Feature
                      <div className="text-xs text-blue-600">
                        <IoIosArrowDown />
                      </div>
                    </h1>
                  </Link>
                </li>
                <li className="border-b-0 ease-in-out duration-300  transition-all  group  hover:border-blue-600 hover:border-b-2 pt-5 py-5">
                  <Link to="/">
                    <h1 className="flex items-center gap-1">
                      Technology
                      <div className="text-xs text-blue-600">
                        <IoIosArrowDown />
                      </div>
                    </h1>
                  </Link>
                    <div className="absolute z-[100] ease-in-out mr-20 ml-20 delay-100 duration-300 transition-all opacity-0 invisible group-hover:visible   group-hover:opacity-100   pt-0 group-hover:flex group-hover:transition-opacity p-3 group-hover:duration-300  right-0 left-0   transform   translate-y-4 ">
                      <div className={isDarkMode ? "text-white  bg-black  mx-auto   right-0 left-0 gap-5   p-3 flex  transform opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0" : "text-black, flex bg-white  mx-auto pb-3 right-0 left-0 gap-5    transform opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"} >
                        <div className="w-[220px] z-50">
                        
                          <div>
                            <img
                              className="w-[230px] h-[120px] rounded-lg object-cover"
                              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-1024x582.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <p className="text-md">
                              Is the Hyperloop Doomed? What Elon Musk’s Latest
                              Setback Really Means
                            </p>
                            <p className="text-xs text-gray-400">Mar 10, 2022</p>
                          </div>
                        </div>
                        <div className="w-[230px] z-50">
                          <div>
                            <img
                              className="w-[230px] h-[120px] rounded-lg object-cover"
                              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-1024x683.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <p className="text-md">
                              The Best Early Black Friday Deals on Gaming Laptops
                              and Accessories
                            </p>
                            <p className="text-xs text-gray-400">Mar 10, 2022</p>
                          </div>
                        </div>
                        <div className="w-[230px]">
                          <div>
                            <img
                              className="w-[230px] h-[120px] rounded-lg object-cover"
                              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-bogdan-glisik-1661469-1-1024x886.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <p className="text-md">
                              Apple Watch’s ECG Can Help Diagnose Heart Problem:
                              Research
                            </p>
                            <p className="text-xs text-gray-400">Jan 19, 2021</p>
                          </div>
                        </div>
                        <div className="w-[230px]">
                          <div>
                            <img
                              className="w-[230px] h-[120px] rounded-lg object-cover"
                              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-luis-quintero-1787236-1024x683.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <p className="text-md">
                              Simple Tips and Tricks to Take Care of Your
                              Expensive DSLR Camera
                            </p>
                            <p className="text-xs text-gray-400">Jan 16, 2021</p>
                          </div>
                        </div>
                        <div className="w-[230px]">
                          <div>
                            <img
                              className="w-[230px] h-[120px] rounded-lg object-cover"
                              src="https://smartmag.theme-sphere.com/classic/wp-content/uploads/sites/3/2013/12/323207352_99cfa642d7_o-1030x579.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <p className="text-md">
                              Tech Study Reveals Effects of Mobile Technology on
                              Professionals
                            </p>
                            <p className="text-xs text-gray-400">Jan 15, 2021</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="border-b-0 hover:border-violet-500 hover:border-b-2 pt-5 py-5">
                  <Link to="/gadgets">
                    <h1>Gadgets</h1>
                  </Link>
                </li>
                <li className="border-b-0 hover:border-green-600 hover:border-b-2 pt-5 py-5">
                  <Link to="/">
                    <h1>Phones</h1>
                  </Link>
                </li>
                <li className="border-b-2 border-transparent hover:border-blue-600 hover:border-b-2 pt-5 py-5">
                  <Link to="/">
                    <h1>Buy Theme</h1>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <button className="text-white text-xs font-bold rounded-md p-2 pr-4 pl-4 bg-blue-600">
                SUBSCRIBE
              </button>
              <button
                className={isDarkMode ? "text-white" : "text-black"}
                onClick={toggleTheme}
              >
                <FaRegMoon className="text-md ml-5" />
              </button>
              <button className={isDarkMode ? "text-white" : "text-black"}>
                <FaSearch className="text-lg ml-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </nav>
  );
};

export default Navbar;
