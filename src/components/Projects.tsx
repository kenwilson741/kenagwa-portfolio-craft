
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Calendar, User } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  date: string;
  client: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Market Analysis Dashboard",
    description: "Built an interactive dashboard for analyzing market trends and consumer behavior data for a major retail client. This comprehensive solution provides real-time insights and predictive analytics.",
    tags: ["Data Analytics", "Visualization", "Python", "Tableau"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "March 2024",
    client: "Retail Corp"
  },
  {
    id: 2,
    title: "Cybersecurity Assessment Tool",
    description: "Developed a comprehensive security assessment framework to identify vulnerabilities in enterprise systems. Enhanced security posture through automated threat detection.",
    tags: ["Cybersecurity", "Risk Assessment", "Penetration Testing"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "February 2024",
    client: "Tech Solutions Inc"
  },
  {
    id: 3,
    title: "Media Communication Strategy",
    description: "Created and executed a multi-channel communication strategy that increased client engagement by 60%. Implemented data-driven content optimization and audience targeting.",
    tags: ["Media Strategy", "Content Development", "Analytics"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "January 2024",
    client: "Media Group"
  },
  {
    id: 4,
    title: "Virtual Team Management System",
    description: "Implemented a workflow optimization tool for remote teams that improved productivity and collaboration. Features include task automation and performance analytics.",
    tags: ["Virtual Assistance", "Project Management", "Workflow Optimization"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "December 2023",
    client: "Remote Works LLC"
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-red-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 reveal" data-animation="fade-bottom">
          <span className="inline-block px-3 py-1 text-sm font-medium text-red-600 bg-red-50 rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            My Recent <span className="text-red-600">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            A showcase of my recent work across data analytics, cybersecurity, and media communication.
          </p>
        </div>

        <div className="max-w-5xl mx-auto reveal" data-animation="fade-bottom">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projectData.map((project) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="aspect-w-16 aspect-h-10 relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                        hoveredProject === project.id ? 'opacity-100' : 'opacity-60'
                      }`}></div>
                      
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                          {project.tags[0]}
                        </span>
                      </div>

                      <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
                        hoveredProject === project.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}>
                        <div className="bg-red-600 rounded-full p-2">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{project.client}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full transition-colors duration-300 group-hover:bg-red-50 group-hover:text-red-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`absolute inset-0 border-2 border-red-600 rounded-xl transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}></div>
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

export default Projects;
