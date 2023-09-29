import React from "react";
import Image from "next/image";
import xray from "@/public/Services/Xray.png";
import ultrasound from "@/public/Services/ultra.png";
import consult from "@/public/Services/consult.png";
import Link from "next/link";

function Services() {
  return (
    <main className="max-w-[1440px] mx-auto w-10/12">
      <div className="">
        <h1 className="text-slate-800 pt-20 pb-10 text-center text-lg font-bold md:text-2xl md:pt-40 md:pb-28 lg:text-4xl">
          SERVICES
        </h1>
      </div>
      <div className=" mx-auto overflow-hidden rounded-2xl drop-shadow-lg  bg-white ">
        <div>
          {/* ----------------------Image Section--------------------------------------- */}
          <div className=" flex flex-col  md:flex-row md:h-[400px] xl:h-[600px]">
            <div className="relative h-[200px] md:h-auto md:w-1/3 ">
              <Image src={xray} alt="" layout="fill" objectFit="cover" />
              <h3 className="absolute bottom-0 right-0 p-3 text-white text-xs">
                XRAY
              </h3>
            </div>
            <div className="relative h-[200px] md:h-auto md:w-1/3 ">
              <Image src={ultrasound} alt="" layout="fill" objectFit="cover" />
              <h3 className="absolute bottom-0 right-0 p-3 text-white text-xs">
                ULTRASOUND
              </h3>
            </div>
            <div className="relative h-[200px] md:h-auto md:w-1/3 ">
              <Image src={consult} alt="" layout="fill" objectFit="cover" />
              <h3 className="absolute bottom-0 right-0 p-3 text-white text-xs">
                CONSULTATION
              </h3>
            </div>
            {/* <div className="relative h-20 w-full">
              <Image src={ultrasound} alt="" />
              <h3 className="absolute bottom-0 left-0 p-3 text-white text-xs">
                ULTARSOUND
              </h3>
            </div>
            <div className="relative h-20 w-full">
              <Image src={consult} alt="" />
              <h3 className="absolute bottom-0 right-0 p-3 text-white text-xs">
                CONSULTATION
              </h3>
            </div> */}
          </div>
          {/* ----------------------Info Section--------------------------------------- */}
          <div className="text-center w-8/12 mx-auto space-y-10 py-10">
            <h3 className="font-bold text-lg text-center md:text-2xl lg:text-4xl">
              STATE OF THE ART MEDICAL SERVICE
            </h3>
            <p className=" text-xs md:text-base  xl:text-xl">
              "To provide exceptional, patient-centered healthcare services with
              a focus on quality, compassion, and innovation, while promoting
              wellness, preventive care, and community engagement."
            </p>
            <Link legacyBehavior href="/component/navbar/servicePage">
              <button className="  rounded-full bg-blue-700 hover:bg-blue-500 hover:shadow-md text-white px-5  mt-5 py-3  ">
                <h3 className="text-xs md:text-base xl:text-lg">
                  MORE SERVICES
                </h3>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Services;
