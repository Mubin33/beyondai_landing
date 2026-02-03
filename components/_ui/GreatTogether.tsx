import Link from 'next/link'
import React from 'react'

export default function GreatTogether() {
  return (
    <div className='relative w-full bg-[#0A0819] py-20 '>
        <h1 className='text3xl md:text-5xl xl:text-[76px] font-black font-ubuntu text-center text-white'>Let's Build Something <br /> <span className='text-[#E34400]'>Great Together</span> </h1>
        <h6 className='text-lg md:textxl xl:text-2xl font-normal font-ubuntu text-gray-200 text-center max-w-[700px] mx-auto mt-5'>Ready to transform your digital presence? Let's discuss your project and create something amazing.</h6>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
          {/* <Link
            href="#demo"
            className="
    group
    inline-flex items-center gap-3 
    px-8 py-3 
    bg-[#ff4d00] hover:bg-[#ff6600] 
    text-white font-medium 
    rounded-xl        
    transition-colors duration-300 
    text-lg 
    shadow-lg shadow-orange-900/40 
    overflow-hidden
    relative
  "
          > 
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-[-10px]">
             Start Your Project
            </span> 
            <div
              className="
      relative 
      flex items-center justify-center 
      h-7 w-7 rounded-2xl 
      bg-black/90 
      transition-all duration-400 
      group-hover:translate-x-[20px]   
      group-hover:scale-90
    "
            > 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 23 23"
                fill="none"
                className="transition-opacity duration-300 group-hover:opacity-0"
              >
                <path
                  d="M7.48767 14.0255L14.9274 8.38967"
                  stroke="#F3F6F9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.38965 7.4877L14.9274 8.38966L14.0254 14.9274"
                  stroke="#F3F6F9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="
        absolute 
        opacity-0 translate-x-8 
        transition-all duration-400 
        group-hover:opacity-100 
        group-hover:translate-x-0
      "
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#F3F6F9"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link> */}

          <Link
            href="#about"
            className="inline-flex items-center px-8 py-3 border text-[#E34400] hover:border-gray-400 bg-gray-200 hover:text-white font-medium rounded-xl transition-colors duration-300 text-lg"
          >
            Learn More About Us
          </Link>
        </div>
        <img src="/home/text.png" alt="Learn More About Us" className='w-[100vw] mt-32' />
    </div>
  )
}
