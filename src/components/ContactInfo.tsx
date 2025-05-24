
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
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

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      <div className="grid grid-cols-1 gap-6">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-start">
            <div className="p-3 bg-brand-50 rounded-full mr-4">
              {info.icon}
            </div>
            <div>
              <h4 className="font-semibold mb-1">{info.title}</h4>
              <p className="text-gray-700">{info.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
