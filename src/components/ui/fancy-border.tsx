import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ShinyBorderContainerProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function ShinyBorderContainer({
  className,
  containerClassName,
  ...props
}: ShinyBorderContainerProps) {
  return (
    <div className={cn("from-foreground/50 rounded-lg bg-gradient-to-b p-px w-full min-w-[400px]", className)}>
      <div
        className={cn(
          "bg-background shadow-primary-100 relative h-full rounded-[calc(2rem+1px)] rounded-b-none shadow-2xl overflow-hidden",
          containerClassName,
        )}
        {...props}
      />
    </div>
  );
}
