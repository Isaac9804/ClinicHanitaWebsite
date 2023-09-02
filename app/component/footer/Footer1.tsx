"use client";

import "@/app/globals.css";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Footer1() {
  return (
    <footer>
      <div className="bg-purple mt-5 md:mt-0 ">
        <div className="max-w-[1920px] mx-auto">
          <div>
            <h1 className="text-center pt-10 text-sm text-white lg:text-2xl lg:pt-20">
              FOLLOW US
            </h1>
            <div className="flex justify-center gap-6 px-10 py-5 lg:pb-10 text-3xl text-white lg:text-6xl">
              <BsInstagram />

              <BsFacebook />
            </div>
            <div className="px-10 text-white ">
              {/* <h1 className="text-xs mx-auto text-center py-3 lg:text-xl">
              NO. 21, JALAN PINGGIRAN PUTRA 4A/14, DESA PINGGIRAN PUTRA,
              43000 KAJANG
            </h1> */}
              <h1 className="text-xs mx-auto text-center lg:text-xl ">
                Email: <a href="">klinikhanita@gmail.com</a>
              </h1>
              <div className="flex py-2 text-xs gap-2 justify-center lg:gap-5">
                <h1 className=" lg:text-xl">
                  Tel: <a href="">03-89271005</a>
                </h1>
                <h1 className="lg:text-xl ">
                  Ws: <a href="">013-2401055</a>
                </h1>
              </div>
            </div>
          </div>

          <p className="text-xxxs text-center text-purple1 px-10 py-10 lg:text-xl">
            Suspendisse potenti. Vivamus sed est vel ex accumsan cursus.
            Phasellus efficitur metus non felis pharetra, sed ornare nunc
            rhoncus.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
