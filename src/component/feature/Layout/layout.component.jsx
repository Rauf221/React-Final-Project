import React from "react";
import { useTheme } from "../../Dark&Lightmode/ThemeContext";
import { TbSquareRotated } from "react-icons/tb";

const Layout = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`h-[1100px] z-0 ${isDarkMode ? "bg-custombg " : "bg-white "}`}>
      <div className="container  text-white mx-auto z-0 pl-20 pr-20">
        <div>
          <div className="w-full h-[1200px] flex pt-5 gap-10 ">
            <div className="w-[70%] h-[90%]  flex flex-col gap-10">
              <div className="h-[52%]  relative  overflow-hidden rounded-xl ">
                <img
                  className="w-[100%] h-[100%] -z-10  object-cover translition-all  duration-500 hover:scale-105 "
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-1024x683.jpg"
                  alt=""
                />
                <div className="absolute  bottom-48 left-10 ">
                  <h1 className="pl-3 pr-3 py-1 pt-1 text-white font-bold  bg-fuchsia-600 rounded-md text-xs ">
                    GADGETS
                  </h1>
                </div>
                <div className="absolute  bottom-16 left-10">
                  <h1 className=" text-3xl font-bold w-[100%] p-2   bg-black ">
                    Save $25 on Philips Wired Headphone For A
                  </h1>
                  <h1 className=" text-3xl font-bold w-[90%] p-2 mt-2  bg-black ">
                    Great Sounding Over-Ear Headphone
                  </h1>
                </div>
                <div className="absolute z-50 bottom-3 left-11">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                    alt=""
                  />
                </div>
                <div className=" absolute z-50 bottom-6 left-20">
                  <h1 className="flex ml-4 font-bold items-center gap-2 text-xs">
                    Shane Doe <TbSquareRotated /> Jan 12,2020
                  </h1>
                </div>
              
              </div>
            

              {/* section 1 part 2 div  */}
              <div className="w-full  ">
                <div className="flex h-[100%] w-[100%] gap-10 ">
                  <div className="w-[100%] h-[450px] ">
                    <div className="  relative  overflow-hidden rounded-xl ">
                      <img
                        className="w-[100%] h-[50%] -z-10  object-cover translition-all  duration-500 hover:scale-105 "
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-1024x683.jpg"
                        alt=""
                      />
                      <div className="absolute  bottom-0 left-10 ">
                        <h1 className="pl-3 pr-3 py-1 pt-1 text-white font-bold  bg-fuchsia-600 rounded-md text-xs ">
                          GADGETS
                        </h1>
                        <div />
                      </div>
                    </div>
                    <div
                      className={` ${
                        isDarkMode
                          ? "text-white bg-black "
                          : "bg-white text-black "
                      }`}
                    >
                      <h1 className="p-6 font-bold text-xl">
                        Tablet PC Market to Witness Exponential Growth by 2028,
                        Sources Say
                      </h1>
                    </div>
                    <div
                      className={` ${
                        isDarkMode
                          ? "text-white bg-black "
                          : "bg-white text-black "
                      }`}
                    >
                      <h1 className=" p-6 flex ml-4 font-bold items-center gap-2 text-xs">
                        Shane Doe{" "}
                        <p className="text-gray-500 flex items-center">
                          <TbSquareRotated /> Jan 12,2020{" "}
                        </p>
                      </h1>
                    </div>
                  </div>
                  <div className="w-[100%] h-[450px] ">
                    <div className="  relative  overflow-hidden rounded-xl ">
                      <img
                        className="w-[100%] h-[50%] -z-10  object-cover translition-all  duration-500 hover:scale-105 "
                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-1024x683.jpg"
                        alt=""
                      />
                      <div className="absolute  bottom-0 left-10 ">
                        <h1 className="pl-3 pr-3 py-1 pt-1 text-white font-bold  bg-fuchsia-600 rounded-md text-xs ">
                          GADGETS
                        </h1>
                        <div />
                      </div>
                    </div>
                    <div
                      className={` ${
                        isDarkMode
                          ? "text-white bg-black "
                          : "bg-white text-black "
                      }`}
                    >
                      <h1 className="p-6 font-bold text-xl">
                        Tablet PC Market to Witness Exponential Growth by 2028,
                        Sources Say
                      </h1>
                    </div>
                    <div
                      className={` ${
                        isDarkMode
                          ? "text-white bg-black "
                          : "bg-white text-black "
                      }`}
                    >
                      <h1 className=" p-6 flex ml-4 font-bold items-center gap-2 text-xs">
                        Shane Doe{" "}
                        <p className="text-gray-500 flex items-center">
                          <TbSquareRotated /> Jan 12,2020{" "}
                        </p>
                      </h1>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="w-[30%] h-[1063px] ">
               <div>
                  <div className="">
                    <h1 className="font-bold text-xl">People's Favorite</h1>
                    <div className="h-1 border-b-1 border-gray-700"></div>
                  </div>
               </div>
            <div className="flex items-center">
              <div className="flex flex-col gap-2 justify-between w-[100%] ">
                <div className="text-purple-600 text-xs font-semibold"> 
                  <h1 className="">TECNOLOGY</h1>
                </div>
                <div className={isDarkMode ? "text-white" : "text-black"}>
                  <p className="hover:cursor-pointer text-lg w-60  transition-all duration-300 ease-in-out hover:text-[#3c3fde] font-bold">
                  Schools, Parents Disagree over Bans on Student Mobile Phones
                  </p>
                </div>
                <div className="flex gap-5">
                  <p className="text-gray-400 font-semibold text-xs">Mar 10, 2022</p>
                </div>
              </div>
              <div>
                <img
                  className="w-[150px] h-[100px] rounded-full"
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash.jpg"
                  alt="Pick 3"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
