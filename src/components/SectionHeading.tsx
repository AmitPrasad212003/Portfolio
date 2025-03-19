import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="text-center max-w-2xl mx-auto mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        damping: 12,
        stiffness: 100,
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 font-cabinet-grotesk text-gray-900">
        {title}
        <span className="text-[#FF5C39]">.</span>
      </h2>
      <p className="text-base text-gray-600 font-inter">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeading;
