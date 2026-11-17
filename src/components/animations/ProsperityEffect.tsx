import { useEffect, useRef, useState } from "react";

const ProsperityEffect = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
          setIsAnimationActive(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.7,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`prosperity-container ${isAnimationActive ? 'animate-prosperity' : ''}`}
    >
      {/* Money Icons SVG Definitions */}
      <svg className="hidden" aria-hidden="true">
        <defs>
          <symbol id="coin-dollar" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
            <path d="M12 18V6"/>
          </symbol>
          <symbol id="coins-stack" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          </symbol>
          <symbol id="dollar-sign" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </symbol>
        </defs>
      </svg>

      {/* Animated Money Icons */}
      <div className="prosperity-icons">
        {/* Card 1 - Diesel */}
        <div className="prosperity-card" data-delay="0">
          <svg className="prosperity-icon prosperity-icon-1" width="16" height="16">
            <use href="#coin-dollar" />
          </svg>
          <svg className="prosperity-icon prosperity-icon-2" width="14" height="14">
            <use href="#dollar-sign" />
          </svg>
        </div>

        {/* Card 2 - Diesel Marítimo */}
        <div className="prosperity-card" data-delay="150">
          <svg className="prosperity-icon prosperity-icon-1" width="16" height="16">
            <use href="#coins-stack" />
          </svg>
          <svg className="prosperity-icon prosperity-icon-2" width="15" height="15">
            <use href="#coin-dollar" />
          </svg>
        </div>

        {/* Card 3 - Óleo Pesado */}
        <div className="prosperity-card" data-delay="300">
          <svg className="prosperity-icon prosperity-icon-1" width="15" height="15">
            <use href="#dollar-sign" />
          </svg>
          <svg className="prosperity-icon prosperity-icon-2" width="16" height="16">
            <use href="#coins-stack" />
          </svg>
          <svg className="prosperity-icon prosperity-icon-3" width="14" height="14">
            <use href="#coin-dollar" />
          </svg>
        </div>

        {/* Card 4 - Gasolina */}
        <div className="prosperity-card" data-delay="450">
          <svg className="prosperity-icon prosperity-icon-1" width="16" height="16">
            <use href="#coin-dollar" />
          </svg>
          <svg className="prosperity-icon prosperity-icon-2" width="15" height="15">
            <use href="#dollar-sign" />
          </svg>
        </div>

        {/* Card 5 - Etanol */}
        <div className="prosperity-card" data-delay="600">
          <svg className="prosperity-icon prosperity-icon-1" width="15" height="15">
            <use href="#coins-stack" />
          </svg>
          <svg className="prosperity-icon prosperity-icon-2" width="16" height="16">
            <use href="#coin-dollar" />
          </svg>
          <svg className="prosperity-icon prosperity-icon-3" width="14" height="14">
            <use href="#dollar-sign" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProsperityEffect;