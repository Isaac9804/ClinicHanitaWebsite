import React, { useState } from "react";

import { Carousel3 } from "./carousel/Carousel3";

function Promotion1() {
  return (
    <div className="lg:p-10   xl:p-20 2xl:p-32 max-w-[1920px] mx-auto">
      <div>
        <div>
          <h1 className="text-center text-purple font-black tracking-wider text-3xl py-10 lg:hidden">
            PROMOTION
          </h1>
        </div>
        <div className=" mx-auto">
          <Carousel3 />
        </div>
      </div>
    </div>
  );
}

export default Promotion1;
