"use client"
import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode;
  interval?: number;
  autoPlay?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ children, interval = 3000, autoPlay = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = React.Children.count(children);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isInteracting = useRef<boolean | number>(false);

  useEffect(() => {
    if (autoPlay && !isInteracting.current) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [currentIndex]);

  const startAutoPlay = () => {
    stopAutoPlay(); // Clear any existing intervals
    intervalRef.current = setInterval(() => {
      goToNext();
    }, interval);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + length) % length);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isInteracting.current = e.touches[0].clientX;
    stopAutoPlay();
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (typeof isInteracting.current === 'number') {
      if (isInteracting.current - touchEndX > 50) {
        goToNext();
      } else if (isInteracting.current - touchEndX < -50) {
        goToPrev();
      }
    }
    isInteracting.current = false;
    if (autoPlay) startAutoPlay();
  };

  const handleMouseEnter = () => {
    isInteracting.current = true;
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    isInteracting.current = false;
    if (autoPlay) startAutoPlay();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrev();
  };

  return (
    <div
      className="carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            className="carousel-item"
            style={{
              flex: '0 0 100%',
              opacity: currentIndex === index ? 1 : 0.5,
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            {child}
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={goToPrev}>
        ❮
      </button>
      <button className="carousel-control next" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
