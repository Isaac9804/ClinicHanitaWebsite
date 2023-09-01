"use client";
import React from "react";
import Image from "next/image";
import Navbar1 from "../Navbar1";
import TreatmentCard from "./TreatmentCard";

import PromoSec from "./LabtestCard/PromoSec";
import ScreenSec from "./LabtestCard/ScreenSec";
import StudiesSec from "./LabtestCard/StudiesSec";

import Dropdown from "rsuite/Dropdown";
import { NextPage } from "next";
import Link from "next/link";

// https://img.freepik.com/free-photo/young-asia-female-doctor-white-medical-uniform-using-clipboard-is-delivering-great-news-talk-discuss-results_7861-3135.jpg?w=1480&t=st=1693547479~exp=1693548079~hmac=a8f72e72677aac88492d062a1926fb94e406f7e167a2e9d296ed74d2ef499e36

//Freepik
//Xray
//https://img.freepik.com/free-photo/muslim-female-woman-medical-doctor-examining-looking-pointing-xray-film-giving-explanation-patient-who-sitting-chair_554837-753.jpg?w=1380&t=st=1693547550~exp=1693548150~hmac=de30e534e66d53ffe1c4dba99a1f03a3b8ab33e18adaabc0d6545ce1e453829c
//Ultrasound
//https://img.freepik.com/free-photo/doctor-performing-ultrasound-scanning-her-pregnant-patient_7502-5429.jpg?w=1380&t=st=1693547644~exp=1693548244~hmac=f85f61dc4f316ac690123ff3293453802f0a6e32559bd268948331aef5cfa272

function ServicePage() {
  return (
    <main>
      <div className="sticky top-0 z-10">
        <Navbar1 />
        <div className="bg-white text-slate-700 flex justify-around sticky top-16 z-10  text-center py-5  shadow-lg text-xs lg:text-xl">
          <button className=" transform transition duration-500 hover:scale-125 ">
            <Link rel="stylesheet" href="#treatment">
              TREATMENT
            </Link>
          </button>

          <div>
            <Dropdown
              title="LAB TEST"
              className="relative transform transition duration-500 hover:scale-125"
            >
              <div className="absolute right-0  top-full min-w-full w-max bg-white shadow-md mt-10 rounded-xl">
                <Link rel="stylesheet" href="#promo">
                  <Dropdown.Item className="px-10 py-5 hover:bg-gray-100 hover:rounded-xl">
                    Promo-Package
                  </Dropdown.Item>
                </Link>
                <Link rel="stylesheet" href="#screening">
                  <Dropdown.Item className="px-10 py-5 hover:bg-gray-100 hover:rounded-xl">
                    Screening and Diagnostic Tests
                  </Dropdown.Item>
                </Link>
                <Link rel="stylesheet" href="#studies">
                  <Dropdown.Item className="px-10 py-5 hover:bg-gray-100 hover:rounded-xl">
                    Medical Studies and Evaluations
                  </Dropdown.Item>
                </Link>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>

      {/* ----------------------Header Section--------------------------------------- */}
      <div>
        {/* <div className=" relative w-full h-[200px] lg:h-[400px]">
          <Image
            className=" object-top"
            src=" https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191355.jpg?"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div> */}
        <div>
          <h1 className="bg-beige  w-full text-3xl text-center font-black tracking-wider py-3 text-amber-800 lg:text-9xl lg:py-10 ">
            SERVICES
          </h1>
        </div>
        <div className="max-w-[1920px] mx-auto ">
          {/* ----------------------Treatment and lab Section--------------------------------------- */}
          <div id="treatment" className="w-4/5 mx-auto py-10">
            <h1 className="text-center text-2xl lg:text-6xl py-5 mt-20 lg:py-20 lg:mt-20">
              Treatment
            </h1>
            <TreatmentCard />
          </div>
          {/* 
          <div id="promo" className="w-4/5 mx-auto py-10">
            <h1 className="text-center text-2xl lg:text-6xl py-5 mt-20 lg:py-20 lg:mt-20">
              Promo-Package
            </h1>
            <PromoSec />
          </div>
          <div id="screening" className="w-4/5 mx-auto py-10">
            <h1 className="text-center text-2xl lg:text-6xl py-5 mt-20 lg:py-20 lg:mt-20">
              Screening and Diagnostic Tests
            </h1>
            <ScreenSec />
          </div>
          <div id="studies" className="w-4/5 mx-auto py-10">
            <h1 className="text-center text-2xl lg:text-6xl py-5 mt-20 lg:py-20 lg:mt-20">
              Medical Studies and Evaluations
            </h1>
            <StudiesSec />
          </div> */}
        </div>
      </div>
    </main>
  );
}

export default ServicePage;
