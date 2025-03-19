import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} className="text-[#FF5C39]" />,
      title: 'Email',
      value: 'amit9733481931@gmail.com',
      href: 'mailto:amit9733481931@gmail.com',
    },
    {
      icon: <Phone size={24} className="text-[#FF5C39]" />,
      title: 'Phone',
      value: '+91 702-913-9659',
      href: 'tel:+917029139659',
    },
    {
      icon: <MapPin size={24} className="text-[#FF5C39]" />,
      title: 'Location',
      value: 'Bhopal, India',
      href: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="contact" className="py-8 bg-gray-50">
      <div className="section-container">
        <SectionHeading
          title="Get in Touch"
          subtitle="Let's work together"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <motion.div
            className="space-y-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl font-bold font-cabinet-grotesk text-gray-900"
              variants={itemVariants}
            >
              Let's Build Something Amazing Together
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 font-inter leading-relaxed"
              variants={itemVariants}
            >
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </motion.p>

            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-[#FF5C39]/5 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-[#FF5C39]/10">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 font-inter">
                      {info.title}
                    </h4>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-lg font-medium text-gray-900 hover:text-[#FF5C39] transition-colors font-cabinet-grotesk"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-gray-900 font-cabinet-grotesk">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-6 shadow-sm"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <form className="space-y-4">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2 font-inter">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF5C39] focus:ring-2 focus:ring-[#FF5C39]/20 outline-none transition-colors font-inter"
                  placeholder="Your name"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2 font-inter">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF5C39] focus:ring-2 focus:ring-[#FF5C39]/20 outline-none transition-colors font-inter"
                  placeholder="your@email.com"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2 font-inter">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF5C39] focus:ring-2 focus:ring-[#FF5C39]/20 outline-none transition-colors font-inter resize-none"
                  placeholder="Your message"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF5C39] hover:bg-[#FF5C39]/90 text-white font-medium rounded-lg transition-colors font-inter"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
