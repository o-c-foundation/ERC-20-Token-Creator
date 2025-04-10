'use client';

import { useState } from "react";
import ChainLogo from "./ChainLogo";

export default function SupportedChains() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Chain data with image paths and colors
  const chains = [
    { name: "Ethereum", path: "/chains/ethereum.png", color: "#627EEA" },
    { name: "Binance Smart Chain", path: "/chains/bsc.png", color: "#F3BA2F" },
    { name: "Polygon", path: "/chains/polygon.png", color: "#8247E5" },
    { name: "Arbitrum", path: "/chains/arbitrum.png", color: "#2D374B" },
    { name: "Avalanche", path: "/chains/avalanche.png", color: "#E84142" },
    { name: "Optimism", path: "/chains/optimism.png", color: "#FF0420" }
  ];

  return (
    <div className="w-full max-w-full md:max-w-3xl mx-auto mt-8 sm:mt-12 md:mt-16 mb-4 sm:mb-8 md:mb-16 px-2">
      <div className="relative mb-6 sm:mb-10 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white relative z-10 inline-block">
          Popular Supported{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500 font-extrabold">
            Chains
          </span>
        </h2>
        <div className="absolute -top-4 -left-6 -right-6 -bottom-4 bg-blue-500/5 rounded-full filter blur-xl z-0 animate-pulse"></div>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
        {chains.map((chain, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div 
              className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full p-1 border-2 transition-all duration-300 flex items-center justify-center shadow-lg ${
                hoveredIndex === index 
                  ? "border-blue-400 scale-110" 
                  : "border-gray-800"
              }`}
              style={{ 
                background: `radial-gradient(circle at center, ${chain.color}30, ${chain.color}10)`,
                transform: hoveredIndex === index ? 'translateY(-5px)' : 'translateY(0)',
                transition: 'transform 0.3s ease, border-color 0.3s ease, scale 0.3s ease'
              }}
            >
              <ChainLogo chain={chain} />
            </div>
            <span 
              className={`mt-2 text-xs sm:text-sm font-medium text-center transition-all duration-300 max-w-[80px] sm:max-w-[100px] truncate ${
                hoveredIndex === index ? "text-blue-300" : "text-gray-400"
              }`}
            >
              {chain.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
} 