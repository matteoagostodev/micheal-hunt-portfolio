
import React from 'react';

export interface Education {
  id: string;
  type: 'university' | 'certification' | 'course';
  title: string;
  institution: string;
  year: string;
  description: string;
  skills: string[];
}

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  const getIcon = () => {
    switch (education.type) {
      case 'university':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'certification':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'course':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return null;
    }
  };
  
  const getBackgroundColor = () => {
    switch (education.type) {
      case 'university':
        return 'bg-facebook';
      case 'certification':
        return 'bg-instagram-purple';
      case 'course':
        return 'bg-instagram-pink';
      default:
        return 'bg-gray-500';
    }
  };
  
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5 transition-all duration-300 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className={`${getBackgroundColor()} w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0`}>
          {getIcon()}
        </div>
        
        <div>
          <h3 className="text-lg font-display font-semibold">{education.title}</h3>
          <p className="text-gray-600 text-sm">{education.institution}</p>
          <p className="text-gray-500 text-sm">{education.year}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
