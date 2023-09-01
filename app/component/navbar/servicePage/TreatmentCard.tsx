import React from "react";
import Image from "next/image";
import { useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

const treatments = [
  {
    id: 1,
    name: " Routine Health Examinations and Check-ups:    ",
    img: "https://img.freepik.com/free-photo/asian-female-physician-consulting-woman-office_1098-20395.jpg?",
    list: (
      <div>
        <li className="list-none">
          <ul>1. Adult Health Examination</ul>
          <ul>2. Children Health Examination</ul>
          <ul>3. GDL / PSV Medical Check-up</ul>
          <ul>4. Government / Private Job Medical Check-up</ul>
          <ul>5. Hajj Medical Check-up</ul>
          <ul>6. IPTA / IPTS Medical Check-up</ul>
          <ul>7. Medical Check-up Routine</ul>
          <ul>8. Pre-Formema Medical Check-up</ul>
          <ul>9. Pregnant Mother Examination & 2D Ultrasound</ul>
        </li>
      </div>
    ),
    whatsapp: "",
  },
  {
    id: 2,
    name: " Immunizations and Vaccinations:   ",
    img: "https://img.freepik.com/free-photo/young-doctor-is-holding-hypodermic-syringe-with-vaccine-vial-rubber-gloves-gray-wall_1150-21803.jpg?",
    list: (
      <div>
        <li className="list-none">
          <ul>1. Children and Adults Immunizations</ul>
          <ul>2. Hajj & Umrah Injections</ul>
          <ul>3. Typhoid Injection</ul>
        </li>
      </div>
    ),
    whatsapp: "",
  },
  {
    id: 3,
    name: " Diagnostic Tests and Screenings:",
    img: "https://img.freepik.com/free-photo/coronavirus-blood-samples-assortment-lab_23-2149107255.jpg?",
    list: (
      <div>
        <li className="list-none">
          <ul>1. COVID-19 Screening</ul>
          <ul>2. Influenza Test / Dengue / Full Blood Count</ul>
          <ul>3. Pap Smear</ul>
          <ul>4. Urine Analysis</ul>
          <ul>5. X-Ray</ul>
          <ul>6. ECG</ul>
        </li>
      </div>
    ),
    whatsapp: "",
  },
  {
    id: 4,
    name: " Medical Treatments and Procedures:",
    img: "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    list: (
      <div>
        <li className="list-none">
          <ul>1. Circumcision for Baby Girls only</ul>
          <ul>2. Depo Provera Injection</ul>
          <ul>3. Dressing</ul>
          <ul>4. Small Surgery</ul>
          <ul>5. Treatment Of High Blood Pressure / Diabetes / Gout</ul>
          <ul>6. Nebuliser/Oxygen</ul>
        </li>
      </div>
    ),
    whatsapp: "",
  },
];

function TreatmentCard() {
  return (
    <main className=" sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
      {treatments.map((treatment: any, id: number) => (
        <div className="  my-10 md:my-0 bg-gray-100  overflow-hidden rounded-xl  drop-shadow-md  transform transition duration-500 hover:scale-110">
          <div key={id} className="  relative  h-80">
            <Image
              className=" "
              src={treatment.img}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="p-5 flex flex-col justify-between 2xl:h-[550px] xl:p-10">
            <div>
              <h2 className="text-2xl font-bold pb-5">{treatment.name}</h2>
              <h3 className="">{treatment.list}</h3>
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

export default TreatmentCard;
