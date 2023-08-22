import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";

const whatsappNumber = "60192484931";

const slides1 = [
  {
    id: 1,
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medical-and-health-services-instagram-post-ad-design-template-2e03fd7748bb65dddd1f924a7deb50bf_screen.jpg?ts=1609194309",
    info: "Our clinic provides health medical services with a 40% off discount. Click on book now to setup an appointment",
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi Im interested in the 40% off for health and medical services.",
  },
  {
    id: 2,
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medical-health-banner-instagram-post-advertis-design-template-701ee14b702b5cdbd33c4ed8e21e81ba_screen.jpg?ts=1610149059",
    info: "The discount to meet a realy handsome doctor of your choice with a discount of 20% for every visit. Click on the book now to setup your dating schedule now!!!",
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi I reall want to meet the hot doctor",
  },
  {
    id: 3,
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medical-care-banner-instagram-post-design-template-74b49e8f24ed8bb4f8fe0945f5b13ab9_screen.jpg?ts=1601912788",
    info: "This doctor can help you cure your desire of eating cake.",
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
    <div>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr})` }}
        >
          <img src={slides1[curr].img} alt="" />
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
      <div className=" text-center px-10 py-5 text-sm">
        {slides1[curr].info}
      </div>
      <div className="flex justify-center ">
        <a href={slides1[curr].whatsapp} className="flex-auto">
          <div className="py-5 bg-purple text-white flex justify-center gap-1.5">
            <AiOutlineWhatsApp className="text-xl" />
            <h1 className=" font-extrabold text-sm text-center ">BOOK NOW</h1>
          </div>
        </a>
        <a href="#" className="flex-auto  ">
          <div className="py-5 bg-red-600 text-white flex justify-center gap-1.5">
            <BsArrowUpRightCircle className="text-xl" />
            <h1 className=" font-extrabold text-sm text-center ">
              MORE PROMOTION
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
};
