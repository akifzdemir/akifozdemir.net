"use client";

import { FC, ReactNode, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <div className={"flex max-w-4xl items-center bg-transparent"}>
        <p
          className={
            "flex flex-wrap text-2xl font-bold text-text/20  md:text-3xl lg:text-9xl xl:text-9xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const [show, setShow] = useState(true);

  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        onViewportLeave={() => setShow(false)}
        style={{ opacity: show ? opacity : 1 }}
        transition={{ duration: 0.5 }}
        className={"text-text "}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
