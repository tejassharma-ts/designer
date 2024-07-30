import { cn } from "@/lib/utils";
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
  { src: "/behance.png", alt: "Behance", href: "https://www.behance.net" },
  { src: "/insta.png", alt: "Instagram", href: "https://www.instagram.com" },
  { src: "/twitter.png", alt: "Twitter", href: "https://www.twitter.com" },
];

export function SocialIcons({
  className,
  iconClassName,
}: {
  className: string;
  iconClassName: string;
}) {
  return (
    <ul
      className={cn(
        "relative flex gap-4 rounded-full border border-white/40 bg-gradient-to-r from-white/15 via-background to-white/15 p-2 backdrop-blur-3xl before:absolute before:-bottom-[20%] before:left-1/2 before:-z-10 before:h-[140%] before:w-[40px] before:-translate-x-[30%] before:rounded-full before:bg-background before:blur-sm md:hidden",
        className,
      )}>
      {socialMediaLinks.map((link, index) => (
        <li key={index} className="transition-transform duration-300 hover:-translate-y-1">
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            <Image
              width={36}
              height={36}
              className={iconClassName}
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
  );
}

export default function Nav() {
  return (
    <nav className="mx-auto flex h-28 max-w-7xl items-center justify-between">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/hero.png" />
          <AvatarFallback className="border border-white/10 bg-background">JP</AvatarFallback>
        </Avatar>
        <span className="font-semibold">Jatin Prajapaty</span>
      </div>
      <SocialIcons />

      <div className="h-auto rounded-lg bg-gradient-to-b from-white p-px">
        <Button className="inline-block w-full rounded-[calc(2rem+1px)] bg-primary px-6 sm:px-4">
          Portfolio
        </Button>
      </div>
    </nav>
  );
}
