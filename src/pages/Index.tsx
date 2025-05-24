
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Education from "@/components/Education";
import VideoSection from "@/components/VideoSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";
import { handleScrollAnimation, setupSmoothScroll, setupMouseSpotlight } from "@/utils/animationUtils";

const Index = () => {
  useEffect(() => {
    // Initial animation check
    handleScrollAnimation();

    // Set up scroll event listener
    window.addEventListener("scroll", handleScrollAnimation);
    
    // Re-trigger animations on page resize
    window.addEventListener("resize", handleScrollAnimation);
    
    // Setup smooth scrolling
    setupSmoothScroll();

    // Setup mouse spotlight effect (only on non-touch devices)
    if (!('ontouchstart' in window)) {
      setupMouseSpotlight();
    }
    
    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
      window.removeEventListener("resize", handleScrollAnimation);
    };
  }, []);

  return (
    <div className="min-h-screen dark-theme-bg text-foreground relative overflow-x-hidden">
      <ParticleBackground />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="section-separator" />
        <About />
        <div className="section-separator" />
        <Skills />
        <div className="section-separator" />
        <Projects />
        <div className="section-separator" />
        <Gallery />
        <div className="section-separator" />
        <Testimonials />
        <div className="section-separator" />
        <Education />
        <div className="section-separator" />
        <VideoSection />
        <div className="section-separator" />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Index;
