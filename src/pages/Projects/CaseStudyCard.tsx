
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../components/ui/collapsible';
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
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Get the top 3 results to display in the preview
  const topResults = caseStudy.results.slice(0, 3);
  
  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <Collapsible open={expanded} onOpenChange={setExpanded}>
        <CollapsibleTrigger className="w-full text-left">
          <CardHeader className="pb-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-display font-semibold text-facebook mb-1">{caseStudy.title}</h3>
                <p className="text-gray-600 text-sm">{caseStudy.client} | {caseStudy.industry}</p>
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-200">
                <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${expanded ? 'transform rotate-180' : ''}`} />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              {caseStudy.platforms.map((platform) => (
                <span 
                  key={platform} 
                  className="px-2 py-0.5 bg-gray-100 rounded-full text-gray-600 text-xs"
                >
                  {platform}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 mt-4">
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
            
            <p className="text-xs text-gray-500 mt-2">Campaign Duration: {caseStudy.duration}</p>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="pt-4 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-display font-semibold text-lg mb-2">The Challenge</h4>
                <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
              </div>
              
              <div>
                <h4 className="font-display font-semibold text-lg mb-2">The Solution</h4>
                <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
              </div>
            </div>
            
            <h4 className="font-display font-semibold text-lg mb-4">Key Results</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
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
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default CaseStudyCard;
