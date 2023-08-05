import React, { useState } from "react";
import Image from "next/image";
import Carousel1, { Carousel2 } from "./carousel/Carousel1";

function Promotion1() {
  const slides = [
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medical-and-health-services-instagram-post-ad-design-template-2e03fd7748bb65dddd1f924a7deb50bf_screen.jpg?ts=1609194309",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medical-health-banner-instagram-post-advertis-design-template-701ee14b702b5cdbd33c4ed8e21e81ba_screen.jpg?ts=1610149059",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medical-care-banner-instagram-post-design-template-74b49e8f24ed8bb4f8fe0945f5b13ab9_screen.jpg?ts=1601912788",
    // "https://i.ibb.co/ncrXc2V/1.png",
    // "https://i.ibb.co/B3s7v4h/2.png",
    // "https://i.ibb.co/XXR8kzF/3.png",
    // "https://i.ibb.co/yg7BSdM/4.png",
  ];
  // const words = [
  //   { value: "Apple" },
  //   { value: "Mango" },
  //   { value: "Banana" },
  //   { value: "Banana1" },
  //   { value: "Banana2" },
  // ];

  return (
    <div>
      <div>
        <div className="py-5">
          <h1 className="text-center text-purple font-black tracking-wider text-xl">
            PROMOTION
          </h1>
        </div>
        <div className="max-w-lg">
          <Carousel1>
            {slides.map((s) => (
              <img key={s} src={s} alt="" sizes="100vw" />
            ))}
          </Carousel1>
          {/* <Carousel2>
            {words.map((s) => (
              <div>
                <h1></h1>
              </div>
            ))}
          </Carousel2> */}
        </div>

        <div className="mx-auto mb-10 text-center text-purple py-2 px-3 border-solid border-purple rounded-full  border-4 w-fit">
          <h1 className="font-extrabold">BOOK NOW</h1>
        </div>
      </div>
    </div>
  );
}

export default Promotion1;
