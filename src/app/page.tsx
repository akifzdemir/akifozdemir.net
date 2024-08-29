import About from "@/components/home/about";
import Intro from "@/components/home/intro";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Intro />
      <About />
    </main>
  );
}
