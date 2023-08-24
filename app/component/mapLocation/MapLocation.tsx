import React from "react";
import { FaLocationDot } from "react-icons/fa6";

function MapLocation() {
  return (
    <div>
      <div className="hidden md:block mt-60  max-w-[1920px]">
        <div className=" text-purple text-2xl text-center mb-10">
          <FaLocationDot className="lg:text-6xl mx-auto " />
          <h1 className=" font-black tracking-widest   pt-10 lg:text-6xl lg:py-10">
            LOCATION
          </h1>
          <p className="text-xs px-10  mx-auto leading-loose lg:text-2xl lg:max-w-4xl">
            NO. 21, JALAN PINGGIRAN PUTRA 4A/14, DESA PINGGIRAN PUTRA, 43000
            KAJANG
          </p>
        </div>

        <iframe
          className=" w-screen h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.721212609644!2d101.70231597605952!3d2.8964712546516833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb7dfd103a019%3A0x7b94b595268e5bae!2sKlinik%20Hanita!5e0!3m2!1sen!2smy!4v1692914840335!5m2!1sen!2smy"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default MapLocation;