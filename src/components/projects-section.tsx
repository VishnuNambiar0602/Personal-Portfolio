"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ContentCard from "@/components/content-card";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    setAnimationClass("animate-in fade-in duration-700 ease-out");
  }, []);
  
  return (
    <section id="projects" className={cn("py-24 sm:py-32", animationClass)}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Here are some of the projects I'm proud to have worked on.
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
