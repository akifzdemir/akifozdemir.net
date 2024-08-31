import Noise from "@/components/noise";
import { VelocityScroll } from "../velocity-scroll";

export default function Intro() {
  return (
    <div className="flex h-screen  justify-center flex-col  items-center ">
      <div
        className="font-black
         flex flex-col gap-12 w-full items-center justify-between relative"
      >
        <div className="flex flex-col px-9 self-start text-9xl gap-0">
          <span>Hey</span>
          <span>I&apos;m Akif</span>
        </div>
        <VelocityScroll
          text="Full Stack Developer & Computer Engineer &"
          default_velocity={3}
          className="text-center text-4xl  tracking-[-0.02em] py-1  drop-shadow-md  md:text-7xl md:leading-[5rem]"
        />
      </div>
    </div>
  );
}
