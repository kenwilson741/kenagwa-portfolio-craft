
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
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="section-container">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4 sm:px-0">
            A versatile professional with a unique blend of media communication expertise and data analytics skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-0">
          <div className="reveal" data-animation="fade-right">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Professional Approach</h3>
            <p className="text-gray-700 mb-4">
              As a media communication specialist with a focus on data analytics, I bridge the gap between technical insights and effective storytelling. My approach combines analytical rigor with creative communication to deliver meaningful results.
            </p>
            <p className="text-gray-700 mb-6">
              I believe in the power of data-driven decision making combined with clear, compelling communication. Whether working with healthcare data, financial metrics, or marketing analytics, I focus on extracting valuable insights and presenting them in ways that drive action.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold mb-4">Goals & Aspirations</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
              <li>Become a leading expert in data visualization and business intelligence within the media industry</li>
              <li>Develop innovative approaches to healthcare analytics that improve patient outcomes</li>
              <li>Build predictive models that transform how financial institutions understand customer behavior</li>
              <li>Create data-driven marketing strategies that significantly improve ROI for clients</li>
              <li>Contribute to research advancing the intersection of data science and media communication</li>
            </ul>
          </div>

          <div className="reveal" data-animation="fade-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Professional Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-md transition-all">
                  <CardContent className="p-4 sm:p-6">
                    <div className="mb-3 sm:mb-4">
                      {value.icon}
                    </div>
                    <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{value.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
