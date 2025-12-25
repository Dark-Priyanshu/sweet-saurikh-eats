import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
}

const animationClasses: Record<AnimationType, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-down": {
    hidden: "opacity-0 -translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "zoom-in": {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  "fade": {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
};

const AnimatedSection = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { hidden, visible } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? visible : hidden,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
