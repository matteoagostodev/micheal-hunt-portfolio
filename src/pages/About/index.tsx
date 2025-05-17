
import React from 'react';
import Layout from '../../components/Layout';
import SectionHeading from '../../components/SectionHeading';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import { experiences, education } from './AboutData';

const About = () => {
  return (
    <Layout>
      <section className="py-24 px-4 lg:px-0">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About <span className="text-facebook">Alex</span> <span className="social-gradient">Hunt</span></h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-facebook to-instagram-purple mx-auto mb-6"></div>
              
              <p className="text-xl text-gray-600 mb-8">
                With over 8 years of experience in social media marketing, I help businesses transform their online presence into a powerful revenue driver.
              </p>
              
              <div className="flex justify-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-facebook">8+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-instagram-purple">50+</div>
                  <div className="text-sm text-gray-500">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-instagram-pink">$12M+</div>
                  <div className="text-sm text-gray-500">Ad Spend Managed</div>
                </div>
              </div>
              
              <p className="text-gray-600 max-w-3xl mx-auto">
                I specialize in data-driven social media marketing across Facebook, Instagram, and emerging platforms. 
                My approach combines strategic audience targeting, compelling creative development, and meticulous campaign optimization 
                to deliver exceptional results for my clients.
              </p>
            </div>
          </div>
          
          <div className="mb-20">
            <SectionHeading
              title="Professional Experience"
              subtitle="My career journey in social media marketing and digital advertising."
              center
            />
            
            <div className="max-w-4xl mx-auto mt-12">
              {experiences.map((experience, index) => (
                <ExperienceCard 
                  key={experience.id} 
                  experience={experience} 
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>
          
          <div>
            <SectionHeading
              title="Education & Certifications"
              subtitle="Continuous learning keeps me at the forefront of social media marketing trends and best practices."
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-12 stagger-children">
              {education.map((item) => (
                <EducationCard key={item.id} education={item} />
              ))}
            </div>
          </div>
          
          <div className="mt-20 p-8 bg-gray-50 rounded-xl max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-display font-bold mb-4">Let's Work Together</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I'm always looking for new challenges and opportunities to help businesses achieve exceptional results through social media marketing.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-facebook hover:bg-opacity-90 text-white rounded-md transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
