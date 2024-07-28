import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Image from "next/image";
import ShinyBorderContainer from "./ui/fancy-border";
import { Input } from "./ui/input";

const socialMediaLinks = [
  { src: "/whatsapp.png", alt: "WhatsApp", href: "https://www.whatsapp.com" },
  { src: "/linkedin.png", alt: "LinkedIn", href: "https://www.linkedin.com" },
  { src: "/dribble.png", alt: "Dribble", href: "https://www.dribbble.com" },
  { src: "/meet.png", alt: "Google Meet", href: "https://meet.google.com" },
  { src: "/insta.png", alt: "Instagram", href: "https://www.instagram.com" },
  { src: "/twitter.png", alt: "Twitter", href: "https://www.twitter.com" },
  { src: "/behance.png", alt: "Behance", href: "https://www.behance.net" },
];

export default function Nav() {
  return (
    <nav className="container flex h-28 items-center justify-between">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/hero.png" />
          <AvatarFallback className="border border-white/10 bg-background">JP</AvatarFallback>
        </Avatar>
        <span className="font-semibold">Jatin Prajapaty</span>
      </div>

      <ul className="relative flex gap-5 rounded-full border border-white/40 bg-gradient-to-r from-white/15 via-background to-white/15 px-3 py-2 backdrop-blur-3xl before:absolute before:h-[130%] before:bg-background/90 before:w-32 before:blur-sm before:rounded-full before:left-1/2 before:-z-10 before:-bottom-[20%] before:-translate-x-[30%] md:hidden">
        {socialMediaLinks.map((link, index) => (
          <li key={index} className="transition-transform duration-300 hover:-translate-y-1">
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <Image
                width={40}
                height={40}
                quality={100}
                src={link.src}
                alt={link.alt}
                unoptimized
                priority
              />
            </a>
          </li>
        ))}
      </ul>
      <div className="h-auto rounded-lg bg-gradient-to-b from-white p-px">
        <Button className="inline-block w-full rounded-[calc(2rem+1px)] bg-primary px-6 sm:px-4">
          Portfolio
        </Button>
      </div>
    </nav>
  );
}
