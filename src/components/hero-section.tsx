// src/components/hero-section.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    setAnimationClass("animate-in fade-in duration-1000 ease-out");
  }, []);

  return (
    <section id="hero" className={cn("relative w-full h-screen", animationClass)}>
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Hero Background"
        fill
        className="object-cover"
        data-ai-hint="anime landscape"
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/50 p-4">
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
          &quot;With great codes comes great bugs&quot;
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white/80">
          ...and I am not here for both.
        </p>
      </div>
    </section>
  );
}
