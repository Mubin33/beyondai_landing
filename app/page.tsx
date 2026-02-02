import AboutSection from "@/components/_ui/AboutSection";
import Brand from "@/components/_ui/Brand";
import Hero from "@/components/_ui/Hero";
import ServicesSection from "@/components/_ui/ServicesSection";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero />
      <Brand/>
      <AboutSection />
      <ServicesSection/>
    </div>
  );
}
