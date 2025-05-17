
import React, { useState } from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientClass?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, gradientClass = "from-facebook to-instagram-purple" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`rounded-xl overflow-hidden transition-transform duration-300 ${
        isHovered ? "transform scale-[1.02]" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`h-1 bg-gradient-to-r ${gradientClass}`}></div>
      <div className="p-6 bg-white shadow-md border border-gray-100 rounded-b-xl h-full">
        <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center text-white bg-gradient-to-r ${gradientClass}`}>
          {icon}
        </div>
        <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
