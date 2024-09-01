import { VelocityScroll } from "../common/velocity-scroll";
import BlurFade from "../common/blur-fade";

export default function Intro() {
  return (
    <div
      id="home"
      className="flex h-screen  justify-center  flex-col items-center "
    >
      <div
        className="font-black
         flex flex-col gap-6 w-full items-center justify-between relative"
      >
        <div className="flex flex-col px-9 text-center text-7xl sm:text-8xl xl:text-9xl md:gap-6">
          <BlurFade>
            <span>Mehmet Akif</span>
          </BlurFade>
          <BlurFade delay={0.4}>
            <span>Ozdemir</span>
          </BlurFade>
        </div>

        <BlurFade
          delay={0.4 * 2}
          className="w-full overflow-hidden whitespace-nowrap"
        >
          <VelocityScroll
            text="Full Stack Developer & Computer Engineer &"
            default_velocity={3}
            className="text-center text-4xl overflow-hidden font-semibold tracking-[-0.02em] py-1  drop-shadow-md  md:text-7xl md:leading-[5rem]"
          />
        </BlurFade>
      </div>
    </div>
  );
}
