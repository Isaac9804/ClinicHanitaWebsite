"use client";

import "@/app/globals.css";
import React from "react";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Footer1() {
  return (
    // <footer>
    //   <div className="bg-purple mt-5 md:mt-0 ">
    //     <div className="max-w-[1920px] mx-auto">
    //       <div>
    //         <h1 className="text-center pt-10 text-sm text-white lg:text-2xl lg:pt-20">
    //           FOLLOW US
    //         </h1>
    //         <div className="flex justify-center gap-6 px-10 py-5 lg:pb-10 text-3xl text-white lg:text-6xl">
    //           <BsInstagram />

    //           <BsFacebook />
    //         </div>
    //         <div className="px-10 text-white ">
    //           {/* <h1 className="text-xs mx-auto text-center py-3 lg:text-xl">
    //           NO. 21, JALAN PINGGIRAN PUTRA 4A/14, DESA PINGGIRAN PUTRA,
    //           43000 KAJANG
    //         </h1> */}
    //           <h1 className="text-xs mx-auto text-center lg:text-xl ">
    //             Email: <a href="">klinikhanita@gmail.com</a>
    //           </h1>
    //           <div className="flex py-2 text-xs gap-2 justify-center lg:gap-5">
    //             <h1 className=" lg:text-xl">
    //               Tel: <a href="">03-89271005</a>
    //             </h1>
    //             <h1 className="lg:text-xl ">
    //               Ws: <a href="">013-2401055</a>
    //             </h1>
    //           </div>
    //         </div>
    //       </div>

    //       <p className="text-xxxs text-center text-purple1 px-10 py-10 lg:text-xl">
    //         Suspendisse potenti. Vivamus sed est vel ex accumsan cursus.
    //         Phasellus efficitur metus non felis pharetra, sed ornare nunc
    //         rhoncus.
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    <footer className="mt-40 bg-purple">
      <div className="max-w-[1440px] mx-auto text-white md:py-10 ">
        <div className="  space-y-3 w-3/4 p-10 md:mx-auto md:text-center md:w-1/2 md:space-y-5 xl:w-1/4 xl:space-y-10">
          <h1 className="text-base font-bold  md:text-xl xl:text-3xl">
            Location
          </h1>
          <ul className="text-xs ">
            <div className="hover:cursor-pointer">
              <Link
                legacyBehavior
                href="https://maps.app.goo.gl/itLgvzVXSgd3wPxS6"
              >
                <li className="pb-3 flex gap-4 md:block md:text-xs md:pb-7 xl:text-lg xl:pb-12 items-center">
                  <BsArrowUpRightCircle className="text-6xl md:hidden" />
                  <p>
                    21, Jalan Pinggiran Putra 4A/14, Desa Pingggiran Putra,
                    43000 Kajang, Selangor
                  </p>
                </li>
              </Link>
            </div>
            <div className="hover:cursor-pointer">
              <Link
                legacyBehavior
                href="https://maps.app.goo.gl/qLoogPkyZWLSXGz38"
              >
                <li className="pb-3 flex gap-4 md:block md:text-xs md:pb-7 xl:text-lg xl:pb-12 items-center">
                  <BsArrowUpRightCircle className="text-6xl md:hidden" />
                  <p>
                    NO10-G Giverny Walk, Jalan Sunsuria, Bandar Sunsuria, 43900
                    Sepang, Selangor
                  </p>
                </li>
              </Link>
            </div>

            {/* <a href="https://maps.app.goo.gl/itLgvzVXSgd3wPxS6">
              <li className="pb-3 flex gap-2 md:block md:text-xs md:pb-7 xl:text-lg">
                <BsArrowUpRightCircle className="text-4xl md:hidden" />
                <p>
                  NO10-G Giverny Walk, Jalan Sunsuria, Bandar Sunsuria, 43900
                  Sepang,Selangor
                </p>
              </li>
            </a> */}
          </ul>
          <h1 className="text-base font-bold  md:text-xl xl:text-3xl ">
            Contact
          </h1>
          <ul className="pb-3 text-xs md:text-xs md:pb-7 xl:text-lg">
            <li>Email : klinikhanita@gmail.com</li>
            <li>Phone : 03-89271005</li>
            <li>Whatsapp : 013-2401055</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xxs text-center  md:text-xs  xl:text-lg">
            Follow Us On
          </h3>
          <div className="flex gap-2 py-5 text-2xl justify-center md:text-4xl xl:text-6xl md:py-10 md:gap-5">
            <Link legacyBehavior href="https://m.facebook.com/KlinikHanitaDPP">
              <FaFacebookSquare />
            </Link>
            <Link
              legacyBehavior
              href="https://www.tiktok.com/@klinikhanita?_t=8gESQiRx74L&_r=1"
            >
              <FaTiktok />
            </Link>
            {/* <Link legacyBehavior href="#">
              <FaTwitter />
            </Link> */}
            {/* <Link legacyBehavior href="#">
              <FaYoutube />
            </Link> */}
            <Link
              legacyBehavior
              href="https://instagram.com/klinikhanita?igshid=MzRlODBiNWFlZA=="
            >
              <FaInstagram />
            </Link>
          </div>
          <p className="text-xxs text-center w-1/2 md:text-xs  xl:text-lg  lg:w-1/4 mx-auto pb-16">
            Copyright© 2007 Klinik Hanita. All rights reserved. HANITA GROUP
            SDN. BHD 202301032320 (1526243-K)).
          </p>
          <p className="text-xxs text-center w-1/2 md:text-xs  xl:text-lg  lg:w-1/4 mx-auto pb-16">
                        Copyright© 2007 Klinik Hanita. All rights reserved. HANITA GROUP
                                    SDN. BHD 202301032320 (1526243-K)).
                                              </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
