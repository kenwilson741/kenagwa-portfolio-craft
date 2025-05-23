
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Wilson<span className="text-brand-400">K.</span></h3>
            <p className="text-gray-400 mb-6">
              Media Communication Specialist with expertise in Data Analytics, Virtual Assistance, and Cybersecurity.
            </p>
            <p className="text-gray-400 text-sm">
              © {currentYear} Wilson Kenagwa. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-brand-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-brand-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-brand-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-brand-400 transition-colors">Education</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-brand-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300">Media</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300">Healthcare</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300">Finance</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300">Marketing</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300">Data Analytics</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300">Business Intelligence</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            Designed and developed with dedication
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/wilson-kenagwa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://x.com/RealWilsooon?t=mUdT-PRu_VT_2NeDcsyDqg&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com/share/1FjfvLdrMU/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-400 transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/_.wilie?igsh=MXRqa2kwZnc2Ynl1aQ==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-400 transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
