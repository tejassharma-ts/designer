"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  AnimatePresence,
  useAnimationControls,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useEvent } from "react-use";
import { useDockContext } from "@/context/dock-context";

const DockItem = ({
  children,
  tooltipLabel,
  isActive,
}: {
  children: ReactNode;
  tooltipLabel: string;
  isActive?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { dockWidth, mouse, isDockHovered, config } = useDockContext();
  const { size, magnification, scale } = config;
  const totalWidth = dockWidth ?? 0;
  const [centerXPosition, setCenterXPosition] = useState(0);
  const initialMouseX = useMotionValue(0);
  const controls = useAnimationControls();

  /**
   * Calculating the dimensions of the dock item based on the mouse position.
   * The dimension of the dock item is calculated using the cosine function to give a magnification effect.
   */
  function calculateDockItemDimension(mouseX: number) {
    const normalizedMouseX = (mouseX - centerXPosition) / totalWidth;
    const cosineValue = Math.cos((normalizedMouseX * Math.PI) / 2);

    return size + magnification * cosineValue ** scale;
  }

  /**
   * Initialising the dimension of the dock item.
   * The dimension of the dock item is calculated based on the mouse position.
   * The dimension is calculated using the cosine function to give a magnification effect.
   */
  const dimension = useTransform(mouse?.x ?? initialMouseX, calculateDockItemDimension);

  const spring = useSpring(size, {
    damping: 10,
    stiffness: 150,
    mass: 0.01,
  });

  /**
   * Updating the dimension of the button on mouse position change
   */
  useEffect(() => {
    return dimension.onChange((val) => {
      if (isDockHovered) {
        spring.set(val);
      } else {
        spring.set(size);
      }
    });
  }, [spring, dimension, isDockHovered, size]);

  /**
   * Initialising the center x position of the button
   */
  useEffect(() => {
    const rect = ref.current ? ref.current.getBoundingClientRect() : null;
    if (rect) {
      setCenterXPosition(rect.x + rect.width / 2);
    }
  }, []);

  /**
   * Updating the center x position of the button on window resize
   */
  useEvent("resize", () => {
    const rect = ref.current ? ref.current.getBoundingClientRect() : null;
    if (rect) {
      setCenterXPosition(rect.x + rect.width / 2);
    }
  });

  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            ref={ref}
            className="dock-item-gradient relative flex items-center justify-center rounded-md focus:outline focus:outline-ring"
            custom={spring}
            animate={controls}
            whileTap={{ y: 8 }}
            onMouseUp={() =>
              controls.start({
                translateY: [0, -30, 0],
                transition: {
                  bounce: 0.4,
                  duration: 0.5,
                },
              })
            }
            style={{
              height: spring,
              width: spring,
            }}>
            <div className="dock-item-top-gradient absolute top-[-1px] z-[-1] h-[1px] w-full opacity-80 border" />
            {children}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-dock-muted absolute bottom-[-8px] z-[1] h-1 w-1 rounded-full"
                />
              )}
            </AnimatePresence>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent sideOffset={8}>
          <p className="text-sm text-foreground">{tooltipLabel}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DockItem;
