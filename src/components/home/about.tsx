"use client";

export default function About() {
  return (
    <div
      className="font-light  
      gap-6 flex flex-col  min-h-screen p-9"
    >
      <h1
        className="col-span-5 flex items-center 
      justify-center text-9xl font-black "
      >
        Here&apos;s a little about me...
      </h1>

      <div className="grid grid-cols-5 text-5xl gap-6 font-bold leading-tight">
        <p className="col-span-3 border  p-4 shadow-md rounded-2xl">
          I&apos;m a software developer who just graduated from computer
          engineering.
        </p>
        <p className="col-span-2 border   p-4 shadow-md rounded-2xl">
          I&apos;m passionate about creating products that are fast, accessible,
          and delightful to use.
        </p>
        <div className="col-span-4 border  p-4 shadow-md rounded-2xl">
          I&apos;m currently working on my personal projects and looking for new
          opportunities.
        </div>
        <div className="col-span-1 self-center">
          <button
            className=" underline
            text-start text-3xl"
          >
            More About Me
          </button>
        </div>
      </div>
    </div>
  );
}
