"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
 {
    name: "Arlene McCoy",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jane Cooper",
    role: "Marketer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Cody Fisher",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
 {
    name: "Arlene McCoy",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jane Cooper",
    role: "Marketer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Cody Fisher",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
 {
    name: "Arlene McCoy",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jane Cooper",
    role: "Marketer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Cody Fisher",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
 {
    name: "Arlene McCoy",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jane Cooper",
    role: "Marketer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Cody Fisher",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
 {
    name: "Arlene McCoy",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jane Cooper",
    role: "Marketer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Cody Fisher",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
 {
    name: "Arlene McCoy",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jane Cooper",
    role: "Marketer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Cody Fisher",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  }, 
 {
    name: "Arlene McCoy",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jane Cooper",
    role: "Marketer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Cody Fisher",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
 {
    name: "Arlene McCoy",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jane Cooper",
    role: "Marketer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Cody Fisher",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
 {
    name: "Arlene McCoy",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jane Cooper",
    role: "Marketer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Cody Fisher",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
 {
    name: "Arlene McCoy",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jane Cooper",
    role: "Marketer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Cody Fisher",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
 {
    name: "Arlene McCoy",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jane Cooper",
    role: "Marketer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Cody Fisher",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
 {
    name: "Arlene McCoy",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jane Cooper",
    role: "Marketer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Co. Founder",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Cody Fisher",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
]; 

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const visibleCards = 5;
  const centerOffset = Math.floor(visibleCards / 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonial" className="bg-[#0A0819] py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* heading */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">
            ( TESTIMONIALS )
          </p>
          <h2 className="text-5xl font-semibold text-white">
            What Our Clients Say <br /> About Me
          </h2>
        </div>

        {/* slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out py-5"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}
          >
            {testimonials.map((item, i) => {
              const isCenter =
                i === (index + centerOffset) % testimonials.length;

              return (
                <div key={i} className="w-1/5 px-3 shrink-0">
                  <div
                    className={`h-full rounded-2xl border border-white/10 p-8 flex flex-col justify-between transition-all duration-500
                    ${
                      isCenter
                        ? "bg-[#171A1B] scale-105"
                        : "bg-[#0F1222] opacity-80"
                    }`}
                  >
                    {/* stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">
                          ★
                        </span>
                      ))}
                    </div>

                    {/* quote */}
                    <div className="flex gap-3 mb-10">
                      <div className="w-1 bg-red-500" />
                      <p className="text-sm leading-relaxed text-gray-300">
                        The team provided exceptional financial guidance tailored
                        to my needs. My investments are aimed at ensuring
                        financial security for the future.
                      </p>
                    </div>

                    {/* user */}
                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={44}
                        height={44}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-400">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}














// "use client";

// import Image from "next/image";

// const testimonials = [
//   {
//     name: "Arlene McCoy",
//     role: "Co. Founder",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//     active: false,
//   },
//   {
//     name: "Jane Cooper",
//     role: "Marketer",
//     avatar: "https://randomuser.me/api/portraits/women/65.jpg",
//     active: false,
//   },
//   {
//     name: "Leslie Alexander",
//     role: "Admin",
//     avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//     active: true, // highlighted card
//   },
//   {
//     name: "Jacob Jones",
//     role: "Co. Founder",
//     avatar: "https://randomuser.me/api/portraits/men/75.jpg",
//     active: false,
//   },
//   {
//     name: "Cody Fisher",
//     role: "Founder",
//     avatar: "https://randomuser.me/api/portraits/men/41.jpg",
//     active: false,
//   },
// ];

// export default function Testimonial() {
//   return (
//     <section className="relative bg-[#0A0819] py-32 overflow-hidden">
//       {/* background glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />

//       <div className="relative max-w-[1600px] mx-auto px-6">
//         {/* heading */}
//         <div className="mb-20">
//           <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">
//             ( TESTIMONIALS )
//           </p>
//           <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
//             What Our Clients Say <br /> About Me
//           </h2>
//         </div>

//         {/* cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8">
//           {testimonials.map((item, i) => (
//             <div
//               key={i}
//               className={`rounded-2xl border border-white/10 p-8 flex flex-col justify-between
//               ${
//                 item.active
//                   ? "bg-[#171A1B]"
//                   : "bg-[#0F1222]"
//               }`}
//             >
//               {/* stars */}
//               <div className="flex gap-1 mb-6">
//                 {[...Array(5)].map((_, i) => (
//                   <span key={i} className="text-yellow-400 text-sm">
//                     ★
//                   </span>
//                 ))}
//               </div>

//               {/* quote */}
//               <div className="flex gap-3 mb-10">
//                 <div className="w-1 bg-red-500 mt-1" />
//                 <p className="text-sm leading-relaxed text-gray-300">
//                   The team provided exceptional financial guidance tailored to
//                   my needs. My investments are aimed at ensuring financial
//                   security for the future. I highly recommend their services.
//                 </p>
//               </div>

//               {/* user */}
//               <div className="flex items-center gap-4 pt-6 border-t border-white/10">
//                 <Image
//                   src={item.avatar}
//                   alt={item.name}
//                   width={44}
//                   height={44}
//                   className="rounded-full object-cover"
//                 />
//                 <div>
//                   <h4 className="text-sm font-semibold text-white">
//                     {item.name}
//                   </h4>
//                   <p className="text-xs text-gray-400">{item.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
