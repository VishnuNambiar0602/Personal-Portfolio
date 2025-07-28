import Link from "next/link";
import { Code2, Github, Instagram, Linkedin, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-primary text-primary-foreground p-2 rounded-full">
            <Code2 className="h-6 w-6" />
          </div>
          <span className="font-bold font-headline text-lg tracking-wide hidden sm:inline-block">My Digital Stage</span>
        </Link>
        
        <div className="hidden items-center space-x-2 md:flex">
          <nav className="bg-card/90 backdrop-blur-sm shadow-lg rounded-full px-6 py-3 flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors text-foreground/60 hover:text-foreground/80 px-2 py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center space-x-2 md:flex">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" aria-label="GitHub"><Github /></Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><Linkedin /></Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram"><Instagram /></Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                <div className="bg-primary text-primary-foreground p-2 rounded-full">
                  <Code2 className="h-6 w-6" />
                </div>
                <span className="font-bold font-headline text-lg tracking-wide">My Digital Stage</span>
              </Link>
              <nav className="grid gap-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
