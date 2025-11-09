"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import ParticleBackground from "./particle-background";
import { siteData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { jsPDF } from "jspdf"; // Make sure to run: npm install jspdf

export default function HeroSection() {
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    setAnimationClass("animate-in fade-in duration-1000 ease-out");
  }, []);

  // This function generates and downloads the PDF
  const handleDownloadPdf = useCallback(() => {
    const { header, socialLinks, about, experiencesContent, projectsContent, educationsContent } = siteData;

    // Initialize PDF
    const doc = new jsPDF("p", "pt", "a4");
    const margin = 40;
    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;
    const usableWidth = pageWidth - margin * 2;
    let currentY = margin;

    // Helper function to add text and handle line/page breaks
    const addText = (
      text: string,
      size: number,
      style: 'normal' | 'bold' = 'normal',
      isTitle: boolean = false
    ) => {
      doc.setFontSize(size);
      doc.setFont("helvetica", style);

      if (isTitle) {
        doc.setTextColor(0, 0, 0); // Black for titles
      } else {
        doc.setTextColor(50, 50, 50); // Dark gray for body
      }

      // Split text to fit width
      const lines = doc.splitTextToSize(text, usableWidth);

      // Check for page break
      if (currentY + (lines.length * size) > pageHeight - margin) {
        doc.addPage();
        currentY = margin;
      }

      doc.text(lines, margin, currentY);
      currentY += (lines.length * (size * 1.2)); // Move Y down
    };

    // --- Build the PDF Content ---

    // Header
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text(header.title, pageWidth / 2, currentY, { align: "center" });
    currentY += 30;

    addText(`Email: vishnunambiar2006@gmail.com`, 10);
    addText(`LinkedIn: ${socialLinks.linkedin}`, 10);
    addText(`GitHub: ${socialLinks.github}`, 10);
    currentY += 15;
    
    // Summary
    addText("SUMMARY", 14, "bold", true);
    addText(about.description, 10);
    currentY += 15;

    // Skills
    addText("TECHNICAL SKILLS", 14, "bold", true);
    addText(about.skills.technical.join(', '), 10);
    currentY += 15;
    
    addText("SOFT SKILLS", 14, "bold", true);
    addText(about.skills.soft.join(', '), 10);
    currentY += 15;

    // Experience
    addText("EXPERIENCE", 14, "bold", true);
    experiencesContent.forEach(exp => {
      addText(exp.title, 11, "bold");
      addText(exp.description, 10);
      addText(`Tags: ${exp.tags.join(', ')}`, 9);
      currentY += 10;
    });

    // Projects
    addText("PROJECTS", 14, "bold", true);
    projectsContent.forEach(proj => {
      addText(proj.title, 11, "bold");
      addText(proj.description, 10);
      addText(`Tags: ${proj.tags.join(', ')}`, 9);
      currentY += 10;
    });

    // Education
    addText("EDUCATION", 14, "bold", true);
    educationsContent.forEach(edu => {
      addText(edu.title, 11, "bold");
      addText(edu.description, 10);
      addText(`Tags: ${edu.tags.join(', ')}`, 9);
      currentY += 10;
    });

    // --- Save the PDF ---
    doc.save("Vishnu_Nambiar_Resume.pdf");

  }, []);

  return (
    <section id="hero" className={cn("relative w-full h-screen", animationClass)}>
      <div className="absolute inset-0 z-[-1]">
        <ParticleBackground />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
        <div className="bg-background/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-foreground">
            {siteData.hero.title}
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-foreground/80 font-body">
            {siteData.hero.subtitle}
          </p>
          <div className="mt-8">
            <Button size="lg" onClick={handleDownloadPdf}>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
