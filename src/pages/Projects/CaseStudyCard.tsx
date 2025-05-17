
import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../../components/ui/dialog';
import { ChevronDown } from 'lucide-react';

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
  // Get the top 3 results to display in the preview
  const topResults = caseStudy.results.slice(0, 3);
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer h-full">
          <CardContent className="p-4">
            <div>
              <h3 className="text-lg font-display font-semibold text-facebook mb-1">{caseStudy.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{caseStudy.client} | {caseStudy.industry}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {caseStudy.platforms.map((platform) => (
                <span 
                  key={platform} 
                  className="px-2 py-0.5 bg-gray-100 rounded-full text-gray-600 text-xs"
                >
                  {platform}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {topResults.map((result, index) => (
                <div key={index} className="flex flex-col">
                  <p className="text-lg font-bold text-facebook">{result.value}</p>
                  <p className="text-xs text-gray-500">{result.label}</p>
                  {result.change && (
                    <p className={`text-xs font-medium ${result.positive ? "text-green-500" : "text-red-500"}`}>
                      {result.positive ? "↑" : "↓"} {result.change}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-display font-semibold text-facebook">
            {caseStudy.title}
          </DialogTitle>
          <p className="text-gray-600 text-sm">{caseStudy.client} | {caseStudy.industry}</p>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {caseStudy.platforms.map((platform) => (
              <span 
                key={platform} 
                className="px-2 py-0.5 bg-gray-100 rounded-full text-gray-600 text-xs"
              >
                {platform}
              </span>
            ))}
          </div>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mt-4">
          <div>
            <h4 className="font-display font-semibold text-lg mb-2">The Challenge</h4>
            <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-2">The Solution</h4>
            <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Key Results</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">{result.label}</p>
                <p className="text-lg font-bold text-facebook">{result.value}</p>
                {result.change && (
                  <p className={`text-xs font-medium ${result.positive ? "text-green-500" : "text-red-500"}`}>
                    {result.positive ? "↑" : "↓"} {result.change}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-xs text-gray-500 mt-4">Campaign Duration: {caseStudy.duration}</p>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyCard;
