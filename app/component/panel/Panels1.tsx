import React from "react";
import Image from "next/image";
import gpanel from "/public/panels_img/Group13.png";
import SearchPanels from "./Carousel/SearchPanels";

import { BsArrowUpRightCircle } from "react-icons/bs";

function Panels1() {
  return (
    <div className="text-center mx-auto">
      <h1 className="font-black tracking-widest text-purple text-2xl mb-1 pt-10">
        PANELS
      </h1>

      <h1 className="text-2xl font-black tracking-widest pb-3 text-purple"></h1>
      <p className="text-xs px-8  mx-5">
        These are the supported panels to ensure you do not have to worry about
        anything and focus on getting the care you need
      </p>
      {/* <SearchPanels /> */}
      <div>
        <Image className="mx-auto" src={gpanel} alt="" sizes="" />
      </div>
      <a href="#">
        <div className="flex justify-center gap-2 py-3 px-10  rounded-full mb-10 items-center bg-fuchsia-200 text-purple w-fit mx-auto">
          <h1 className="text-xs font">MORE PANELS ....</h1>
          <BsArrowUpRightCircle className="text-sm" />
        </div>
      </a>
    </div>
  );
}

export default Panels1;
