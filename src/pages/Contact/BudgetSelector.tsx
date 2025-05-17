
import React, { useState } from 'react';

interface BudgetSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const BudgetSelector: React.FC<BudgetSelectorProps> = ({ value, onChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const budgetOptions = [
    { value: "$5,000 - $10,000", label: "$5,000 - $10,000" },
    { value: "$10,000 - $15,000", label: "$10,000 - $15,000" },
    { value: "$15,000 - $20,000", label: "$15,000 - $20,000" },
    { value: "$20,000+", label: "$20,000+" },
    { value: "Not sure yet", label: "Not sure yet" },
  ];
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsExpanded(false);
  };
  
  return (
    <div className="relative">
      <div 
        className="w-full p-3 border rounded-md flex justify-between items-center cursor-pointer"
        onClick={toggleExpanded}
      >
        <span className={value ? 'text-gray-900' : 'text-gray-500'}>
          {value || "Select your monthly ad budget"}
        </span>
        <svg 
          className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {isExpanded && (
        <div className="absolute left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-10 animate-fade-in">
          {budgetOptions.map((option) => (
            <div 
              key={option.value}
              className="p-3 hover:bg-gray-100 cursor-pointer transition-colors"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BudgetSelector;
