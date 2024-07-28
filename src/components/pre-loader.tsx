"use client";

import { useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PreloaderContext, PreloaderContextProps } from "@/context/preloader-context";
import PreloaderLogo from "./preloader-logo";

const overlayVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export default function PreLoader() {
  const { isLoaded, loadingDone } = useContext(PreloaderContext) as PreloaderContextProps;

  useEffect(() => {
    setTimeout(() => {
      loadingDone();
    }, 3000);
    window.scrollTo(0, 0);
  }, [loadingDone]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          variants={overlayVariants}
          key="loading-screen"
          animate="show"
          exit="hidden"
          className="fixed left-0 top-0 z-[500] flex h-screen w-screen cursor-wait items-center justify-center bg-background">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center">
            <span>
              <PreloaderLogo />
            </span>
            <div className="mt-4 flex items-center justify-center bg-white dark:invert">
              <span className="sr-only">Loading...</span>
              <div className="size-3 animate-bounce rounded-full bg-black [animation-delay:-0.3s]"></div>
              <div className="ml-2 size-3 animate-bounce rounded-full bg-black [animation-delay:-0.15s]"></div>
              <div className="ml-2 size-3 animate-bounce rounded-full bg-black"></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
