import React, { useState } from "react";

import { Carousel3 } from "./carousel/Carousel3";

function Promotion1() {
  return (
    <div>
      <div>
        <div className="py-5">
          <h1 className="text-center text-purple font-black tracking-wider text-xl">
            PROMOTION
          </h1>
        </div>
        <div className="max-w-lg">
          <Carousel3 />
        </div>
      </div>
    </div>
  );
}

export default Promotion1;
