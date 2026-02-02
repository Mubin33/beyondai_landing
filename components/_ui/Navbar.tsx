import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full bg-black/10 backdrop-blur-2xl py-1 fixed top-0 z-50'>
        <div className='max-w-[1660px] w-11/12 mx-auto flex items-center justify-between'>
            <Image src="/logo.png" alt='logo' width={176} height={68} />
            <ul className='flex items-center gap-20'>
                <Link href="#home"><li className='text-sm lg:text-base font-normal font-ubuntu text-[#F3F6F9]'>Home</li></Link>
                
                <Link href="#about"><li className='text-sm lg:text-base font-normal font-ubuntu text-[#F3F6F9]'>About us</li></Link>
                
                <Link href="#product"><li className='text-sm lg:text-base font-normal font-ubuntu text-[#F3F6F9]'>Projects</li></Link>
                
            </ul>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
  href="#demo"
  className="
    group
    inline-flex items-center gap-3 
    px-8 py-3 
    bg-[#ff4d00] hover:bg-[#ff6600] 
    text-white font-medium 
    rounded-full          /* or rounded-4xl if you prefer very rounded */
    transition-colors duration-300 
    text-lg 
    shadow-lg shadow-orange-900/40 
    overflow-hidden
    relative
  "
>
  {/* Text - stays in place */}
  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-[-10px]">
    Get In Touch
  </span>

  {/* Icon wrapper - moves left on hover */}
  <div 
    className="
      relative 
      flex items-center justify-center 
      h-7 w-7 rounded-full 
      bg-black/90 
      transition-all duration-400 
      group-hover:translate-x-[20px]   /* moves left and slightly out */
      group-hover:scale-90
    "
  >
    {/* Original arrow icon - fades out */}
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

    {/* New arrow icon - comes from right */}
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
</Link>

          <Link
            href="#"
            className="h-11 w-11 bg-[#110D2A] flex items-center justify-center border border-[#9e9e9e] hover:border-[#ff531f] text-gray-200 hover:text-white font-medium rounded-4xl transition-colors duration-300 text-lg"
          >
            <svg className='hover:animate-spin' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#E34400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#E34400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#E34400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#E34400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#E34400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </Link>
        </div>
        </div>
    </div>
  )
}
