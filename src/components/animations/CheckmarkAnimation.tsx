import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

interface CheckmarkAnimationProps {
  delay?: number;
  size?: number;
  className?: string;
}

const CheckmarkAnimation: React.FC<CheckmarkAnimationProps> = ({ 
  delay = 0, 
  size = 20,
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`flex-shrink-0 mt-2 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
    >
      <div
        className="w-full h-full bg-primary/20 rounded-full flex items-center justify-center transition-all duration-500"
        style={{
          transform: `scale(${isVisible ? 1 : 0.5})`,
          opacity: isVisible ? 1 : 0
        }}
      >
        <Check 
          className="text-primary transition-all duration-300"
          size={size * 0.6}
          style={{
            strokeDasharray: 20,
            strokeDashoffset: isVisible ? 0 : 20,
            transitionDelay: '200ms'
          }}
        />
      </div>
    </div>
  );
};

export default CheckmarkAnimation;