import Image from 'next/image'
import React from 'react'

export default function Brand() {
  return (
    <div className='bg-[#18191B] w-full'>
        <div className='max-w-[1660px] w-11/12 mx-auto flex items-center gap-32 h-[154px]'>
            <div className='border-r pr-32 h-full flex flex-col justify-center'>
                <h4 className='font-ubuntu text-2xl md:text-3xl xl:text-[48px] font-semibold text-[#FFFFFF] '>100+</h4>
                <p className='font-ubuntu text-sm md:text-base xl:text-xl font-normal text-[#FFFFFF] '>trusted Clients</p>
            </div>
            <Image src="/home/b1.png" alt='brand' width={168} height={48} />
            <Image src="/home/b2.png" alt='brand' width={168} height={48} />
            <Image src="/home/b3.png" alt='brand' width={168} height={48} />
            <Image src="/home/b4.png" alt='brand' width={168} height={48} />
        </div>
    </div>
  )
}
