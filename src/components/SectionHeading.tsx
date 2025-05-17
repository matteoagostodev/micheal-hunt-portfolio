
import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  center = false, 
  light = false 
}) => {
  return (
    <div className={`mb-10 md:mb-16 ${center ? "text-center" : ""}`}>
      <h2 
        className={`text-3xl md:text-4xl font-display font-bold mb-4 ${
          light ? "text-white" : "text-facebook"
        }`}
      >
        {title}
      </h2>
      
      {subtitle && (
        <p 
          className={`text-lg md:text-xl max-w-3xl ${
            center ? "mx-auto" : ""
          } ${
            light ? "text-gray-200" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
