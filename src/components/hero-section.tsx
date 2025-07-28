
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ParticleBackground from "./particle-background";

export default function HeroSection() {
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    setAnimationClass("animate-in fade-in duration-1000 ease-out");
  }, []);

  return (
    <section id="hero" className={cn("relative w-full h-screen", animationClass)}>
      <ParticleBackground />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-foreground bg-background/50 p-4">
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
          &quot;With great codes comes great bugs&quot;
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-foreground/80">
          ...and I am here for neither.
        </p>
      </div>
    </section>
  );
}
