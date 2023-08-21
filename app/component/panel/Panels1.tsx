import React from "react";
import Image from "next/image";
import gpanel from "/public/panels_img/Group13.png";
import CarouselPanels from "./Carousel/CarouselPanels";

function Panels1() {
  return (
    <div className="text-center mx-auto">
      <h1 className="font-black tracking-widest text-purple text-2xl mb-1 pt-10" >PANELS</h1>

      <h1 className="text-2xl font-black tracking-widest pb-3 text-purple"></h1>
      <p className="text-xs px-8 pb-10 mx-5">
        These are the supported panels to ensure you do not have to worry about
        anything and focus on getting the care you need
      </p>
      <CarouselPanels/>
      <div className="pb-5">
        <Image className="mx-auto" src={gpanel} alt="" sizes="" />
      </div>
  
    </div>
  );
}

export default Panels1;
