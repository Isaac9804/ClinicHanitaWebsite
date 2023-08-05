"use client";
import { useState } from "react";
import Head from "next/head";
import Navbar1 from "@/app/component/navbar/Navbar1";
import Location1 from "@/app/component/hero1float/Hero1Float1";
import Promotion1 from "./app/component/promotion/carousel/Carousel1";
import Promotion2 from "./app/component/promotion/Promotion2";
import Image from "next/image";
import DoctorPhone from "/public/DoctorPhone.png";
import Doctor from "/public/Doctor.png";
import React, { Component } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import Panels from "./app/component/panel/Panels1";

export default function Home() {
  const slides = [
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medical-and-health-services-instagram-post-ad-design-template-2e03fd7748bb65dddd1f924a7deb50bf_screen.jpg?ts=1609194309",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medical-health-banner-instagram-post-advertis-design-template-701ee14b702b5cdbd33c4ed8e21e81ba_screen.jpg?ts=1610149059",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medical-care-banner-instagram-post-design-template-74b49e8f24ed8bb4f8fe0945f5b13ab9_screen.jpg?ts=1601912788",
    // "https://i.ibb.co/ncrXc2V/1.png",
    // "https://i.ibb.co/B3s7v4h/2.png",
    // "https://i.ibb.co/XXR8kzF/3.png",
    // "https://i.ibb.co/yg7BSdM/4.png",
  ];

  const slidestext = [
    {
      info: "Free",
    },
    {
      info: "Not Free",
    },
    {
      info: "I can make it free if you want",
    },
  ];

  // const slidestext = ["Free", "Not Free", "I can make it free for you"];

  return (
    <main>
      <Head>
        <title>KlinikHanita</title>
        <meta name="description" content="Website Klinik Hanita" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar1 />
      <section className="relative">
        <div className=" pb-[121px] flex bg-gradient-to-b from-purple to-purple1 ">
          <div className=" max-w-[176px] max-h-[224px]">
            {/* <Image src={DoctorPhone}  alt='' className='sm:hidden '/> */}
            <Image src={Doctor} alt="" className="h-full" />
            {/* <img src="..\public\Doctor.png" alt="" /> */}
          </div>
          <div className="pr-5">
            <h1 className="font-bold text-white text-kh  tracking-widest pt-7 pb-1 leading-8 ">
              KLINIK <span className="text-yellow-300">HANITA</span>
            </h1>
            <p className="text-white text-xxs ">
              To provide patient-centered healthcare with excellence.
            </p>

            {/* Contact Us button */}
            <a href="https://wa.me/60192484931?text=Hello+I'm+looking+for+a+doctor.+please+send+help!!!">
              <div className="flex border-2 rounded-full bg-green-600 justify-center my-3 items-center gap-1 px-2 py-0.5 w-fit">
                <div className="text-white ">
                  <AiOutlineWhatsApp size="1rem" />
                </div>
                <h2 className="text-white text-xxs py-0 font-bold">
                  CONTACT US
                </h2>
              </div>
            </a>

            {/* Contact */}
            <div className="tracking-wider">
              <div>
                <h3 className="flex gap-1 items-center text-white text-xxs">
                  <HiOutlineMail size="0.8rem" color="white" />
                  klinikhanita@gmail.com
                </h3>
              </div>
              <div>
                <h3 className="flex gap-1 items-center text-white text-xxs py-1">
                  <FiPhone size="0.8rem" color="white" />
                  03-89271005 / 013-2401055
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Working hours section */}
        <div className="sm:hidden absolute z-1 bottom-0  bg-white w-full rounded-t-2xl">
          <Location1 />
        </div>
      </section>

      <section>
        <div>
          <div className="py-5">
            <h1 className="text-center text-purple font-black tracking-wider text-xl">
              PROMOTION
            </h1>
          </div>
          <div className="max-w-lg">
            <Promotion1>
              {slides.map((s) => (
                <img key={s} src={s} alt="" style={{ maxWidth: "100%" }} />
              ))}
            </Promotion1>

            <div></div>
          </div>
          <div className="py-10 px-10 mx-auto text-center">
            <p className="text-gray-600 text-sm">
              Free Vaccination for students and folk over 90 years old. Limited
              to only the first 500 patients
            </p>
          </div>
          <div className="mx-auto mb-10 text-center text-purple py-2 px-3 border-solid border-purple rounded-full  border-4 w-fit">
            <h1 className="font-extrabold">BOOK NOW</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mx-auto">
          <h1 className="text-2xl font-black tracking-widest pb-2 text-purple">
            PANELS
          </h1>
          <p className="text-xs px-8 pb-5">
            These are the supported panels to ensure you do not have to worry
            about anything and focus on getting the care you need
          </p>
          <div>
            <Panels />
          </div>
        </div>
      </section>

      <footer>
        <div className="bg-purple">
          <p className="text-xxxs text-center text-purple1 px-10 py-3">
            Disclaimer: Legal information is not legal advice, read the
            disclaimer. The information provided on this site is not legal
            advice, does not constitute a lawyer referral service, and no
            attorney-client or confidential relationship is or will be formed by
            use of the site.
          </p>
        </div>
      </footer>

      {/* <section>
        <Promotion2/>
      </section> */}
    </main>
  );
}
