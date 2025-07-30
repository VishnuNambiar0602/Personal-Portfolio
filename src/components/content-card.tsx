import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ContentCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  imageHint: string;
};

export default function ContentCard({ title, description, image, link, tags, imageHint }: ContentCardProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="block group" aria-label={`View ${title}`}>
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] bg-card text-card-foreground">
        <div className="relative w-full aspect-video overflow-hidden">
          <Image 
            src={image} 
            alt={title} 
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={imageHint}
          />
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-xl lg:text-2xl mb-2 flex items-center justify-between">
            {title}
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="default" className="font-medium bg-primary text-primary-foreground">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
