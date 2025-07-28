"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { personalizePortfolioDesign } from "@/ai/flows/personalize-portfolio-design";

export default function AboutSection() {
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    let isMounted = true;
    const getAnimation = async () => {
      try {
        const { suggestedAnimations } = await personalizePortfolioDesign({
          userInteraction: "User scrolled to the About Me section",
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
        console.error("Failed to get animation for About section:", error);
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
    <section id="about" className={cn("container py-24 sm:py-32", animationClass)}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I&apos;m a passionate and creative developer with a knack for building beautiful, functional, and user-friendly web applications. With a strong foundation in modern web technologies, I love turning complex problems into simple, elegant solutions. When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold tracking-tight">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">React</span>
              <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">Next.js</span>
              <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">TypeScript</span>
              <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">Node.js</span>
              <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">Tailwind CSS</span>
            </div>
          </div>
        </div>
        <div className="relative aspect-square">
          <Image
            src="https://placehold.co/600x600.png"
            alt="About Me"
            fill
            className="rounded-lg object-cover shadow-lg"
            data-ai-hint="portrait professional"
          />
        </div>
      </div>
    </section>
  );
}
