
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { siteData } from "@/lib/data";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type SkillCategory = 'technical' | 'soft';

export default function AboutSection() {
  const [animationClass, setAnimationClass] = useState("opacity-0");
  const [skillCategory, setSkillCategory] = useState<SkillCategory>('technical');

  useEffect(() => {
    setAnimationClass("animate-in fade-in duration-700 ease-out");
  }, []);

  const skillsToShow = siteData.about.skills[skillCategory];

  return (
    <section id="about" className={cn("container py-24 sm:py-32", animationClass)}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">{siteData.about.title}</h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            {siteData.about.description}
          </p>
          <div className="space-y-4">
            <h3 className="font-semibold tracking-tight font-headline text-xl">{siteData.about.skillsTitle}</h3>
            
            <RadioGroup defaultValue="technical" onValueChange={(value) => setSkillCategory(value as SkillCategory)} className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="technical" id="r1" />
                <Label htmlFor="r1">Technical Skills</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="soft" id="r2" />
                <Label htmlFor="r2">Soft Skills</Label>
              </div>
            </RadioGroup>

            <div className="flex flex-wrap gap-2 font-body">
              {skillsToShow.map(skill => (
                <span key={skill} className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="relative aspect-square">
          {/* Using a standard img tag to avoid Next.js image optimization issues */}
          <img
            src={siteData.about.image}
            alt="About Me"
            className="rounded-lg object-cover shadow-lg w-full h-full"
            data-ai-hint="portrait photo"
          />
        </div>
      </div>
    </section>
  );
}
