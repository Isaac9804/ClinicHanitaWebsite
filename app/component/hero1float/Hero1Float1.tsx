
import React from 'react'




// import {FaLocationDot} from "react-icons/fa";
import {IoLocationSharp} from "react-icons/io5";
import {AiOutlineClockCircle} from "react-icons/ai";

function Hero1Float1() {
  return (
    <div className='flex'>
         <div className='flex py-5  px-5'>
            <div className='text-purple'>
                <div className='flex items-center gap-1.5'>
                    <div><AiOutlineClockCircle size='1rem'/></div>
                    <h2 className='font-bold text-[14px]'>BUSINESS HOURS</h2>
                </div>
                <div className='flex divide-x-2 divide-purple'>
                    <div className='pl-2'></div>
                    <ul className='text-[10px] pl-3 tracking-wider font-semibold'>
                        <li>MONDAY - FRIDAY (9AM - 10PM)</li>
                        <li>SATURDAY (9AM - 9PM)</li>
                        <li>SUNDAY (10AM -9PM)</li>
                        <li>PUBLIC HOLIDAY (10AM - 9PM)</li>
                    </ul>
                </div>
            </div> 
        </div>

       
        
        <div className='bg-[#FFF4FF] m-auto  w-[74px] h-[74px] drop-shadow-md rounded-xl'>
           <a href="https://goo.gl/maps/mDVe4NvBDKJu8FRE6">
                {/* <FaLocationDot/> */}
                {/* <GrLocation/> */}
                <div className='p-2 '> 
                    <IoLocationSharp className='mx-auto mb-2 fill-purple' size='24px' style={{ stroke: "url(#blue-gradient)" }} />
                    <div className=' leading-tight  text-[9px] font-black text-center text-purple'>CLINIC LOCATION</div>
                </div>
           </a>
        </div>
    </div>
  )
}

export default Hero1Float1
