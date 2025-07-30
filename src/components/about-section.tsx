
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteData } from "@/lib/data";

export default function AboutSection() {
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    setAnimationClass("animate-in fade-in duration-700 ease-out");
  }, []);

  return (
    <section id="about" className={cn("container py-24 sm:py-32", animationClass)}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">{siteData.about.title}</h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            {siteData.about.description}
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold tracking-tight font-headline">{siteData.about.skillsTitle}</h3>
            <div className="flex flex-wrap gap-2 font-body">
              {siteData.about.skills.map(skill => (
                <span key={skill} className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="relative aspect-square">
          <Image
            src="https://placehold.co/600x600.png"
            alt="About Me"
            fill
            className="rounded-lg object-cover shadow-lg"
            data-ai-hint="futuristic anime"
          />
        </div>
      </div>
    </section>
  );
}
