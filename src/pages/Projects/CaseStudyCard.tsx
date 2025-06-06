
import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from '../../components/ui/dialog';
import { Badge } from '../../components/ui/badge';
import { BarChart3, TrendingUp, CalendarDays, Percent, Facebook, Instagram } from 'lucide-react';
import { Separator } from '../../components/ui/separator';

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
          <CardContent className="p-5 pt-6 flex flex-col h-full">
            {/* Platform icon displayed at top */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                {primaryPlatform === 'Facebook' && (
                  <Facebook size={24} className="text-white/90 mr-2" />
                )}
                {primaryPlatform === 'Instagram' && (
                  <Instagram size={24} className="text-white/90 mr-2" />
                )}
                <Badge 
                  variant="outline"
                  className="bg-white/20 border-white/30 text-white text-xs"
                >
                  {primaryPlatform}
                </Badge>
              </div>
              <span className="text-xs opacity-70">{caseStudy.industry}</span>
            </div>
            
            {/* Title and client */}
            <h3 className="text-xl font-display font-semibold mb-1">{caseStudy.title}</h3>
            <p className="text-sm opacity-90 mb-4">{caseStudy.client}</p>
            
            <Separator className="bg-white/20 my-4" />
            
            {/* Platforms */}
            <div className="flex flex-wrap gap-1 mb-4">
              {caseStudy.platforms.slice(1).map((platform) => (
                <Badge 
                  key={platform} 
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white text-xs"
                >
                  {platform}
                </Badge>
              ))}
            </div>
            
            {/* Results - Fixed height container */}
            <div className="grid grid-cols-2 gap-4 mt-auto bg-white/10 p-3 rounded-lg">
              {topResults.map((result, index) => (
                <div key={index} className="text-center h-20 flex flex-col justify-between">
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-lg font-bold">{result.value}</p>
                  </div>
                  
                  <div className="space-y-1">
                    {result.label === "Return on Ad Spend" ? (
                      <p className="text-xs opacity-80">ROAS</p>
                    ) : result.label === "First Month Revenue" ? (
                      <p className="text-xs opacity-80"></p>
                    ) : (
                      <p className="text-xs opacity-80 line-clamp-1">{result.label}</p>
                    )}
                    
                    {result.change && (
                      <p className="text-xs font-medium text-white bg-white/20 rounded-full px-2 py-0.5 inline-block">
                        {result.positive ? "↑" : "↓"} 
                        {result.label === "Return on Ad Spend" ? "+85%" : 
                         result.label === "First Month Revenue" ? "+212%" : 
                         result.change}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-5xl bg-white overflow-y-auto max-h-[90vh]">
        <div className={`relative pt-12 pb-16 px-6 mb-6 ${platformStyle}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
          <DialogHeader className="relative z-20 text-white">
            <DialogTitle className="text-3xl font-display font-semibold">
              {caseStudy.title}
            </DialogTitle>
            <DialogDescription className="text-white/85 mt-2">
              {caseStudy.client} | {caseStudy.industry}
            </DialogDescription>
            
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
