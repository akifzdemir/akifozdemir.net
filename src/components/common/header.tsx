"use client";
import { useLenis } from "lenis/react";
import BlurFade from "./blur-fade";

export default function Header() {
  const lenis = useLenis();
  return (
    <header className="fixed top-0 left-0 font-black text-2xl z-50 px-12 justify-center  w-full h-14 flex flex-row items-center ">
      <BlurFade yOffset={-100} delay={0.8}>
        <div className="flex flex-row gap-6 items-center">
          <button
            onClick={() => lenis?.scrollTo("#home")}
            className="hover:opacity-60"
          >
            Home
          </button>
          <button
            onClick={() => lenis?.scrollTo("#about")}
            className="hover:opacity-60"
          >
            About
          </button>
          <button
            onClick={() => lenis?.scrollTo("#techs")}
            className="hover:opacity-60"
          >
            Work
          </button>
        </div>
      </BlurFade>
    </header>
  );
}
