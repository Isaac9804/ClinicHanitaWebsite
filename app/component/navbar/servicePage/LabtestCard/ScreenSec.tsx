import React from "react";
import Image from "next/image";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

const treatments = [
  {
    id: 1,
    name: " Thyroid Screening  ",
    img: "https://img.freepik.com/free-photo/endocrinologist-examining-throat-young-woman-clinic-women-with-thyroid-gland-test-endocrinology-hormones-treatment-inflammation-sore-throat_657921-270.jpg?",
    list: "Thyroid Function Tests (FT3, FT4 TSH)",
    whatsapp: "",
  },
  {
    id: 2,
    name: " Thyroid Autoimmune Special  ",
    img: "https://img.freepik.com/free-photo/female-doctor-checking-patient-s-mouth_23-2148757388.jpg?",
    list: "FT3, FT4, TSH, Anti-Thyroid Peroxidase, Anti- Thyroglobulin",
    whatsapp: "",
  },
  {
    id: 3,
    name: " Renal Profile  ",
    img: "https://img.freepik.com/free-photo/lumbar-pain_1155-10.jpg?",
    list: "Urea, Crea􀆟nine, Calcium, Phosphate, Uric Acid, Sodium, Potassium Chloride, Albumin, eGFR",
    whatsapp: "",
  },
  {
    id: 4,
    name: " Thalassemia Screening  ",
    img: "https://img.freepik.com/free-photo/high-angle-health-professional-drawing-blood_23-2149404714.jpg?",
    list: "Ferri􀆟n, Hb Analysis",
    whatsapp: "",
  },

  {
    id: 5,
    name: "Antenatal Screen 4KB & HIV ",
    img: "https://img.freepik.com/free-photo/gynecologist-performing-ultrasound-consultation_23-2149353023.jpg?",
    list: "FBC, HBsAg & Ab, RPR (VDRL & Titre), Rubella IgG Ab, HIV I&II Ab",
    whatsapp: "",
  },
];

function ScreenSec() {
  return (
    <main className=" sm:grid grid-cols-2 lg:grid-cols-3 gap-10 ">
      {treatments.map((treatment3) => (
        <div
          key={treatment3.id}
          className="  my-10 md:my-0 bg-blue-100  overflow-hidden rounded-xl  drop-shadow-md  transform transition duration-500 hover:scale-110"
        >
          <div className="  relative  h-80">
            <Image
              className=" "
              src={treatment3.img}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="p-5 flex flex-col justify-between 2xl:h-[350px] xl:p-10">
            <div>
              <h2 className="text-2xl font-bold pb-5">{treatment3.name}</h2>
              <h3 className="">{treatment3.list}</h3>
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

export default ScreenSec;
