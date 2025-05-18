
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import VideoSection from "@/components/VideoSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { handleScrollAnimation } from "@/utils/animationUtils";

const Index = () => {
  useEffect(() => {
    // Initial animation check
    handleScrollAnimation();

    // Set up scroll event listener
    window.addEventListener("scroll", handleScrollAnimation);
    
    // Re-trigger animations on page resize
    window.addEventListener("resize", handleScrollAnimation);
    
    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
      window.removeEventListener("resize", handleScrollAnimation);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <VideoSection />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
