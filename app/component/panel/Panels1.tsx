import React from "react";
import Image from "next/image";
import gpanel from "/public/panels_img/Group15.png";
import { MdAdminPanelSettings } from "react-icons/md";
import SearchPanels from "./Carousel/SearchPanels";
import Link from "next/link";

import { BsArrowUpRightCircle } from "react-icons/bs";

function Panels1() {
  return (
    <div className=" text-center mx-auto max-w-[1440px] w-10/12 ">
      {/* <MdAdminPanelSettings className="hidden text-purple lg:text-4xl xl:text-6xl mx-auto lg:block " /> */}
      <h1 className="text-slate-800 pt-20 pb-10 text-center text-lg font-bold md:text-2xl md:pt-40 md:pb-28 lg:text-4xl">
        PANELS
      </h1>
      <div className=" bg-white drop-shadow-lg  rounded-2xl mx-auto">
        <div className="min-w-xs max-w-2xl  mx-auto px-5 lg:px-10">
          <Image className="mx-auto  " src={gpanel} alt="" sizes="" />
        </div>
        <div className="py-10">
          <p className="w-8/12 mx-auto text-xs md:text-base  xl:text-xl py-10 ">
            Experience the convenience of over 20 locally supported panels with
            quick and seamless registration. Explore additional panels for more
            options and possibilities.
          </p>
          {/* <SearchPanels /> */}

          <div className="py-10">
            <Link legacyBehavior href="/component/navbar/panelsPage">
              <button className="  rounded-full bg-blue-700 hover:bg-blue-500 hover:shadow-md text-white px-5   py-3   ">
                <h3 className="text-xs md:text-base xl:text-lg">MORE PANELS</h3>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panels1;
