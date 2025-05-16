
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="inline-block px-3 py-1 text-sm font-medium text-brand-700 bg-brand-50 rounded-full mb-4">
              Data Analytics Professional
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Hello, I'm <br />
              <span className="text-brand-600">Wilson Kenagwa</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Media Communication Specialist with expertise in Data Analytics, 
              Virtual Assistance, and Cybersecurity. Transforming data into 
              actionable insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button size="lg" variant="outline" className="border-brand-200 text-brand-700 hover:bg-brand-50">
                <a href="#skills">Explore Skills</a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-full overflow-hidden">
                {/* This would be replaced with an actual image when available */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                  WK
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Available for hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
            <ChevronDown className="w-6 h-6 text-brand-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
