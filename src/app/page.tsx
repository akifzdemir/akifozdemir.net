export default function Home() {
  return (
    <main className="flex h-screen  bg-stone-200 flex-col items-center p-6">
      <div
        className="bg-stone-900 font-black
         h-full w-full flex flex-col gap-12 px-12 items-center shadow-2xl justify-center
       rounded-2xl text-stone-300 noise"
      >
        <div className="flex flex-col self-start text-9xl gap-0 font-bold ">
          <span className="">Hey</span>
          <span className="">I&apos;m Akif</span>
        </div>
        <p className="text-2xl self-end font-base">
          - A Software Developer who loves to build things for the web. -
        </p>
      </div>
    </main>
  );
}
