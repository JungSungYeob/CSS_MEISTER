'use client';

import React, { useEffect, useRef, useState } from 'react';

interface LazyLoadProps {
  children: React.ReactNode;
}

const LazyLoader: React.FC<LazyLoadProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {isVisible ? children : <div className='h-96'></div>}
    </div>
  );
};

export default LazyLoader;
