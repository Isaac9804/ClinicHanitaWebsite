import React from "react";
import Image from "next/image";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

const treatments = [
  {
    id: 8,
    name: " Arthritis Studies ",
    img: "https://img.freepik.com/free-photo/elderly-woman-suffering-from-pain-hand-arthritis-old-person-senior-woman-female-suffering-from-pain-home_657921-210.jpg",
    list: "ESR, FBC, Uric Acid, LE Cells Test, RA Factor, ASOT Titre, ANA (SLE), C Reac􀆟ve Protein (hs-CRP)",
    whatsapp: "",
  },
  {
    id: 9,
    name: " Coronary Risk Studies ",
    img: "https://img.freepik.com/free-photo/human-heart-design_1048-1683.jpg?",
    list: "Lipid Profile, Total Cholesterol, HDL, LDL, TG, Ra􀆟o Total/HDL",
    whatsapp: "",
  },
  {
    id: 10,
    name: " Diabetes Studies ",
    img: "https://img.freepik.com/free-photo/hand-holding-blood-glucose-meter-measuring-blood-sugar-background-is-stethoscope-chart-file_1387-942.jpg?",
    list: "Glucose, HbA1C",
    whatsapp: "",
  },

  {
    id: 11,
    name: "Menstrual Cycle Studies ",
    img: "https://img.freepik.com/free-photo/asian-woman-with-menstrual-problems-young-woman-with-stomach-ache-lying-bedlying-bed-holding-her-stomach_609648-1416.jpg?",
    list: "FSH, LH, Estradiol, Progesterone",
    whatsapp: "",
  },
  {
    id: 12,
    name: "MGTT ",
    img: "https://img.freepik.com/free-photo/coronavirus-sample-procedure_23-2148709150.jpg?w=1380&t=st=1693622161~exp=1693622761~hmac=8b968bbb85d8b9dc36f8994af3e11287edda4532cfe81683dd065d7caf4f7ef6",
    list: "Modified Glucose Tolerance Test: FBS, 2HR Post Prandial",
    whatsapp: "",
  },
];

function StudiesSec() {
  return (
    <main className=" sm:grid grid-cols-2 lg:grid-cols-3  gap-10 ">
      {treatments.map((treatment4) => (
        <div
          key={treatment4.id}
          className="  my-10 md:my-0 bg-blue-100  overflow-hidden rounded-xl  drop-shadow-md  transform transition duration-500 hover:scale-110"
        >
          <div className="  relative  h-80">
            <Image
              className=" "
              src={treatment4.img}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="p-5 flex flex-col justify-between 2xl:h-[350px] xl:p-10">
            <div>
              <h2 className="text-2xl font-bold pb-5">{treatment4.name}</h2>
              <h3 className="">{treatment4.list}</h3>
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

export default StudiesSec;
