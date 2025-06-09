
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-brand-500" />,
      title: "Email",
      value: "kenwilson741@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-brand-500" />,
      title: "Phone",
      value: "+254748449075",
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-500" />,
      title: "Location",
      value: "Nairobi, Kenya",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/wilson-kenagwa",
      icon: <Linkedin className="w-6 h-6 text-gray-700" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/RealWilsooon?t=mUdT-PRu_VT_2NeDcsyDqg&s=09",
      icon: <Twitter className="w-6 h-6 text-gray-700" />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1FjfvLdrMU/",
      icon: <Facebook className="w-6 h-6 text-gray-700" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_.wilie?igsh=MXRqa2kwZnc2Ynl1aQ==",
      icon: <Instagram className="w-6 h-6 text-gray-700" />,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 lg:gap-16">
          <div className="xl:col-span-3 reveal" data-animation="fade-right">
            <Card className="shadow-lg">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="w-full h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className="w-full h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                        required
                        className="w-full h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        rows={6}
                        required
                        className="w-full resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-brand-600 hover:bg-brand-700 h-12 text-base font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="xl:col-span-2 space-y-8 reveal" data-animation="fade-left">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-brand-50 rounded-full mr-4 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                      <p className="text-gray-700">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Connect on Social Media</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Follow me on social media to see my latest updates and projects.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Connect on ${social.name}`}
                      className="flex items-center p-3 bg-gray-50 hover:bg-brand-50 rounded-lg transition-colors group"
                      title={social.name}
                    >
                      <div className="mr-3">
                        {social.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-brand-600">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Availability</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  I'm currently available for freelance projects, full-time positions, and consulting opportunities.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-800 font-medium">Available for hire</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
