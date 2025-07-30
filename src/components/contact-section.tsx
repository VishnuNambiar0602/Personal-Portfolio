
"use client";

import { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/data";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/ai/flows/send-contact-email";

export default function ContactSection() {
  const [animationClass, setAnimationClass] = useState("opacity-0");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setAnimationClass("animate-in fade-in duration-700 ease-out");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await sendContactEmail({ name, email, message });
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
        });
        setName("");
        setEmail("");
        setMessage("");
        setIsDialogOpen(false); 
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className={cn("w-full py-24 md:py-32", animationClass)}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">{siteData.contact.title}</h2>
          <p className="text-muted-foreground md:text-xl">
            {siteData.contact.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="secondary">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                  <DialogHeader>
                    <DialogTitle>Contact Me</DialogTitle>
                    <DialogDescription>
                      Fill out the form below and I'll get back to you as soon as possible.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" placeholder="Your Name" className="col-span-3" value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="col-span-3" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="message" className="text-right">
                        Message
                      </Label>
                      <Textarea id="message" placeholder="Your message..." className="col-span-3" value={message} onChange={(e) => setMessage(e.target.value)} required/>
                    </div>
                  </div>
                  <DialogFooter>
                      <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Message"}</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link href={siteData.socialLinks.github} target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={siteData.socialLinks.linkedin} target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={siteData.socialLinks.instagram} target="_blank" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
