
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Calendar, Book } from "lucide-react";

const Education = () => {
  const academic = [
    {
      degree: "Bachelor of Arts in Media Communication",
      institution: "Laikipia University",
      period: "2022 - 2026",
      description: "Focusing on digital media communication, analytics, and content strategy.",
      icon: <GraduationCap className="w-10 h-10 text-brand-500" />,
    },
  ];

  const certifications = [
    {
      title: "Executive Virtual Assistant",
      issuer: "ALX Africa",
      date: "September - November 2024",
      icon: <Award className="w-6 h-6 text-brand-500" />,
    },
    {
      title: "Data Analytics",
      issuer: "ALX Africa",
      date: "March - Present 2025",
      icon: <Award className="w-6 h-6 text-brand-500" />,
    },
    {
      title: "Career AI Essentials",
      issuer: "ALX Africa",
      date: "April - July 2024",
      icon: <Award className="w-6 h-6 text-brand-500" />,
    },
    {
      title: "Basic Computer Packages",
      issuer: "Kisii School",
      date: "September - November 2021",
      icon: <Award className="w-6 h-6 text-brand-500" />,
    },
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Education & Certifications</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-20">
          <div className="reveal space-y-8" data-animation="fade-right">
            <h3 className="flex items-center text-2xl font-bold mb-8">
              <Book className="w-6 h-6 mr-3 text-brand-600" /> Academic Background
            </h3>
            
            <div className="space-y-8">
              {academic.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="bg-brand-50 p-8 flex items-center justify-center sm:w-32 sm:min-w-32">
                        {item.icon}
                      </div>
                      <div className="p-8 flex-1">
                        <h4 className="font-bold text-xl mb-3">{item.degree}</h4>
                        <p className="text-gray-600 text-lg mb-4">{item.institution}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{item.period}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Continuing Education</h3>
              <p className="text-gray-700 leading-relaxed">
                I am committed to continuous learning and regularly participate in industry workshops, 
                webinars, and courses to stay current with the latest developments in data analytics, 
                media communication, and related fields.
              </p>
            </div>
          </div>

          <div className="reveal space-y-8" data-animation="fade-left">
            <h3 className="flex items-center text-2xl font-bold mb-8">
              <Award className="w-6 h-6 mr-3 text-brand-600" /> Professional Certifications
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-brand-50 p-3 rounded-full flex-shrink-0">
                        {cert.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-lg mb-2">{cert.title}</h4>
                        <p className="text-gray-600 text-base mb-2">{cert.issuer}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 p-8 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-lg mb-4 text-blue-900">Professional Development</h4>
              <p className="text-blue-800 leading-relaxed">
                These certifications complement my academic education and provide specialized 
                knowledge in key areas relevant to my professional focus on data analytics and 
                media communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
