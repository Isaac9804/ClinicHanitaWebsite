import React from "react";
import Image from "next/image";
import Doctor from "/public/Doctor.png";
import Background from "/public/background.svg";
import Line from "/public/Line.svg";

import { AiOutlineWhatsApp } from "react-icons/ai";

function Hero2() {
  return (
    <main>
      <div className="relative overflow-hidden">
        <div className=" relative mx-auto  h-[520px]">
          <div>
            <Image
              src={Background}
              alt=""
              layout="fill"
              objectFit="cover"
            ></Image>
            <div className="">
              <Image
                src={Doctor}
                alt=""
                className="absolute bottom-0 -right-10 h-[350px] w-auto"
                // layout="fill"
                // objectFit="cover"
              ></Image>
            </div>
          </div>
          <div className="relative p-10 ">
            <h1 className="text-6xl  font-bold text-white ">
              KLINIK <span className="text-yellow-400">HANITA</span>
            </h1>
            <p className="text-white text-xs w-3/5 py-3">
              To provide patient-centered healthcare with excellence in quality,
              service and access.
            </p>
            <Image src={Line} alt="" />
            <h3 className="text-white py-2 uppercase">Business Hours:</h3>
            <ul className="text-white text-xxs  w-2/5">
              <li>MONDAY - FRIDAY (9AM - 10PM)</li>
              <li>SATURDAY (9AM - 9PM)</li>
              <li>SUNDAY (10AM -9PM)</li>
              <li>PUBLIC HOLIDAY (10AM - 9PM)</li>
            </ul>
            <a href="https://wa.me/60192484931?text=Hello+I'm+looking+for+a+doctor.+please+send+help!!!">
              <div className="flex border-2   border-white rounded-full bg-green-600  my-5 items-center gap-2 px-3 py-1 w-fit   ">
                <div className="text-white text-base lg:text-3xl ">
                  <AiOutlineWhatsApp />
                </div>
                <h2 className="text-white text-xxs  font-bold lg:text-lg  ">
                  CONTACT US
                </h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero2;
