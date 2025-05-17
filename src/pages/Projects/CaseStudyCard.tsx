
import React, { useState } from 'react';

interface CaseStudyResult {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  duration: string;
  platforms: string[];
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div className={`border border-gray-100 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
      expanded ? "bg-white" : "bg-white hover:shadow-lg"
    }`}>
      <div 
        className={`p-6 cursor-pointer ${expanded ? "border-b border-gray-100" : ""}`} 
        onClick={toggleExpand}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-display font-semibold text-facebook mb-1">{caseStudy.title}</h3>
            <p className="text-gray-600">{caseStudy.client} | {caseStudy.industry}</p>
          </div>
          <div>
            <button 
              className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-transform duration-300 ${
                expanded ? "transform rotate-180" : ""
              }`}
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {caseStudy.platforms.map((platform) => (
            <span 
              key={platform} 
              className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-sm"
            >
              {platform}
            </span>
          ))}
        </div>
        
        <p className="text-sm text-gray-500">Campaign Duration: {caseStudy.duration}</p>
      </div>
      
      {expanded && (
        <div className="p-6 pt-4 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-display font-semibold text-lg mb-2">The Challenge</h4>
              <p className="text-gray-600">{caseStudy.challenge}</p>
            </div>
            
            <div>
              <h4 className="font-display font-semibold text-lg mb-2">The Solution</h4>
              <p className="text-gray-600">{caseStudy.solution}</p>
            </div>
          </div>
          
          <h4 className="font-display font-semibold text-lg mb-4">Key Results</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">{result.label}</p>
                <p className="text-xl font-bold text-facebook">{result.value}</p>
                {result.change && (
                  <p className={`text-sm font-medium ${result.positive ? "text-green-500" : "text-red-500"}`}>
                    {result.positive ? "↑" : "↓"} {result.change}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudyCard;
