"use client";

import Link from "next/link";
import { Github, Instagram, Linkedin, Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteData } from "@/lib/data";
import { useCallback } from "react";
import { jsPDF } from "jspdf"; // 1. Import jsPDF

export default function Header() {
  const { navLinks, title } = siteData.header;

  // 2. This function generates and downloads the PDF
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          
          <span className="font-bold font-headline text-lg tracking-wide sm:inline-block">{title}</span>
        </Link>
        
        <div className="hidden items-center space-x-2 md:flex">
          <nav className="bg-card/90 backdrop-blur-sm shadow-lg rounded-full px-6 py-3 flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors text-foreground/60 hover:text-foreground/80 px-2 py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center space-x-2 md:flex">
          {/* 3. Update the Download Button to use the PDF handler */}
          <Button variant="ghost" size="icon" onClick={handleDownloadPdf} aria-label="Download Resume">
            <Download />
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href={siteData.socialLinks.github} target="_blank" aria-label="GitHub"><Github /></Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={siteData.socialLinks.linkedin} target="_blank" aria-label="LinkedIn"><Linkedin /></Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={siteData.socialLinks.instagram} target="_blank" aria-label="Instagram"><Instagram /></Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                <span className="font-bold font-headline text-lg tracking-wide">{title}</span>
              </Link>
              <nav className="grid gap-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                {/* 4. Update the mobile link to use the PDF handler */}
                <button
                  onClick={handleDownloadPdf}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground text-left"
                  aria-label="Download Resume"
                >
                  Download Resume
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
