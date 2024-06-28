import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="container mx-auto mt-24 px-12 py-4 ">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
