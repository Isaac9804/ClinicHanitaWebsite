import React from "react";

import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";

function Hero1Float1() {
  return (
    <div className="flex items-center pt-2 px-5 sm:px-10 sm:pt-5">
      <div className="flex  flex-grow ">
        <div>
          <div className="flex items-center gap-1.5">
            <div>
              <AiOutlineClockCircle size="1rem" />
            </div>
            <h2 className="font-bold text-[14px] sm:text-lg">BUSINESS HOURS</h2>
          </div>
          <div className="flex divide-x-2 ">
            <div className="pl-2"></div>
            <ul className="text-[10px] pl-3 tracking-wider font-semibold sm:text-base">
              <li>MONDAY - FRIDAY (9AM - 10PM)</li>
              <li>SATURDAY (9AM - 9PM)</li>
              <li>SUNDAY (10AM -9PM)</li>
              <li>PUBLIC HOLIDAY (10AM - 9PM)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" m-5 ">
        <div className="bg-purple rounded-xl  w-[84px] h-[84px] text-[9px] mx-auto shadow-lg animate-pulse sm:w-[120px] sm:h-[120px] lg:hidden">
          <a
            href="https://goo.gl/maps/mDVe4NvBDKJu8FRE6"
            className="flex justify-center items-center h-full "
          >
            <h3 className=" font-black text-center text-white text-xs sm:text-base">
              CLINIC LOCATION
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero1Float1;
