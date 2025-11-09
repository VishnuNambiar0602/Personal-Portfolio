"use client"; // 1. Add "use client" to use hooks and browser functions

import Link from "next/link";
import { Github, Instagram, Linkedin, Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteData } from "@/lib/data";
import { useCallback } from "react"; // 2. Import useCallback

// 3. Function to generate the ATS-friendly text content
const generateResumeText = () => {
  const { header, socialLinks, about, experiencesContent, projectsContent, educationsContent } = siteData;

  // Helper for formatting arrays
  const formatList = (items: string[]) => items.join(', ');
  const sectionBreak = '\n============================================================\n';

  let content = `
${header.title}
============================================================
Email: vishnunambiar2006@gmail.com
LinkedIn: ${socialLinks.linkedin}
GitHub: ${socialLinks.github}

${sectionBreak}
SUMMARY
============================================================
${about.description}

${sectionBreak}
TECHNICAL SKILLS
============================================================
${formatList(about.skills.technical)}

${sectionBreak}
SOFT SKILLS
============================================================
${formatList(about.skills.soft)}

${sectionBreak}
EXPERIENCE
============================================================

${experiencesContent.map(exp => `
------------------------------------------------------------
${exp.title}
${exp.description}
Tags: ${formatList(exp.tags)}
`).join('')}

${sectionBreak}
PROJECTS
============================================================

${projectsContent.map(proj => `
------------------------------------------------------------
${proj.title}
${proj.description}
Tags: ${formatList(proj.tags)}
`).join('')}

${sectionBreak}
EDUCATION
============================================================

${educationsContent.map(edu => `
------------------------------------------------------------
${edu.title}
${edu.description}
Tags: ${formatList(edu.tags)}
`).join('')}
  `;

  // Clean up extra indentation for the .txt file
  return content.split('\n').map(line => line.trim()).join('\n');
};

export default function Header() {
  const { navLinks, title } = siteData.header;

  // 4. Create the download handler
  const handleDownloadResume = useCallback(() => {
    const textContent = generateResumeText();
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Vishnu_Nambiar_Resume.txt'; // Set the file name
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
          {/* 5. Update the Download Button to use the onClick handler */}
          <Button variant="ghost" size="icon" onClick={handleDownloadResume} aria-label="Download Resume">
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
                {/* 6. Update the mobile link to use the onClick handler */}
                <button
                  onClick={handleDownloadResume}
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
