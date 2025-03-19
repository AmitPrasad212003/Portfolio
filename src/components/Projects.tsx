import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Projects = () => {
  const projects = [
    {
      title: 'Wanderlust',
      description: 'A full-stack web application for discovering and booking camping sites, featuring user authentication, reviews, and interactive maps.',
      image: '/assets/wanderlust.jpeg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      github: 'https://github.com/AmitPrasad212003/Wanderlust',
      demo: null,
    },
    {
      title: 'Gyani AI',
      description: 'An AI-powered chatbot built with Botpress, designed to assist users with queries and provide intelligent responses.',
      image: '/assets/gyani.png',
      tags: ['Botpress', 'JavaScript', 'NLP', 'AI'],
      github: 'https://github.com/AmitPrasad212003/Gyani-AI-chat-Bot-by-Botpress',
      demo: 'https://mediafiles.botpress.cloud/d1690493-b30d-4cd0-b9ba-04ddd369afab/webchat/bot.html',
    },
    {
      title: 'Smart RailCrowd Prediction',
      description: 'An intelligent system that predicts crowd density at railway stations using machine learning and computer vision techniques.',
      image: '/assets/smartrail.jpeg',
      tags: ['Python', 'OpenCV', 'TensorFlow', 'Machine Learning', 'Railway Navigation'],
      github: 'https://github.com/AmitPrasad212003/Smart_RailCrowd_Prediction',
      demo: null,
    },
    {
      title: 'Yahoo Stock Dashboard',
      description: 'A data visualization dashboard for tracking and analyzing Yahoo Finance stock data in real-time using Python and financial APIs.',
      image: '/assets/yahooDashBoard.jpg',
      tags: ['Python', 'Pandas', 'Plotly', 'Yahoo Finance API', 'Data Visualization'],
      github: 'https://github.com/AmitPrasad212003/Yahoo-Stock-Dashboard',
      demo: null,
    }

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

  const projectVariants = {
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
    <section id="projects" className="py-6 bg-gray-50">
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore my recent work"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              variants={projectVariants}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold font-cabinet-grotesk text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 font-inter mb-3 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 text-xs font-medium font-inter bg-[#FF5C39]/5 text-[#FF5C39] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gray-700 hover:text-[#FF5C39] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium font-inter">Code</span>
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-700 hover:text-[#FF5C39] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium font-inter">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
