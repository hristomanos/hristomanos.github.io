import { useState, useEffect } from "react";
import Lenis from "lenis";
import { LenisContext } from "./context/LenisContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import BlogPreview from "./components/BlogPreview";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import FloatingOrbs from "./components/FloatingOrbs";
import EasterEgg from "./components/EasterEgg";
import { useReducedMotion } from "./hooks/useReducedMotion";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [lenis, setLenis] = useState(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading || reducedMotion) return;

    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    setLenis(instance);

    let rafId;
    function raf(time) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      setLenis(null);
    };
  }, [loading, reducedMotion]);

  return (
    <LenisContext.Provider value={lenis}>
      <LoadingScreen finished={!loading} />
      <ScrollProgress />
      <CursorGlow />
      <FloatingOrbs />
      <BackToTop />
      <EasterEgg />
      <div className="min-h-screen bg-bg relative z-10">
        <Navbar />
        <main className="max-w-6xl mx-auto px-5 md:px-8">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <BlogPreview />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LenisContext.Provider>
  );
}
