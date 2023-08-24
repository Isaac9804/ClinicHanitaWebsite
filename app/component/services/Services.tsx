import React from "react";
import { MdMedicalServices } from "react-icons/md";

function Services() {
  return (
    <div>
      <div>
        <div className="hidden lg:block text-center text-2xl max-w-[1920px] ">
          <div>
            <MdMedicalServices className=" text-purple lg:text-6xl mx-auto " />
          </div>

          <h1 className="text-purple  font-black tracking-widest pt-10 lg:text-6xl lg:py-10">
            SERVICES
          </h1>
          <p className="text-xs px-10  mx-auto leading-loose lg:text-2xl lg:max-w-4xl">
            Our primary care services focus on preventive care, health
            screenings, and general wellness. We're here to be your first point
            of contact for any health concerns.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
