import React from "react";
import Image from "next/image";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

const whatsappNumber = "60132401055";

const treatments = [
  {
    id: 1,
    name: " Promo A   ",
    img: "https://img.freepik.com/free-photo/coronavirus-blood-samples-assortment-lab_23-2149107254.jpg?",
    list: "Full Blood Count, Kidney Function, Liver Function, Blood Sugar, Cholesterol Studies, Uric Acid, HbA1C and Urine Analysis.",
    whatsapp:
      "https://wa.me/" + whatsappNumber + "?text=Hi Im interested in PROMO A.",
  },
  {
    id: 2,
    name: " Promo B   ",
    img: "https://img.freepik.com/free-photo/coronavirus-arrangement-with-blood-samples-vaccine_23-2149107207.jpg?",
    list: "Full Blood Count, Kidney Function, Liver Function, Uric Acid, Blood Sugar, Cholesterol Studies, HbA1C, Rapid Plasma Reagent (RPR), Blood Group, Thyroid, VDRL, Hepatitis B (Ag & Ab), Rheumatoid and Urine Analysis.",
    whatsapp:
      "https://wa.me/" + whatsappNumber + "?text=Hi Im interested in PROMO B.",
  },
  {
    id: 3,
    name: " Promo Cancer (Women & Men)  ",
    img: "https://img.freepik.com/free-photo/crop-hands-with-blue-ribbon-near-stethoscope_23-2147738469.jpg?",
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
    whatsapp:
      "https://wa.me/" + whatsappNumber + "?text=Hi Im interested in PROMO C.",
  },
];

function PromoSec() {
  return (
    <main className=" sm:grid grid-cols-2 lg:grid-cols-3 gap-10 ">
      {treatments.map((treatment2) => (
        <div
          key={treatment2.id}
          className="  my-10 md:my-0 bg-blue-100  overflow-hidden rounded-xl  drop-shadow-md  transform transition duration-500 hover:scale-105"
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

          <div className="p-5 flex flex-col justify-between h-[400px] lg:h-[450px]  2xl:h-[450px] xl:p-10">
            <div>
              <h2 className="font-bold text-lg  lg:text-xl pb-5">
                {treatment2.name}
              </h2>
              <h3 className="text-xs md:text-base">{treatment2.list}</h3>
            </div>
            <a href={treatment2.whatsapp}>
              <div className="flex justify-center items-center gap-2 w-full rounded-lg bg-blue-700 hover:bg-blue-500 hover:shadow-md text-white px-3 py-2 mt-5">
                <div className="text-lg">
                  <AiOutlineWhatsApp />
                </div>
                <button className=" text-base">Book Now</button>
              </div>
            </a>
          </div>
        </div>
      ))}
    </main>
  );
}

export default PromoSec;
