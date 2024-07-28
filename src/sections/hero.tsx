"use client";

import Image from "next/image";

import React, { useContext, useEffect } from "react";
import { motion, useAnimationControls, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ShinyBorderContainer from "@/components/ui/fancy-border";
import { Icons } from "@/components/icons";
import { PreloaderContext, PreloaderContextProps } from "@/context/preloader-context";

const heroElementVariants = {
  down: {
    y: 30,
    opacity: 0,
  },
  up: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const cardVariants: Variants = {
  off: {
    opacity: 0,
  },
  on: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const marqueeVariants: Variants = {
  stop: {
    x: 0,
  },
  start: {
    x: "calc(-100% - 0.75rem)",
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export default function Hero() {
  const { isLoaded } = useContext(PreloaderContext) as PreloaderContextProps;

  const heroTextControls = useAnimationControls();
  const cartContrls = useAnimationControls();
  const marqueeControls = useAnimationControls();

  useEffect(() => {
    const sequenceAnimation = async () => {
      await heroTextControls.start("up");
      await cartContrls.start("on");
      await marqueeControls.start("start");
    };

    if (isLoaded) {
      sequenceAnimation();
    }
  }, [heroTextControls, cartContrls, marqueeControls, isLoaded]);

  return (
    <div className="h-screen">
      <motion.div
        initial="down"
        variants={heroElementVariants}
        animate={heroTextControls}
        className="flex flex-col items-center justify-center gap-5 pt-16">
        <motion.h1
          variants={heroElementVariants}
          className="text-center text-7xl font-semibold leading-[1.1] [word-spacing:-5px] sm:text-5xl md:text-6xl">
          I&apos;m Jatin, Your{" "}
          <span className="bg-gradient-to-r from-white via-primary via-40% to-white bg-clip-text font-bold text-transparent mr-[1px]">
            Next-Gen
          </span>
        </motion.h1>
        <motion.h1
          variants={heroElementVariants}
          className="-mt-4 text-center text-7xl font-semibold leading-[1.1] [word-spacing:-5px] sm:text-5xl md:text-6xl">
          Passionate Designer
        </motion.h1>
        <motion.p
          variants={heroElementVariants}
          className="max-w-2xl text-center text-base text-muted-foreground md:text-sm">
          Experience the magic of a designer who transforms ideas into visually striking,
          emotionally resonant works, setting new standards in UI/UX and brand identity design.
        </motion.p>
        <motion.div
          variants={heroElementVariants}
          className="mt-4 rounded-full bg-gradient-to-r from-background to-white/40 p-px">
          <div className="relative rounded-[calc(2rem-1px)] bg-background">
            <div className="flex items-center p-2">
              <Input
                placeholder="marcus@example.com"
                className="border-transparent bg-transparent px-4 text-base"
              />
              <Button className="text-base">Subscribe</Button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Projects */}
      <motion.div
        initial="off"
        variants={cardVariants}
        animate={cartContrls}
        className="mt-24 flex min-w-full gap-3 overflow-x-hidden">
        <motion.div variants={cardVariants}>
          <img
            src="/big-circle.svg"
            className="absolute left-1/2 top-0 -z-40 -translate-x-1/2 -translate-y-[50%] border object-cover opacity-[.4] blur-3xl md:-translate-y-[20%] sm:translate-y-0"
          />
        </motion.div>
        <motion.div
          initial="stop"
          animate={marqueeControls}
          variants={marqueeVariants}
          className="flex min-w-full flex-shrink-0 justify-around gap-3">
          <ShinyBorderContainer className="group relative min-h-96">
            <Image fill src="/project-1.jpg" alt="project-1" className="object-cover" />
            <span className="absolute right-4 top-4 z-50 flex size-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg">
              <Icons.arrow className="-rotate-45 transition-transform group-hover:rotate-0" />
            </span>
          </ShinyBorderContainer>
          <ShinyBorderContainer className="group relative min-h-96">
            <Image fill src="/project-2.jpg" alt="project-1" className="object-cover" />
            <span className="absolute right-4 top-4 z-50 flex size-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg">
              <Icons.arrow className="-rotate-45 transition-transform group-hover:rotate-0" />
            </span>
          </ShinyBorderContainer>
          <ShinyBorderContainer className="group relative min-h-96">
            <Image fill src="/project-3.jpg" alt="project-1" className="object-cover" />
            <span className="absolute right-4 top-4 z-50 flex size-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg">
              <Icons.arrow className="-rotate-45 transition-transform group-hover:rotate-0" />
            </span>
          </ShinyBorderContainer>
          <ShinyBorderContainer className="group relative min-h-96">
            <Image fill src="/project-4.jpg" alt="project-1" className="object-cover" />
            <span className="absolute right-4 top-4 z-50 flex size-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg">
              <Icons.arrow className="-rotate-45 transition-transform group-hover:rotate-0" />
            </span>
          </ShinyBorderContainer>
        </motion.div>

        <motion.div
          initial="stop"
          animate={marqueeControls}
          variants={marqueeVariants}
          className="flex min-w-full flex-shrink-0 justify-around gap-3">
          <ShinyBorderContainer className="group relative min-h-96">
            <Image fill src="/project-1.jpg" alt="project-1" className="object-cover" />
            <span className="absolute right-4 top-4 z-50 flex size-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg">
              <Icons.arrow className="-rotate-45 transition-transform group-hover:rotate-0" />
            </span>
          </ShinyBorderContainer>
          <ShinyBorderContainer className="group relative min-h-96">
            <Image fill src="/project-2.jpg" alt="project-1" className="object-cover" />
            <span className="absolute right-4 top-4 z-50 flex size-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg">
              <Icons.arrow className="-rotate-45 transition-transform group-hover:rotate-0" />
            </span>
          </ShinyBorderContainer>
          <ShinyBorderContainer className="group relative min-h-96">
            <Image fill src="/project-3.jpg" alt="project-1" className="object-cover" />
            <span className="absolute right-4 top-4 z-50 flex size-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg">
              <Icons.arrow className="-rotate-45 transition-transform group-hover:rotate-0" />
            </span>
          </ShinyBorderContainer>
          <ShinyBorderContainer className="group relative min-h-96">
            <Image fill src="/project-4.jpg" alt="project-1" className="object-cover" />
            <span className="absolute right-4 top-4 z-50 flex size-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg">
              <Icons.arrow className="-rotate-45 transition-transform group-hover:rotate-0" />
            </span>
          </ShinyBorderContainer>
        </motion.div>
      </motion.div>
    </div>
  );
}
