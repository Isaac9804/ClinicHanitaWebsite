"use client";
import { useState } from "react";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const Carousel2 = ({ slide1 }: any) => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slide1 - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slide1 - 1 ? 0 : curr + 1));
  };
  return (
    <div>
      {/* <div className="overflow-hidden relative"> */}
      <div className=" relative">
        
        {/* <div
          className="transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          <img src={slide1.img} alt="" />
          <div className="text-center mx-auto py-5">{slide1.info}</div>
        </div> */}

        <div
          className="transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slide1.map((img:any,info:any) => (
            <div key={info}>
              <img src={slide1.img} alt="" />
              <div className="text-center mx-auto py-5">{slide1.info}</div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-between p-4 r">
          <div
            onClick={prev}
            className=" bg-white/0 h-full items-center flex place-items-cente"
          >
            <button className="p-1 rounded-full shadow bg-white/50 text-purple hover:bg-white ">
              <BsChevronLeft size={20} stroke-width="1" />
            </button>
          </div>
          <div
            onClick={next}
            className=" bg-white/0 h-full items-center flex place-items-cente"
          >
            <button className="p-1 rounded-full shadow bg-white/50 text-purple hover:bg-white">
              <BsChevronRight size={20} stroke-width="1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
