import { BootIntro } from "../components/BootIntro";
import { FloatingNav } from "../components/FloatingNav";
import { HeroSection } from "../components/HeroSection";
import { Marquee } from "../components/Marquee";
import { About } from "../components/About";
import { ProjectStack } from "../components/ProjectStack";
import { Recognition } from "../components/Recognition";
import { GitHubLive } from "../components/GitHubLive";
import { ExperienceLog } from "../components/ExperienceLog";
import { ContactSection } from "../components/ContactSection";
import { Terminal } from "../components/Terminal";
import { MagneticCursor } from "../components/MagneticCursor";

export function Portfolio() {
  return (
    <>
      <BootIntro />
      <MagneticCursor />
      <div className="noise-overlay" />
      <FloatingNav />
      <Terminal />
      <main>
        <HeroSection />
        <Marquee />
        <About />
        <ProjectStack />
        <Recognition />
        <GitHubLive />
        <ExperienceLog />
        <ContactSection />
      </main>
    </>
  );
}
