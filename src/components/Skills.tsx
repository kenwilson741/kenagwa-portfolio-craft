
import { Card, CardContent } from "@/components/ui/card";
import { Activity, BarChart, Laptop, User, PieChart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analytics",
      icon: <BarChart className="w-10 h-10 text-brand-600" />,
      skills: [
        { name: "Data Visualization", level: 85 },
        { name: "Business Intelligence", level: 80 },
        { name: "Statistical Analysis", level: 75 },
        { name: "Excel & Spreadsheets", level: 90 },
        { name: "Tableau", level: 85 },
      ],
    },
    {
      title: "Media Communication",
      icon: <Activity className="w-10 h-10 text-brand-600" />,
      skills: [
        { name: "Content Strategy", level: 85 },
        { name: "Digital Media", level: 80 },
        { name: "Visual Storytelling", level: 75 },
        { name: "Media Planning", level: 70 },
      ],
    },
    {
      title: "Virtual Assistance",
      icon: <Laptop className="w-10 h-10 text-brand-600" />,
      skills: [
        { name: "Project Management", level: 80 },
        { name: "Client Relations", level: 85 },
        { name: "Calendar Management", level: 90 },
        { name: "Documentation", level: 85 },
      ],
    },
    {
      title: "Cybersecurity",
      icon: <User className="w-10 h-10 text-brand-600" />,
      skills: [
        { name: "Security Fundamentals", level: 70 },
        { name: "Risk Assessment", level: 65 },
        { name: "Data Protection", level: 75 },
      ],
    },
  ];

  const industries = [
    { name: "Media", icon: <Activity className="w-6 h-6" /> },
    { name: "Healthcare", icon: <User className="w-6 h-6" /> },
    { name: "Finance", icon: <BarChart className="w-6 h-6" /> },
    { name: "Marketing", icon: <PieChart className="w-6 h-6" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A versatile professional with expertise across multiple disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="reveal" data-animation="fade-up">
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-xl font-bold ml-3">{category.title}</h3>
                  </div>
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: "0%" }}
                            data-width={`${skill.level}%`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center reveal" data-animation="fade-bottom">
          <h3 className="text-2xl font-bold mb-8">Industries I Work With</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="p-3 bg-brand-50 rounded-full mb-3">
                  {industry.icon}
                </div>
                <span className="font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
