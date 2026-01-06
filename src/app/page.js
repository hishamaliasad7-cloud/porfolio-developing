import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-primary-bg)] text-white overflow-x-hidden selection:bg-[var(--color-accent)] selection:text-black">
      <Navbar />
      <div className="container mx-auto px-4 md:px-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
