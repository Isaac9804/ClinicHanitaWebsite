import React, { useState } from "react";

import Image from "next/image";

import Azreen from "@/public/team/Nurdina Azreen.jpg";
import Qurratu from "@/public/team/Qurratu 'Ain Fadillah.jpg";
import Aini from "@/public/team/Aini Hidayah.jpg";
import Syamimi from "@/public/team/Wan Nur Syamimi.jpg";
import Norisah from "@/public/team/Norisah.jpg";
import Fatin from "@/public/team/Wan Nur Fatin Amirah.jpg";
import Karmizee from "@/public/team/Karmizee Lyslee.jpg";

const teams = [
  {
    id: 1,
    img: Azreen,
    name: "Nurdina Azreen",
    position: "Juru X-Ray",
  },
  {
    id: 2,
    img: Qurratu,
    name: "Qurratu 'Ain Fadillah",
    position: "Juru X-Ray",
  },
  {
    id: 3,
    img: Aini,
    name: "Aini Hidayah",
    position: "Pegawai Sumber Manusia",
  },
  {
    id: 4,
    img: Syamimi,
    name: "Wan Nur Syamimi",
    position: "Pegawai Dietetik",
  },
  {
    id: 5,
    img: Norisah,
    name: "Norisah",
    position: "Pembantu Klinik",
  },
  {
    id: 6,
    img: Fatin,
    name: "Wan Nur Fatin Amirah",
    position: "Pembantu Klinik",
  },
  {
    id: 7,
    img: Karmizee,
    name: "Karmizee Lyslee",
    position: "Pembantu Klinik",
  },
  //   { id: 8, img: "@/public/Mira.jpg", name: "Mira", position: "Assistant" },
  //   { id: 9, img: "@/public/Mira.jpg", name: "Mira", position: "Assistant" },
  //   { id: 10, img: "@/public/Mira.jpg", name: "Mira", position: "Assistant" },
];

function TeamCard() {
  return (
    <main className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 drop-shadow">
      {teams.map((team) => (
        <div key={team.id} className="overflow-hidden relative  rounded-xl ">
          <Image
            className="scale-[170%] transform transition duration-500 hover:scale-[200%]"
            src={team.img}
            alt=""
          />

          <div className="absolute bottom-0 p-3 w-full text-white md:p-5 ">
            <h2 className="text-xs font-bold md:text-base">{team.name}</h2>
            <h3 className="text-xxs md:text-xs">{team.position}</h3>
          </div>
        </div>
      ))}
    </main>
  );
}

export default TeamCard;
