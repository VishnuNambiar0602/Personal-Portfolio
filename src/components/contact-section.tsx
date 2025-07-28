"use client";

import { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { personalizePortfolioDesign } from "@/ai/flows/personalize-portfolio-design";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    let isMounted = true;
    const getAnimation = async () => {
      try {
        const { suggestedAnimations } = await personalizePortfolioDesign({
          userInteraction: "User scrolled to the Contact section",
          currentDesignState: "A modern portfolio with a slate blue primary color, light gray background, and mustard yellow accent.",
        });
        if (isMounted && suggestedAnimations.length > 0) {
          const anim = suggestedAnimations[0].toLowerCase();
          if (anim.includes("slide")) {
            setAnimationClass("animate-in slide-in-from-bottom-10 duration-700 ease-out");
          } else {
            setAnimationClass("animate-in fade-in duration-700 ease-out");
          }
        } else if (isMounted) {
          setAnimationClass("animate-in fade-in duration-700 ease-out");
        }
      } catch (error) {
        console.error("Failed to get animation for Contact section:", error);
        if (isMounted) {
          setAnimationClass("animate-in fade-in duration-700 ease-out");
        }
      }
    };

    getAnimation();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="contact" className={cn("w-full py-24 md:py-32 bg-secondary", animationClass)}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p className="text-muted-foreground md:text-xl">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
             <Button asChild size="lg">
              <a href="mailto:hello@example.com">
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </a>
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
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
