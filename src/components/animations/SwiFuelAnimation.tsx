import React from "react";
import "../../styles/swi-animation.css";
const SwiFuelAnimation: React.FC = () => {
  return <div className="swi-animation-container flex justify-center my-[39px] py-[2px]">
      <div className="swi-track relative w-full max-w-2xl h-32 overflow-hidden bg-gradient-to-r from-background via-muted/30 to-background rounded-lg my-0 py-0">
        {/* Fuel Station - Centralized */}
        <div className="swi-fuel-station absolute left-1/2 -translate-x-1/2 bottom-4">
          <svg width="80" height="80" viewBox="0 0 80 80" aria-label="Bomba de combustível" role="img">
            {/* Base */}
            <rect x="20" y="40" width="25" height="35" fill="hsl(var(--muted-foreground))" rx="3" />
            {/* Screen */}
            <rect x="23" y="45" width="19" height="12" fill="hsl(var(--background))" rx="1" />
            {/* SWI Text */}
            <text x="32.5" y="53" textAnchor="middle" fontSize="8" fill="hsl(var(--primary))" fontWeight="bold">
              SWI
            </text>
            {/* Hose */}
            <path d="M45 50 Q55 45 58 52" stroke="hsl(var(--muted-foreground))" strokeWidth="3" fill="none" />
            <circle cx="58" cy="52" r="3" fill="hsl(var(--muted-foreground))" />
            {/* Canopy */}
            <path d="M10 35 L55 35 L50 25 L15 25 Z" fill="hsl(var(--energy))" opacity="0.8" />
          </svg>
        </div>

        {/* Truck (timeline anchored so 0% aligns at the pump position) */}
        <div className="swi-truck-wrapper absolute bottom-4" style={{
        left: "calc(50% - 80px)"
      }} aria-hidden="true">
          <svg width="100" height="50" viewBox="0 0 100 50" className="swi-truck" role="img" aria-label="Caminhão">
            {/* Cargo Container */}
            <rect x="10" y="15" width="45" height="25" fill="hsl(var(--action))" rx="2" />
            <rect x="12" y="17" width="41" height="3" fill="hsl(var(--background))" opacity="0.3" />
            <rect x="12" y="22" width="15" height="2" fill="hsl(var(--background))" opacity="0.3" />
            <rect x="12" y="26" width="10" height="2" fill="hsl(var(--background))" opacity="0.3" />
            <rect x="12" y="30" width="20" height="2" fill="hsl(var(--background))" opacity="0.3" />

            {/* Cab */}
            <rect x="55" y="20" width="25" height="20" fill="hsl(var(--destructive))" rx="2" />
            {/* Window */}
            <rect x="58" y="23" width="8" height="6" fill="hsl(var(--background))" opacity="0.8" rx="1" />
            {/* Door */}
            <line x1="70" y1="25" x2="70" y2="35" stroke="hsl(var(--background))" strokeWidth="1" opacity="0.6" />
            <circle cx="72" cy="30" r="1" fill="hsl(var(--background))" opacity="0.6" />

            {/* Wheels */}
            <circle cx="25" cy="42" r="6" fill="hsl(var(--foreground))" opacity="0.8" />
            <circle cx="25" cy="42" r="3" fill="hsl(var(--background))" />
            <circle cx="65" cy="42" r="6" fill="hsl(var(--foreground))" opacity="0.8" />
            <circle cx="65" cy="42" r="3" fill="hsl(var(--background))" />

            {/* Speed lines (only during exit movement) */}
            <g className="swi-speed-lines" opacity="0">
              <line x1="5" y1="20" x2="15" y2="20" stroke="hsl(var(--energy))" strokeWidth="2" />
              <line x1="0" y1="25" x2="12" y2="25" stroke="hsl(var(--energy))" strokeWidth="2" />
              <line x1="3" y1="30" x2="18" y2="30" stroke="hsl(var(--energy))" strokeWidth="2" />
            </g>
          </svg>
        </div>

        {/* Economy Popups (synced with timeline while truck is stopped) */}
        <div className="swi-popups absolute bottom-24 md:bottom-24 bottom-16 left-1/2 -translate-x-1/2 flex flex-row gap-2 md:gap-2">
          <div className="swi-bubble swi-dollar">
            <span className="text-xl font-bold text-green-600 bg-background/80 px-2 py-1 rounded">$</span>
          </div>
          <div className="swi-bubble swi-economia">
            <span className="text-sm md:text-base font-bold text-green-600 bg-background/80 px-2 py-1 rounded whitespace-nowrap">+ economia</span>
          </div>
          <div className="swi-bubble swi-co2">
            <span className="text-sm md:text-base font-bold text-green-600 bg-background/80 px-2 py-1 rounded whitespace-nowrap">-CO2</span>
          </div>
        </div>
      </div>
    </div>;
};
export default SwiFuelAnimation;