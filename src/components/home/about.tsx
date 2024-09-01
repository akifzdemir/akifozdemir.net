import BlurFade from "../common/blur-fade";
import TextRevealByWord from "../common/text-reveal";

export default function About() {
  return (
    <div className="gap-16 pb-24 flex flex-col px-9 ">
      <div>
        <TextRevealByWord
          text="Here's a little about me..."
          className="font-black"
        />
      </div>
      <div
        className="font-semibold xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl 
       gap-12 pb-4 flex flex-col items-center justify-center"
      >
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
        </BlurFade>
      </div>
    </div>
  );
}
