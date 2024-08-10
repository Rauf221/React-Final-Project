import React from 'react'

const Section4small = ({image , title,  date, author , ...probs}) => {
  return (
    <div>
        <div className="flex ">
              <div>
                <img
                  className="w-24 h-[70px] rounded-xl"
                  src={image}
                  alt="Pick 2"
                />
              </div>
              <div className="flex flex-col gap-2 justify-between w-[300px] pl-5">
                <div className="">
                  <p className="hover:cursor-pointer text-md text-white transition-all duration-300 ease-in-out hover:text-[#3c3fde] font-bold">
                    {title}
                  </p>
                </div>
                <div className="flex gap-5">
                  <p className="text-gray-400 font-semibold text-xs">{author}</p>
                  <p className="text-gray-400 font-semibold text-xs">{date}</p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Section4small