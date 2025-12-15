import React from 'react';

const StickyBanner: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-red-600 text-white py-3 px-4 shadow-lg text-center font-bold text-sm md:text-base tracking-wide animate-pulse">
      🔥 OFFRE DE LANCEMENT : -50% sur les 100 premières licences !
    </div>
  );
};

export default StickyBanner;