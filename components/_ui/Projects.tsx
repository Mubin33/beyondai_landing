 
import Image from 'next/image'
import Link from 'next/link' 

export default function Projects() {
  return (
    <div id='projects' className='bg-[#0A0819] w-full relative'>
        <img src="/home/top-center-shade.png" alt="shade" className='h-[701px] w-[740px] absolute -top-60 left-[30%]' />
        <img src="/home/left-center-shade.png" alt="shade" className='h-[801px] w-[840px] absolute top-[10%] left-[0%] ' />
        <img src="/home/center-big-shade.png" alt="shade" className='h-[1901px] w-[100vw] absolute top-[40%] left-[0%] z-0' />
        <div className='max-w-[1660px] w-[96%] mx-auto py-20 z-20 relative'>
            {/* heading */}
            <div className='flex items-center justify-between '>
                {/* left */}
                <div>
                    <h6 className='text-base md:text-lg xl:text-xl font-ubuntu font-normal text-white'>( FEATURED PROJECT )</h6>
                    <h2 className='mt-2 text-3xl md:text-4xl xl:text-[60px] font-ubuntu font-semibold text-white '>Features Projects</h2>
                    <Link
            href="/projects"
            className="inline-flex mt-10 items-center gap-3 px-8 py-3 border border-[#ffffff] hover:border-gray-400 text-gray-200 hover:text-white font-medium transition-colors duration-300 text-lg"
          >
           ALL PROJECTS <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
  <ellipse cx="2.52953" cy="2.44986" rx="2.52928" ry="2.44986" fill="#D9D9D9"/>
  <ellipse cx="8.85253" cy="8.57437" rx="2.52928" ry="2.44986" fill="#D9D9D9"/>
  <ellipse cx="2.52928" cy="14.6991" rx="2.52928" ry="2.44986" fill="#D9D9D9"/>
</svg>
          </Link>
                </div>
                {/* right */}
                <div>
                    <img src="/home/120k.png" alt="120k" className='w-[448px] h-[130px]' />
                    <h6 className='text-base md:text-lg xl:text-2xl font-ubuntu font-normal text-[#CCC] mt-10'>Project Complated</h6>

                </div>
            </div>
            {/* body */}
            <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 mt-16 z-20'>
                <div>
                    <Image src="/home/p1.png" alt="project" width={684} height={661} />
                    <h6 className='text-base md:text-lg xl:text-xl font-ubuntu font-normal text-[#CCC] mt-9'>Food order and Delivery System</h6>
                    <h4 className='text-xl md:text-2xl xl:text-[30px] font-ubuntu font-semibold mt-2 text-white'>TastteUp App</h4>
                </div>
                <div className='lg:mt-60'>
                    <Image src="/home/p2.png" alt="project" width={684} height={661} />
                    <h6 className='text-base md:text-lg xl:text-xl font-ubuntu font-normal text-[#CCC] mt-9'>Fitness </h6>
                    <h4 className='text-xl md:text-2xl xl:text-[30px] font-ubuntu font-semibold mt-2 text-white'>Prime Pilates</h4>
                </div>
            </div>
<div className='mt-20 z-20'>
                    <Image src="/home/p3.png" alt="project" width={1660} height={970} />
                    <h6 className='text-base md:text-lg xl:text-xl font-ubuntu font-normal text-[#CCC] mt-9'>Fitness App</h6>
                    <h4 className='text-xl md:text-2xl xl:text-[30px] font-ubuntu font-semibold mt-2 text-white'>motivate</h4>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 mt-16 z-20'>
                <div className='lg:mt-40'>
                    <Image src="/home/p4.png" alt="project" width={684} height={661} />
                    <h6 className='text-base md:text-lg xl:text-xl font-ubuntu font-normal text-[#CCC] mt-9'>Task Management</h6>
                    <h4 className='text-xl md:text-2xl xl:text-[30px] font-ubuntu font-semibold mt-2 text-white'>Nofify</h4>
                </div>
                <div>
                    <Image src="/home/p5.png" alt="project" width={566} height={661} />
                    <h6 className='text-base md:text-lg xl:text-xl font-ubuntu font-normal text-[#CCC] mt-9'>Salon App </h6>
                    <h4 className='text-xl md:text-2xl xl:text-[30px] font-ubuntu font-semibold mt-2 text-white'>Hairkonnect</h4>
                </div>
            </div>
                
            </div>

        </div>
    </div>
  )
}
