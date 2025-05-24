
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const SocialLinks = () => {
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
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Connect on Social Media</h3>
        <p className="text-sm text-gray-600 mb-4">
          Follow me on social media to see my latest updates and projects.
        </p>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Connect on ${social.name}`}
              className="p-3 bg-gray-100 hover:bg-brand-50 rounded-full transition-colors"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialLinks;
