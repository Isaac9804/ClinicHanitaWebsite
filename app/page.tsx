"use client";

import Head from "next/head";
import Navbar1 from "@/app/component/navbar/Navbar1";
import Hero1 from "@/app/component/hero/Hero1";
import Promotion1 from "./component/promotion/Promotion1";
import Panels1 from "./component/panel/Panels1";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";

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
          <div>
            <div>
              <h1 className="text-center pt-10 text-sm text-white">
                FOLLOW US
              </h1>
              <div className="list-none flex justify-center gap-5 px-10 py-5 text-3xl text-white">
                <BsInstagram />

                <BsFacebook />
              </div>
              <div className="pt-5 px-16 text-white ">
                <FaLocationDot className="text-2xl mx-auto" />
                <h1 className="text-xxs mx-auto text-center pt-3 ">
                  NO. 21, JALAN PINGGIRAN PUTRA 4A/14, DESA PINGGIRAN PUTRA,
                  43000 KAJANG,
                </h1>
              </div>
              <div className="pt-5 px-16 text-white ">
                <CgMail className="text-2xl mx-auto" />
                <h1 className="text-xs mx-auto text-center py-2 ">
                  klinikhanita@gmail
                </h1>
              </div>
            </div>

            <p className="text-xxxs text-center text-purple1 px-10 py-3">
              Disclaimer: Legal information is not legal advice, read the
              disclaimer. The information provided on this site is not legal
              advice, does not constitute a lawyer referral service, and no
              attorney-client or confidential relationship is or will be formed
              by use of the site.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
