"use client";

import BlurFade from "../common/blur-fade";
import TextRevealByWord from "../common/text-reveal";

export default function About() {
  return (
    <div className="gap-6 flex flex-col px-9 h-screen">
      <div className="">
        <TextRevealByWord
          text="Here's a little about me..."
          className="text-9xl font-black h-[40vh]"
        />
      </div>
      <div className="font-semibold xl:text-5xl 2xl:text-5xl gap-12 pb-4 flex flex-col  items-center justify-center">
        <BlurFade
          className="w-3/4 text-center leading-tight"
          inView
          inViewMargin="-200px"
        >
          <p>
            I am a new graduate in Computer Engineering from Konya Technical
            University with one year experience in web development. I am
            currently focusing my personal projects and looking for new
            opportunities.
          </p>
          <button className="shadow-lg p-2 mt-5 rounded-md bg-text text-bg">
            read more about me{" "}
          </button>
        </BlurFade>
      </div>
    </div>
  );
}
