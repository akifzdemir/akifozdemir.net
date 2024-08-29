"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      ref={container}
      className="bg-zinc-200 font-light  
      gap-6 flex flex-col mb-96  text-zinc-950  min-h-screen p-9"
    >
      <h1
        className="col-span-5 h-[70vh] flex items-center 
      justify-center text-9xl font-black "
      >
        Here&apos;s a little about me...
      </h1>

      <div className="grid grid-cols-5 text-5xl gap-6 font-bold leading-tight">
        <p className="col-span-3 border bg-zinc-950 text-zinc-200 p-4 shadow-md rounded-2xl">
          I&apos;m a software developer who just graduated from computer
          engineering.
        </p>
        <p className="col-span-2 border bg-zinc-950 text-zinc-200  p-4 shadow-md rounded-2xl">
          I&apos;m passionate about creating products that are fast, accessible,
          and delightful to use.
        </p>
        <div className="col-span-4 border bg-zinc-950 text-zinc-200 p-4 shadow-md rounded-2xl">
          I&apos;m currently working on my personal projects and looking for new
          opportunities.
        </div>
        <div className="col-span-1 self-center">
          <button
            className=" text-zinc-950 underline
            text-start text-3xl"
          >
            More About Me
          </button>
        </div>
      </div>
      <motion.div style={{ height }} className="relative  mt-[100px]">
        <div
          className="h-[1550%] w-[120%]
           -left-[10%] rounded-b-[50%] bg-zinc-200 -z-50 absolute shadow-custom"
        ></div>
      </motion.div>
    </div>
  );
}
