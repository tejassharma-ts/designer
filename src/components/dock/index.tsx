"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import DockProvider, { useDockContext, DockConfig } from "@/context/dock-context";

function Dock({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const { setDockWidth, setIsDockHovered } = useDockContext();

  useEffect(() => {
    setDockWidth(ref?.current?.clientWidth);
  }, [setDockWidth]);

  return (
    <footer
      className={cn(
        "fixed bottom-[-14px] left-1/2 z-10 flex h-16 w-auto translate-x-[-50%] translate-y-[-50%] justify-center rounded-lg border border-border bg-card px-3 shadow-lg",
        className,
      )}>
      <div className="dock-border-gradient absolute -top-[1px] z-[-1] h-[1px] w-[95%] opacity-50" />
      <nav
        ref={ref}
        className="flex items-end justify-center gap-3 py-3"
        onMouseOver={() => setIsDockHovered(true)}
        onMouseOut={() => setIsDockHovered(false)}>
        {children}
      </nav>
    </footer>
  );
}

export default function DockContainer({
  children,
  config,
  className,
}: {
  children: React.ReactNode;
  config?: DockConfig;
  className?: string;
}) {
  return (
    <DockProvider config={config}>
      <Dock className={className}>{children}</Dock>
    </DockProvider>
  );
}
