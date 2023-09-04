import React from "react";
import Image from "next/image";
import Navbar1 from "../Navbar1";
import GroupPicture from "@/public/KlinikGroup.jpg.png";

import { BsLinkedin, BsFacebook } from "react-icons/bs";
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
        <h1 className="bg-beige  w-full text-3xl text-center font-black tracking-wider py-3 text-amber-800 lg:text-9xl lg:py-10 lg:hidden">
          ABOUT
        </h1>
      </div>
      <div>
        {/* ----------------------Group Photo Section--------------------------------------- */}
        <div className="bg-beige">
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
        </div>

        <div className="max-w-[1920px] mx-auto w-10/12">
          {/* ----------------------Vision and Mission Section--------------------------------------- */}
          <div className="text-lg lg:text-2xl pb-16 text-center pt-20 ">
            <h1 className=" hidden font-black text-3xl lg:text-6xl pb-10 lg:block">
              ABOUT
            </h1>
            <p>
              Klinik Hanita is a renowned healthcare facility that has gained a
              reputation for its comprehensive approach to health and wellness.
              Klinik Hanita first opened in 2007 and have served the communities
              for more than 16 years. The clinics are managed by Dr Hanita Binti
              Abdul Wahid herself and she is very committed in providing the
              best primary healthcare to as many people regardless of cultural
              and social background. Dr. Hanita has recruited her management
              team that are well qualified, dedicated and passionate medical
              doctors, together with well-trained clinical staff and
              radiographer.
            </p>
          </div>
          <div className="mx-auto text-center py-20 lg:py-10 w-4/5 lg:w-3/5">
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
          </div>

          {/* ----------------------About Dr Section--------------------------------------- */}
          <div>
            <div className=" mx-auto shadow-xl bg-slate-300 block lg:flex   rounded-xl  overflow-hidden xl:h-[700px] ">
              <div className="relative h-[500px] md:h-[720px] lg:w-1/2 xl:w-1/3 lg:h-auto ">
                <Image
                  className="object-center transform transition duration-500 hover:scale-110"
                  src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="p-10  flex-1 lg:p-20">
                <div className="pb-5 lg:pb-5">
                  <h1 className="font-bold text-xl  md:text-2xl xl:text-4xl">
                    Dr Hanita Abdul Wahid
                  </h1>
                  <p className="text-xs font-bold text-gray-400 lg:text-base">
                    Doctor and founder of Klinik Hanita
                  </p>
                </div>
                <p className="text-xs text-justify md:text-base  xl:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas nihil consectetur tempora voluptatibus, reiciendis
                  aliquid animi maxime ipsa cupiditate accusantium similique
                  ullam facilis, eius exercitationem eos explicabo doloribus
                  illo fugit dolore nesciunt delectus nostrum dicta. Illum ullam
                  eos exercitationem. Porro adipisci quas commodi optio aliquid
                  culpa mollitia. Tempora sequi dolor similique illum hic
                  reiciendis nihil, deleniti distinctio, dolore vel cum. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                  nihil consectetur tempora voluptatibus, reiciendis aliquid
                  animi maxime ipsa cupiditate accusantium similique ullam
                  facilis, eius exercitationem eos explicabo doloribus illo
                  fugit dolore nesciunt delectus nostrum dicta. Illum ullam eos
                  exercitationem. Porro adipisci quas commodi optio aliquid
                  culpa mollitia. Tempora sequi dolor similique illum hic
                  reiciendis nihil, deleniti distinctio, dolore vel cum.
                </p>
                <div className="block lg:flex gap-5 list-none space-y-4 py-10 lg:py-10 lg:space-y-0 ">
                  <li>
                    <a
                      className="flex gap-2 items-center xl:text-2xl transform transition duration-500 hover:scale-110"
                      href=""
                    >
                      <BsLinkedin />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex gap-2 items-center xl:text-2xl transform transition duration-500 hover:scale-110"
                      href=""
                    >
                      <BsFacebook /> Facebook
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------Everyone Section--------------------------------------- */}
          <div>
            <h1 className="text-3xl text-center font-black tracking-wider py-10 text-purple lg:text-8xl lg:py-40">
              TEAM
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
