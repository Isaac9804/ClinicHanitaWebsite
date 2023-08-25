import React from "react";
import { MdMedicalServices } from "react-icons/md";
import ServicesMap from "./servicesMap/ServicesMap";

function Services() {
  return (
    <div className="hidden lg:block mx-auto lg:p-10  xl:p-20 2xl:p-32 ">
      <div>
        <div className="mx-auto  text-center text-2xl max-w-[1920px] ">
          <MdMedicalServices className=" text-purple lg:text-4xl xl:text-6xl mx-auto " />

          <h1 className="text-purple  font-black tracking-widest  lg:text-4xl lg:py-5 xl:text-6xl xl:py-10">
            SERVICES
          </h1>
          <p className="text-xs px-10  mx-auto leading-loose lg:text-lg lg:max-w-4xl xl:text-2xl  ">
            Our primary care services focus on preventive care, health
            screenings, and general wellness. We're here to be your first point
            of contact for any health concerns.
          </p>
        </div>
      </div>
      <ServicesMap />
    </div>
  );
}

export default Services;
