"use client";

import Head from "next/head";
import Navbar1 from "@/app/component/navbar/Navbar1";
import Hero1 from "@/app/component/hero/Hero1";
import Promotion1 from "./component/promotion/Promotion1";
import Panels1 from "./component/panel/Panels1";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export default function Home() {
  return (
    <main>
      {/* ----------------------Header Section--------------------------------------- */}

      <Head>
        <title>KlinikHanita</title>
        <meta name="description" content="Website Klinik Hanita" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {/* ----------------------Navbar Section--------------------------------------- */}

      <Navbar1 />

      {/* ----------------------Hero Section--------------------------------------- */}

      <Hero1 />

      {/* ----------------------Promotion Section--------------------------------------- */}

      <Promotion1 />

      {/* ----------------------Panels Section--------------------------------------- */}

      <Panels1 />

      {/* ----------------------Footer Section--------------------------------------- */}

      <footer>
        <div className="bg-purple">
          <div className="max-w-[1920px]">
            <div>
              <h1 className="text-center py-10 text-sm text-white lg:text-2xl lg:pt-20">
                FOLLOW US
              </h1>
              <div className="list-none flex justify-center gap-5 px-10 pb-10 text-3xl text-white lg:text-6xl">
                <BsInstagram />

                <BsFacebook />
              </div>
              <div className="px-10 text-white ">
                <h1 className="text-xs mx-auto text-center py-3 lg:text-2xl">
                  NO. 21, JALAN PINGGIRAN PUTRA 4A/14, DESA PINGGIRAN PUTRA,
                  43000 KAJANG,
                </h1>
                <h1 className="text-xs mx-auto text-center lg:text-2xl ">
                  Email: <a href="">klinikhanita@gmail.com</a>
                </h1>
                <div className="flex py-2 text-xs gap-2 justify-center lg:gap-5">
                  <h1 className=" lg:text-2xl">
                    Tel: <a href="">03-89271005</a>
                  </h1>
                  <h1 className="lg:text-2xl ">
                    Ws: <a href="">013-2401055</a>
                  </h1>
                </div>
              </div>
              {/* <div className="pt-5 px-16 text-white ">
                <FaLocationDot className="text-2xl mx-auto" />
                <h1 className="text-xxs mx-auto text-center pt-3 ">
                  NO. 21, JALAN PINGGIRAN PUTRA 4A/14, DESA PINGGIRAN PUTRA,
                  43000 KAJANG,
                </h1>
              </div>
              <div className="pt-5 px-16 text-white ">
                <CgMail className="text-2xl mx-auto" />
                <h1 className="text-xs mx-auto text-center py-2 ">
                  klinikhanita@gmail.com
                </h1>
              </div> */}
            </div>

            <p className="text-xxxs text-center text-purple1 px-10 py-10 lg:text-xl">
              Suspendisse potenti. Vivamus sed est vel ex accumsan cursus.
              Phasellus efficitur metus non felis pharetra, sed ornare nunc
              rhoncus.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
