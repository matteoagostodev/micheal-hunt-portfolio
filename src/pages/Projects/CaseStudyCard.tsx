
import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
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

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  // Get the top 3 results to display in the preview
  const topResults = caseStudy.results.slice(0, 3);
  
  // Get the primary platform (first one)
  const primaryPlatform = caseStudy.platforms[0];
  const platformImage = getPlatformImage(primaryPlatform);
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer h-full overflow-hidden group">
          <div className="h-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
            <img 
              src={platformImage} 
              alt={primaryPlatform}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-2 left-0 right-0 flex justify-center z-20">
              <div className="bg-white/90 rounded-full px-4 py-1 flex items-center space-x-2 shadow-sm">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <div className="text-xs text-gray-700 font-medium">
                  {primaryPlatform} search
                </div>
              </div>
            </div>
          </div>
          
          <CardContent className="p-4 text-center">
            <div>
              <h3 className="text-lg font-display font-semibold text-facebook mb-1">{caseStudy.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{caseStudy.client} | {caseStudy.industry}</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-4">
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
      
      <DialogContent className="sm:max-w-4xl bg-gradient-to-br from-white to-gray-50">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-display font-semibold text-facebook">
            {caseStudy.title}
          </DialogTitle>
          <p className="text-gray-600">{caseStudy.client} | {caseStudy.industry}</p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-3">
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 mt-6">
          <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-sm">
            <h4 className="font-display font-semibold text-lg mb-3 text-facebook">The Challenge</h4>
            <p className="text-gray-700">{caseStudy.challenge}</p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-sm">
            <h4 className="font-display font-semibold text-lg mb-3 text-facebook">The Solution</h4>
            <p className="text-gray-700">{caseStudy.solution}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h4 className="font-display font-semibold text-lg mb-5 text-center">Key Results</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {caseStudy.results.map((result, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg text-center ${
                  index % 3 === 0 ? 'bg-blue-50' : 
                  index % 3 === 1 ? 'bg-green-50' : 'bg-purple-50'
                }`}
              >
                <p className="text-2xl font-bold text-facebook mb-1">{result.value}</p>
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
        
        <div className="flex justify-center mt-4">
          <p className="text-sm text-gray-500">Campaign Duration: <span className="font-medium">{caseStudy.duration}</span></p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyCard;
