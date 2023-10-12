"use client";

import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { UilAngleRight } from "@iconscout/react-unicons";
import { RxDotFilled } from "react-icons/rx";
const images = [
  {
    url: "https://images.bfmtv.com/wCISFMCy03bD5EVbJOHkRYXa0ec=/0x0:2048x1365/2048x0/biz_dev/1663831942265_macbook_pro_offre_remise_pc_portable_jpg.jpg",
    tag: "Tech",
    text: "Stay informed, stay ahead, and join us as we explore the ever-evolving world of technology",
    bg: "bg-purple-500 ",
  },
  {
    url: "https://worldsteelgroup.com/wp-content/uploads/2020/07/USA_Independence_Day4-1.jpg",
    tag: "USA",
    text: "Delivering top stories, politics, and events shaping the United States",
    bg: "bg-blue-800 ",
  },
  {
    url: "https://hoopshype.com/wp-content/uploads/sites/92/2020/10/GettyImages-1200852117.jpg",
    tag: "Sports",
    text: "Stay in the game with our comprehensive sports Live updates.",
    bg: "bg-green-700 ",
  },
  {
    url: "https://www.journalofdemocracy.org/wp-content/uploads/2022/10/GettyImages-1230733998-scaled.jpg",
    tag: "Politics",
    text: "Analysis, policy updates, and breaking news on the political landscape.",
    bg: "bg-yellow-700 ",
  },
];
const Slider = () => {
  const [index, setIndex] = useState(0);
  const [dotStates, setDotStates] = useState(
    new Array(images.length).fill(false)
  );

  const nextImg = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevImg = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const slideDotsChange = (clickedIndex: number) => {
    setIndex(clickedIndex);

    const newDotStates = dotStates.map((_, i) => i === clickedIndex);
    setDotStates(newDotStates);
  };

  return (
    <div className="max-w-[1800px] h-[50vh] w-[100vw] md:h-[75vh] lg:h-[80vh] lg:w-[100vw] xl:h-[100vh] xl:w-[100vw] relative mx-auto mt-4 mb-20">
      <div
        style={{ backgroundImage: `url(${images[index].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 flex items-end pl-2"
      >
        <div className="text-white mb-1 ml-1  flex flex-col gap-2 md:gap-6 md:p-3 xl:pb-[3rem]">
          <span
            className={`fontbold ${images[index].bg} w-[100px] ml-2  text-center rounded-md p-[4px] md:p-[5px] md:max-w-[14%] xl:text-xl `}
          >
            {images[index].tag}
          </span>
          <span className="fontbold w-[95%] p-1 text-[0.8rem] md:text-[1.5rem] md:p-[5px]  xl:text-[1.7rem] xl:p-[10px] md:w-[70%]">
            {images[index].text}
          </span>
        </div>
      </div>
      <div
        onClick={prevImg}
        className="absolute top-[48%] left-[2%] cursor-pointer text-white bg-black/20 rounded-[50%] p-1 hover:bg-black/50 transition ease-in-out"
      >
        <BsChevronCompactLeft size={40} />
      </div>
      <div
        onClick={nextImg}
        className="absolute top-[48%] right-[2%] cursor-pointer text-white bg-black/20 rounded-[50%] p-1 hover:bg-black/50 transition ease-in-out"
      >
        <BsChevronCompactRight size={40} />
      </div>
      <div className="flex items-center justify-center">
        {images.map((img, idx) => (
          <div
            onClick={() => slideDotsChange(idx)}
            className={`cursor-pointer text-4xl ${
              dotStates[idx] ? "text-gray-500" : ""
            } `}
            key={idx}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
