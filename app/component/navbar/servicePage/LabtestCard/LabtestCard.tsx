import React from "react";
import Image from "next/image";
import { BsArrowUpRightCircle } from "react-icons/bs";

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
  {
    id: 4,
    name: " Thyroid Screening  ",
    img: "https://img.freepik.com/free-photo/asian-female-physician-consulting-woman-office_1098-20395.jpg?",
    list: "Thyroid Func􀆟on Tests (FT3, FT4 TSH)",
    whatsapp: "",
  },
  {
    id: 5,
    name: " Thyroid Autoimmune Special  ",
    img: "https://img.freepik.com/free-photo/asian-female-physician-consulting-woman-office_1098-20395.jpg?",
    list: "FT3, FT4, TSH, Anti-Thyroid Peroxidase, Anti- Thyroglobulin",
    whatsapp: "",
  },
  {
    id: 6,
    name: " Renal Profile  ",
    img: "https://img.freepik.com/free-photo/asian-female-physician-consulting-woman-office_1098-20395.jpg?",
    list: "Urea, Crea􀆟nine, Calcium, Phosphate, Uric Acid, Sodium, Potassium Chloride, Albumin, eGFR",
    whatsapp: "",
  },
  {
    id: 7,
    name: " Thalassemia Screening  ",
    img: "https://img.freepik.com/free-photo/asian-female-physician-consulting-woman-office_1098-20395.jpg?",
    list: "Ferri􀆟n, Hb Analysis",
    whatsapp: "",
  },
  {
    id: 8,
    name: " Arthri􀆟s Studies ",
    img: "https://img.freepik.com/free-photo/asian-female-physician-consulting-woman-office_1098-20395.jpg?",
    list: "ESR, FBC, Uric Acid, LE Cells Test, RA Factor, ASOT Titre, ANA (SLE), C Reac􀆟ve Protein (hs-CRP)",
    whatsapp: "",
  },
  {
    id: 9,
    name: " Coronary Risk Studies ",
    img: "https://img.freepik.com/free-photo/asian-female-physician-consulting-woman-office_1098-20395.jpg?",
    list: "Lipid Profile, Total Cholesterol, HDL, LDL, TG, Ra􀆟o Total/HDL",
    whatsapp: "",
  },
  {
    id: 10,
    name: " Diabetes Studies ",
    img: "https://img.freepik.com/free-photo/asian-female-physician-consulting-woman-office_1098-20395.jpg?",
    list: "Glucose, HbA1C",
    whatsapp: "",
  },
  {
    id: 11,
    name: "Antenatal Screen 4KB & HIV ",
    img: "https://img.freepik.com/free-photo/asian-female-physician-consulting-woman-office_1098-20395.jpg?",
    list: "FBC, HBsAg & Ab, RPR (VDRL & Titre), Rubella IgG Ab, HIV I&II Ab",
    whatsapp: "",
  },
  {
    id: 12,
    name: "Menstrual Cycle Studies ",
    img: "https://img.freepik.com/free-photo/asian-female-physician-consulting-woman-office_1098-20395.jpg?",
    list: "FSH, LH, Estradiol, Progesterone",
    whatsapp: "",
  },
  {
    id: 13,
    name: "MGTT ",
    img: "https://img.freepik.com/free-photo/asian-female-physician-consulting-woman-office_1098-20395.jpg?",
    list: "Modified Glucose Tolerance Test: FBS, 2HR Post Prandial",
    whatsapp: "",
  },
];

function LabtestCard() {
  return (
    <main className=" sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
      {treatments.map((treatment1) => (
        <div className="  my-10 md:my-0 bg-blue-100  overflow-hidden rounded-xl  drop-shadow-md  transform transition duration-500 hover:scale-110">
          <div key={treatment1.id} className="  relative  h-80">
            <Image
              className=" "
              src={treatment1.img}
              alt=""
              layout="fill"
              objectFit="cover"
            />

            <h1 className="gap-2 h-full flex justify-center items-center bg-gray-400 bg-opacity-30 md:bg-opacity-70 text-white tracking-wider font-bold relative py-10  text-3xl md:opacity-0 md:hover:opacity-100 ">
              Click to book
              <span>
                <BsArrowUpRightCircle className="text-sm lg:text-2xl" />
              </span>
            </h1>
          </div>

          <div className="p-10">
            <h2 className="text-2xl font-bold pb-5">{treatment1.name}</h2>
            <h3 className="">{treatment1.list}</h3>
          </div>
        </div>
      ))}
    </main>
  );
}

export default LabtestCard;
