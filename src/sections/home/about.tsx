import Card from "@/components/card";
import Image from "next/image";

export default function About() {
  return (
    <div
      className="bg-zinc-950 font-light items-center 
     grid grid-cols-5 gap-6 text-zinc-950  h-screen p-9"
    >
      <Card className="col-span-3 font-black text-6xl">
        I&apos;m a software developer who just graduated from computer
        engineering.
      </Card>
      <Card className="col-span-2 font-black text-5xl leading-tight">
        <p>
          I&apos;m passionate about creating products that are fast, accessible,
          and delightful to use.
        </p>
      </Card>
      <p>
        I&apos;m currently working on my personal projects and looking for new
        opportunities.
      </p>
    </div>
  );
}
