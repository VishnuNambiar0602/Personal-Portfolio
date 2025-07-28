"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { personalizePortfolioDesign } from "@/ai/flows/personalize-portfolio-design";

export default function HeroSection() {
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    let isMounted = true;
    const getAnimation = async () => {
      try {
        const { suggestedAnimations } = await personalizePortfolioDesign({
          userInteraction: "User landed on the hero section",
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
        console.error("Failed to get animation for Hero section:", error);
        if (isMounted) {
          setAnimationClass("animate-in fade-in duration-700 ease-out");
        }
      }
    };
    // Delay animation to make it more noticeable
    const timer = setTimeout(() => getAnimation(), 300);
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="hero" className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center">
       <div className="absolute inset-0 bg-grid-slate-300/[0.2] [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
      <div className={cn("container px-4 md:px-6 text-center space-y-6 z-10", animationClass)}>
        <h1 className="text-4xl font-extrabold font-headline tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground bg-primary/90 py-2 px-6 rounded-lg inline-block shadow-lg">
          Welcome to My Digital Stage
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          A showcase of my journey in technology, creativity, and professional growth.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="#projects">
              View My Work
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10">
        <Link href="#about" aria-label="Scroll to about section">
          <div className="animate-bounce bg-primary text-primary-foreground p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            <ArrowDown className="h-6 w-6" />
          </div>
        </Link>
      </div>
    </section>
  );
}
