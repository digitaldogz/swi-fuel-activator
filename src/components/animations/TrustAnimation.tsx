import { useEffect, useRef, useState } from "react";

const TrustAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          setIsAnimationActive(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.6,
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
      className={`trust-container ${isAnimationActive ? 'animate-trust' : ''}`}
    >
      {/* Trust Icons SVG Definitions */}
      <svg className="hidden" aria-hidden="true">
        <defs>
          <symbol id="handshake" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m11 17 2 2a1 1 0 1 0 3-3"/>
            <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
            <path d="m21 3 1 11h-2"/>
            <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/>
            <path d="M3 4h8"/>
          </symbol>
          <symbol id="shield-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
            <path d="m9 12 2 2 4-4"/>
          </symbol>
          <symbol id="thumbs-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 10v12"/>
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
          </symbol>
          <symbol id="check-circle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <path d="m9 11 3 3L22 4"/>
          </symbol>
        </defs>
      </svg>

      {/* Animated Trust Icons */}
      <div className="trust-icons">
        {/* Card 1 - João Silva (Primary color) */}
        <div className="trust-card" data-delay="0">
          <svg className="trust-icon trust-icon-1 text-primary" width="18" height="18">
            <use href="#handshake" />
          </svg>
          <svg className="trust-icon trust-icon-2 text-primary" width="16" height="16">
            <use href="#shield-check" />
          </svg>
          <svg className="trust-icon trust-icon-3 text-primary" width="17" height="17">
            <use href="#check-circle" />
          </svg>
        </div>

        {/* Card 2 - Luigi Luft (Energy color) */}
        <div className="trust-card" data-delay="250">
          <svg className="trust-icon trust-icon-1 text-energy" width="17" height="17">
            <use href="#thumbs-up" />
          </svg>
          <svg className="trust-icon trust-icon-2 text-energy" width="18" height="18">
            <use href="#handshake" />
          </svg>
          <svg className="trust-icon trust-icon-3 text-energy" width="16" height="16">
            <use href="#shield-check" />
          </svg>
        </div>

        {/* Card 3 - Carlos Mendes (Action color) */}
        <div className="trust-card" data-delay="500">
          <svg className="trust-icon trust-icon-1 text-action" width="16" height="16">
            <use href="#check-circle" />
          </svg>
          <svg className="trust-icon trust-icon-2 text-action" width="17" height="17">
            <use href="#thumbs-up" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TrustAnimation;