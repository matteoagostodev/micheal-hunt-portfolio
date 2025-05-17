
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import SectionHeading from '../../components/SectionHeading';
import CaseStudyCard from './CaseStudyCard';
import { caseStudies } from './ProjectsData';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredCaseStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.platforms.includes(filter));
  
  return (
    <Layout>
      <section className="py-24 px-4 lg:px-0">
        <div className="container mx-auto">
          <SectionHeading
            title="Case Studies & Projects"
            subtitle="Explore my portfolio of successful social media marketing campaigns across various industries and platforms."
            center
          />
          
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap justify-center gap-3">
              <FilterButton 
                active={filter === 'all'} 
                onClick={() => setFilter('all')}
                label="All Projects"
              />
              <FilterButton 
                active={filter === 'Facebook'} 
                onClick={() => setFilter('Facebook')}
                label="Facebook"
              />
              <FilterButton 
                active={filter === 'Instagram'} 
                onClick={() => setFilter('Instagram')}
                label="Instagram"
              />
              <FilterButton 
                active={filter === 'TikTok'} 
                onClick={() => setFilter('TikTok')}
                label="TikTok"
              />
              <FilterButton 
                active={filter === 'LinkedIn'} 
                onClick={() => setFilter('LinkedIn')}
                label="LinkedIn"
              />
            </div>
          </div>
          
          <div className="space-y-6 stagger-children">
            {filteredCaseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-gray-50 rounded-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-display font-bold mb-4">Want Similar Results?</h3>
              <p className="text-gray-600 mb-6">
                These case studies represent just a small sample of the successful campaigns I've managed. Each business is unique, and I tailor my approach to meet your specific goals and challenges.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-facebook hover:bg-opacity-90 text-white rounded-md transition-colors"
              >
                Let's Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ active, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        active
          ? 'bg-facebook text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
};

export default Projects;
