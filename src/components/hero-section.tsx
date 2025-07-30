
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ParticleBackground from "./particle-background";
import { siteData } from "@/lib/data";

export default function HeroSection() {
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    setAnimationClass("animate-in fade-in duration-1000 ease-out");
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
        </div>
      </div>
    </section>
  );
}
