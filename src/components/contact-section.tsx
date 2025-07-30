
"use client";

import { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/data";
import ContactForm from "./contact-form";

export default function ContactSection() {
  const [animationClass, setAnimationClass] = useState("opacity-0");
  
  useEffect(() => {
    setAnimationClass("animate-in fade-in duration-700 ease-out");
  }, []);

  return (
    <section id="contact" className={cn("w-full py-24 md:py-32", animationClass)}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">{siteData.contact.title}</h2>
          <p className="text-muted-foreground md:text-xl">
            {siteData.contact.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <ContactForm>
                <Button size="lg" variant="secondary">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
            </ContactForm>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link href={siteData.socialLinks.github} target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={siteData.socialLinks.linkedin} target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={siteData.socialLinks.instagram} target="_blank" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
