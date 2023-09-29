import React from "react";
import Image from "next/image";
import Doctor from "/public/Doctor.png";
import Background from "/public/background.svg";
import Line from "/public/Line.svg";
import Link from "next/link";

import { AiOutlineWhatsApp } from "react-icons/ai";

function Hero2() {
  return (
    <main>
      <div className=" overflow-hidden">
        <div className=" relative mx-auto  h-[520px] md:h-auto">
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
                className="absolute bottom-0 -right-10 h-[350px] w-auto md:hidden"
              ></Image>
            </div>
          </div>
          <div className="relative p-7 md:p-10 md:pb-0  w-fit  md:mx-auto max-w-[1440px] xl:p-20 xl:pb-0">
            <div className=" flex md:gap-10 items-center xl:gap-20">
              <div className="  h-fit">
                <Image
                  src={Doctor}
                  alt=""
                  className=" hidden md:block  md:w-[300px] md:h-full  h-[350px]  xl:w-[450px]  "
                ></Image>
              </div>
              <div className="">
                <h1 className="text-6xl w-fit font-bold text-white  md:text-5xl lg:text-6xl xl:text-8xl">
                  KLINIK <span className="text-yellow-400">HANITA</span>
                </h1>
                <p className="text-white text-xs w-3/5 py-3 sm:w-4/5 xl:text-lg">
                  To provide patient-centered healthcare with excellence in
                  quality, service and access.
                </p>
                <Image src={Line} alt="" className="  md:h-[50px] xl:h-auto " />
                <h3 className="text-white py-2 uppercase w-fit xl:text-3xl xl:py-5">
                  Business Hours:
                </h3>
                <ul className="text-white text-xxs  w-2/5 md:w-full xl:text-lg">
                  <li>MONDAY - FRIDAY (9AM - 10PM)</li>
                  <li>SATURDAY (9AM - 9PM)</li>
                  <li>SUNDAY (10AM -9PM)</li>
                  <li>PUBLIC HOLIDAY (10AM - 9PM)</li>
                </ul>
                <Link legacyBehavior href="https://wa.me/60132401055?">
                  <button className="flex items-center gap-2 rounded-full animate-bounce bg-green-600 hover:bg-green-500 hover:shadow-md text-white px-5  mt-5 py-3  ">
                    <div className="text-white text-base xl:text-3xl  ">
                      <AiOutlineWhatsApp />
                    </div>
                    <h3 className="text-xs md:text-sm xl:text-lg">
                      CONTACT US
                    </h3>
                  </button>
                </Link>
                {/* <a href="https://wa.me/60132401055?">
                  <div className="inline-flex border-2   border-white rounded-full bg-green-600  my-5  items-center gap-2 px-3 py-1 w-fit xl:my-10 xl:gap-3 xl:py-2 xl:px-5 ">
                    <div className="text-white text-base xl:text-3xl  ">
                      <AiOutlineWhatsApp />
                    </div>
                    <h2 className="text-white text-xxs  font-bold  lg:text-xs xl:text-lg">
                      CONTACT US
                    </h2>
                  </div>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero2;
