import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import HireMeSection from "@/components/hire-me-section";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <HireMeSection />
        <ContactSection />
      </main>
    </div>
  );
}
