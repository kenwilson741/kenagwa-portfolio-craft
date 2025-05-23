
import { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechVision Inc.",
    content: "Wilson's data analytics skills transformed our marketing approach. His insights led to a 40% increase in campaign effectiveness.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "DataFlow Solutions",
    content: "Exceptional cybersecurity expertise! Wilson helped us identify vulnerabilities and implement robust security measures that protected our sensitive data.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Operations Manager",
    company: "Global Media Group",
    content: "Wilson's virtual assistance services streamlined our workflow and improved team productivity by 35%. His communication skills and attention to detail are outstanding.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-black/5 via-purple-50 to-white">
      <div className="section-container">
        <div className="text-center mb-16 reveal" data-animation="fade-bottom">
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple-700 bg-purple-50 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What My <span className="text-purple-600">Clients Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Hear from professionals and organizations I've had the pleasure of collaborating with.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full reveal"
          data-animation="fade-bottom"
        >
          <CarouselContent className="-ml-1">
            {testimonialData.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div 
                  className={cn(
                    "bg-white p-6 md:p-8 rounded-xl border border-purple-100 shadow-sm transition-all duration-300 h-full",
                    hoveredIndex === index ? "shadow-xl -translate-y-2" : ""
                  )}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-purple-200"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "w-4 h-4", 
                          i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                        )} 
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 italic">"{testimonial.content}"</blockquote>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="static transform-none bg-white hover:bg-purple-50 border border-purple-200 hover:border-purple-300 transition-colors" />
            <CarouselNext className="static transform-none bg-white hover:bg-purple-50 border border-purple-200 hover:border-purple-300 transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
