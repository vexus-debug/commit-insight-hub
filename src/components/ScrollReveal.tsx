import { type ReactNode } from "react";
import { Reveal } from "@/components/motion/Motion";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className = "", delay = 0 }: Props) {
  return (
    <Reveal direction="up" delay={delay / 1000} className={className}>
      {children}
    </Reveal>
  );
}
