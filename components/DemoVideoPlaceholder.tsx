import React from 'react';

const DemoVideoPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full aspect-video bg-gray-800 rounded-xl overflow-hidden border-2 border-gray-700 shadow-2xl group cursor-pointer mt-8">
      {/* Simulation of a UI interface */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900 flex items-center px-4 space-x-2 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-4 text-xs text-gray-400 font-mono">SnapSafe Tool v2.0.exe</div>
      </div>
      
      {/* Content Placeholder */}
      <div className="absolute inset-0 top-8 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="text-center">
            <div className="w-16 h-16 bg-snap-yellow rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <p className="text-gray-400 font-medium">Voir la démo (0:45s)</p>
            <p className="text-xs text-gray-600 mt-2">Mode automatique en action</p>
        </div>
      </div>

      {/* Simulated progress bar overlay to suggest activity */}
      <div className="absolute bottom-4 left-4 right-4 bg-gray-900/80 rounded-lg p-3 backdrop-blur-sm">
        <div className="flex justify-between text-xs font-mono text-green-400 mb-1">
            <span>Téléchargement...</span>
            <span>8,432 / 10,201 photos</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 w-[82%]"></div>
        </div>
      </div>
    </div>
  );
};

export default DemoVideoPlaceholder;