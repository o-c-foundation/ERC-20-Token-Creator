'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ChainLogo({ chain, size = 60 }) {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div 
      className="w-full h-full rounded-full overflow-hidden relative"
      style={{ 
        backgroundColor: `${chain.color}20` 
      }}
    >
      {/* Fallback letter when image fails to load */}
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold" style={{ color: chain.color }}>
            {chain.name.charAt(0)}
          </span>
        </div>
      )}
      
      {!imageError && (
        <Image
          src={chain.path}
          alt={`${chain.name} Logo`}
          fill
          sizes="100%"
          className="object-contain p-1.5"
          onError={() => setImageError(true)}
          priority
        />
      )}
    </div>
  );
} 