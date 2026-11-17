import { useEffect, useRef, useState } from "react";

const LogisticFlow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "200px 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="relative h-32 w-full overflow-hidden bg-transparent"
    >
      {/* Estrada - linhas superiores e inferiores */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Linha superior da estrada */}
        <path
          d="M0 56 L1200 56"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          className={`transition-all duration-2000 ${
            isVisible ? "animate-draw-line" : ""
          }`}
          pathLength="1"
        />
        {/* Linha inferior da estrada */}
        <path
          d="M0 72 L1200 72"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          className={`transition-all duration-2000 ${
            isVisible ? "animate-draw-line-bottom" : ""
          }`}
          pathLength="1"
        />
      </svg>

      {/* Caminhão SVG */}
      <div
        className={`absolute left-0 transition-all duration-6000 ease-out ${
          isVisible ? "animate-truck-move-slow" : "opacity-0 -translate-x-32"
        }`}
        style={{ top: '18px' }}
      >
        <svg
          width="90"
          height="50"
          viewBox="0 0 90 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="truck-svg"
        >
          {/* Carroceria/trailer */}
          <rect
            x="8"
            y="15"
            width="50"
            height="20"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="white"
            rx="2"
          />
          
          {/* Cabine */}
          <rect
            x="58"
            y="10"
            width="20"
            height="25"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="white"
            rx="2"
          />
          
          {/* Para-choque/frente */}
          <rect
            x="78"
            y="18"
            width="4"
            height="12"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="white"
          />
          
          {/* Detalhes da carroceria */}
          <line
            x1="12"
            y1="30"
            x2="54"
            y2="30"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
          />
          
          {/* Roda traseira esquerda */}
          <circle
            cx="20"
            cy="40"
            r="6"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="20"
            cy="40"
            r="3"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            fill="white"
          />
          
          {/* Roda traseira direita */}
          <circle
            cx="35"
            cy="40"
            r="6"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="35"
            cy="40"
            r="3"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            fill="white"
          />
          
          {/* Roda dianteira */}
          <circle
            cx="68"
            cy="40"
            r="6"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="68"
            cy="40"
            r="3"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default LogisticFlow;