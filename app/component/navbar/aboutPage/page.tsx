import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar1 from "../Navbar1";
import GroupPicture from "@/public/KlinikGroup.png";
import Hanita from "@/public/Dr hanita 001 .png";

import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { IoIosEye } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import "@/app/globals.css";
import TeamCard from "./TeamCard";
import Footer1 from "../../footer/Footer1";

function AboutPage() {
  return (
    <main className="">
      <div className="sticky top-0 z-10">
        <Navbar1 />
      </div>
      <div>
        <div className="bg-pink-50 bg-opacity-50 py-12 lg:py-28">
          {/* ----------------------About Section--------------------------------------- */}

          <div>
            <div className="overflow-hidden h-[450px] md:h-[670px] lg:h-[770px] xl:h-[970px]  w-10/12 bg-pink-50  mx-auto max-w-[1440px] rounded-2xl drop-shadow-xl">
              <div className="p-7  text-slate-700 md:p-16 lg:p-20 xl:p-24">
                <div className="flex items-center  gap-3 xl:gap-5">
                  <HiMiniInformationCircle className="text-4xl md:text-5xl lg:text-7xl" />
                  <h3 className="font-black text-lg md:text-2xl lg:text-4xl">
                    ABOUT US
                  </h3>
                </div>
                <div className="pt-4 text-justify md:pt-10 ">
                  <p className="text-xs md:text-base xl:text-xl">
                    Klinik Hanita is a renowned healthcare facility that has
                    gained a reputation for its comprehensive approach to health
                    and wellness. Klinik Hanita first opened in 2007 and have
                    served the communities for more than 16 years. The clinics
                    are managed by Dr Hanita Binti Abdul Wahid herself and she
                    is very committed in providing the best primary healthcare
                    to as many people regardless of cultural and social
                    background. Dr. Hanita has recruited her management team
                    that are well qualified, dedicated and passionate medical
                    doctors, together with well-trained clinical staff and
                    radiographer.
                  </p>
                </div>
              </div>

              <div className=" relative transform transition duration-500 hover:scale-105 h-48 md:h-96 lg:h-[500px] xl:h-[750px] 2xl:h-[850px] ">
                <Image
                  className="object-top "
                  src={GroupPicture}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          {/* ----------------------Vision and Mission Section--------------------------------------- */}
          <div className="max-w-[1440px] mx-auto">
            <div className="mx-auto w-4/6 mt-12 md:mt-24 ">
              <div className="flex items-center gap-2">
                <IoIosEye className="text-2xl md:text-4xl lg:text-6xl" />
                <h3 className="font-bold text-lg md:text-2xl lg:text-4x">
                  VISION
                </h3>
              </div>
              <div className=" pt-2 text-xs md:text-base md:pt-5 xl:text-xl">
                <p>
                  "To be a trusted leader in comprehensive healthcare, dedicated
                  to empowering individuals and promoting holistic well-being
                  within our community."
                </p>
              </div>
            </div>
            <div className="mx-auto w-4/6 mt-12 text-right md:mt-24 md:text-left">
              <div className="flex items-center gap-2 ">
                <TbTargetArrow className="text-2xl ml-auto md:ml-0 md:text-4xl lg:text-6xl" />
                <h3 className="font-bold text-lg md:text-2xl lg:text-4x">
                  MISSION
                </h3>
              </div>
              <div className="  pt-2 text-xs md:text-base md:pt-5 xl:text-xl">
                <p>
                  "To provide exceptional, patient-centered healthcare services
                  with a focus on quality, compassion, and innovation, while
                  promoting wellness, preventive care, and community
                  engagement."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------Group Photo Section--------------------------------------- */}
        {/* <div className="bg-beige">
          <div className="hidden relative  lg:block h-[350px]  xl:h-[450px] 2xl:h-[650px]  max-w-[1920px] mx-auto w-10/12">
            <Image
              className="object-top lg:pt-10 xl:pt-16 "
              src={GroupPicture}
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <h1 className=" text-3xl text-center font-black tracking-wider py-10 text-white lg:text-9xl lg:py-10 shadow-lg rounded-full">
              ABOUT US
            </h1>
          </div>
        </div> */}

        <div className="max-w-[1440px] mx-auto w-10/12 ">
          {/* ----------------------Vision and Mission Section--------------------------------------- */}

          {/* <div className="mx-auto text-center py-20 lg:py-10 w-4/5 lg:w-3/5">
            <div>
              <h1 className="font-black text-3xl lg:text-6xl pb-10">VISION</h1>

              <p className="text-lg lg:text-2xl">
                &quot;To be a trusted leader in comprehensive healthcare,
                dedicated to empowering individuals and promoting holistic
                well-being within our community.&quot;
              </p>
            </div>
            <div className="py-16">
              <h1 className="font-black text-3xl lg:text-6xl pb-10">MISSION</h1>

              <p className="text-lg lg:text-2xl">
                "To provide exceptional, patient-centred healthcare services
                with a focus on quality, compassion, and innovation, while
                promoting wellness, preventive care, and community engagement."
              </p>
            </div>
          </div> */}

          {/* ----------------------About Dr Section--------------------------------------- */}
          <div className="">
            <h1 className="text-slate-800 pt-20 pb-10 text-center text-lg font-bold md:text-2xl md:pt-40 md:pb-28 lg:text-4xl">
              GET TO KNOW OUR CEO
            </h1>
            <div className=" mx-auto shadow-xl bg-slate-300   lg:flex   rounded-xl  overflow-hidden  xl:h-[700px]  mb-10">
              {/* <div className="relative h-[400px] md:h-[720px]  lg:w-1/2 xl:w-1/3  ">
                <Image
                  className="object-center transform transition duration-500 hover:scale-110"
                  src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div> */}
              <div className=" lg:flex lg:w-fit">
                <div className="relative h-[500px] md:h-[900px] lg:h-full lg:w-1/2 xl:w-2/5">
                  <Image
                    // src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    src={Hanita}
                    alt=""
                    // width={3000}
                    // height={3000}
                    // sizes="100vw"
                    layout="fill"
                    objectFit="cover"
                    
                  ></Image>
                </div>
                <div className="p-7  flex-1  md:p-16 xl:p-24">
                  <div className="pb-5 lg:pb-5">
                    <h1 className=" text-lg font-bold   md:text-xl xl:text-4xl">
                      Dr Hanita Abdul Wahid
                    </h1>
                    <p className="text-xs font-bold text-gray-400 lg:text-xs">
                      Doctor and founder of Klinik Hanita
                    </p>
                  </div>
                  <p className="text-xs md:text-base  xl:text-lg">
                    Dr. Hanita is a highly qualified medical professional with a
                    strong educational background and years of experience in the
                    field of medicine. She graduated in the year 1995 from the
                    prestigious University of Malaya, where she earned her
                    Bachelor of Medical and Bachelor of Surgery degrees. Doctor
                    Hanita embarked on her professional journey by serving at
                    Kuala Lumpur Hospital (HKL) starting in 1995 until 1999. Dr.
                    Hanita continued to make significant contributions to the
                    field of healthcare. From 1999 to 2001, she took on a
                    pivotal role by working with the Minister of Health.
                  </p>
                  <div className="flex flex-col gap-1 list-none md:gap-3 pt-5 lg:py-10 lg:space-y-0 ">
                    <li>
                      <Link
                        className="text-base flex gap-1 items-center md:text-2xl md:gap-3 transform transition duration-500 hover:scale-105"
                        href="https://instagram.com/klinikhanita?igshid=MzRlODBiNWFlZA=="
                      >
                        <FaInstagram />
                        <h3 className="text-xs font-bold md:text-lg">
                          Instagram
                        </h3>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-base flex gap-1 items-center  md:text-2xl md:gap-3 transform transition duration-500 hover:scale-105"
                        href="https://m.facebook.com/KlinikHanitaDPP"
                      >
                        <FaFacebookSquare />
                        <h3 className="text-xs font-bold md:text-lg">
                          Facebook
                        </h3>
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------Everyone Section--------------------------------------- */}
          <div>
            <h1 className="text-slate-800 pt-20 pb-10 text-center text-lg font-bold  md:text-2xl md:pt-40 md:pb-28 lg:text-4xl">
              MEET OUR TEAM
            </h1>
            <div className="justify-center">
              <TeamCard />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer1 />
      </div>
    </main>
  );
}

export default AboutPage;
