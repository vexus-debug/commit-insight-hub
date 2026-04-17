import { motion, useReducedMotion, type Variants, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const distance = 24;

const buildVariant = (dir: Direction): Variants => {
  const offset = { x: 0, y: 0 };
  if (dir === "up") offset.y = distance;
  if (dir === "down") offset.y = -distance;
  if (dir === "left") offset.x = distance;
  if (dir === "right") offset.x = -distance;
  return {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };
};

interface RevealProps extends Omit<HTMLMotionProps<"div">, "variants" | "initial" | "animate" | "whileInView"> {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  once?: boolean;
  amount?: number;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  once = true,
  amount = 0.2,
  className,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  const variants = buildVariant(direction);
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps extends Omit<HTMLMotionProps<"div">, "variants" | "initial" | "animate" | "whileInView"> {
  children: ReactNode;
  delay?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
}

export function Stagger({
  children,
  delay = 0,
  stagger = 0.08,
  once = true,
  amount = 0.15,
  className,
  ...rest
}: StaggerProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface ItemProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: ReactNode;
  direction?: Direction;
}

export function Item({ children, direction = "up", className, ...rest }: ItemProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  const variants = buildVariant(direction);
  return (
    <motion.div className={className} variants={variants} {...rest}>
      {children}
    </motion.div>
  );
}

export function PageTransition({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
