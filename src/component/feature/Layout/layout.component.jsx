import React from "react";
// {`  ${isDarkMode ? "text-white" : " text-black"}`}
import { MdMailOutline } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import LargeCard from "../../Cards/LargeCards/LargeCard";
import MediumCard from "../../Cards/MediumCards/MediumCard";
import SmallCard from "../../Cards/SmallCards/SmallCard";
import Section2cards from "../../Cards/MediumCards/section2cards";
import Section3small from "../../Cards/SmallCards/section3small";
import MediumVideoCards from "../../Cards/MediumCards/MediumVideoCards";
import Section4small from "../../Cards/SmallCards/section4small";
import PhonesTechLarge from "../../Cards/LargeCards/PhonesTechLarge";
import { useTheme } from "../../Dark&Lightmode/ThemeContext";
import Section4smallside from "../../Cards/SmallCards/Section4smallside";
import {
  useLargeCards,
  useMediumCards,
  useSmallCards,
  useSection2Cards,
  useSection3Small,
  useMediumVideoCards,
  useSection4Small,
  usePhonesTechLarge,
  useSection4SmallSide,
} from "../../../Hooks/useCards";

const Layout = () => {
  const { isDarkMode } = useTheme();

  const {
    data: largeCards = [],
    isLoading: isLoadingLargeCards,
    error: errorLargeCards,
  } = useLargeCards();
  const {
    data: mediumCards = [],
    isLoading: isLoadingMediumCards,
    error: errorMediumCards,
  } = useMediumCards();
  const {
    data: smallCards = [],
    isLoading: isLoadingSmallCards,
    error: errorSmallCards,
  } = useSmallCards();
  const {
    data: section2cards = [],
    isLoading: isLoadingSection2Cards,
    error: errorSection2Cards,
  } = useSection2Cards();
  const {
    data: section3small = [],
    isLoading: isLoadingSection3small,
    error: errorSection3small,
  } = useSection3Small();
  const {
    data: mediumVideoCards = [],
    isLoading: isLoadingMediumVideoCards,
    error: errorMediumVideoCards,
  } = useMediumVideoCards();
  const {
    data: section4Small = [],
    isLoading: isLoadingSection4small,
    error: errorSection4small,
  } = useSection4Small();
  const {
    data: phonestechlarge = [],
    isLoading: isLoadingPhonesTechLarge,
    error: errorPhonesTechLarge,
  } = usePhonesTechLarge();
  const {
    data: section4smallside = [],
    isLoading: isLoadingSection4smallside,
    error: errorSection4smallside,
  } = useSection4SmallSide();

  if (
    isLoadingLargeCards ||
    isLoadingMediumCards ||
    isLoadingSmallCards ||
    isLoadingSection2Cards ||
    isLoadingSection3small ||
    isLoadingMediumVideoCards ||
    isLoadingSection4small || 
    isLoadingPhonesTechLarge || 
    isLoadingSection4smallside
  ) {
    return <div>Loading...</div>;
  }

  if (
    errorLargeCards ||
    errorMediumCards ||
    errorSmallCards ||
    errorSection2Cards ||
    errorSection3small ||
    errorMediumVideoCards ||
    errorSection4small ||
    errorPhonesTechLarge ||
    errorSection4smallside
  ) {
    return <div>Error occurred while fetching data</div>;
  }

  const cardDataForTrendingVideosSection = largeCards.find(
    (card) => card?.id === 2
  );
  const DataForSection1 = largeCards.find((card) => card?.id === 1);

  return (
    <body className={isDarkMode ? "bg-[#0e0e0e]" : "bg-white"}>
      <section className="container mx-auto pl-20 mt-10 pr-20">
        <div className="w-full h-[1000px] flex pt-10 gap-10">
          <div className="w-[70%] h-[100%] flex flex-col  gap-10 ">
            <LargeCard
              key={DataForSection1?.id}
              {...DataForSection1}
              isDarkMode={isDarkMode}
            />
            <div className={`flex h-[100%] w-[100%] rounded-md gap-10 `}>
              {mediumCards.map((card) => (
                <MediumCard key={card?.id} {...card} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>
          <div className="w-[30%] h-[1000px]">
            <div className="flex flex-col gap-3 font-bold text-xl">
              <h1 className={isDarkMode ? "text-white" : "text-black"}>
                People's Favorite
              </h1>
              <div className="h-0 border border-gray-800"></div>
            </div>
            {smallCards.map((card) => (
              <SmallCard key={card?.id} {...card} isDarkMode={isDarkMode} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-10 pb-10">
          <div className="h-1 border w-[42%]"></div>
          <div className="text-3xl font-bold">
            <h1 className={isDarkMode ? "text-white" : "text-black"}>
              Editor's Picks
            </h1>
          </div>
          <div className="h-1 border w-[42%]"></div>
        </div>
        <div className="w-full flex gap-10 justify-center">
          {section2cards.map((card) => (
            <Section2cards key={card?.id} {...card} isDarkMode={isDarkMode} />
          ))}
        </div>
      </section>
      <section className="bg-[#191a3e] w-full h-[1000px]">
        <div className="container mx-auto h-[800px] pl-20 pr-20">
          <div className="flex items-center gap-10 pt-16 text-white">
            <h1 className="font-bold text-2xl">Trending Videos</h1>
            <div className="h-1 w-[82%] border border-gray-500"></div>
          </div>
          <div className="flex flex-col w-full gap-5">
            <div className="flex gap-10 items-start ">
              <div className="w-[65%] h-[500px] mt-16">
                <div>
                  <LargeCard
                    key={cardDataForTrendingVideosSection?.id}
                    {...cardDataForTrendingVideosSection}
                    type="video"
                  />
                </div>
              </div>
              <div className="w-[35%] h-[400px] mt-10">
                {section3small.map((card) => (
                  <Section3small
                    key={card?.id}
                    {...card}
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
            </div>
            <div className="w-full  flex gap-6 h-[300px]">
              {mediumVideoCards.map((card) => (
                <MediumVideoCards
                  key={card?.id}
                  {...card}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto pr-20 pl-20 ">
        <div className="w-full h-[1400px] flex  ">
          {/* 70% part */}
          <div className="w-[70%] h-[1400px] flex flex-col gap-5">
            <div className="flex items-center gap-5 pt-16 text-black">
              <h1
                className={` font-bold text-xl ${
                  isDarkMode ? "text-white" : " text-black"
                }`}
              >
                New Gadgets
              </h1>
              <div className="h-[3px] w-[70%] border border-gray-300"></div>
              <button className="flex items-center border border-gray-300 w-20 text-xs font-bold text-gray-400 rounded-full p-1 justify-center">
                See All <IoIosArrowForward />
              </button>
            </div>
            <div className="flex w-full  mt-10 gap-5">
              <div className="w-[50%] relative overflow-hidden ">
                <img
                  className="w-[100%] h-[300px] object-cover overflow-hidden rounded-2xl"
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-1024x445.jpg"
                  alt=""
                />
                <div className="absolute bottom-0 overflow-hidden">
                  <h1 className="pl-4 pr-4 py-1 text-white font-bold bg-fuchsia-600 rounded-lg text-sm">
                    Gadget
                  </h1>
                </div>
              </div>
              <div className="w-[50%] p-6">
                <div className="w-[100%] h-[100%] gap-3 flex flex-col justify-center ">
                  <h1
                    className={` font-bold hover:text-blue-600 translition-all line-clamp-2 duration-300 text-xl ${
                      isDarkMode ? "text-white" : " text-black"
                    }`}
                  >
                    Oculus Founder Makes a VR Headset That Can Literally Kill
                    You
                  </h1>
                  <div className=" flex">
                    <div>
                      <img
                        className="w-5 h-5 rounded-full"
                        src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                        alt=""
                      />
                    </div>
                    <h1
                      className={` flex ml-4 font-bold items-center gap-2 text-xs ${
                        isDarkMode ? "text-white" : " text-black"
                      }`}
                    >
                      Shane Doe | Jan 13, 2021
                    </h1>
                  </div>
                  <div
                    className={` flex flex-col gap-3 ${
                      isDarkMode ? "text-white" : " text-black"
                    }`}
                  >
                    <h1>
                      To understand the new smart watched and other pro devices
                      of recent focus, we should…
                    </h1>
                    <h1 className="text-blue-500 underline underline-offset-2">
                      Read More
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[300px] flex flex-wrap gap-x-10">
              {section4Small.map((card) => (
                <Section4small
                  key={card?.id}
                  {...card}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-5  text-black">
                <h1
                  className={` font-bold text-xl ${
                    isDarkMode ? "text-white" : " text-black"
                  }`}
                >
                  Phones & Tech
                </h1>
                <div className="h-[3px] w-[70%] border border-gray-300"></div>
                <button className="flex items-center border border-gray-300 w-20 text-xs font-bold text-gray-400 rounded-full p-1 justify-center">
                  See All <IoIosArrowForward />
                </button>
              </div>
            </div>
            <div className="flex w-full h-[350px] gap-10">
                {phonestechlarge.map((card) => ( 
                  <PhonesTechLarge
                  key={card?.id}
                  {...card}
                  isDarkMode={isDarkMode}
                />  
                ))}
            </div>
            <div className="w-full h-[300px] flex flex-wrap gap-x-[72px]">
              {section4Small.map((card) => (
                <Section4small
                  key={card?.id}
                  {...card}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>

          {/* 30 % part */}
          <div className="w-[30%] h-[1090px] pt-10 sticky top-0 ">
            <div className="w-full h-[500px]  relative pt-[50px]">
              <div
                className={`  w-[88%] mx-auto  h-[390px]  border-4 ml-11 rounded-lg flex items-center flex-col p-10 ${
                  isDarkMode
                    ? "text-white bg-black border-black"
                    : " bg-white text-black"
                }`}
              >
                <div className="text-2xl  text-center font-bold">
                  <h1>Subscribe to Updates</h1>
                </div>
                <div className="text-sm font-semibold text-[#838282] mt-5 text-center">
                  <h1>
                    Get the latest creative news from FooBar about art, design
                    and business.
                  </h1>
                </div>
                <div className="w-[100%] flex flex-col items-center">
                  <input
                    className={`  pr-2 pl-2 w-[250px] mt-5 pb-3 pt-3 border  border-gray-700 rounded-sm text-center text-md ${
                      isDarkMode ? "text-white bg-black" : "bg-white text-black"
                    }`}
                    type="text"
                    placeholder="Your email address.."
                  />
                  <button className="w-[250px] pb-3 pt-3 text-white font-bold text-xs bg-blue-600 mt-3 rounded-sm">
                    SUBSCRIBE
                  </button>
                </div>
                <div className="flex items-baseline mt-5">
                  <input className="w-3 h-3" type="checkbox" name="" id="" />
                  <p className="text-center text-xs font-bold text-gray-500">
                    By signing up, you agree to the our terms and our Privacy
                    Policy agreement.
                  </p>
                </div>
                <div
                  className={`w-20 h-20 bg-blue-700 absolute border-8  top-3 rounded-full flex justify-center items-center text-5xl ${
                    isDarkMode
                      ? "border-black text-black"
                      : "border-white text-white"
                  }`}
                >
                  <MdMailOutline />
                </div>
              </div>
            </div>
            <div>
            <div className="flex flex-col gap-3 font-bold  ml-10 text-xl">
              <h1 className={isDarkMode ? "text-white" : "text-black"}>
                Popular Now
              </h1>
              <div className="h-0 border border-gray-800"></div>
            </div>
             <div className="w-[93%] flex flex-col items-center ml-10 mt-10">
             {section4smallside.map((card) => (
              <Section4smallside key={card?.id} {...card} isDarkMode={isDarkMode} />
            ))}
             </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Layout;
