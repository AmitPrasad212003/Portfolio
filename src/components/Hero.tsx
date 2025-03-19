import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowRight, X, Github, Linkedin, MessageCircle, Code2, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 8px rgba(59, 130, 246, 0.6)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98
    }
  };
  
  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };
  
  // Particle array for background elements
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    duration: Math.random() * 20 + 10
  }));
  
  // Tech stack icons array with adjusted positions
  const techIcons = [
    { name: 'React', src: '/tech/react.svg', size: 35, initialPos: { x: -100, y: -60 } },
    { name: 'TypeScript', src: '/tech/typescript.svg', size: 30, initialPos: { x: 100, y: -80 } },
    { name: 'Node.js', src: '/tech/nodejs.svg', size: 40, initialPos: { x: -120, y: 40 } },
    { name: 'Tailwind', src: '/tech/tailwind.svg', size: 35, initialPos: { x: 110, y: 60 } },
    { name: 'Python', src: '/tech/python.svg', size: 33, initialPos: { x: -60, y: 100 } },
    { name: 'GitHub', src: '/tech/github.svg', size: 30, initialPos: { x: 80, y: -30 } },
    { name: 'MongoDB', src: '/tech/mongodb.svg', size: 37, initialPos: { x: -30, y: -100 } }
  ];
  
  // Social links data
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      href: 'https://github.com/AmitPrasad212003',
      color: 'text-gray-700 hover:text-[#333]'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/amit-prasad-a2b4a7247/',
      color: 'text-gray-700 hover:text-[#0A66C2]'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      href: 'mailto:amit9733481931@gmail.com',
      color: 'text-gray-700 hover:text-[#EA4335]'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={20} />,
      href: 'https://wa.me/917029139659',
      color: 'text-gray-700 hover:text-[#25d366]'
    },
    {
      name: 'LeetCode',
      icon: <Code2 size={20} />,
      href: 'https://leetcode.com/u/amit9733481931/',
      color: 'text-gray-700 hover:text-[#FFA116]'
    }
  ];
  
  return (
    <section 
      id="home" 
      className="min-h-[75vh] flex items-start relative overflow-hidden bg-white pt-2"
      ref={heroRef}
    >
      {/* Animated background particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/10"
          initial={{ 
            x: `${particle.x}%`, 
            y: `${particle.y}%`,
            opacity: 0.1,
          }}
          animate={{ 
            x: `${particle.x + (Math.random() * 10 - 5)}%`,
            y: `${particle.y + (Math.random() * 10 - 5)}%`,
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ 
            repeat: Infinity,
            repeatType: "reverse",
            duration: particle.duration,
            ease: "easeInOut" 
          }}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
      
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-gradient-to-br from-[#FF5C39]/10 to-[#FF8666]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-gradient-to-tr from-[#FF5C39]/5 to-[#FF8666]/10 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-3 mt-6">
        <motion.div 
          className="space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.span 
              className="inline-block px-3 py-1 rounded-full bg-[#FF5C39]/10 text-[#FF5C39] text-sm font-medium mb-3 font-inter"
              variants={itemVariants}
            >
              Web Developer | Python Enthusiast | AI Innovator
            </motion.span>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4 font-cabinet-grotesk text-gray-900"
              variants={itemVariants}
            >
              Hi! I'm Amit<br />
              A Web Developer<span className="text-[#FF5C39]">.</span>
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg text-gray-600 max-w-xl font-inter leading-relaxed"
              variants={itemVariants}
            >
              I craft modern web applications with cutting-edge technologies, 
              focusing on performance, scalability, and exceptional user experiences.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex items-center flex-wrap gap-2 mt-4"
            variants={itemVariants}
          >
            <motion.a 
              href="#projects" 
              className="btn-primary group font-inter text-base px-6 py-3 bg-[#FF5C39] hover:bg-[#FF5C39]/90 flex items-center text-white rounded-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View Projects
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="https://drive.google.com/file/d/1lTpWL55ZJ8TRXwHxcIWsuYEf-mrp0S3D/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline font-inter text-base px-6 py-3 border-2 border-gray-200 hover:border-[#FF5C39] hover:text-[#FF5C39] rounded-lg transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View Resume
            </motion.a>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2 ml-1">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 ${social.color} transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* Floating Tech Icons with adjusted opacity and animation */}
          {techIcons.map((icon, index) => (
            <motion.div
              key={icon.name}
              className="absolute z-0"
              initial={{ 
                x: icon.initialPos.x * 0.7,
                y: icon.initialPos.y * 0.7,
                opacity: 0 
              }}
              animate={{ 
                x: [
                  icon.initialPos.x * 0.7,
                  icon.initialPos.x * 0.7 + (Math.random() * 12 - 6),
                  icon.initialPos.x * 0.7
                ],
                y: [
                  icon.initialPos.y * 0.7,
                  icon.initialPos.y * 0.7 + (Math.random() * 12 - 6),
                  icon.initialPos.y * 0.7
                ],
                opacity: [0.3, 0.4, 0.3],
                rotate: [0, 360]
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            >
              <img
                src={icon.src}
                alt={icon.name}
                style={{
                  width: icon.size * 0.8,
                  height: icon.size * 0.8,
                  filter: 'grayscale(0.3) brightness(0.85)'
                }}
                className="select-none pointer-events-none"
              />
            </motion.div>
          ))}

          <motion.div 
            className="glass rounded-[2rem] overflow-hidden relative z-10 p-2 shadow-lg max-w-[320px] mx-auto lg:ml-auto bg-[#FF5C39]/10"
            animate={floatingAnimation}
          >
            <img 
              src="/lovable-uploads/1d8c6d5d-a789-44d5-950f-9a293af2621b.png" 
              alt="Amit Prasad" 
              className="w-full h-auto rounded-[1.8rem] object-cover aspect-[4/5]"
            />
            
            {/* Decorative elements around the image */}
            <motion.div 
              className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-[#FF5C39] to-[#FF8666] rounded-full opacity-70 blur-sm"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 0.8, 0.7]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-tr from-[#FF5C39] to-[#FF8666] rounded-full opacity-70 blur-sm"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 0.8, 0.7]
              }}
              transition={{ 
                duration: 3,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
