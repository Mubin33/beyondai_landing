import AboutSection from "@/components/_ui/AboutSection";
import Brand from "@/components/_ui/Brand";
import GreatTogether from "@/components/_ui/GreatTogether";
import Hero from "@/components/_ui/Hero";
import Projects from "@/components/_ui/Projects";
import ServicesSection from "@/components/_ui/ServicesSection";
import Testimonial from "@/components/_ui/Testimonial";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero />
      <Brand/>
      <AboutSection />
      <ServicesSection/>
      <Projects/>
      <Testimonial/>
      <GreatTogether/>
    </div>
  );
}
