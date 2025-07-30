
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { siteData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Bot, PenTool, Database } from "lucide-react";

const iconMap = {
  "Website Development": <Code className="w-8 h-8 text-primary" />,
  "Content Writing": <PenTool className="w-8 h-8 text-primary" />,
  "AI & ML Domain": <Bot className="w-8 h-8 text-primary" />,
  "Data Science": <Database className="w-8 h-8 text-primary" />,
};

export default function HireMeSection() {
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    setAnimationClass("animate-in fade-in duration-700 ease-out");
  }, []);

  return (
    <section id="hire-me" className={cn("py-24 sm:py-32", animationClass)}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">{siteData.hireMe.title}</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            {siteData.hireMe.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.hireMe.services.map((service) => (
            <Card key={service.title} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {iconMap[service.title as keyof typeof iconMap]}
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
