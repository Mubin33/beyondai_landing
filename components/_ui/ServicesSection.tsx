// components/ServicesSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

type Service = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const services: Service[] = [
  {
    id: 1,
    title: 'AI App Development',
    description:
      'From iOS and Android native apps to cross-platform solutions, we build scalable mobile applications that deliver exceptional user experiences.',
    imageSrc: '/home/service.png',
    imageAlt: 'AI-powered mobile app development',
  },
  {
    id: 2,
    title: 'Web Development',
    description:
      'We craft high-performance, responsive web applications with modern frameworks and scalable architecture to power your digital presence.',
    imageSrc: '/home/service.png',
    imageAlt: 'Modern web development showcase',
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<number | null>(1); // ← null = nothing selected initially

  const activeService = activeTab !== null ? services.find((s) => s.id === activeTab) : null;

  return (
    <section className="relative w-full bg-[#0a0a0f] py-20 ">
        <img src="/home/ai-hand.png" alt="shade" className='h-[401px] w-[440px] absolute top-20 left-0' />
        <img src="/home/bottom-left-shade.png" alt="shade" className='h-[600px] w-[600px] absolute bottom-0 left-0' />
      <div className="relative z-10 max-w-[1660px] w-11/12 mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-6 py-2.5 rounded-full border border-orange-500 bg-gray-900/40 backdrop-blur-sm mb-8">
            <span className="text-sm font-normal text-gray-200 tracking-wider">
              What We Provide
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-[44px] font-normal font-ubuntu tracking-tight text-white leading-tight">
            Powerful Services Engineered for
            <br />
             Modern Business 
          </h2>

          <p className="mt-5 text-base md:text-lg text-gray-100 max-w-4xl mx-auto leading-relaxed">
            Transform every part of your workflow with scalable, automated, and
            <br className="hidden sm:inline" />
            secure digital capabilities.
          </p>
        </div>

        {/* Tabs + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-32 items-start">
          {/* Left - Tabs */}
          <div className="space-y-10 md:space-y-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`
                  group w-full text-left transition-all duration-300 border-b border-gray-500 pb-10 cursor-pointer
                  ${activeTab === service.id ? 'active' : ''}
                `}
              >
                <div className="flex items-baseline gap-4 md:gap-6 mb-3 md:mb-4">
                  <span
                    className={`
                      text-5xl md:text-6xl font-normal transition-colors
                      ${activeTab === service.id ? 'text-[#ff4d00]' : 'text-gray-700 group-hover:text-gray-500'}
                    `}
                  >
                    {String(service.id).padStart(2, '0')}
                  </span>

                  <h3
                    className={`
                      text-2xl md:text-3xl lg:text-4xl font-semibold text-white flex-1
                      ${activeTab === service.id ? '' : 'group-hover:text-gray-300'}
                    `}
                  >
                    {service.title}
                  </h3>

                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M9.38671 26.3999L7.33337 24.3466L21.4134 10.2666H8.80004V7.33325H26.4V24.9333H23.4667V12.3199L9.38671 26.3999Z" fill="#E34400"/>
</svg>
                </div>

                {/* Description - only shown when this tab is active */}
                <p
                  className={`
                    text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed
                    pl-14 md:pl-20 lg:pl-24
                    ${activeTab === service.id ? 'block' : 'hidden'}
                    transition-all duration-300
                  `}
                >
                  {service.description}
                </p>
              </button>
            ))}
          </div>

          {/* Right - Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-[4/3] md:aspect-[5/4] lg:aspect-video w-full rounded-2xl overflow-hidden ">
              {activeService ? (
                <Image
                  src={activeService.imageSrc}
                  alt={activeService.imageAlt} 
                  width={737}
                  height={404}
                  className="object-cover transition-opacity duration-500"
                  priority={activeService.id === 1} 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-lg">
                  Select a service to see details
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}