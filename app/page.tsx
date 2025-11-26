"use client";

import { useState } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Hero } from "@/components/Hero";
import { STEMCards } from "@/components/STEMCards";
import { CoursesSection } from "@/components/CoursesSection";
import { OriginStory } from "@/components/OriginStory";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { GamifiedLab } from "@/components/GamifiedLab";
import { Footer } from "@/components/Footer";
import { AdvancedModal } from "@/components/AdvancedModal";
import { type Course } from "@shared/schema";
import { Manifesto } from "@/components/Manifesto";
import DarkVeil from "@/components/DarkVeil";
import Nav from "@/components/Nav";
import CardSwap, { Card } from "@/components/CardSwap";

export default function HomePage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <div
        className="glass-container"
        style={{ width: "100vw", height: "100vh", position: "fixed" }}
      >
        <DarkVeil />
      </div>
      <Nav />
      <ParticleBackground />

      <main className="relative z-10">
        <Hero />
        <Manifesto />

        <div style={{ height: "600px", position: "relative" }}>
          <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
            <Card>
              <h3>Card 1</h3>
              <p>Science</p>
            </Card>
            <Card>
              <h3>Card 2</h3>
              <p>Your content here</p>
            </Card>
            <Card>
              <h3>Card 3</h3>
              <p>Your content here</p>
            </Card>
          </CardSwap>
        </div>
        <STEMCards />
        <CoursesSection onCourseSelect={handleCourseSelect} />
        <OriginStory />
        <Testimonials />
        <WhyChooseUs />
        <GamifiedLab />
      </main>

      <Footer />

      <AdvancedModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}



