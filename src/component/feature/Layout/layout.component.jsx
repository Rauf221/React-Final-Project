import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LargeCard from "../../Cards/LargeCards/LargeCard";
import MediumCard from "../../Cards/MediumCards/MediumCard";
import SmallCard from "../../Cards/SmallCards/SmallCard";
import { useTheme } from "../../Dark&Lightmode/ThemeContext";
import Section2cards from "../../Cards/MediumCards/section2cards";
import Section3small from "../../Cards/SmallCards/section3small";

const fetchCards = async (url) => {
  try {
    const {data}  = await axios.get(url);
    return data;
  } catch (error) {
    console.error("Error fetching cards:", error.message); 
    throw new Error("Error fetching cards");
  }
};

const Layout = () => {
  const { isDarkMode } = useTheme();

  const {
    data: largeCards = [],
    isLoading: isLoadingLargeCards,
    error: errorLargeCards,
  } = useQuery({
    queryKey: ["largeCards"],
    queryFn: () => fetchCards("http://localhost:3001/largeCards"),
  });

  const cardDataForTrendingVideosSection = largeCards?.filter(
    (card) => card.id === 2
  )[0];
  const DataForSection1 = largeCards?.filter(
    (card) => card.id === 1
  )[0];
  console.log(cardDataForTrendingVideosSection, "dataaaaaaa");
 
 
  const {
    data: mediumCards = [],
    isLoading: isLoadingMediumCards,
    error: errorMediumCards,
  } = useQuery({
    queryKey: ["mediumCards"],
    queryFn: () => fetchCards("http://localhost:3001/mediumCards"),
  });

  const {
    data: smallCards = [],
    isLoading: isLoadingSmallCards,
    error: errorSmallCards,
  } = useQuery({
    queryKey: ["smallCards"],
    queryFn: () => fetchCards("http://localhost:3001/smallCards"),
  });

  const {
    data: section2cards = [],
    isLoading: isLoadingSection2Cards,
    error: errorSection2Cards,
  } = useQuery({
    queryKey: ["Section2Cards"],
    queryFn: () => fetchCards("http://localhost:3001/section2Cards"),
  });
  const {
    data: section3small = [],
    isLoading: isLoadingSection3small,
    error: errorSection3small,
  } = useQuery({
    queryKey: ["section3small"],
    queryFn: () => fetchCards("http://localhost:3001/section3small"),
  });

  if (
    isLoadingLargeCards ||
    isLoadingMediumCards ||
    isLoadingSmallCards ||
    isLoadingSection2Cards||
    isLoadingSection3small
  ) {
    return <div>Loading...</div>;
  }

  if (
    errorLargeCards ||
    errorMediumCards ||
    errorSmallCards ||
    errorSection2Cards||
    errorSection3small
    
  ) {
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <body className={isDarkMode ? "bg-black" : "bg-white"}>
      <div className="container mx-auto pl-20 pr-20">
        <div className="w-full h-[1000px] flex pt-10 gap-10">
          {/* Large Cards */}
          <div className="w-[70%] h-[100%] flex flex-col gap-10">
            
              <LargeCard key={DataForSection1?.id} {...DataForSection1} isDarkMode={isDarkMode} />
            

            <div className="flex h-[100%] w-[100%] gap-10">
              {/* Medium Cards */}
              {mediumCards.map((card) => (
                <MediumCard key={card?.id} {...card} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>

          {/* Small Cards */}
          <div className="w-[30%] h-[1000px]">
            <div className="">
              <div className="flex flex-col gap-3 font-bold text-xl">
                <h1 className={isDarkMode ? "text-white" : "text-black"}>
                  People's Favorite
                </h1>
                <div className="h-0 border border-gray-800"></div>
              </div>
            </div>

            {smallCards.map((card) => (
              <SmallCard key={card?.id} {...card} isDarkMode={isDarkMode} />
            ))}
          </div>
        </div>
        {/* Horizontal column cards */}
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
      </div>
      <div className="bg-cyan-700 w-full h-[800px]">
        <div className="container mx-auto h-[800px] pl-20 pr-20 ">
          <div className={`flex items-center gap-10 pt-16 text-white`}>
            <h1 className="font-bold text-2xl">Tranding Videos </h1>
            <div className="h-1 w-[82%] border border-gray-500"></div>
          </div>
          {/* 2 div 60/40 */}
          <div className="flex w-full gap-10">
            <div className="w-[65%] h-[500px] mt-10 ">
              {
                <LargeCard
                  key={cardDataForTrendingVideosSection?.id}
                  {...cardDataForTrendingVideosSection}
                />
              }
            </div>
            <div className="w-[35%] h-[400px] mt-10">
              {section3small.map((card) => (
                <Section3small key={card?.id} {...card} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Layout;
