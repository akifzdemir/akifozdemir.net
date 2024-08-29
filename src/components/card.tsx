"use client";

import React, { useCallback, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div
      className={cn(
        "relative flex px-6 size-full  rounded-2xl shadow-xl py-6 items-center justify-center bg-zinc-200 border text-zinc-950",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
