import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";

const whatsappNumber = "60192484931";

const slides1 = [
  {
    id: 1,
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medical-and-health-services-instagram-post-ad-design-template-2e03fd7748bb65dddd1f924a7deb50bf_screen.jpg?ts=1609194309",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula libero eget justo fringilla, in bibendum elit laoreet. Nullam nec dolor ac lorem fringilla accumsan.",
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi Im interested in the 40% off for health and medical services.",
  },
  {
    id: 2,
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medical-health-banner-instagram-post-advertis-design-template-701ee14b702b5cdbd33c4ed8e21e81ba_screen.jpg?ts=1610149059",
    info: "Praesent pulvinar euismod sapien, vel volutpat libero aliquam quis. Fusce ac urna nec ipsum facilisis cursus. Etiam ultrices, velit at convallis hendrerit, tortor quam fringilla neque.",
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi I reall want to meet the hot doctor",
  },
  {
    id: 3,
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medical-care-banner-instagram-post-design-template-74b49e8f24ed8bb4f8fe0945f5b13ab9_screen.jpg?ts=1601912788",
    info: "Suspendisse potenti. Vivamus sed est vel ex accumsan cursus. Phasellus efficitur metus non felis pharetra, sed ornare nunc rhoncus.",
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi I need help with my cake eating disorder Thanks",
  },
];

// const slideElement = slides1.entries().next().value;

export const Carousel3 = () => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides1.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides1.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="  lg:flex lg:flex-grow lg:gap-5 lg:px-32 lg:py-32 max-w-[1920px] ">
      <div>
        <div className="overflow-hidden relative mx-auto max-w-2xl  lg:rounded-3xl lg:drop-shadow-xl">
          <div
            className=" flex transition-transform ease-out duration-500  lg:w-[650px]   "
            style={{ transform: `translateX(-${curr})` }}
          >
            <img className=" " src={slides1[curr].img} alt="" />
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4 ">
            <div
              onClick={prev}
              className=" bg-white/0 h-full items-center flex place-items-cente"
            >
              <button className="p-1 rounded-full shadow bg-white/50 text-purple hover:bg-white text-2xl lg:text-5xl">
                <BsChevronLeft stroke-width="1" />
              </button>
            </div>
            <div
              onClick={next}
              className=" bg-white/0 h-full items-center flex place-items-cente"
            >
              <button className="p-1 rounded-full shadow bg-white/50 text-purple hover:bg-white text-2xl lg:text-5xl">
                <BsChevronRight stroke-width="1" />
              </button>
            </div>
          </div>
          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
              {slides1.map((_: any, id: number) => (
                <div
                  key={id}
                  className={`
              transition-all w-1 h-1 bg-white rounded-full
              ${curr === id ? "p-1" : "bg-opacity-50"}
            `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:flex-grow lg:px-10 max-w-6xl">
        <div>
          <h1 className="text-center text-purple font-black tracking-wider text-6xl hidden lg:block">
            PROMOTION
          </h1>
        </div>
        <div className=" text-center px-10 py-5  lg:text-2xl lg:px-20 lg:py-20">
          {slides1[curr].info}
        </div>
        <div className="flex justify-center  ">
          <a href={slides1[curr].whatsapp} className="flex-auto  ">
            <div className="py-5 bg-purple text-white flex justify-center items-center gap-1.5 lg:mx-auto lg:w-fit lg:rounded-full lg:px-10 lg:gap-5  ">
              <AiOutlineWhatsApp className="text-xl lg:text-3xl" />
              <h1 className=" font-extrabold text-sm text-center lg:text-lg ">
                BOOK NOW
              </h1>
            </div>
          </a>
          <a href="#" className="flex-auto ">
            <div className="py-5 bg-red-600 text-white flex justify-center gap-1.5 lg:mx-auto lg:w-fit lg:rounded-full lg:px-10 lg:gap-4">
              <BsArrowUpRightCircle className="text-xl lg:text-3xl" />
              <h1 className=" font-extrabold text-sm text-center lg:text-lg ">
                MORE PROMOTION
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
