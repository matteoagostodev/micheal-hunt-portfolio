
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-display font-bold text-2xl">
            <span className="text-facebook">Alex</span>
            <span className="social-gradient"> Hunt</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" currentPath={location.pathname}>Home</NavLink>
          <NavLink to="/projects" currentPath={location.pathname}>Projects</NavLink>
          <NavLink to="/about" currentPath={location.pathname}>About</NavLink>
          <Link 
            to="/contact" 
            className="px-4 py-2 rounded-md bg-facebook hover:bg-opacity-90 text-white transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-facebook focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <NavLink to="/" currentPath={location.pathname} mobile>Home</NavLink>
            <NavLink to="/projects" currentPath={location.pathname} mobile>Projects</NavLink>
            <NavLink to="/about" currentPath={location.pathname} mobile>About</NavLink>
            <NavLink to="/contact" currentPath={location.pathname} mobile>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

type NavLinkProps = {
  to: string;
  currentPath: string;
  children: React.ReactNode;
  mobile?: boolean;
};

const NavLink = ({ to, currentPath, children, mobile = false }: NavLinkProps) => {
  const isActive = currentPath === to || (to !== "/" && currentPath.startsWith(to));
  
  return (
    <Link
      to={to}
      className={`
        ${mobile ? "block py-2 px-3 hover:bg-gray-100 rounded-md" : ""}
        ${isActive 
          ? "font-medium text-instagram-purple" 
          : "text-gray-700 hover:text-facebook"}
        transition-colors duration-300
      `}
    >
      {children}
    </Link>
  );
};

export default Navbar;
