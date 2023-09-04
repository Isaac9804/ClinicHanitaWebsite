import React from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";

import Navbar1 from "../Navbar1";
import Footer1 from "../../footer/Footer1";

import aia from "@/public/panels_img/AIA logo.webp";
import asp from "@/public/panels_img/asp medical group logo.jpg";
import compu from "@/public/panels_img/LogoCompuMed2.png";
// import eBen from "@/public/panels_img/";
import emas from "@/public/panels_img/emas logo.png";
import etiqa from "@/public/panels_img/etiqa logo.png";
import fomema from "@/public/panels_img/FOMEMA LOGO.png";
import connect from "@/public/panels_img/health-connect logo.jpg";
import metrics from "@/public/panels_img/healthmetric-logo.png";
import iyres from "@/public/panels_img/IYRES LOGO.png";
import ihp from "@/public/panels_img/IHP HEALTH CARE LOGO.png";
// import ia from "@/public/panels_img/";
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
// import wecare from "@/public/panels_img/";

const PanelsList = [
  { id: 1, name: "AIA", img: aia },
  { id: 2, name: "ASP Medical Group", img: asp },
  { id: 3, name: "CompuMed", img: compu },
  // { id: 4, name: "eBenAssist", img:  },
  { id: 5, name: "E-Mas", img: emas },
  { id: 6, name: "Etiqa", img: etiqa },
  { id: 7, name: "Fomema", img: fomema },
  { id: 8, name: "Health Connect", img: connect },
  { id: 9, name: "Health Metrics", img: metrics },
  { id: 10, name: "Institute For Youth Rearch (IPPBM / IYRES)", img: iyres },
  { id: 11, name: "Integrated Health Plans (IHP)", img: ihp },
  // { id: 12, name: "International Assistance (IA)", img:  },
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
  // { id: 28, name: "WeCare", img: wecare },
];

function PanelsPage() {
  return (
    <main>
      <div className="sticky top-0 z-10">
        <Navbar1 />
        <div className="bg-white py-5 shadow-xl ">
          <div className="mx-auto flex justify-center items-center border-solid border-sky-300 border-2 px-5 py-2 rounded-xl w-fit transform transition duration-500 hover:scale-110">
            <input type="text" placeholder="Search Panels..." className="" />
            <AiOutlineSearch />
          </div>
        </div>
      </div>
      <div>
        <h1 className="bg-beige  w-full text-3xl text-center font-black tracking-wider py-3 text-amber-800 lg:text-9xl lg:py-10 ">
          PANELS
        </h1>
      </div>
      <div className="w-4/5 mx-auto py-60">
        <div className=" sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
          {PanelsList.map((panel) => (
            <div
              key={panel.id}
              className="  my-10 md:my-0 bg-gray-100  overflow-hidden rounded-xl  drop-shadow-md  transform transition duration-500 hover:scale-110"
            >
              <div className="  relative  h-80 m-5">
                <Image
                  src={panel.img}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="p-5 flex flex-col justify-between text-center">
                <h2 className="text-2xl font-bold pb-5">{panel.name}</h2>
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
