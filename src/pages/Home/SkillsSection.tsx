
import React from 'react';
import SectionHeading from '../../components/SectionHeading';
import SkillCard from '../../components/SkillCard';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 lg:px-0 bg-gray-50">
      <div className="container mx-auto">
        <SectionHeading
          title="Expert Skill Set"
          subtitle="With over 8 years of experience in social media marketing, I've mastered a comprehensive range of skills to drive success for my clients."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          <SkillCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
            title="Campaign Management"
            description="Strategic planning, execution, and optimization of full-funnel campaigns across Facebook, Instagram, TikTok, and more to maximize ROI."
            gradientClass="from-facebook to-instagram-purple"
          />
          
          <SkillCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            title="Audience Targeting"
            description="Advanced audience segmentation and targeting strategies to reach the right people with the right message at the right time."
            gradientClass="from-instagram-purple to-instagram-pink"
          />
          
          <SkillCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            }
            title="Ad Copy Production"
            description="Crafting compelling, conversion-focused ad copy that resonates with target audiences and drives action across all platforms."
            gradientClass="from-instagram-pink to-instagram-orange"
          />
          
          <SkillCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            }
            title="Video Ad Scriptwriting"
            description="Creating engaging video ad scripts that capture attention in the first 3 seconds and maintain engagement throughout the entire video."
            gradientClass="from-instagram-orange to-facebook"
          />
          
          <SkillCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            title="A/B Testing"
            description="Methodical split testing of ad creative, copy, audiences, and placements to continually improve campaign performance metrics."
            gradientClass="from-facebook to-instagram-purple"
          />
          
          <SkillCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            title="Performance Analysis"
            description="In-depth analysis of campaign data to extract actionable insights and optimize for key performance indicators like ROAS, CPA, and CTR."
            gradientClass="from-instagram-purple to-instagram-pink"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
