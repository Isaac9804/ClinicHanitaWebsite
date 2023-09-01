import React from "react";
import Image from "next/image";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

const treatments = [
  {
    id: 1,
    name: " Promo A   ",
    img: "https://img.freepik.com/free-photo/asian-female-physician-consulting-woman-office_1098-20395.jpg?",
    list: "Full Blood Count, Kidney Function, Liver Function, Blood Sugar, Cholesterol Studies, Uric Acid, HbA1C and Urine Analysis.",
    whatsapp: "",
  },
  {
    id: 2,
    name: " Promo B   ",
    img: "https://img.freepik.com/free-photo/asian-female-physician-consulting-woman-office_1098-20395.jpg?",
    list: "Full Blood Count, Kidney Function, Liver Function, Uric Acid, Blood Sugar, Cholesterol Studies, HbA1C, Rapid Plasma Reagent (RPR), Blood Group, Thyroid, VDRL, Hepatitis B (Ag & Ab), Rheumatoid and Urine Analysis.",
    whatsapp: "",
  },
  {
    id: 3,
    name: " Promo Cancer (Women & Men)  ",
    img: "https://img.freepik.com/free-photo/asian-female-physician-consulting-woman-office_1098-20395.jpg?",
    list: (
      <li className="list-none">
        <ul>1. Breast Examination</ul>
        <ul>
          2. Full Blood Count, Kidney Function, Liver Function, Blood Sugar,
          Cholesterol Studies, HbA1C, Uric Acid, Blood grouping, Rapid Plasma
          Reagent (RPR), Rheumatoid, 5 Cancer Markers (Women), 4 Cancer Markers
          (Men), Urine Analysis{" "}
        </ul>
      </li>
    ),
    whatsapp: "",
  },
];

function PromoSec() {
  return (
    <main className=" sm:grid grid-cols-2 lg:grid-cols-3 gap-10 ">
      {treatments.map((treatment2) => (
        <div
          key={treatment2.id}
          className="  my-10 md:my-0 bg-blue-100  overflow-hidden rounded-xl  drop-shadow-md  transform transition duration-500 hover:scale-110"
        >
          <div className="  relative  h-80">
            <Image
              className=" "
              src={treatment2.img}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="p-5 flex flex-col justify-between 2xl:h-[350px] xl:p-10">
            <div>
              <h2 className="text-2xl font-bold pb-5">{treatment2.name}</h2>
              <h3 className="">{treatment2.list}</h3>
            </div>
            <div className="flex justify-center items-center gap-2 w-full rounded-lg bg-blue-700 hover:bg-blue-500 hover:shadow-md text-white px-3 py-2 mt-5">
              <div className="text-lg">
                <AiOutlineWhatsApp />
              </div>
              <button className=" ">Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default PromoSec;
