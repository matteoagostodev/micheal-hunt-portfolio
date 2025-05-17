
import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-0 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 social-gradient">
            Ready to Transform Your Social Media Results?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create data-driven campaigns that deliver real business growth and exceptional ROI.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-facebook hover:bg-opacity-90 text-white rounded-md font-medium transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Get in Touch Today
          </Link>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-facebook">
                50+
              </div>
              <div className="text-sm text-gray-500">
                Satisfied Clients
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-instagram-purple">
                8+
              </div>
              <div className="text-sm text-gray-500">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-instagram-pink">
                12M+
              </div>
              <div className="text-sm text-gray-500">
                Ad Spend Managed
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-instagram-orange">
                100%
              </div>
              <div className="text-sm text-gray-500">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
