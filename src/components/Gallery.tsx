
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { GalleryVertical, MapPin, Clock } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
  date: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Data Visualization Workshop",
    category: "Events",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    location: "Tech Hub Conference Center",
    date: "March 15, 2024"
  },
  {
    id: 2,
    title: "Cybersecurity Conference",
    category: "Events",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3",
    location: "Security Summit Hall",
    date: "February 20, 2024"
  },
  {
    id: 3,
    title: "Team Collaboration",
    category: "Work",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    location: "Corporate Office",
    date: "January 10, 2024"
  },
  {
    id: 4,
    title: "Data Analysis Process",
    category: "Work",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    location: "Analytics Lab",
    date: "December 5, 2023"
  },
  {
    id: 5,
    title: "Media Communication Planning",
    category: "Projects",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    location: "Creative Studio",
    date: "November 18, 2023"
  },
  {
    id: 6,
    title: "Virtual Team Meeting",
    category: "Work",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    location: "Remote Workspace",
    date: "October 25, 2023"
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const categories = ["All", ...new Set(galleryData.map(item => item.category))];
  
  const filteredGallery = selectedCategory && selectedCategory !== "All"
    ? galleryData.filter(item => item.category === selectedCategory)
    : galleryData;

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white via-purple-50 to-black/5 relative">
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
        
        <div className="max-w-6xl mx-auto reveal" data-animation="fade-bottom">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {filteredGallery.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300",
                        hoveredItem === item.id ? "opacity-100" : "opacity-70"
                      )}></div>
                      
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center gap-2 mb-2">
                          <GalleryVertical className="w-4 h-4 text-purple-300" />
                          <span className="text-xs font-medium text-purple-300 uppercase tracking-wider bg-purple-600/20 backdrop-blur-sm px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-lg font-semibold mb-2 transform transition-transform duration-300 group-hover:translate-y-0">
                          {item.title}
                        </h3>
                        
                        <div className={cn(
                          "space-y-2 transition-all duration-300",
                          hoveredItem === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}>
                          <div className="flex items-center gap-2 text-sm text-white/80">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-white/80">
                            <Clock className="w-4 h-4" />
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className={cn(
                        "absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 transition-all duration-300",
                        hoveredItem === item.id ? "opacity-100 transform rotate-0 scale-110" : "opacity-0 transform rotate-90 scale-75"
                      )}>
                        <GalleryVertical className="w-4 h-4 text-purple-600" />
                      </div>

                      <div className={cn(
                        "absolute inset-0 border-2 border-purple-600 rounded-xl transition-opacity duration-300",
                        hoveredItem === item.id ? "opacity-100" : "opacity-0"
                      )}></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
