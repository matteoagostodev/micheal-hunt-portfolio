
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  gradientClass?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  role, 
  company,
  gradientClass = "from-facebook to-instagram-purple"
}) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-xl border border-gray-100 h-full flex flex-col">
      <div className="flex-1">
        <svg 
          className="w-10 h-10 text-gray-200 mb-4" 
          fill="currentColor" 
          viewBox="0 0 32 32" 
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-600 mb-6">{quote}</p>
      </div>
      <div className="mt-auto">
        <div className={`h-1 w-16 mb-4 bg-gradient-to-r ${gradientClass}`}></div>
        <h4 className="font-semibold">{author}</h4>
        <p className="text-sm text-gray-500">{role}, {company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
