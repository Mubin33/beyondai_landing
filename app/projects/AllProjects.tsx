"use client";

import { useState } from "react";
import Image from "next/image";

const TABS = ["All Projects", "Mobile Apps", "Web Apps"];

const PROJECTS = [
  {
    id: 1,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Tastehub",
    subtitle: "Food order and Delivery System",
    image: "/home/projects/1.png",
    stats: ["4.8★ rating", "500k+ downloads", "85% retention"],
  },
  {
    id: 2,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Prime Pilates",
    subtitle: "Fitness",
    image: "/home/projects/2.png",
    stats: ["4.8★ rating", "500k+ downloads", "85% retention"],
  },
  {
    id: 3,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Bookatable",
    subtitle: "Restaurant Table Booking",
    image: "/home/projects/3.png",
    stats: ["4.8★ rating", "200k+ bookings", "4.7★ rating"],
  },
  {
    id: 4,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Notifly",
    subtitle: "Task Management",
    image: "/home/projects/4.png",
    stats: ["4.6★ rating", "150k+ downloads", "78% retention"],
  },
  {
    id: 5,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "SwiftSwap",
    subtitle: "SwiftSwap",
    image: "/home/projects/5.png",
    stats: ["4.7★ rating", "300k+ swaps", "82% retention"],
  },
  {
    id: 6,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Dudu car Apps",
    subtitle: "Dudu car Malaysia",
    image: "/home/projects/6.png",
    stats: ["4.5★ rating", "120k+ rides", "4.6★ in App Store"],
  },
  {
    id: 7,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "My Tracks",
    subtitle: "Track Monitoring",
    image: "/home/projects/7.png",
    stats: ["4.8★ rating", "80k+ users", "90% retention"],
  },
  {
    id: 8,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Klaus Bekker",
    subtitle: "Audiobook",
    image: "/home/projects/8.png",
    stats: ["4.7★ rating", "45k+ listeners", "high completion rate"],
  },
  {
    id: 9,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Nelyaus",
    subtitle: "Health Companion",
    image: "/home/projects/9.png",
    stats: ["4.6★ rating", "95k+ users", "daily active users high"],
  },
  {
    id: 10,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Walkei",
    subtitle: "Social meet friend",
    image: "/home/projects/10.png",
    stats: ["4.5★ rating", "220k+ downloads", "78% retention"],
  },
  {
    id: 11,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "SheGo",
    subtitle: "SheGo App",
    image: "/home/projects/11.png",
    stats: ["4.7★ rating", "180k+ users", "safety focused"],
  },
  {
    id: 12,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Motivate",
    subtitle: "Daily Quotes & Vibes",
    image: "/home/projects/12.png",
    stats: ["4.8★ rating", "350k+ downloads", "high daily open rate"],
  },
  {
    id: 13,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Tassel",
    subtitle: "Education",
    image: "/home/projects/13.png",
    stats: ["4.6★ rating", "90k+ students", "85% course completion"],
  },
  {
    id: 14,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Klokk-in",
    subtitle: "Story",
    image: "/home/projects/14.png",
    stats: ["4.5★ rating", "140k+ users", "daily stories"],
  },
  {
    id: 15,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Hairkonnect",
    subtitle: "Hairsalon App",
    image: "/home/projects/15.png",
    stats: ["4.7★ rating", "110k+ bookings", "4.8★ in reviews"],
  },
//   
  {
    id: 4,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Vibely",
    subtitle: "Dating Mobile App",
    image: "/home/projects/16.webp",
    stats: ["4.6★ rating", "320k+ downloads", "79% retention"],
  },
  {
    id: 5,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "BashPin",
    subtitle: "Event Discovery App",
    image: "/home/projects/17.webp",
    stats: ["4.7★ rating", "180k+ users", "4.6★ in reviews"],
  },
  {
    id: 6,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Court Connect",
    subtitle: "Community Mobile App",
    image: "/home/projects/18.webp",
    stats: ["4.5★ rating", "95k+ downloads", "82% engagement"],
  },
  {
    id: 7,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "AI Fitness",
    subtitle: "AI-Driven Fitness Companion",
    image: "/home/projects/19.webp",
    stats: ["4.8★ rating", "410k+ downloads", "88% retention"],
  },
  {
    id: 8,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Perfect Catch",
    subtitle: "Dating App",
    image: "/home/projects/20.webp",
    stats: ["4.6★ rating", "250k+ matches", "high daily usage"],
  },
  {
    id: 9,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Cleanax",
    subtitle: "Cleaning & Home Services",
    image: "/home/projects/21.webp",
    stats: ["4.7★ rating", "140k+ bookings", "4.8★ rating"],
  }, 
  {
    id: 11,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "ChicShot",
    subtitle: "AI Creative Platform",
    image: "/home/projects/22.webp",
    stats: ["4.7★ rating", "210k+ users", "creative tools loved"],
  },
  {
    id: 12,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "MAPC",
    subtitle: "EV Charging Station Finder",
    image: "/home/projects/23.webp",
    stats: ["4.6★ rating", "120k+ sessions", "location accuracy high"],
  },
  {
    id: 13,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "FAST FOOD",
    subtitle: "Food Delivery App",
    image: "/home/projects/24.webp",
    stats: ["4.7★ rating", "650k+ orders", "fast delivery focus"],
  }, 
  {
    id: 15,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Bondly",
    subtitle: "Financial Management App",
    image: "/home/projects/25.webp",
    stats: ["4.8★ rating", "180k+ users", "secure tracking"],
  }, 
  {
    id: 17,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "EATLY",
    subtitle: "Health & Wellness App",
    image: "/home/projects/26.webp",
    stats: ["4.7★ rating", "310k+ downloads", "wellness focused"],
  },
  {
    id: 18,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "TimberLens",
    subtitle: "Wood Identification App",
    image: "/home/projects/27.webp",
    stats: ["4.5★ rating", "65k+ scans", "accurate detection"],
  },
  {
    id: 19,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Duty Hour",
    subtitle: "Work Scheduling App",
    image: "/home/projects/28.webp",
    stats: ["4.6★ rating", "110k+ professionals", "easy reporting"],
  },
  {
    id: 20,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "AutoWorld",
    subtitle: "Car Buying Experience",
    image: "/home/projects/29.webp",
    stats: ["4.7★ rating", "145k+ users", "smart search"],
  },   
  {
    id: 24,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "HEAL",
    subtitle: "Audio-Guided Wellness",
    image: "/home/projects/30.webp",
    stats: ["4.6★ rating", "220k+ sessions", "mental health focus"],
  },
  {
    id: 25,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Vibez",
    subtitle: "Nightlife & Event App",
    image: "/home/projects/31.jpg",
    stats: ["4.7★ rating", "160k+ users", "event discovery"],
  },
  {
    id: 26,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Zobra",
    subtitle: "Restaurant & Event Booking",
    image: "/home/projects/32.webp",
    stats: ["4.6★ rating", "135k+ bookings", "easy reservations"],
  },
  {
    id: 27,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "PocketChef",
    subtitle: "Recipe Recommendation App",
    image: "/home/projects/33.webp",
    stats: ["4.8★ rating", "280k+ users", "personalized recipes"],
  },
  {
    id: 28,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "CarePrime",
    subtitle: "Healthcare & Emergency App",
    image: "/home/projects/34.webp",
    stats: ["4.7★ rating", "105k+ users", "quick access"],
  },
  {
    id: 29,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Translator",
    subtitle: "Real-time Translation App",
    image: "/home/projects/36.jpg",
    stats: ["4.5★ rating", "340k+ downloads", "multi-language"],
  },
//   
// 
{
    id: 40,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "WinWhen",
    subtitle: "Community Events Mobile App",
    image: "/home/projects/37.webp",
    stats: ["4.6★ rating", "190k+ users", "active community events"],
  },
  {
    id: 41,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "European Health Assistant",
    subtitle: "Personal Health Assistant",
    image: "/home/projects/38.webp",
    stats: ["4.7★ rating", "145k+ downloads", "medication reminders"],
  }, 
  {
    id: 43,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Car Watcher",
    subtitle: "Car Marketplace App",
    image: "/home/projects/39.webp",
    stats: ["4.6★ rating", "220k+ listings", "smart search & filter"],
  },
  {
    id: 44,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Uogi",
    subtitle: "Beauty Booking Mobile App",
    image: "/home/projects/40.webp",
    stats: ["4.7★ rating", "310k+ bookings", "low no-show rate"],
  },
  {
    id: 45,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Ways2Shop",
    subtitle: "Service Booking Mobile App",
    image: "/home/projects/41.webp",
    stats: ["4.6★ rating", "175k+ services", "home service focus"],
  },
  {
    id: 46,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Forager",
    subtitle: "Luxury Fashion Marketplace",
    image: "/home/projects/42.webp",
    stats: ["4.8★ rating", "95k+ luxury items", "premium shopping"],
  }, 
  {
    id: 48,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Roadside Assist",
    subtitle: "Roadside Assistance App",
    image: "/home/projects/43.webp",
    stats: ["4.6★ rating", "130k+ requests", "fast response time"],
  },
  {
    id: 49,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "NotifEye",
    subtitle: "Parental Control App",
    image: "/home/projects/44.webp",
    stats: ["4.5★ rating", "160k+ families", "screen time management"],
  },
  {
    id: 50,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "TasaneeArt",
    subtitle: "Digital Art Ecosystem",
    image: "/home/projects/45.webp",
    stats: ["4.7★ rating", "105k+ artists", "NFT & art sharing"],
  },
  {
    id: 51,
    category: "Mobile Apps",
    tag: "Mobile App",
    title: "Naculis",
    subtitle: "Interactive Learning App",
    image: "/home/projects/47.webp",
    stats: ["4.6★ rating", "195k+ learners", "quiz-based education"],
  }, 
];

export default function AllProjects() {
  const [activeTab, setActiveTab] = useState("All Projects");

  const filteredProjects =
    activeTab === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section className="relative bg-[#0A0819] py-32 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent_60%)]" />

      <div className="relative max-w-[1600px] mx-auto px-6">
        {/* heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl xl:text-[72px] font-bold text-white font-ubuntu">
            Our <span className="text-[#FF5C00]">Portfolio</span>
          </h2>
          <p className="text-sm md:text-base xl:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            Real projects. Real results. See how we’ve helped businesses
            transform their digital presence.
          </p>
        </div>

        {/* tabs */}
        <div className="flex justify-center gap-4 mb-20">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-2xl text-sm transition cursor-pointer
                ${
                  activeTab === tab
                    ? "bg-[#FF5C00] text-white"
                    : "border border-white/20 text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="bg-[#434343] rounded-2xl overflow-hidden"
            >
              {/* image */}
              <div className="relative h-[360px] bg-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* content */}
              <div className="p-6">
                <p className="text-xs md:text-sm xl:text-lg text-[#FF5C00] mb-2">{item.tag}</p>
                <h3 className="text-xl md:text-2xl xl:text-[30px] font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm md:text-lg xl:text-xl text-[#F3F6F9] mt-1">
                  {item.subtitle}
                </p>

                {/* stats */}
                <div className="flex flex-wrap gap-3 xl:gap-6 mt-6">
                  {item.stats.map((stat, i) => (
                    <span
                      key={i}
                      className="text-xs md:text-sm xl:text-lg px-3 py-1 rounded-full bg-[#E762291A] text-[#E7622A]"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
