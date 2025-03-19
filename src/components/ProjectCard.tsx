import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveDemo?: string;
  github?: string;
  image?: string;
  fadeDirection?: 'left' | 'right' | 'up';
  delay?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  liveDemo,
  github,
  image = 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80',
  fadeDirection = 'up',
  delay = '0s'
}) => {
  const animationClass = {
    left: 'animate-slide-from-left',
    right: 'animate-slide-from-right',
    up: 'animate-fade-up'
  }[fadeDirection];

  return (
    <div 
      className={`glass-card rounded-xl overflow-hidden opacity-0 ${animationClass}`}
      style={{ animationDelay: delay }}
    >
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-medium mb-2 font-cabinet-grotesk normal-case">{title.toLowerCase()}</h3>
        <p className="text-muted-foreground mb-3 line-clamp-3 text-sm font-inter normal-case">{description.toLowerCase()}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span 
              key={tech} 
              className="inline-block px-2 py-0.5 text-xs font-normal rounded-full bg-primary/10 text-primary font-inter normal-case"
            >
              {tech.toLowerCase()}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {liveDemo && (
            <a 
              href={liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-normal text-accent hover:text-accent/80 transition-colors font-inter normal-case"
            >
              <ExternalLink size={14} className="mr-1.5" />
              live demo
            </a>
          )}
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-normal text-accent hover:text-accent/80 transition-colors font-inter normal-case"
            >
              <Github size={14} className="mr-1.5" />
              github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
