
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 lg:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in">
              Transforming <span className="text-facebook">Social Media</span> into{" "}
              <span className="social-gradient">Business Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Specialized in data-driven social media marketing campaigns that drive real business results across Facebook, Instagram, TikTok, and more.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link
                to="/contact"
                className="px-8 py-3 bg-facebook hover:bg-opacity-90 text-white rounded-md font-medium transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Work With Me
              </Link>
              <Link
                to="/projects"
                className="px-8 py-3 border-2 border-facebook text-facebook hover:bg-facebook hover:text-white rounded-md font-medium transition-all transform hover:scale-105"
              >
                View Projects
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-start gap-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-facebook">
                  93%
                </div>
                <div className="text-sm text-gray-500">
                  Average ROAS Improvement
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-instagram-purple">
                  45%
                </div>
                <div className="text-sm text-gray-500">
                  Average CPA Reduction
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-instagram-pink">
                  50+
                </div>
                <div className="text-sm text-gray-500">
                  Clients Helped
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-facebook via-instagram-purple to-instagram-orange rounded-2xl opacity-20 blur-xl transform -translate-y-4 translate-x-4"></div>
              <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500">Dashboard Preview</div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="mb-2 flex justify-between items-baseline">
                      <div className="text-sm font-medium text-gray-500">Campaign Performance</div>
                      <div className="text-xs text-facebook">Last 30 days</div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div>
                        <div className="text-xs text-gray-500">Return on Ad Spend</div>
                        <div className="font-bold text-lg text-facebook">5.7x</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Cost per Acquisition</div>
                        <div className="font-bold text-lg text-green-500">$17.23</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Conversion Rate</div>
                        <div className="font-bold text-lg text-instagram-purple">4.2%</div>
                      </div>
                    </div>
                    <div className="h-16 flex items-end justify-between">
                      {[35, 50, 65, 45, 60, 75, 70, 80, 75, 90, 85, 95].map((height, i) => (
                        <div key={i} className="w-1/12">
                          <div 
                            className="w-full bg-gradient-to-t from-facebook to-instagram-purple rounded-t"
                            style={{ height: `${height}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 grid grid-cols-12 gap-2 text-xs text-gray-400 text-center">
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, i) => (
                        <div key={i}>{month}</div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="mb-2 flex justify-between items-baseline">
                      <div className="text-sm font-medium text-gray-500">Channel Performance</div>
                      <div className="text-xs text-facebook">Revenue by Channel</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Facebook</span>
                          <span className="font-medium">$156,230</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-facebook h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Instagram</span>
                          <span className="font-medium">$124,180</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-instagram-purple to-instagram-pink h-2 rounded-full" style={{ width: "52%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>TikTok</span>
                          <span className="font-medium">$84,610</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-instagram-pink h-2 rounded-full" style={{ width: "35%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
