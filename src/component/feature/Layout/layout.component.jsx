import React from "react";
import { TbSquareRotated } from "react-icons/tb";
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
import FeaturedReviews from "../../Cards/MediumCards/FeaturedReviewsMedium";
import LastestArticlesLarge from "../../Cards/LargeCards/LastestArticlesLarge";
import LastestArticlesLarge2 from "../../Cards/LargeCards/LastestArticlesLarge2";
import SocialMediaSection from "../../SocialMedia/SocialMediaSection";
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
  useFeaturedReviewsMedium,
  useLastesArticlesLarge,
  useLastesArticlesLarge2,
} from "../../../Hooks/useCards";
import ArticleList from "../../Cards/SmallCards/GamingZone";

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
  const {
    data: featuredreviewsmeium = [],
    isLoading: isLoadingFeaturedReviewsMedium,
    error: errorFeaturedReviewsMedium,
  } = useFeaturedReviewsMedium();
  const {
    data: lastestarticleslarge = [],
    isLoading: isLoadingLastestArticlesLarge,
    error: errorLastestArticlesLarge,
  } = useLastesArticlesLarge();
  const {
    data: lastestarticleslarge2 = [],
    isLoading: isLoadingLastestArticlesLarge2,
    error: errorLastestArticlesLarge2,
  } = useLastesArticlesLarge2();

  if (
    isLoadingLargeCards ||
    isLoadingMediumCards ||
    isLoadingSmallCards ||
    isLoadingSection2Cards ||
    isLoadingSection3small ||
    isLoadingMediumVideoCards ||
    isLoadingSection4small ||
    isLoadingPhonesTechLarge ||
    isLoadingSection4smallside ||
    isLoadingFeaturedReviewsMedium ||
    isLoadingLastestArticlesLarge ||
    isLoadingLastestArticlesLarge2
  ) {
    return (
      <div className="w-full mt-16 flex justify-center">
        <img src="https://i.gifer.com/ZKZg.gif" alt="" />
      </div>
    );
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
    errorSection4smallside ||
    errorFeaturedReviewsMedium ||
    errorLastestArticlesLarge ||
    errorLastestArticlesLarge2
  ) {
    return <div>Error occurred while fetching data</div>;
  }

  const cardDataForTrendingVideosSection = largeCards?.filter(
    (card) => card?.id === "2"
  )[0];
  const LastestArticle = largeCards?.filter((card) => card?.id === "3")[0];

  const DataForSection1 = largeCards?.filter((cards) => cards?.id === "1")[0];

  return (
    <body className={isDarkMode ? "bg-[#0e0e0e]" : "bg-[#f7f7f7]"}>
      <section className="container mx-auto pl-20 mt-10 pr-20">
        <div className="w-full h-[1000px] flex pt-20 gap-10">
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
              <div className="h-0 border border-[#868686]"></div>
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
        <div className="w-full h-[1500px] flex gap-1 ">
          {/* 70% part */}
          <div className="w-[70%] h-[1500px] flex flex-col gap-5">
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
            <div className="flex w-full  mt-7 gap-5">
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
            <div className="w-full h-[300px] flex flex-wrap gap-10 mt-7 gap-x-10">
              {section4Small.map((card) => (
                <Section4small
                  key={card?.id}
                  {...card}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-5 mb-2 mt-10 text-black">
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
            <div className=" h-[320px] flex flex-wrap mt-3 gap-10 gap-x-[60px] ">
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
                  <Section4smallside
                    key={card?.id}
                    {...card}
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-32 pb-10">
          <div className="h-1 border w-[40%]"></div>
          <div className="text-3xl font-bold">
            <h1 className={isDarkMode ? "text-white" : "text-black"}>
              Featured Reviews
            </h1>
          </div>
          <div className="h-1 border w-[40%]"></div>
        </div>
        <div className="flex bg-[#02021f] text-white w-full rounded-2xl  ">
          <div className="flex flex-col justify-center gap-4  w-50%  ">
            <div className="pr-12 pl-12">
              <h1 className="text-3xl font-bold">
                Pico 4 Review: Should You Actually Buy One Instead Of Quest 2?
              </h1>
            </div>
            <div className="flex items-center pr-12 pl-12">
              <div className=" ">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                  alt=""
                />
              </div>
              <div className=" ">
                <h1 className="flex ml-4 text-white font-bold items-center gap-2 text-[12px]">
                  Shane Doe <TbSquareRotated /> Jan 15, 2021
                </h1>
              </div>
            </div>
            <div className="pr-12 pl-12">
              <h1>
                To understand the new smart watched and other pro devices of
                recent focus, we should look to…
              </h1>
            </div>
          </div>
          <div className="w-[77%] rounded-2xl">
            <img
              className=" object-cover rounded-tl-none rounded-2xl rounded-bl-none"
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/woman-in-3d-virtual-reality-glasses_t20_WQVvL4-768x513.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="flex gap-5 line-clamp-2 mt-10 ">
            {featuredreviewsmeium.map((card) => (
              <FeaturedReviews
                key={card?.id}
                {...card}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>
        <div className="flex w-[100%] h-[2550px] gap-5">
          <div className="w-[70%] h-[2600px] flex flex-col gap-5">
            <div className="flex items-center gap-5 pt-10  text-black">
              <h1
                className={` font-bold text-2xl ${
                  isDarkMode ? "text-white" : " text-black"
                }`}
              >
                Lastest Articles
              </h1>
              <div className="h-[3px] w-[77%] border border-gray-300"></div>
            </div>
            <div />
            <div className="flex flex-col w-full   gap-5">
              {lastestarticleslarge.map((card) => (
                <LastestArticlesLarge
                  key={card?.id}
                  {...card}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
            <div className="h-[450px] mb-5 mt-5">
              <LargeCard key={LastestArticle?.id} {...LastestArticle} />
            </div>
            <div className="flex flex-col w-full   gap-5">
              {lastestarticleslarge2.map((card) => (
                <LastestArticlesLarge2
                  key={card?.id}
                  {...card}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
          {/* 30 % part */}
          <div className="w-[30%] h-[1170px]  sticky top-16 ">
            <div className="w-full h-[350px]  relative pt-[50px]">
              <SocialMediaSection />
            </div>
            <div className=" p-6 rounded-lg  mx-auto">
              <h2
                className={` text-lg font-semibold mb-4  ${
                  isDarkMode ? "text-white" : " text-black"
                }`}
              >
                Gaming Zone
              </h2>
              <div className="relative mb-4">
                <div className="absolute top-0 left-0 bg-pink-600 text-white text-xs font-semibold px-2 py-1 rounded-br-lg">
                  GAMING
                </div>
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_422755408_xl-2015-1-1024x512.jpg" // Replace with the actual image URL
                  alt="PS5 vs Xbox"
                  className="rounded-lg"
                />
              </div>
              <h3
                className={` text-xl font-bold mb-2 ${
                  isDarkMode ? "text-white" : " text-black"
                }`}
              >
                PS5 vs Xbox Series XS vs Switch Launch Sales Comparison
              </h3>
              <div className="flex items-center text-gray-400 text-sm">
                <span
                  className={` mr-2 ${
                    isDarkMode ? "text-white" : " text-black"
                  }`}
                >
                  Shane Doe
                </span>
                <span>•</span>
                <span className="ml-2">Sep 8, 2020</span>
              </div>
            </div>
            <div>
              <ArticleList />
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Layout;
