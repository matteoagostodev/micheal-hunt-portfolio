
import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from '../../components/ui/dialog';
import { CalendarIcon, BookOpen, Award, GraduationCap } from 'lucide-react';

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
  // Select icon based on education type
  const getIcon = () => {
    switch (education.type) {
      case 'university':
        return <GraduationCap className="w-5 h-5" />;
      case 'certification':
        return <Award className="w-5 h-5" />;
      case 'course':
        return <BookOpen className="w-5 h-5" />;
      default:
        return null;
    }
  };
  
  // Get background color based on education type
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
    <Dialog>
      <DialogTrigger asChild>
        <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
          <CardContent className="p-4">
            <div className="flex gap-4 items-center">
              <div className={`${getBackgroundColor()} w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                {getIcon()}
              </div>
              
              <div className="flex-grow">
                <h3 className="font-display font-medium text-lg truncate">{education.title}</h3>
                <p className="text-gray-600 text-sm">{education.institution}</p>
                <div className="flex items-center text-gray-500 text-xs mt-1">
                  <CalendarIcon className="w-3 h-3 mr-1" />
                  {education.year}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className={`${getBackgroundColor()} w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0`}>
              {getIcon()}
            </span>
            {education.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-2">
          <div className="mb-4">
            <p className="font-medium text-gray-700">{education.institution}</p>
            <p className="text-gray-500 text-sm flex items-center">
              <CalendarIcon className="w-4 h-4 mr-1" />
              {education.year}
            </p>
          </div>
          
          <p className="text-gray-600 mb-4">{education.description}</p>
          
          <div>
            <h4 className="font-medium mb-2 text-sm">Skills & Knowledge:</h4>
            <div className="flex flex-wrap gap-2">
              {education.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EducationCard;
