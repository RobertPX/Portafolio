import { Navigation } from "@/components/navigation";
import {
  Hero,
  Projects,
  TechStack,
  About,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Projects />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
