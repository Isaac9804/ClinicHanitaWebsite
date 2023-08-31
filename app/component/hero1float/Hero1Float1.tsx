import React from "react";

import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";

function Hero1Float1() {
  return (
    <div className="flex items-center pt-2 px-5 sm:px-10 sm:pt-5">
      <div className="flex  flex-grow ">
        <div>
          <div className="flex items-center gap-1.5 md:gap-5 md:pb-3">
            <div className="text-base md:text-3xl">
              <AiOutlineClockCircle />
            </div>
            <h2 className="font-bold  sm:text-lg md:text-3xl ">
              BUSINESS HOURS
            </h2>
          </div>
          <div className="flex divide-x-2">
            <div className="pl-2"></div>
            <ul className="text-[10px] pl-3 tracking-wider font-semibold sm:text-base md:pl-8 ">
              <li>MONDAY - FRIDAY (9AM - 10PM)</li>
              <li>SATURDAY (9AM - 9PM)</li>
              <li>SUNDAY (10AM -9PM)</li>
              <li>PUBLIC HOLIDAY (10AM - 9PM)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" m-5 animate-pulse">
        <div className="bg-purple rounded-xl  w-[84px] h-[84px]  mx-auto shadow-xl  sm:w-[120px] sm:h-[120px] lg:hidden">
          <a
            href="https://goo.gl/maps/mDVe4NvBDKJu8FRE6"
            className="flex flex-col align-center gap-2 justify-center items-center h-full text-white  "
          >
            <IoLocationSharp className="text-xl sm:text-2xl" />
            <h3 className=" font-black text-center text-xs sm:text-base tracking-wider">
              CLINIC LOCATION
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero1Float1;
