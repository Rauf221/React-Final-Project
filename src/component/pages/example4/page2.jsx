import React from "react";
import Layout from "../../feature/Layout/layout.component";
import {

  useMediumCards,

} from "../../../Hooks/useCards";

const Page2 = () => {
  const {
    data: mediumCards = [],
  
  } = useMediumCards();
  return (
    <body>
      <section className="container pr-20 pl-20 flex flex-col mt-20 mx-auto ">
        <div className="w-full h-[1000px] flex  gap-10">
          <div className="w-[70%] h-[100%] flex flex-col  gap-10 ">
            <div className="flex items-center text-gray-600 text-sm mb-4">
              <span className="mr-2">Home</span>
              <span className="mx-2">{`>>`}</span>
              <span className="text-gray-800 font-semibold">
                Category: "Gadgets"
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Browsing: Gadgets</h1>
            </div >
            <div className="flex gap-10 ">
            {mediumCards.map((card, index) => (
              <div key={index}>
                <div className=" gap-10">
                  <div className="w-[100%]">
                    <img
                      className="w-[100%] h-[400px] object-cover rounded-xl"
                      src={card.image}
                      alt=""
                    />
                  </div>
                  <div className="w-[100%] flex flex-col gap-4">
                    <div className="flex gap-2">
                      <h1 className="text-gray-400 text-xs font-semibold">
                        {card.category}
                      </h1>
                      <h1 className="text-gray-400 text-xs font-semibold">
                        {card.author}
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">{card.title}</h1>
                    </div>
                    <div className="flex gap-2">
                      <p className="text-gray-400 font-semibold text-xs">
                        {card.author}
                      </p>
                      <p className="text-gray-400 font-semibold text-xs flex items-center gap-1">
                        {card.timeAgo}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Page2;
