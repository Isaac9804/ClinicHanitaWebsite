import React from "react";
import Image from "next/image";
import Navbar1 from "../Navbar1";
import GroupPicture from "@/public/KlinikGroup.jpg.png";

import { BsLinkedin, BsFacebook } from "react-icons/bs";
import "@/app/globals.css";
import TeamCard from "./TeamCard";

function AboutPage() {
  return (
    <main>
      <Navbar1 />
      {/* ----------------------Group Photo Section--------------------------------------- */}
      <div className="bg-beige">
        <div className="hidden relative  lg:block h-[350px]  xl:h-[620px]  max-w-[1920px] mx-auto w-10/12">
          <Image
            className="object-top  "
            src={GroupPicture}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto w-10/12">
        {/* ----------------------About Dr Section--------------------------------------- */}

        <h1 className="text-3xl text-center font-black tracking-wider py-10 text-purple lg:text-8xl lg:py-40">
          ABOUT US
        </h1>
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
                aliquid animi maxime ipsa cupiditate accusantium similique ullam
                facilis, eius exercitationem eos explicabo doloribus illo fugit
                dolore nesciunt delectus nostrum dicta. Illum ullam eos
                exercitationem. Porro adipisci quas commodi optio aliquid culpa
                mollitia. Tempora sequi dolor similique illum hic reiciendis
                nihil, deleniti distinctio, dolore vel cum. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Voluptas nihil
                consectetur tempora voluptatibus, reiciendis aliquid animi
                maxime ipsa cupiditate accusantium similique ullam facilis, eius
                exercitationem eos explicabo doloribus illo fugit dolore
                nesciunt delectus nostrum dicta. Illum ullam eos exercitationem.
                Porro adipisci quas commodi optio aliquid culpa mollitia.
                Tempora sequi dolor similique illum hic reiciendis nihil,
                deleniti distinctio, dolore vel cum.
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
          <div>
            <TeamCard />
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
