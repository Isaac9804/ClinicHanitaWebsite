import React from "react";
import Image from "next/image";
import gpanel from "/public/panels_img/Group15.png";
import SearchPanels from "./Carousel/SearchPanels";

import { BsArrowUpRightCircle } from "react-icons/bs";

function Panels1() {
  return (
    <div className="text-center mx-auto justify-center max-w-[1920px]">
      <h1 className="font-black tracking-widest text-purple text-2xl mb-1 pt-10 lg:text-6xl lg:py-10">
        PANELS
      </h1>

      <p className="text-xs px-10  mx-auto leading-loose lg:text-2xl lg:max-w-4xl ">
        Over 20 local panels are support with fast and easy registration. Click
        on more panels to find more supported panels.
      </p>
      {/* <SearchPanels /> */}

      <div className="min-w-xs max-w-2xl px-10 mx-auto">
        <Image className="mx-auto  " src={gpanel} alt="" sizes="" />
      </div>
      <a href="#">
        <div className="flex justify-center gap-2 py-3 px-10  rounded-full my-10 items-center bg-fuchsia-200 text-purple w-fit mx-auto lg:my-20 lg:py-5 ">
          <h1 className="text-xs lg:text-2xl">MORE PANELS ....</h1>
          <BsArrowUpRightCircle className="text-sm lg:text-2xl" />
        </div>
      </a>
    </div>
  );
}

export default Panels1;
