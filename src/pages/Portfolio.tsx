import { HeroSection } from "../components/HeroSection";
import { ProjectVault } from "../components/ProjectVault";
import { CompetitiveEdge } from "../components/CompetitiveEdge";
import { ExperienceLog } from "../components/ExperienceLog";
import { ContactSection } from "../components/ContactSection";
import { FloatingNav } from "../components/FloatingNav";
import { MagneticCursor } from "../components/MagneticCursor";

export function Portfolio() {
  return (
    <>
      <MagneticCursor />
      <div className="noise-overlay" />
      <FloatingNav />
      <main>
        <HeroSection />
        <ProjectVault />
        <CompetitiveEdge />
        <ExperienceLog />
        <ContactSection />
      </main>
    </>
  );
}
