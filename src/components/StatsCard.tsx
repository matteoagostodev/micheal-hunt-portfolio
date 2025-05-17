
import React, { useState, useEffect, useRef } from 'react';

interface StatsCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  gradientClass?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  value, 
  suffix = "", 
  prefix = "", 
  label,
  gradientClass = "from-facebook to-instagram-purple"
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let start = 0;
          const end = value;
          const duration = 1500;
          const startTime = performance.now();
          
          const updateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easedProgress = easeOutQuart(progress);
            
            setCount(Math.floor(easedProgress * end));
            
            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };
          
          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [value]);
  
  // Easing function for smooth animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };
  
  return (
    <div className="relative p-6 bg-white shadow-md rounded-xl border border-gray-100">
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradientClass}`}></div>
      <div className="text-center" ref={countRef}>
        <div className="text-3xl md:text-4xl font-bold mb-2">
          {prefix}{count.toLocaleString()}{suffix}
        </div>
        <div className="text-gray-500">{label}</div>
      </div>
    </div>
  );
};

export default StatsCard;
