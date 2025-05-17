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

// Helper function to get industry-specific image
const getIndustryImage = (industry: string) => {
  switch(industry.toLowerCase()) {
    case 'fashion':
    case 'apparel':
    case 'clothing':
      return "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop";
    case 'beauty':
    case 'cosmetics':
      return "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop";
    case 'food':
    case 'restaurant':
    case 'beverage':
      return "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop";
    case 'tech':
    case 'technology':
    case 'software':
      return "https://images.unsplash.com/photo-1488590528505-9ef00e84e7a7?q=80&w=800&auto=format&fit=crop";
    case 'health':
    case 'fitness':
    case 'wellness':
      return "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop";
    case 'real estate':
    case 'property':
      return "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop";
    case 'education':
    case 'learning':
      return "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop";
    case 'finance':
    case 'banking':
      return "https://images.unsplash.com/photo-1621264448270-9ef00e84e7a7?q=80&w=800&auto=format&fit=crop";
    case 'travel':
    case 'tourism':
      return "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=800&auto=format&fit=crop";
    case 'entertainment':
    case 'media':
      return "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=800&auto=format&fit=crop";
    default:
      return "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop";
  }
};

// Helper function to get platform color
const getPlatformColor = (platform: string): string => {
  switch(platform) {
    case 'Facebook':
      return 'bg-gradient-to-br from-blue-600/90 to-blue-800/90 text-white';
    case 'Instagram':
      return 'bg-gradient-to-br from-purple-500/90 to-pink-500/90 text-white';
    case 'TikTok':
      return 'bg-gradient-to-br from-black/90 to-gray-800/90 text-white';
    case 'LinkedIn':
      return 'bg-gradient-to-br from-blue-700/90 to-blue-900/90 text-white';
    default:
      return 'bg-gradient-to-br from-gray-600/90 to-gray-800/90 text-white';
  }
};

// Helper function to get platform badge color
const getPlatformBadgeColor = (platform: string): string => {
  switch(platform) {
    case 'Facebook':
      return 'bg-facebook text-white';
    case 'Instagram':
      return 'bg-instagram-pink text-white';
    case 'TikTok':
      return 'bg-black text-white';
    case 'LinkedIn':
      return 'bg-blue-700 text-white';
    default:
      return 'bg-gray-600 text-white';
  }
};

// Helper to get accent color based on platform
const getPlatformAccentColor = (platform: string): string => {
  switch(platform) {
    case 'Facebook':
      return 'border-facebook';
    case 'Instagram':
      return 'border-instagram-pink';
    case 'TikTok':
      return 'border-black';
    case 'LinkedIn':
      return 'border-blue-700';
    default:
      return 'border-gray-600';
  }
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  // Select primary platform for styling (alternating if multiple)
  const primaryPlatform = caseStudy.platforms[0];
  const industryImage = getIndustryImage(caseStudy.industry);
  const platformStyle = getPlatformColor(primaryPlatform);
  const accentColor = getPlatformAccentColor(primaryPlatform);
  
  // Get top 3 results
  const topResults = caseStudy.results.slice(0, 3);
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full overflow-hidden group">
          <div className="relative">
            <AspectRatio ratio={16/9}>
              <img 
                src={industryImage} 
                alt={caseStudy.industry}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
              />
              <div className={`absolute inset-0 ${platformStyle} opacity-70`}></div>
            </AspectRatio>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
              <h3 className="text-xl font-display font-semibold text-white mb-1">{caseStudy.title}</h3>
              <p className="text-white/90 text-sm">{caseStudy.client}</p>
              
              <div className="flex flex-wrap gap-1 mt-2">
                {caseStudy.platforms.map((platform) => (
                  <span 
                    key={platform} 
                    className={`px-2 py-0.5 rounded text-xs font-medium ${getPlatformBadgeColor(platform)}`}
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <CardContent className="p-4">
            <div className={`grid grid-cols-3 gap-2 border-t-2 ${accentColor} pt-3`}>
              {topResults.map((result, index) => (
                <div key={index} className="text-center">
                  <p className="text-lg font-bold">{result.value}</p>
                  
                  {result.label === "Return on Ad Spend" ? (
                    <p className="text-xs text-gray-600">ROAS</p>
                  ) : result.label === "First Month Revenue" ? (
                    <p className="text-xs text-gray-600"></p>
                  ) : (
                    <p className="text-xs text-gray-600 line-clamp-1">{result.label}</p>
                  )}
                  
                  {result.change && (
                    <p className={`text-xs font-medium ${result.positive ? "text-green-600" : "text-red-600"}`}>
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
        <div className="relative h-64 sm:h-80 -m-6 mb-6">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
          <img 
            src={industryImage} 
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className={`bg-gradient-to-br from-gray-50 to-blue-50 border-l-4 border-facebook p-6 rounded-xl shadow-sm`}>
            <h4 className="font-display font-semibold text-lg mb-3 text-gray-800">The Challenge</h4>
            <p className="text-gray-700">{caseStudy.challenge}</p>
          </div>
          
          <div className={`bg-gradient-to-br from-gray-50 to-blue-50 border-l-4 border-facebook p-6 rounded-xl shadow-sm`}>
            <h4 className="font-display font-semibold text-lg mb-3 text-gray-800">The Solution</h4>
            <p className="text-gray-700">{caseStudy.solution}</p>
          </div>
        </div>
        
        <div className={`p-6 rounded-xl shadow-sm from-gray-50 to-blue-50 border-l-4 border-facebook`}>
          <h4 className="font-display font-semibold text-xl mb-4 text-center text-gray-800">Results Summary</h4>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {caseStudy.results.map((result, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg text-center bg-white shadow-sm h-32 flex flex-col justify-between"
              >
                <p className="text-2xl font-bold text-gray-800">{result.value}</p>
                <p className="text-sm text-gray-700 line-clamp-2">{result.label}</p>
                {result.change && (
                  <p className={`text-xs font-medium ${result.positive ? "text-green-600" : "text-red-600"}`}>
                    {result.positive ? "↑" : "↓"} {result.change}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <p className={`px-4 py-2 rounded-full text-sm font-medium bg-gray-600 text-white`}>
            Campaign Duration: <span className="font-bold">{caseStudy.duration}</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyCard;
