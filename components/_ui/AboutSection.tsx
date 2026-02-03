import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <div id="about" className="bg-[#0A0819] relative">
      <img
        src="/home/top-right-shade.png"
        alt="shade"
        className="h-[600px] w-[600px] absolute top-0 right-0"
      />
      <div className="max-w-[1660px] w-11/12 mx-auto py-14">
        <div className="inline-flex items-center px-8 py-3 border border-[#FFF] hover:border-gray-400 text-gray-200 hover:text-white font-medium rounded-4xl transition-colors duration-300 text-lg">
          ABOUT US
        </div>
        <h1
          className="text-3xl md:text-4xl xl:text-[60px] font-ubuntu font-semibold  pr-10 mt-5
               bg-linear-to-r from-[#FFFFFF] to-[#E34400] 
               text-transparent bg-clip-text"
        >
          With 15+ years of App & Web expertise, we design and develop intuitive
          digital experiences that align user needs with business goals.
        </h1>
        <div className="flex flex-col lg:flex-row items-end gap-10 lg:gap-60 mt-20">
          <Image src="/home/about.png" alt="" width={500} height={570} />
          <Link href="/projects" className="cursor-pointer">
            <h5 className="text-lg md:text-xl xl:text-2xl font-normal font-ubuntu max-w-[630px] text-[#AAB0C5] mx-auto">
              Comprehensive digital services designed to transform your ideas
              into exceptional products. From research to launch, we've got you
              covered.
            </h5>
            <div className="h-32 w-32 mt-20 rounded-full flex items-center justify-center border text-white text-sm xl:text-base">
              Explore Our <br />
              Project{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-6 mt-6"
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
              >
                <g clip-path="url(#clip0_55_34)">
                  <path
                    d="M17.3386 6.11455C14.5767 8.14626 14.5768 12.0224 17.3387 14.7828M17.288 6.15186C14.5261 8.18357 10.0581 7.5942 7.29618 4.83388M17.5037 5.99318L4.99594 15.1943"
                    stroke="white"
                    stroke-width="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_55_34">
                    <rect
                      width="15.5275"
                      height="14.2231"
                      fill="white"
                      transform="matrix(0.805522 -0.592567 0.707309 0.706905 0 9.20117)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
