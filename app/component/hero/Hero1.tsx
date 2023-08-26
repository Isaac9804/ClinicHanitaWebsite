import React from "react";
import Image from "next/image";
import Hero1Float1 from "../hero1float/Hero1Float1";
import Doctor from "/public/Doctor.png";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

function Hero1() {
  return (
    <div className="">
      <div className="relative">
        <div className=" pb-[121px] sm:pb-[180px] md:pb-0  bg-gradient-to-b from-purple to-purple1  ">
          <div className="hidden lg:block bg-purple w-screen h-[200px] bottom-0 absolute ">
            <div className="max-w-[1920px] mx-auto">
              <div className="text-white ml-[370px] xl:ml-[590px] ">
                <Hero1Float1 />
              </div>
            </div>
          </div>
          <div className="flex max-w-[1920px] mx-auto  relative xl:px-20">
            {/* <div className=" max-w-[176px] max-h-[224px] "> */}
            <div className=" ">
              {/* <Image src={DoctorPhone}  alt='' className='sm:hidden '/> */}
              <Image
                src={Doctor}
                alt=""
                className="w-[260px] lg:w-[360px] xl:w-[460px] h-full"
              />
              {/* <img src="..\public\Doctor.png" alt="" /> */}
            </div>
            <div className="pr-2 flex-grow pt-5 lg:p-10 xl:p-24 ">
              <h1 className="font-extrabold text-white text-2xl  tracking-widest py-2 lg:text-6xl xl:text-7xl xl:py-5">
                KLINIK <span className="text-yellow-300">HANITA</span>
              </h1>
              <p className="text-white text-xxs lg:text-xl lg:py-3 xl:text-2xl ">
                To provide patient-centered healthcare with excellence.
              </p>

              {/* Contact Us button */}
              <a href="https://wa.me/60192484931?text=Hello+I'm+looking+for+a+doctor.+please+send+help!!!">
                <div className="flex border-2 xl:border-4 border-solid border-white rounded-full bg-green-600 justify-center my-3 items-center gap-1 px-2 py-0.5 w-fit lg:py-3 lg:px-5 xl:py-3 lg:gap-3 xl:px-5 xl:gap-5  ">
                  <div className="text-white text-lg lg:text-2xl  ">
                    <AiOutlineWhatsApp />
                  </div>
                  <h2 className="text-white text-xxs py-0 font-bold lg:text-lg  ">
                    CONTACT US
                  </h2>
                </div>
              </a>

              {/* Contact */}
              <div className="tracking-wider  lg:hidden">
                <div>
                  <h3 className="flex gap-1 items-center text-white text-xxs lg:text-xl lg:gap-5 lg:py-5 xl:text-3xl xl:py-5">
                    <HiOutlineMail
                      color="white"
                      className="text-sm lg:text-2xl xl:text-4xl"
                    />
                    klinikhanita@gmail.com
                  </h3>
                </div>
                <div>
                  <h3 className="flex gap-1 items-center text-white text-xxs py-1 lg:text-xl  lg:gap-5 xl:text-3xl xl:py-5">
                    <FiPhone
                      color="white"
                      className="text-sm lg:text-2xl xl:text-4xl"
                    />
                    03-89271005 / 013-2401055
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Working hours section */}
        <div className="md:hidden absolute z-1 bottom-0  bg-white w-full rounded-t-2xl text-purple">
          <Hero1Float1 />
        </div>
      </div>
    </div>
  );
}

export default Hero1;
