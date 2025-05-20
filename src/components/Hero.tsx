
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
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-black/5 via-purple-50 to-white">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-brand-50 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDuration: '1.2s', animationDelay: '0.3s' }}>
            <span className="inline-block px-3 py-1 text-sm font-medium text-purple-700 bg-purple-50 rounded-full mb-4">
              Data Analytics Professional
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Hello, I'm <br className="md:hidden" />
              <span className="text-purple-600 inline-block animate-slide-in" style={{ animationDuration: '1s', animationDelay: '0.6s' }}>Wilson Kenagwa</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-lg animate-slide-in" style={{ animationDuration: '1s', animationDelay: '0.8s' }}>
              Media Communication Specialist with expertise in Data Analytics, 
              Virtual Assistance, and Cybersecurity. Transforming data into 
              actionable insights.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 animate-slide-up" style={{ animationDuration: '1s', animationDelay: '1s' }}>
              <Button size="default" className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button size="default" variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 transition-all duration-300 hover:scale-105">
                <a href="#skills">Explore Skills</a>
              </Button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 flex justify-center animate-scale-in" style={{ animationDuration: '1.2s', animationDelay: '0.5s' }}>
            <div className="relative hover:scale-105 transition-all duration-500">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-tr from-purple-600 to-red-400 rounded-full overflow-hidden flex items-center justify-center shadow-xl transition-shadow hover:shadow-2xl">
                <img 
                  src="/lovable-uploads/981d48d0-cfb4-4f01-bdcd-65b98aa989c2.png" 
                  alt="Wilson Kenagwa" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/placeholder.svg";
                    const parent = target.parentElement;
                    if (parent) {
                      const textElement = document.createElement("div");
                      textElement.className = "absolute inset-0 flex items-center justify-center text-white text-6xl font-bold";
                      textElement.textContent = "WK";
                      parent.appendChild(textElement);
                    }
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-scale-in" style={{ animationDuration: '0.6s', animationDelay: '1.2s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available for hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDuration: '2s', animationDelay: '1.5s' }}>
          <button 
            onClick={scrollToAbout} 
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="w-6 h-6 text-purple-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
