
import React from 'react';
import Layout from '../../components/Layout';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';
import PerformanceSection from './PerformanceSection';
import CreativeSection from './CreativeSection';
import TestimonialsSection from './TestimonialsSection';
import CtaSection from './CtaSection';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      <PerformanceSection />
      <CreativeSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Home;
