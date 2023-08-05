"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { text } from "stream/consumers";

export default function Carousel1({ children: slides }: any) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  return (
    <div>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
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

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_: any, i: number) => (
              <div
                key={i}
                className={`
              transition-all w-1 h-1 bg-white rounded-full
              ${curr === i ? "p-1" : "bg-opacity-50"}
            `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Carousel2({ children: words }: any) {
  const [curr, setCurr] = useState(0);
  const prev = () => {
    setCurr((curr) => (curr === 0 ? words.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === words.length - 1 ? 0 : curr + 1));
  };

  return (
    <div>
      <div>{words} </div>
    </div>
  );
}
