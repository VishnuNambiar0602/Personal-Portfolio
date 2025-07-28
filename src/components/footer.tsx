import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} My Digital Stage. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <div className="p-2 rounded-full transition-colors hover:bg-accent hover:text-accent-foreground">
              <Github className="h-5 w-5" />
            </div>
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <div className="p-2 rounded-full transition-colors hover:bg-accent hover:text-accent-foreground">
              <Linkedin className="h-5 w-5" />
            </div>
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <div className="p-2 rounded-full transition-colors hover:bg-accent hover:text-accent-foreground">
              <Instagram className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
