
import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { AspectRatio } from '../../components/ui/aspect-ratio';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../../components/ui/dialog';
import { Badge } from '../../components/ui/badge';
import { BarChart3, TrendingUp, CalendarDays, Percent } from 'lucide-react';

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

// Helper function to get platform color
const getPlatformColor = (platform: string): string => {
  switch(platform) {
    case 'Facebook':
      return 'bg-facebook';
    case 'Instagram':
      return 'bg-gradient-to-br from-instagram-purple to-instagram-pink';
    case 'TikTok':
      return 'bg-black';
    case 'LinkedIn':
      return 'bg-blue-700';
    default:
      return 'bg-gray-700';
  }
};

// Helper function to get platform text color
const getPlatformTextColor = (platform: string): string => {
  switch(platform) {
    case 'Facebook':
    case 'Instagram':
    case 'TikTok':
    case 'LinkedIn':
      return 'text-white';
    default:
      return 'text-white';
  }
};

// Helper function to get industry-specific image
const getIndustryImage = (industry: string, id: string): string => {
  switch(industry) {
    case 'Health & Fitness':
    case 'Health & Fitness App':
      return "/lovable-uploads/20574ffc-1e1d-4bb6-a6f6-ad6b92e695bf.png";
    case 'Home Goods':
      return "/lovable-uploads/1772b22c-89e6-4e74-a372-5f2eb1075ecf.png";
    case 'SaaS / Technology':
      return "/lovable-uploads/ea89763f-b730-4160-8809-6230b6ad630d.png";
    case 'Fitness / Local Service':
      return "/lovable-uploads/20574ffc-1e1d-4bb6-a6f6-ad6b92e695bf.png";
    case 'Fashion / Apparel':
      return "/lovable-uploads/2a04776e-1166-41bf-a0aa-47663f275674.png";
    default:
      return "/lovable-uploads/20574ffc-1e1d-4bb6-a6f6-ad6b92e695bf.png";
  }
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  // Select primary platform for styling (first platform)
  const primaryPlatform = caseStudy.platforms[0];
  const platformStyle = getPlatformColor(primaryPlatform);
  const platformTextColor = getPlatformTextColor(primaryPlatform);
  
  // Get top 2 results for card preview
  const topResults = caseStudy.results.slice(0, 2);
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className={`border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full overflow-hidden group ${platformStyle} ${platformTextColor}`}>
          <div>
            <AspectRatio ratio={16/9}>
              <img 
                src={getIndustryImage(caseStudy.industry, caseStudy.id)}
                alt={caseStudy.industry}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
              />
            </AspectRatio>
          </div>
          
          <CardContent className="p-5">
            <h3 className="text-xl font-display font-semibold mb-1">{caseStudy.title}</h3>
            <p className="text-sm opacity-90 mb-3">{caseStudy.client}</p>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {caseStudy.platforms.map((platform) => (
                <Badge 
                  key={platform} 
                  variant="outline"
                  className="bg-white/20 border-white/30 text-white text-xs"
                >
                  {platform}
                </Badge>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4 bg-white/10 p-3 rounded-lg">
              {topResults.map((result, index) => (
                <div key={index} className="text-center">
                  <p className="text-lg font-bold">{result.value}</p>
                  
                  {result.label === "Return on Ad Spend" ? (
                    <p className="text-xs opacity-80">ROAS</p>
                  ) : result.label === "First Month Revenue" ? (
                    <p className="text-xs opacity-80"></p>
                  ) : (
                    <p className="text-xs opacity-80 line-clamp-1">{result.label}</p>
                  )}
                  
                  {result.change && (
                    <p className="text-xs font-medium text-white bg-white/20 rounded-full px-2 py-0.5 inline-block mt-1">
                      {result.positive ? "↑" : "↓"} 
                      {result.label === "Return on Ad Spend" ? "+85%" : 
                       result.label === "First Month Revenue" ? "+212%" : 
                       result.change}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-5xl bg-white overflow-y-auto max-h-[90vh]">
        <div className="relative h-64 sm:h-80 -m-6 mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
          <img 
            src={getIndustryImage(caseStudy.industry, caseStudy.id)}
            alt={caseStudy.industry}
            className="w-full h-full object-cover"
          />
          <DialogHeader className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
            <DialogTitle className="text-3xl font-display font-semibold">
              {caseStudy.title}
            </DialogTitle>
            <p className="text-white/85">{caseStudy.client} | {caseStudy.industry}</p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {caseStudy.platforms.map((platform) => (
                <span 
                  key={platform} 
                  className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                    platform === 'Facebook' ? 'bg-facebook' :
                    platform === 'Instagram' ? 'bg-instagram-pink' :
                    platform === 'TikTok' ? 'bg-black' :
                    platform === 'LinkedIn' ? 'bg-blue-700' : 'bg-gray-600'
                  }`}
                >
                  {platform}
                </span>
              ))}
            </div>
          </DialogHeader>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
            <h4 className="font-display font-semibold text-lg mb-3 text-gray-800 flex items-center">
              <span className="mr-2 p-1.5 bg-soft-blue/20 rounded-full">
                <BarChart3 size={18} className="text-facebook" />
              </span>
              The Challenge
            </h4>
            <p className="text-gray-700">{caseStudy.challenge}</p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
            <h4 className="font-display font-semibold text-lg mb-3 text-gray-800 flex items-center">
              <span className="mr-2 p-1.5 bg-soft-green/30 rounded-full">
                <TrendingUp size={18} className="text-green-600" />
              </span>
              The Solution
            </h4>
            <p className="text-gray-700">{caseStudy.solution}</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-display font-semibold text-xl mb-6 text-center text-gray-800 flex items-center justify-center">
            <span className="mr-2 p-2 bg-soft-purple/20 rounded-full">
              <CalendarDays size={18} className="text-purple-600" />
            </span>
            Results Summary
            <span className="px-3 py-1 ml-3 text-sm bg-gray-100 rounded-full text-gray-600">
              {caseStudy.duration}
            </span>
          </h4>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {caseStudy.results.map((result, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center text-center ${
                  result.positive ? "hover:border-green-100" : "hover:border-red-100"
                }`}
              >
                <p className={`text-2xl font-bold mb-1 ${result.positive ? "text-gray-800" : "text-gray-700"}`}>
                  {result.value}
                </p>
                
                <p className="text-sm text-gray-500 mb-2">{result.label}</p>
                
                {result.change && (
                  <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                    result.positive 
                      ? "bg-green-50 text-green-700 border border-green-200" 
                      : "bg-red-50 text-red-700 border border-red-200"
                  } flex items-center`}>
                    <Percent size={12} className="mr-1" />
                    {result.positive ? "+" : "-"}{result.change}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyCard;
