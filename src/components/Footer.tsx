import React from 'react';
import { Github, Linkedin, Mail, Code2, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      href: 'https://github.com/AmitPrasad212003',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/amit-prasad-a2b4a7247/',
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      href: 'mailto:amit9733481931@gmail.com',
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={20} />,
      href: 'https://wa.me/917029139659',
    }
  ];

  return (
    <footer className="bg-[#111111] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <a href="#home" className="text-2xl font-medium tracking-tighter font-cabinet-grotesk text-white">
              amit<span className="text-[#FF5C39]">.</span>
            </a>
            <p className="text-sm font-inter max-w-md">
              web developer, python enthusiast, and ai innovator based in india. 
              creating modern digital solutions with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-normal uppercase tracking-wider text-gray-400 font-cabinet-grotesk">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm font-inter">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm font-inter">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm font-inter">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm font-inter">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-normal uppercase tracking-wider text-gray-400 font-cabinet-grotesk">
              Connect With Me
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400 font-inter">
            © {currentYear} Amit Prasad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
