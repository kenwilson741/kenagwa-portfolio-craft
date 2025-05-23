
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { GalleryHorizontal, MousePointer2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Market Analysis Dashboard",
    description: "Built an interactive dashboard for analyzing market trends and consumer behavior data for a major retail client.",
    tags: ["Data Analytics", "Visualization", "Python", "Tableau"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "Cybersecurity Assessment Tool",
    description: "Developed a comprehensive security assessment framework to identify vulnerabilities in enterprise systems.",
    tags: ["Cybersecurity", "Risk Assessment", "Penetration Testing"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Media Communication Strategy",
    description: "Created and executed a multi-channel communication strategy that increased client engagement by 60%.",
    tags: ["Media Strategy", "Content Development", "Analytics"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "Virtual Team Management System",
    description: "Implemented a workflow optimization tool for remote teams that improved productivity and collaboration.",
    tags: ["Virtual Assistance", "Project Management", "Workflow Optimization"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 reveal" data-animation="fade-right">
            <ScrollArea className="h-[60vh]">
              <div className="pr-4 space-y-6">
                {projectData.map((project) => (
                  <div 
                    key={project.id}
                    className={cn(
                      "p-6 rounded-xl cursor-pointer transition-all duration-300 border group relative",
                      activeProject === project.id 
                        ? "bg-red-600 text-white border-red-600" 
                        : "bg-white hover:bg-red-50 border-gray-100 hover:border-red-200"
                    )}
                    onClick={() => setActiveProject(project.id)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className={cn(
                        "font-bold text-lg mb-2 transition-colors duration-300",
                        activeProject === project.id ? "text-white" : "text-gray-900 group-hover:text-red-600"
                      )}>
                        {project.title}
                      </h3>
                      <MousePointer2 
                        className={cn(
                          "w-4 h-4 transition-opacity duration-300",
                          activeProject === project.id ? "opacity-100 text-white" : "opacity-0 group-hover:opacity-100 text-red-500"
                        )} 
                      />
                    </div>
                    <p className={cn(
                      "text-sm transition-colors duration-300",
                      activeProject === project.id ? "text-white/90" : "text-gray-600"
                    )}>
                      {project.description}
                    </p>
                    <div className="absolute bottom-4 right-4">
                      <GalleryHorizontal
                        className={cn(
                          "w-5 h-5 transition-all duration-300",
                          activeProject === project.id 
                            ? "text-white opacity-100 translate-x-0" 
                            : "text-red-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                        )} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          
          <div className="md:col-span-2 reveal" data-animation="fade-left">
            {activeProject !== null ? (
              <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-lg h-full">
                <div className="h-[40vh] overflow-hidden rounded-lg mb-6 relative group">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-white/90 rounded-md font-medium text-red-600 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      View Project
                    </span>
                  </div>
                  <img 
                    src={projectData[activeProject - 1].image} 
                    alt={projectData[activeProject - 1].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {projectData[activeProject - 1].title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {projectData[activeProject - 1].description}
                </p>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {projectData[activeProject - 1].tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full border border-dashed border-gray-300 rounded-xl bg-gray-50">
                <div className="text-center p-10">
                  <GalleryHorizontal className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-500">Select a project to view details</h3>
                  <p className="text-gray-400 mt-2">Click on any project from the list</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
