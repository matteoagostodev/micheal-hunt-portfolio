
import React, { useState } from 'react';
import SectionHeading from '../../components/SectionHeading';

const CreativeSection = () => {
  const [activeTab, setActiveTab] = useState<'copy' | 'video'>('copy');
  
  return (
    <section id="creative" className="py-16 md:py-24 px-4 lg:px-0 bg-gray-50">
      <div className="container mx-auto">
        <SectionHeading
          title="Creative Strategies"
          subtitle="Strong creative is the foundation of successful social media campaigns. Explore my approach to ad copy and video scripting that drives engagement and conversions."
          center
        />
        
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('copy')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'copy'
                  ? 'bg-facebook text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Ad Copy Strategy
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'video'
                  ? 'bg-facebook text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Video Script Formula
            </button>
          </div>
        </div>
        
        {activeTab === 'copy' && (
          <div className="bg-white rounded-xl shadow-md p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-display font-semibold mb-4 text-facebook">The AIDA Framework</h3>
                <p className="text-gray-600 mb-6">
                  I craft compelling ad copy using the time-tested AIDA framework, optimized for social media platforms where attention is scarce and competition is fierce.
                </p>
                
                <div className="space-y-6">
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 rounded-md border-2 border-facebook text-facebook flex items-center justify-center flex-shrink-0 font-medium">A</div>
                    <div>
                      <h4 className="font-semibold mb-1">Attention</h4>
                      <p className="text-gray-600 text-sm">
                        Hook the audience with a compelling headline or question that speaks directly to their problem or desire.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 rounded-md border-2 border-instagram-purple text-instagram-purple flex items-center justify-center flex-shrink-0 font-medium">I</div>
                    <div>
                      <h4 className="font-semibold mb-1">Interest</h4>
                      <p className="text-gray-600 text-sm">
                        Build interest by expanding on the hook with relevant details that speak to the audience's specific situation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 rounded-md border-2 border-instagram-pink text-instagram-pink flex items-center justify-center flex-shrink-0 font-medium">D</div>
                    <div>
                      <h4 className="font-semibold mb-1">Desire</h4>
                      <p className="text-gray-600 text-sm">
                        Create desire by highlighting benefits and transformation, addressing pain points, and overcoming objections.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 rounded-md border-2 border-instagram-orange text-instagram-orange flex items-center justify-center flex-shrink-0 font-medium">A</div>
                    <div>
                      <h4 className="font-semibold mb-1">Action</h4>
                      <p className="text-gray-600 text-sm">
                        End with a clear, compelling call to action that tells the prospect exactly what to do next.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="text-lg font-medium mb-3">Example Ad Copy Analysis</h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-md border-l-4 border-facebook">
                      <span className="inline-block px-2 py-0.5 bg-facebook text-white text-xs rounded mb-1">Attention</span>
                      <p className="font-medium">"Struggling with low ROAS on your Facebook ads?"</p>
                    </div>
                    
                    <div className="p-3 bg-purple-50 rounded-md border-l-4 border-instagram-purple">
                      <span className="inline-block px-2 py-0.5 bg-instagram-purple text-white text-xs rounded mb-1">Interest</span>
                      <p>"Most businesses waste 40% of their ad spend on underperforming audiences. Our clients saw this too - until they implemented our 3-part targeting system."</p>
                    </div>
                    
                    <div className="p-3 bg-pink-50 rounded-md border-l-4 border-instagram-pink">
                      <span className="inline-block px-2 py-0.5 bg-instagram-pink text-white text-xs rounded mb-1">Desire</span>
                      <p>"Imagine cutting your CPA in half while doubling your ROAS. Client X did exactly that in just 30 days using our proven system, turning $10K monthly ad spend into $45K in revenue."</p>
                    </div>
                    
                    <div className="p-3 bg-orange-50 rounded-md border-l-4 border-instagram-orange">
                      <span className="inline-block px-2 py-0.5 bg-instagram-orange text-white text-xs rounded mb-1">Action</span>
                      <p className="font-medium">"Click 'Learn More' to get our free Performance Audit template and see where your campaigns are leaking money."</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-gray-100 rounded-lg">
                  <h4 className="font-semibold mb-3">Platform-Specific Optimization</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-10 h-10 flex-shrink-0 rounded-full bg-facebook flex items-center justify-center text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">
                          Front-load key messages, use 1-3 sentence paragraphs, focus on emotional triggers, and address pain points directly.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-tr from-instagram-purple via-instagram-pink to-instagram-orange flex items-center justify-center text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">
                          Emphasize visual elements, use emojis strategically, leverage social proof, and make captions conversational but concise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'video' && (
          <div className="bg-white rounded-xl shadow-md p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-display font-semibold mb-4 text-facebook">The 3-H Video Framework</h3>
                <p className="text-gray-600 mb-6">
                  My video scripts follow the 3-H framework - Hook, Hold, and Handoff - designed specifically for social media where the first 3 seconds determine whether viewers keep watching.
                </p>
                
                <div className="relative">
                  <div className="absolute h-full w-1 bg-gradient-to-b from-facebook via-instagram-purple to-instagram-pink left-6 top-0 transform -translate-x-1/2"></div>
                  
                  <div className="space-y-12 relative">
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 rounded-full bg-facebook text-white flex items-center justify-center flex-shrink-0 z-10">
                        <span className="font-bold">1</span>
                      </div>
                      <div className="pt-2">
                        <h4 className="font-semibold mb-2">Hook (0-3 seconds)</h4>
                        <p className="text-gray-600 text-sm mb-3">
                          Immediately grab attention with a pattern interrupt, bold claim, surprising statistic, or direct question.
                        </p>
                        <div className="bg-gray-50 p-3 rounded border border-gray-100">
                          <p className="text-sm italic">
                            "This FB ad trick tripled our client's ROAS overnight..."
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 rounded-full bg-instagram-purple text-white flex items-center justify-center flex-shrink-0 z-10">
                        <span className="font-bold">2</span>
                      </div>
                      <div className="pt-2">
                        <h4 className="font-semibold mb-2">Hold (4-15 seconds)</h4>
                        <p className="text-gray-600 text-sm mb-3">
                          Maintain interest by establishing credibility, expanding on the hook, and creating an information gap.
                        </p>
                        <div className="bg-gray-50 p-3 rounded border border-gray-100">
                          <p className="text-sm italic">
                            "After managing over $12M in ad spend, we discovered that 82% of ecommerce brands make the same targeting mistake that's costing them thousands..."
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 rounded-full bg-instagram-pink text-white flex items-center justify-center flex-shrink-0 z-10">
                        <span className="font-bold">3</span>
                      </div>
                      <div className="pt-2">
                        <h4 className="font-semibold mb-2">Handoff (16+ seconds)</h4>
                        <p className="text-gray-600 text-sm mb-3">
                          Deliver value, agitate the problem, present the solution, and end with a clear call-to-action.
                        </p>
                        <div className="bg-gray-50 p-3 rounded border border-gray-100">
                          <p className="text-sm italic">
                            "Here's exactly how we fixed it: [value] ... If you're struggling with similar issues, click the link below to get our free targeting guide..."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-6">
                  <h3 className="text-lg font-medium mb-3">Complete 60-Second Video Script Structure</h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-md border-l-4 border-facebook">
                      <span className="inline-block px-2 py-0.5 bg-facebook text-white text-xs rounded mb-1">0:00-0:03</span>
                      <p className="font-medium">Attention-grabbing hook</p>
                      <p className="text-gray-600 text-sm">"Want to know how we cut this brand's CPA by 43% in just 7 days?"</p>
                    </div>
                    
                    <div className="p-3 bg-blue-50 rounded-md border-l-4 border-facebook">
                      <span className="inline-block px-2 py-0.5 bg-facebook text-white text-xs rounded mb-1">0:04-0:10</span>
                      <p className="font-medium">Introduce problem</p>
                      <p className="text-gray-600 text-sm">"Most ecommerce brands spend thousands on ads that target everyone instead of the perfect buyers for their products."</p>
                    </div>
                    
                    <div className="p-3 bg-purple-50 rounded-md border-l-4 border-instagram-purple">
                      <span className="inline-block px-2 py-0.5 bg-instagram-purple text-white text-xs rounded mb-1">0:11-0:20</span>
                      <p className="font-medium">Establish credibility</p>
                      <p className="text-gray-600 text-sm">"After managing over $12M in ad spend across hundreds of ecommerce brands, we've developed a proprietary targeting system we call the 'Audience Triangle.'"</p>
                    </div>
                    
                    <div className="p-3 bg-purple-50 rounded-md border-l-4 border-instagram-purple">
                      <span className="inline-block px-2 py-0.5 bg-instagram-purple text-white text-xs rounded mb-1">0:21-0:35</span>
                      <p className="font-medium">Present solution</p>
                      <p className="text-gray-600 text-sm">"The Audience Triangle combines interest, behavior, and lookalike targeting in a specific way that eliminates wasted spend and focuses your budget on the most likely buyers. Let me show you how we implemented this for [Client]..."</p>
                    </div>
                    
                    <div className="p-3 bg-pink-50 rounded-md border-l-4 border-instagram-pink">
                      <span className="inline-block px-2 py-0.5 bg-instagram-pink text-white text-xs rounded mb-1">0:36-0:50</span>
                      <p className="font-medium">Show results/proof</p>
                      <p className="text-gray-600 text-sm">"Within 7 days, CPA dropped from $42 to just $24, while ROAS increased from 1.4x to 3.2x. Here's the actual ad account dashboard [show screen]."</p>
                    </div>
                    
                    <div className="p-3 bg-orange-50 rounded-md border-l-4 border-instagram-orange">
                      <span className="inline-block px-2 py-0.5 bg-instagram-orange text-white text-xs rounded mb-1">0:51-0:60</span>
                      <p className="font-medium">Strong CTA</p>
                      <p className="text-gray-600 text-sm">"Want similar results for your business? Click the link below to get our free Audience Triangle template and start implementing this strategy today."</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-gray-100 rounded-lg">
                  <h4 className="font-semibold mb-3">Platform-Specific Optimization</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 bg-gray-50 rounded">
                      <h5 className="text-facebook font-medium mb-2">Facebook</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                        <li>Caption-proof videos with text overlays</li>
                        <li>Square format (1:1) for feed placement</li>
                        <li>Engaging first 3 seconds without sound</li>
                        <li>Logo/branding in first 3 seconds</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-gray-50 rounded">
                      <h5 className="text-instagram-purple font-medium mb-2">Instagram</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                        <li>Visual-first approach with high quality</li>
                        <li>Portrait format (4:5) for feed, 9:16 for stories</li>
                        <li>Faster pacing with quick transitions</li>
                        <li>Bold typography and modern aesthetics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CreativeSection;
