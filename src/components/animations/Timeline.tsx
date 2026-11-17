import React, { useEffect, useRef, useState } from 'react';

interface TimelineItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, className = "" }) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(items.length).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200); // Stagger animation
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [items.length]);

  return (
    <div className={`space-y-8 md:space-y-0 ${className}`}>
      {/* Desktop Timeline */}
      <div className="hidden md:flex items-start justify-between relative">
        {/* Connecting Line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-primary/20">
          <div 
            className="h-full bg-primary transition-all duration-2000 ease-out"
            style={{
              width: `${(visibleItems.filter(Boolean).length / items.length) * 100}%`
            }}
          />
        </div>
        
        {items.map((item, index) => (
          <div 
            key={index}
            ref={el => refs.current[index] = el}
            className="flex flex-col items-center flex-1 relative z-10"
          >
            <div 
              className="w-16 h-16 bg-background border-4 border-primary/20 rounded-full flex items-center justify-center mb-4 transition-all duration-500"
              style={{
                borderColor: visibleItems[index] ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.2)',
                transform: `scale(${visibleItems[index] ? 1 : 0.8})`,
                opacity: visibleItems[index] ? 1 : 0.6
              }}
            >
              {item.icon}
            </div>
            <div 
              className="text-center transition-all duration-500"
              style={{
                opacity: visibleItems[index] ? 1 : 0,
                transform: `translateY(${visibleItems[index] ? 0 : 20}px)`
              }}
            >
              <h4 className="font-semibold text-sm mb-2">{item.title}</h4>
              <p className="text-xs text-muted-foreground max-w-32">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-6">
        {items.map((item, index) => (
          <div 
            key={index}
            ref={el => refs.current[index] = el}
            className="flex items-start gap-4"
          >
            <div 
              className="w-12 h-12 bg-background border-4 border-primary/20 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500"
              style={{
                borderColor: visibleItems[index] ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.2)',
                transform: `scale(${visibleItems[index] ? 1 : 0.8})`,
                opacity: visibleItems[index] ? 1 : 0.6
              }}
            >
              {item.icon}
            </div>
            <div 
              className="flex-1 transition-all duration-500"
              style={{
                opacity: visibleItems[index] ? 1 : 0,
                transform: `translateX(${visibleItems[index] ? 0 : 20}px)`
              }}
            >
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
            {/* Connecting line for mobile */}
            {index < items.length - 1 && (
              <div className="absolute left-6 mt-12 w-0.5 h-6 bg-primary/20" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;