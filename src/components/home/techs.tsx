import BlurFade from "../common/blur-fade";
import { Card } from "../common/card";
import TextRevealByWord from "../common/text-reveal";

export default function Techs() {
  return (
    <div id="techs" className="gap-16 flex flex-col px-9 min-h-[90vh]">
      <div>
        <TextRevealByWord
          text="Here's what I do..."
          className="text-9xl font-black"
        />
      </div>
      <div className="font-semibold  xl:text-5xl 2xl:text-5xl gap-12 pb-4 flex flex-col lg:flex-row items-center justify-center">
        <BlurFade
          className="text-center flex-1 leading-tight"
          inView
          inViewMargin="-200px"
        >
          <Card
            title="Frontend Development"
            description={
              "I have experience with React, Next.js, TailwindCSS, Framer Motion, GSAP and other frontend technologies."
            }
          />
        </BlurFade>
        <BlurFade
          className="text-center flex-1 leading-tight"
          inView
          delay={0.4}
          inViewMargin="-200px"
        >
          <Card
            title="Backend Development"
            description={
              "I have experience with Node.js, Express.js, Java,Spring boot, Go and other backend technologies."
            }
          />
        </BlurFade>
      </div>
    </div>
  );
}
