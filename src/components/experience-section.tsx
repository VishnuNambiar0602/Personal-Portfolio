"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { personalizePortfolioDesign } from "@/ai/flows/personalize-portfolio-design";
import ContentCard from "@/components/content-card";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    let isMounted = true;
    const getAnimation = async () => {
      try {
        const { suggestedAnimations } = await personalizePortfolioDesign({
          userInteraction: "User scrolled to the Experience section",
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
        console.error("Failed to get animation for Experience section:", error);
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
    <section id="experience" className={cn("bg-secondary py-24 sm:py-32", animationClass)}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">My Experience</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            A timeline of my professional journey and key roles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <ContentCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
