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
        <div className=" pb-[121px] sm:pb-0  bg-gradient-to-b from-purple to-purple1  ">
          <div className="flex max-w-[1920px] mx-auto">
            {/* <div className=" max-w-[176px] max-h-[224px] "> */}
            <div className="  ">
              {/* <Image src={DoctorPhone}  alt='' className='sm:hidden '/> */}
              <Image
                src={Doctor}
                alt=""
                className="sm:h-[450px] md:h-[620px] w-full"
              />
              {/* <img src="..\public\Doctor.png" alt="" /> */}
            </div>
            <div className="pr-5 flex-grow">
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
        </div>

        {/* Working hours section */}
        <div className="sm:hidden absolute z-1 bottom-0  bg-white w-full rounded-t-2xl">
          <Hero1Float1 />
        </div>
      </div>
    </div>
  );
}

export default Hero1;
