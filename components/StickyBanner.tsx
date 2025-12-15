import React, { useState, useEffect } from 'react';

const StickyBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 6, hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    // Evergreen timer logic: Set a deadline 7 days from first visit using localStorage
    const STORAGE_KEY = 'snapsafe_offer_deadline';
    const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

    const getDeadline = () => {
      let stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const deadline = Date.now() + SEVEN_DAYS;
        localStorage.setItem(STORAGE_KEY, deadline.toString());
        return deadline;
      }
      
      // If expired more than 1 hour ago, reset it to look like a new evergreen offer
      if (Date.now() > parseInt(stored) + (60 * 60 * 1000)) {
         const newDeadline = Date.now() + SEVEN_DAYS;
         localStorage.setItem(STORAGE_KEY, newDeadline.toString());
         return newDeadline;
      }
      
      return parseInt(stored);
    };

    const deadline = getDeadline();

    const interval = setInterval(() => {
      const now = Date.now();
      const difference = deadline - now;

      if (difference <= 0) {
        // Stick at 00:00:00 if strictly expired but not reset yet
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const totalHours = Math.floor(difference / (1000 * 60 * 60));
        const days = Math.floor(totalHours / 24);
        const hours = totalHours % 24;
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  return (
    <div className="sticky top-0 z-50 bg-red-600 text-white py-3 px-4 shadow-lg text-center font-bold text-sm md:text-base tracking-wide animate-pulse">
      🔥 OFFRE DE LANCEMENT : -50% ! Se termine dans{' '}
      <span className="font-mono bg-black/30 px-2 py-0.5 rounded mx-1">
        {timeLeft.days}j {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
      </span>
    </div>
  );
};

export default StickyBanner;