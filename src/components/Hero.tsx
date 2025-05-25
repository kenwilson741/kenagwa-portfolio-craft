
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
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDuration: '1.2s', animationDelay: '0.3s' }}>
            <span className="inline-block px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-6">
              Data Analytics Professional
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Hello, I'm <br className="md:hidden" />
              <span className="text-blue-600 inline-block animate-slide-in" style={{ animationDuration: '1s', animationDelay: '0.6s' }}>Wilson Kenagwa</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg animate-slide-in leading-relaxed" style={{ animationDuration: '1s', animationDelay: '0.8s' }}>
              Media Communication Specialist with expertise in Data Analytics, 
              Virtual Assistance, and Cybersecurity. Transforming data into 
              actionable insights for the digital future.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 animate-slide-up" style={{ animationDuration: '1s', animationDelay: '1s' }}>
              <Button size="default" className="bg-blue-600 hover:bg-blue-700">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button size="default" variant="outline" className="border-blue-400 text-blue-600 hover:bg-blue-50">
                <a href="#skills">Explore Skills</a>
              </Button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 flex justify-center animate-scale-in" style={{ animationDuration: '1.2s', animationDelay: '0.5s' }}>
            <div className="relative hover:scale-105 transition-all duration-500 group">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden flex items-center justify-center shadow-xl transition-shadow hover:shadow-2xl bg-white border-4 border-blue-100">
                <img 
                  src="/lovable-uploads/981d48d0-cfb4-4f01-bdcd-65b98aa989c2.png" 
                  alt="Wilson Kenagwa" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/placeholder.svg";
                    const parent = target.parentElement;
                    if (parent) {
                      const textElement = document.createElement("div");
                      textElement.className = "absolute inset-0 flex items-center justify-center text-blue-600 text-6xl font-bold";
                      textElement.textContent = "WK";
                      parent.appendChild(textElement);
                    }
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-scale-in border border-gray-200" style={{ animationDuration: '0.6s', animationDelay: '1.2s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-600">Available for hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDuration: '2s', animationDelay: '1.5s' }}>
          <button 
            onClick={scrollToAbout} 
            className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
