
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
    <section id="education" className="py-20 bg-white">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal" data-animation="fade-right">
            <h3 className="flex items-center text-2xl font-bold mb-6">
              <Book className="w-6 h-6 mr-2 text-brand-600" /> Academic Background
            </h3>
            <div className="space-y-6">
              {academic.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex">
                      <div className="bg-brand-50 p-6 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="p-6">
                        <h4 className="font-bold text-lg mb-1">{item.degree}</h4>
                        <p className="text-gray-600 mb-2">{item.institution}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{item.period}</span>
                        </div>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Continuing Education</h3>
              <p className="text-gray-700">
                I am committed to continuous learning and regularly participate in industry workshops, 
                webinars, and courses to stay current with the latest developments in data analytics, 
                media communication, and related fields.
              </p>
            </div>
          </div>

          <div className="reveal" data-animation="fade-left">
            <h3 className="flex items-center text-2xl font-bold mb-6">
              <Award className="w-6 h-6 mr-2 text-brand-600" /> Professional Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-md transition-all">
                  <CardContent className="p-5">
                    <div className="mb-3">
                      {cert.icon}
                    </div>
                    <h4 className="font-semibold text-lg mb-1">{cert.title}</h4>
                    <p className="text-gray-600 text-sm">{cert.issuer}</p>
                    <div className="flex items-center text-xs text-gray-500 mt-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{cert.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2">Note</h4>
              <p className="text-gray-700 text-sm">
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
