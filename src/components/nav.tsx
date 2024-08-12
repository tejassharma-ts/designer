import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Image from "next/image";
import ShinyBorderContainer from "./ui/fancy-border";
import { Input } from "./ui/input";

const socialMediaLinks = [
  { src: "/whatsapp.png", alt: "WhatsApp", href: "https://wa.me/919310038567" },
  { src: "/linkedin.png", alt: "LinkedIn", href: "https://www.linkedin.com/in/jatin-prajapaty-a48a422a2/" },
  { src: "/dribble.png", alt: "Dribble", href: "https://dribbble.com/JatinPrajapaty" },
  { src: "/cal.png", alt: "Google Meet", href: "https://cal.com/jatinprajapaty" },
  { src: "/behance.png", alt: "Behance", href: "https://www.behance.net/jatinprajapaty" },
  { src: "/insta.png", alt: "Instagram", href: "https://www.instagram.com/jatin.prajapaty/" },
  { src: "/twitter.png", alt: "Twitter", href: "https://x.com/JatinPrajapaty" },
];

export function SocialIcons({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <ul
      className={cn(
        "absolute left-1/2 h-[50px] -translate-x-1/2 flex items-center gap-4 rounded-full border border-white/40 bg-gradient-to-r from-white/15 via-background to-white/15 p-2 backdrop-blur-3xl before:absolute before:-bottom-[20%] before:left-1/2 before:-z-10 before:h-[140%] before:w-[80px] before:-translate-x-[50%] before:rounded-full before:bg-background before:blur-sm md:hidden",
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
    <nav className="mx-auto flex h-28 max-w-7xl items-center justify-between px-3">
      <div className="flex items-center gap-3">
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
