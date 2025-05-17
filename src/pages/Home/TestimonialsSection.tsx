
import React from 'react';
import SectionHeading from '../../components/SectionHeading';
import TestimonialCard from '../../components/TestimonialCard';

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-0">
      <div className="container mx-auto">
        <SectionHeading
          title="Client Testimonials"
          subtitle="Don't take my word for it - here's what clients have to say about the results we've achieved together."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          <TestimonialCard
            quote="Alex transformed our social media strategy and cut our CPA by 47% in just 30 days. His audience targeting expertise and creative approach delivered the best ROAS we've ever seen."
            author="Sarah Johnson"
            role="Marketing Director"
            company="Vertex Fitness"
            gradientClass="from-facebook to-instagram-purple"
          />
          
          <TestimonialCard
            quote="Working with Alex was the best marketing decision we made last year. He overhauled our ad creative and helped us scale from $10K to $45K monthly revenue while maintaining profitability."
            author="Michael Chen"
            role="Founder"
            company="EcoHome Essentials"
            gradientClass="from-instagram-purple to-instagram-pink"
          />
          
          <TestimonialCard
            quote="I've worked with many marketers, but Alex's data-driven approach sets him apart. He doesn't just focus on vanity metrics - he delivered tangible business results that impacted our bottom line."
            author="Jessica Williams"
            role="CMO"
            company="Bright Solutions Inc."
            gradientClass="from-instagram-pink to-instagram-orange"
          />
          
          <TestimonialCard
            quote="Alex's video ad scripts completely changed our conversion rates. His methodical approach to testing and optimization helped us find winning creative that we've been able to scale profitably."
            author="David Rodriguez"
            role="Growth Lead"
            company="FitLife Supplements"
            gradientClass="from-instagram-orange to-facebook"
          />
          
          <TestimonialCard
            quote="Our audience targeting was all wrong before Alex stepped in. His strategic approach and deep platform knowledge helped us stop wasting money and start reaching the right customers."
            author="Emma Thompson"
            role="eCommerce Director"
            company="Urban Style Co."
            gradientClass="from-facebook to-instagram-purple"
          />
          
          <TestimonialCard
            quote="Alex's campaign management is exceptional. He's organized, communicative, and stays on top of platform changes. Most importantly, he consistently delivers results that exceed our targets."
            author="Robert Kim"
            role="CEO"
            company="Nexus Technologies"
            gradientClass="from-instagram-purple to-instagram-pink"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
