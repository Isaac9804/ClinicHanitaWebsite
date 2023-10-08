import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar1 from "@/app/component/navbar/Navbar1";
import Footer1 from "@/app/component/footer/Footer1";

import { CgWorkAlt } from "react-icons/cg";
import { FiMail } from "react-icons/fi";

{
  /* ----------------------Image Import--------------------------------------- */
}

import career1 from "@/public/career/career1.png";
import career2 from "@/public/career/career2.png";
import career3 from "@/public/career/career3.png";
import career4 from "@/public/career/career4.png";
import career5 from "@/public/career/career5.png";

const emailContact = "mailto:klinikhanita@gmail.com";

const careers = [
  {
    id: 1,
    title: "Clinic Assistant",
    img: career2,
    emailInfo: "",
    jobScope: (
      <div>
        <ul className="list-decimal  list-inside list">
          <h1 className="font-bold">JOB SCOPE:</h1>
          <br></br>
          <li>
            <span className="font-bold">Patient Reception:</span>
            <br></br> Greet and welcome patients and visitors to the clinic.
            Register new patients, verify and update existing patient
            information. Able to register panel's patients
          </li>
          <li>
            <span className="font-bold">Appointment Scheduling:</span>
            <br></br> Schedule patient appointments, consultations, and
            follow-up visits. Coordinate appointment calendars for healthcare
            providers.
          </li>
          <li>
            <span className="font-bold">Patient Assistance:</span>
            <br></br>
            Assist patients with completing necessary forms and paperwork.
            Provide information to patients regarding clinic procedures,
            services, and policies.
          </li>
          <li>
            <span className="font-bold">Medical Records Management:</span>
            <br></br>
            Maintain accurate and organized patient records. Ensure compliance
            with patient confidentiality regulations
          </li>
          <li>
            <span className="font-bold">Billing and Payment Processing:</span>
            <br></br>
            Handle patient billing inquiries and payment processing. Verify
            insurance information and assist with claims processing.
          </li>
          <li>
            <span className="font-bold">Inventory Management:</span>
            <br></br>
            Monitor and maintain clinic supplies, including medical and office
            supplies. Place orders as needed and track inventory levels.
          </li>
          <li>
            <span className="font-bold">Administrative Support:</span>
            <br></br>
            Assist healthcare providers and clinic staff with administrative
            tasks as required. Help with data entry, document preparation, and
            filing.
          </li>
          <li>
            <span className="font-bold">Cleaning and Sanitization:</span>
            <br></br>
            Ensure the cleanliness and hygiene of patient waiting areas and
            examination rooms. Adhere to infection control and sanitation
            protocols.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: "Radiographer",
    img: career3,
    emailInfo: "",
    jobScope: (
      <div>
        <ul className="list-decimal  list-inside list">
          <h1 className="font-bold">JOB SCOPE:</h1>
          <br></br>
          <li>
            <span className="font-bold">Patient Reception:</span>
            <br></br> Greet and welcome patients and visitors to the clinic.
            Register new patients, verify and update existing patient
            information. Able to register panel's patients
          </li>
          <li>
            <span className="font-bold">Appointment Scheduling:</span>
            <br></br>
            Schedule patient appointments, consultations, and follow-up visits.
            Coordinate appointment calendars for healthcare providers.
          </li>
          <li>
            <span className="font-bold">Patient Assistance:</span>
            <br></br>
            Assist patients with completing necessary forms and paperwork.
            Provide information to patients regarding clinic procedures,
            services, and policies.
          </li>
          <li>
            <span className="font-bold">Medical Records Management:</span>
            <br></br>
            Maintain accurate and organized patient records. Ensure compliance
            with patient confidentiality regulations
          </li>
          <li>
            <span className="font-bold">Billing and Payment Processing:</span>
            <br></br>
            Handle patient billing inquiries and payment processing. Verify
            insurance information and assist with claims processing.
          </li>
          <li>
            <span className="font-bold">Inventory Management:</span>
            <br></br>
            Monitor and maintain clinic supplies, including medical and office
            supplies. Place orders as needed and track inventory levels.
          </li>
          <li>
            <span className="font-bold">Administrative Support:</span>
            <br></br>
            Assist healthcare providers and clinic staff with administrative
            tasks as required. Help with data entry, document preparation, and
            filing.
          </li>
          <li>
            <span className="font-bold">Cleaning and Sanitization:</span>
            <br></br>
            Ensure the cleanliness and hygiene of patient waiting areas and
            examination rooms. Adhere to infection control and sanitation
            protocols.
          </li>
        </ul>
      </div>
    ),
  },
];

function CareerPage() {
  return (
    <main>
      <div className="sticky top-0 z-10">
        <Navbar1 />
      </div>
      <div className="py-12">
        {/* ----------------------About Section--------------------------------------- */}

        <div>
          <div className="  w-10/12 bg-pink-50  mx-auto max-w-[1440px] rounded-2xl drop-shadow-xl ">
            <div className="p-7  text-slate-700 md:p-16 lg:p-20 xl:p-24">
              <div className="flex items-center  gap-3 xl:gap-5">
                <CgWorkAlt className="text-4xl md:text-5xl lg:text-7xl" />
                <h3 className="font-black text-lg md:text-2xl lg:text-4xl">
                  CAREER
                </h3>
              </div>
              <div className="pt-4 text-justify md:pt-10 ">
                <p className="text-xs md:text-base xl:text-xl">
                  Do you have a passion for healthcare and want to make a
                  positive impact on diverse communities? Join Klinik Hanita, a
                  trusted healthcare facility serving our communities for over
                  16 years. We're currently looking for dedicated professionals
                  to join our team, where you can provide exceptional care and
                  grow in a supportive environment. At Klinik Hanita,
                  inclusivity, professional growth, and collaborative teamwork
                  are at the core of what we do. If you have the qualifications
                  and enthusiasm to contribute to our mission, please send your
                  resume and a cover letter to&nbsp;
                  <span className="font-bold">
                    <Link legacyBehavior href="mailto:klinikhanita@gmail.com">
                      klinikhanita@gmail.com
                    </Link>
                  </span>
                  . Join us and be a part of our commitment to outstanding
                  healthcare.
                </p>
              </div>
            </div>
          </div>

          {/* ----------------------Career Section--------------------------------------- */}

          <div id="treatment" className="w-4/5 mx-auto py-10">
            <h1 className="uppercase text-slate-800 pt-20 pb-3 text-center text-lg font-bold md:text-2xl md:pt-40 md:pb-28 lg:text-4xl">
              CAREER
            </h1>
          </div>

          <div className="  w-10/12  mx-auto max-w-[1440px] rounded-2xl drop-shadow-xl ">
            <div className=" sm:grid grid-cols-2  gap-10 ">
              {/* 2xl:grid-cols-4  */}
              {careers.map((career) => (
                <div
                  key={career.id}
                  className="  my-10 md:my-0 bg-gray-100  overflow-auto rounded-xl  drop-shadow-md  transform transition duration-500 hover:scale-105"
                >
                  <div className="  relative  ">
                    <Image
                      className=" "
                      src={career.img}
                      alt=""
                      layout="contain"
                      objectFit="cover"
                    />
                  </div>

                  <div className="p-5 flex flex-col justify-between  xl:p-10">
                    <div>
                      <h2 className="font-bold text-lg uppercase  lg:text-xl pb-5">
                        {career.title}
                      </h2>
                      <h3 className="text-xs md:text-base ">
                        {career.jobScope}
                      </h3>
                    </div>
                    <Link legacyBehavior href={emailContact}>
                      <div className="flex justify-center items-center gap-2 w-full rounded-lg bg-blue-700 hover:bg-blue-500 hover:shadow-md text-white px-3 py-2 mt-5">
                        <div className="text-lg">
                          <FiMail />
                        </div>
                        <button className=" text-base ">Email Us Now</button>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </main>
  );
}

export default CareerPage;
