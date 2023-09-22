import React from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md";

import Navbar1 from "../Navbar1";
import Footer1 from "../../footer/Footer1";

import aia from "@/public/panels_img/AIA logo.png";
import asp from "@/public/panels_img/asp medical group logo.jpg";
import compu from "@/public/panels_img/LogoCompuMed2.png";
import eBen from "@/public/panels_img/eben assist.png";
import emas from "@/public/panels_img/emas logo.png";
import etiqa from "@/public/panels_img/etiqa logo.png";
import fomema from "@/public/panels_img/FOMEMA LOGO.png";
import connect from "@/public/panels_img/health-connect logo.jpg";
import metrics from "@/public/panels_img/healthmetric-logo.png";
import iyres from "@/public/panels_img/IYRES LOGO.png";
import ihp from "@/public/panels_img/IHP HEALTH CARE LOGO.png";
import ia from "@/public/panels_img/IA.png";
import llm from "@/public/panels_img/LLM LOGO.png";
import road from "@/public/panels_img/miros-logo.png";
import medi from "@/public/panels_img/mediclinic LOGO.jpg";
import kad from "@/public/panels_img/MEDKAD LOGO.png";
import nefit from "@/public/panels_img/MEDNEFITS LOGO.png";
import micare from "@/public/panels_img/micare logo.png";
import miya from "@/public/panels_img/MIYA LOGO.png";
import mytpa from "@/public/panels_img/mytpa LOGO.png";
import peduli from "@/public/panels_img/PEDULI SIHAT LOGO.jpg";
// import haji from "@/public/panels_img/";
import pmcare from "@/public/panels_img/PMCare logo.png";
import red from "@/public/panels_img/RED Alert LOGO.png";
import ukm from "@/public/panels_img/UKM logo.png";
import upm from "@/public/panels_img/upm loogo.png";
import usim from "@/public/panels_img/USIM logo.png";
import wecare from "@/public/panels_img/We_Care-removebg-preview.png";

const PanelsList = [
  { id: 1, name: "AIA", img: aia },
  { id: 2, name: "ASP Medical Group", img: asp },
  { id: 3, name: "CompuMed", img: compu },
  { id: 4, name: "eBenAssist", img: eBen },
  { id: 5, name: "E-Mas", img: emas },
  { id: 6, name: "Etiqa", img: etiqa },
  { id: 7, name: "Fomema", img: fomema },
  { id: 8, name: "Health Connect", img: connect },
  { id: 9, name: "Health Metrics", img: metrics },
  { id: 10, name: "Institute For Youth Rearch (IPPBM / IYRES)", img: iyres },
  { id: 11, name: "Integrated Health Plans (IHP)", img: ihp },
  { id: 12, name: "International Assistance (IA)", img: ia },
  { id: 13, name: "Lembaga Lebuhraya Malaysia (LLM)", img: llm },
  {
    id: 14,
    name: "Malaysian Institute of Road Safety Research (MIROS)",
    img: road,
  },
  { id: 15, name: "Mediclinic", img: medi },
  { id: 16, name: "Medkad", img: kad },
  { id: 17, name: "Mednefits", img: nefit },
  { id: 18, name: "Micares", img: micare },
  { id: 19, name: "MiyaCare", img: miya },
  { id: 20, name: "Mytpa", img: mytpa },
  { id: 21, name: "Peduli Sihat", img: peduli },
  // { id: 22, name: "Pemeriksaan Haji", img: "" },
  { id: 23, name: "PmCare", img: pmcare },
  { id: 24, name: "Red Alert", img: red },
  { id: 25, name: "Universiti Kebangsaan Malaysia (UKM)", img: ukm },
  { id: 26, name: "Universiti Putra Malaysia (UPM)", img: upm },
  { id: 27, name: "Universiti Sains Islam Malaysia (USIM)", img: usim },
  { id: 28, name: "WeCare", img: wecare },
];

function PanelsPage() {
  return (
    <main>
      <div className="sticky top-0 z-10">
        <Navbar1 />
        {/* <div className="bg-white py-5 shadow-xl ">
          <div className="mx-auto flex justify-center items-center border-solid border-sky-300 border-2 px-5 py-2 rounded-xl w-fit transform transition duration-500 hover:scale-110">
            <input type="text" placeholder="Search Panels..." className="" />
            <AiOutlineSearch />
          </div>
        </div> */}
      </div>
      <div className="mt-10 overflow-hidden  w-10/12 bg-pink-50  mx-auto max-w-[1440px] rounded-2xl drop-shadow-xl">
        <div className="p-7  text-slate-700 md:p-16 lg:p-20 xl:p-24">
          <div className="flex items-center  gap-3 xl:gap-5">
            <MdAdminPanelSettings className="text-4xl md:text-5xl lg:text-7xl" />
            <h3 className="font-black text-lg md:text-2xl lg:text-4xl">
              PANELS
            </h3>
          </div>
          <div className="pt-4 text-justify md:pt-10 ">
            <p className="text-xs md:text-base xl:text-xl">
              Klinik Hanita is a trusted partner for insurance panels, providing
              comprehensive healthcare services, a highly qualified team,
              cultural sensitivity, efficiency, advanced technology, health
              education, and emergency services. Insurance providers can rely on
              Klinik Hanita to offer their members top-quality healthcare.
            </p>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto py-20 max-w-[1440px]">
        <div className=" grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5 lg:gap-10">
          {PanelsList.map((panel) => (
            <div
              key={panel.id}
              className="   p-2 bg-white overflow-hidden rounded-xl  drop-shadow-md  transform transition duration-500 hover:scale-105"
            >
              <div className="  relative h-40 lg:h-48  ">
                <Image
                  src={panel.img}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="p-5 flex flex-col justify-between text-center">
                <h2 className="font-bold text-xs  lg:text-base xl:text-lg  ">
                  {panel.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer1 />
    </main>
  );
}

export default PanelsPage;
