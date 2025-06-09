
import { Card, CardContent } from "@/components/ui/card";
import { User, Database, Globe, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <User className="h-6 w-6 text-brand-500" />,
      title: "Detail-Oriented",
      description: "I believe in the power of precision and careful attention to every element of a project.",
    },
    {
      icon: <Database className="h-6 w-6 text-brand-500" />,
      title: "Data-Driven",
      description: "I base decisions on solid evidence and thorough analysis rather than assumptions.",
    },
    {
      icon: <Globe className="h-6 w-6 text-brand-500" />,
      title: "Collaborative",
      description: "I thrive in team environments where diverse perspectives lead to innovative solutions.",
    },
    {
      icon: <Award className="h-6 w-6 text-brand-500" />,
      title: "Ethical",
      description: "I uphold the highest standards of integrity and ethics in all professional endeavors.",
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 sm:mb-20 lg:mb-24 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            A versatile professional with a unique blend of media communication expertise and data analytics skills.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          <div className="reveal space-y-8" data-animation="fade-right">
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Professional Approach</h3>
              <div className="space-y-6">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  As a media communication specialist with a focus on data analytics, I bridge the gap between technical insights and effective storytelling. My approach combines analytical rigor with creative communication to deliver meaningful results.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  I believe in the power of data-driven decision making combined with clear, compelling communication. Whether working with healthcare data, financial metrics, or marketing analytics, I focus on extracting valuable insights and presenting them in ways that drive action.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Goals & Aspirations</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-3 text-base sm:text-lg leading-relaxed">
                <li>Become a leading expert in data visualization and business intelligence within the media industry</li>
                <li>Develop innovative approaches to healthcare analytics that improve patient outcomes</li>
                <li>Build predictive models that transform how financial institutions understand customer behavior</li>
                <li>Create data-driven marketing strategies that significantly improve ROI for clients</li>
                <li>Contribute to research advancing the intersection of data science and media communication</li>
              </ul>
            </div>
          </div>

          <div className="reveal space-y-8" data-animation="fade-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-8">Professional Values</h3>
              <div className="grid grid-cols-1 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start space-x-4">
                        <div className="bg-brand-50 p-3 rounded-full flex-shrink-0">
                          {value.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-lg sm:text-xl mb-3">{value.title}</h4>
                          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
