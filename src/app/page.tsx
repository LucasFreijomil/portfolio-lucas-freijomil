import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto mt-24 px-12 py-4 ">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
        <ContactSection />
    </main>
  );
}
