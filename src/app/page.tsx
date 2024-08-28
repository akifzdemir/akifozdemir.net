import About from "@/sections/home/about";
import Intro from "@/sections/home/intro";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Intro />
      <About />
    </main>
  );
}
