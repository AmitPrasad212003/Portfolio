import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Rocket } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About = () => {
  const features = [
    {
      icon: <Code2 size={24} className="text-[#FF5C39]" />,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies like React, TypeScript, and Node.js.',
    },
    {
      icon: <Brain size={24} className="text-[#FF5C39]" />,
      title: 'AI & Machine Learning',
      description: 'Creating intelligent solutions using Python, TensorFlow, and computer vision for real-world applications.',
    },
    {
      icon: <Rocket size={24} className="text-[#FF5C39]" />,
      title: 'Problem Solving',
      description: 'Passionate about solving complex problems with clean, efficient, and maintainable code.',
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
    <section id="about" className="py-8 bg-white">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better"
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
              Passionate Web Developer & AI Enthusiast
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 font-inter leading-relaxed"
              variants={itemVariants}
            >
              I'm a full-stack web developer with a strong passion for creating innovative digital solutions. My journey in tech started with Python programming, and I've since expanded my expertise to include modern web technologies and artificial intelligence.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 font-inter leading-relaxed"
              variants={itemVariants}
            >
              I specialize in building responsive, user-friendly web applications using React and Node.js. My experience includes working with various databases, implementing authentication systems, and integrating third-party APIs.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 font-inter leading-relaxed"
              variants={itemVariants}
            >
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or working on personal projects that challenge my skills and creativity.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-2xl bg-gray-50 hover:bg-[#FF5C39]/5 transition-colors"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-white shadow-sm">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold font-cabinet-grotesk text-gray-900">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-gray-600 font-inter">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
