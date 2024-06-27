import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="container mx-auto mt-24 px-12 py-4 ">
        <HeroSection />
      </div>
    </main>
  );
}
