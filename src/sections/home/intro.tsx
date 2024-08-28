export default function Intro() {
  return (
    <div className="flex h-screen bg-zinc-200 flex-col  items-center p-9">
      <div
        className="bg-zinc-950 font-black
        h-full w-full flex flex-col gap-12 px-12 items-center shadow-md justify-center
   rounded-3xl text-zinc-200 noise"
      >
        <div className="flex flex-col self-start text-9xl gap-0 font-bold ">
          <span className="">Hey</span>
          <span className="">I&apos;m Akif</span>
        </div>
        <p className="text-3xl self-end">
          - A Full Stack Developer and Computer Engineer.
        </p>
      </div>
    </div>
  );
}
