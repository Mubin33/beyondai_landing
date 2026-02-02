import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
  return (
    <div id='about' className='bg-[#0A0819] relative'>
        <img src="/home/top-right-shade.png" alt="shade" className='h-[600px] w-[600px] absolute top-0 right-0' />
        <div className='max-w-[1660px] w-11/12 mx-auto py-14'>
        <div 
            className="inline-flex items-center px-8 py-3 border border-[#FFF] hover:border-gray-400 text-gray-200 hover:text-white font-medium rounded-4xl transition-colors duration-300 text-lg"
          >
            ABOUT US 
          </div>
<h1 className="text-3xl md:text-4xl xl:text-[80px] font-ubuntu font-semibold  pr-10 mt-5
               bg-linear-to-r from-[#FFFFFF] to-[#E34400] 
               text-transparent bg-clip-text">With 15+ years of App & Web expertise, we design and develop intuitive digital experiences that align user needs with business goals.</h1>
        <div className='flex items-end gap-10 lg:gap-60 mt-20'>
            <Image src="/home/about.png" alt='' width={500} height={570} />
            <div className='cursor-pointer'>
                <h5 className='text-lg md:text-xl xl:text-2xl font-normal font-ubuntu max-w-[630px] text-[#AAB0C5] mx-auto'>Comprehensive digital services designed to transform your ideas into exceptional products. From research to launch, we've got you covered.</h5>
            <div className='h-32 w-32 mt-20 rounded-full flex items-center justify-center border text-white text-sm xl:text-base'>Explore <br />
Our Project</div>
            </div>
        </div>
        </div>
    </div>
  )
}
