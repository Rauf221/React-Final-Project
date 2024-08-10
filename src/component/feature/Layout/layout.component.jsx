import React from "react";
import LargeCard from "../../Cards/LargeCards/LargeCard";
import MediumCard from "../../Cards/MediumCards/MediumCard";
import SmallCard from "../../Cards/SmallCards/SmallCard";
import Section2cards from "../../Cards/MediumCards/section2cards";
import Section3small from "../../Cards/SmallCards/section3small";
import MediumVideoCards from "../../Cards/MediumCards/MediumVideoCards";
import { useTheme } from "../../Dark&Lightmode/ThemeContext";
import {
  useLargeCards,
  useMediumCards,
  useSmallCards,
  useSection2Cards,
  useSection3Small,
  useMediumVideoCards,
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

  if (
    isLoadingLargeCards ||
    isLoadingMediumCards ||
    isLoadingSmallCards ||
    isLoadingSection2Cards ||
    isLoadingSection3small ||
    isLoadingMediumVideoCards
  ) {
    return <div>Loading...</div>;
  }

  if (
    errorLargeCards ||
    errorMediumCards ||
    errorSmallCards ||
    errorSection2Cards ||
    errorSection3small ||
    errorMediumVideoCards
  ) {
    return <div>Error occurred while fetching data</div>;
  }

  const cardDataForTrendingVideosSection = largeCards.find(
    (card) => card?.id === 2
  );
  const DataForSection1 = largeCards.find((card) => card?.id === 1);

  return (
    <body className={isDarkMode ? "bg-[#0e0e0e]" : "bg-white"}>
      <section className="container mx-auto pl-20 pr-20">
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
      <div></div>

    </body>
  );
};

export default Layout;
