
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { GalleryVertical, MousePointer } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Data Visualization Workshop",
    category: "Events",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "Cybersecurity Conference",
    category: "Events",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Team Collaboration",
    category: "Work",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "Data Analysis Process",
    category: "Work",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    title: "Media Communication Planning",
    category: "Projects",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "Virtual Team Meeting",
    category: "Work",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if it's a touch device
    setIsTouchDevice('ontouchstart' in window);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (!isTouchDevice) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isTouchDevice]);
  
  useEffect(() => {
    if (cursorRef.current && !isTouchDevice) {
      cursorRef.current.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
    }
  }, [mousePosition, isTouchDevice]);
  
  const categories = ["All", ...new Set(galleryData.map(item => item.category))];
  
  const filteredGallery = selectedCategory && selectedCategory !== "All"
    ? galleryData.filter(item => item.category === selectedCategory)
    : galleryData;

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white via-purple-50 to-black/5 relative">
      {!isTouchDevice && (
        <div 
          ref={cursorRef} 
          className={cn(
            "fixed w-6 h-6 pointer-events-none z-50 -ml-3 -mt-3 transition-all duration-200 ease-out",
            hoveredItem !== null ? "scale-[2.5] mix-blend-difference" : "scale-100"
          )}
        >
          <div className={cn(
            "absolute inset-0 rounded-full bg-purple-600 transition-transform duration-300",
            hoveredItem !== null ? "scale-100" : "scale-0"
          )}></div>
          <MousePointer className={cn(
            "w-6 h-6 text-purple-600", 
            hoveredItem !== null ? "opacity-0" : "opacity-100"
          )} />
        </div>
      )}
      
      <div className="section-container">
        <div className="text-center mb-16 reveal" data-animation="fade-bottom">
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple-700 bg-purple-50 rounded-full mb-4">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Browse My <span className="text-purple-600">Work Gallery</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            A visual collection of my professional journey, events, and projects.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 reveal" data-animation="fade-bottom">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-all duration-300",
                selectedCategory === category || (category === "All" && !selectedCategory)
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-purple-50 border border-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal" data-animation="fade-bottom">
          {filteredGallery.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-xl shadow-md transition-transform duration-500 cursor-pointer hover:-translate-y-2"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300",
                  hoveredItem === item.id ? "opacity-100" : "opacity-70"
                )}></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <GalleryVertical className="w-4 h-4 text-purple-300" />
                    <span className="text-xs font-medium text-purple-300 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-white text-lg font-semibold transform transition-transform duration-300 group-hover:translate-y-0">{item.title}</h3>
                </div>
                
                <div className={cn(
                  "absolute top-4 right-4 bg-white/90 rounded-full p-2 transition-all duration-300",
                  hoveredItem === item.id ? "opacity-100 transform rotate-0" : "opacity-0 transform rotate-90"
                )}>
                  <GalleryVertical className="w-4 h-4 text-purple-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
