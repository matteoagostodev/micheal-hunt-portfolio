
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="font-display font-bold text-xl">
                <span className="text-facebook">Micheal</span>
                <span className="social-gradient"> Hunt</span>
              </span>
            </Link>
            <p className="text-gray-600">
              Expert social media marketing specialist with a proven track record of driving 
              results across multiple platforms and industries.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Site Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <FooterLink href="/#services">Campaign Management</FooterLink>
              <FooterLink href="/#services">Audience Targeting</FooterLink>
              <FooterLink href="/#services">Ad Creation</FooterLink>
              <FooterLink href="/#services">Performance Analysis</FooterLink>
              <FooterLink href="/#services">Ad Copy & Scripting</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Micheal Hunt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <li>
      <Link to={href} className="text-gray-600 hover:text-facebook transition-colors">
        {children}
      </Link>
    </li>
  );
};

export default Footer;
