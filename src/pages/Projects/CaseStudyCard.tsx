
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

// Helper function to get platform image based on platform name
const getPlatformImage = (platform: string) => {
  switch(platform) {
    case 'Facebook':
      return "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=200&h=100&auto=format&fit=crop";
    case 'Instagram':
      return "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=200&h=100&auto=format&fit=crop";
    case 'TikTok':
      return "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=200&h=100&auto=format&fit=crop";
    case 'LinkedIn':
      return "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=200&h=100&auto=format&fit=crop";
    case 'Google':
      return "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=200&h=100&auto=format&fit=crop";
    case 'Pinterest':
      return "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=200&h=100&auto=format&fit=crop";
    case 'Snapchat':
      return "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?q=80&w=200&h=100&auto=format&fit=crop";
    default:
      return "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=200&h=100&auto=format&fit=crop";
  }
};

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
      return "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop";
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

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  // Get the primary platform (first one)
  const primaryPlatform = caseStudy.platforms[0];
  const platformImage = getPlatformImage(primaryPlatform);
  const industryImage = getIndustryImage(caseStudy.industry);
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-full overflow-hidden group">
          <AspectRatio ratio={16/9} className="bg-gray-100 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 z-10"></div>
            <img 
              src={industryImage} 
              alt={caseStudy.industry}
              className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
            />
            {/* Removed the white div with platform name */}
          </AspectRatio>
          
          <CardContent className="p-5 text-center">
            <div className="mb-4">
              <h3 className="text-xl font-display font-semibold text-facebook mb-2">{caseStudy.title}</h3>
              <p className="text-gray-600 text-sm">{caseStudy.client} | {caseStudy.industry}</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {caseStudy.platforms.map((platform) => (
                <span 
                  key={platform} 
                  className="px-2.5 py-1 bg-gray-100 rounded-full text-gray-600 text-xs font-medium"
                >
                  {platform}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {caseStudy.results.slice(0, 3).map((result, index) => (
                <div key={index} className="flex flex-col items-center">
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
          <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-sm">
            <h4 className="font-display font-semibold text-lg mb-3 text-facebook">The Challenge</h4>
            <p className="text-gray-700">{caseStudy.challenge}</p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-sm">
            <h4 className="font-display font-semibold text-lg mb-3 text-facebook">The Solution</h4>
            <p className="text-gray-700">{caseStudy.solution}</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl shadow-sm">
          <h4 className="font-display font-semibold text-xl mb-6 text-center">Key Results</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {caseStudy.results.map((result, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg text-center ${
                  index % 4 === 0 ? 'bg-blue-50 border-l-4 border-blue-400' : 
                  index % 4 === 1 ? 'bg-green-50 border-l-4 border-green-400' : 
                  index % 4 === 2 ? 'bg-purple-50 border-l-4 border-purple-400' :
                                    'bg-amber-50 border-l-4 border-amber-400'
                }`}
              >
                <p className="text-2xl font-bold text-gray-800 mb-1">{result.value}</p>
                <p className="text-sm text-gray-700 mb-1">{result.label}</p>
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
          <p className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
            Campaign Duration: <span className="font-bold">{caseStudy.duration}</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyCard;
