
import React from 'react';

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  isLast?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, isLast = false }) => {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-0 h-full flex flex-col items-center">
        <div className="w-5 h-5 rounded-full bg-facebook z-10"></div>
        {!isLast && <div className="w-0.5 h-full bg-gray-200 -mt-2"></div>}
      </div>
      
      {/* Content */}
      <div className="ml-8">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <div className="mb-4">
            <h3 className="text-xl font-display font-semibold">{experience.title}</h3>
            <p className="text-instagram-purple font-medium">{experience.company}</p>
            <p className="text-gray-500 text-sm">{experience.period}</p>
          </div>
          
          <p className="text-gray-600 mb-4">{experience.description}</p>
          
          <h4 className="font-medium mb-2">Key Achievements:</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            {experience.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
