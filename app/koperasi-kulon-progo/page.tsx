"use client";

import React from "react";
import { Analytics } from "@vercel/analytics/next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import LoanRequirementsSection from "../components/LoanRequirementsSection";
import MemberRequirementsSection from "../components/MemberRequirementsSection";
import SimulationSection from "../components/SimulationSection";
import dynamic from "next/dynamic";

const ContactSection = dynamic(() => import("../components/ContactSection"), {
  ssr: false,
});

// ❌ HAPUS export const metadata ... di sini

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LoanRequirementsSection />
        <MemberRequirementsSection />
        <SimulationSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
        <Analytics />
      </main>
      <Footer />
    </div>
  );
}
