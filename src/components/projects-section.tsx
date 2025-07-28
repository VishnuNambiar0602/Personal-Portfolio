"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { personalizePortfolioDesign } from "@/ai/flows/personalize-portfolio-design";
import ContentCard from "@/components/content-card";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    let isMounted = true;
    const getAnimation = async () => {
      try {
        const { suggestedAnimations } = await personalizePortfolioDesign({
          userInteraction: "User scrolled to the Projects section",
          currentDesignState: "A modern portfolio with a slate blue primary color, light gray background, and mustard yellow accent.",
        });
        if (isMounted && suggestedAnimations.length > 0) {
          const anim = suggestedAnimations[0].toLowerCase();
          if (anim.includes("zoom")) {
            setAnimationClass("animate-in zoom-in-90 duration-700 ease-out");
          } else {
            setAnimationClass("animate-in fade-in duration-700 ease-out");
          }
        } else if (isMounted) {
          setAnimationClass("animate-in fade-in duration-700 ease-out");
        }
      } catch (error) {
        console.error("Failed to get animation for Projects section:", error);
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
    <section id="projects" className={cn("py-24 sm:py-32", animationClass)}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Here are some of the projects I&apos;m proud to have worked on.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ContentCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
