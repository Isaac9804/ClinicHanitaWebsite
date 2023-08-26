import React from "react";
import Image from "next/image";
import gpanel from "/public/panels_img/Group15.png";
import { MdAdminPanelSettings } from "react-icons/md";
import SearchPanels from "./Carousel/SearchPanels";

import { BsArrowUpRightCircle } from "react-icons/bs";

function Panels1() {
  return (
    <div className=" text-center mx-auto max-w-[1920px] p-5 lg:p-10  xl:p-20 2xl:p-32 ">
      <MdAdminPanelSettings className="hidden text-purple lg:text-4xl xl:text-6xl mx-auto lg:block " />
      <h1 className="text-purple text-3xl py-10 font-black tracking-widest lg:text-4xl lg:py-5 xl:text-6xl xl:py-10">
        PANELS
      </h1>

      <p className="text-base px-10  mx-auto  lg:text-lg lg:max-w-4xl xl:text-2xl ">
        Experience the convenience of over 20 locally supported panels with
        quick and seamless registration. Explore additional panels for more
        options and possibilities.
      </p>
      {/* <SearchPanels /> */}

      <div className="min-w-xs max-w-2xl px-10 mx-auto">
        <Image className="mx-auto  " src={gpanel} alt="" sizes="" />
      </div>
      <div>
        <a href="#">
          <div className="flex justify-center gap-2 py-3 px-10  rounded-full my-20 items-center bg-blue-600 text-white w-fit mx-auto lg:my-20 lg:py-5 ">
            <h1 className="text-xs lg:text-2xl">MORE PANELS ....</h1>
            <BsArrowUpRightCircle className="text-sm lg:text-2xl" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Panels1;
