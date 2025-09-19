
import React, { useState } from 'react';
import pugImage from './imagen a.jpeg';
import documentImage from './imagen b.png';
const PUG_IMAGE_URL = 'https://i.imgur.com/rL7Jp6J.jpeg';
const DOCUMENT_IMAGE_URL = 'https://i.imgur.com/bW3v2so.png';

const App: React.FC = () => {
  const [showDocument, setShowDocument] = useState(false);

  const handleSecretClick = () => {
    setShowDocument(true);
  };

  const backgroundImageUrl = showDocument ? DOCUMENT_IMAGE_URL : PUG_IMAGE_URL;

  return (
    <main 
      className="relative h-screen w-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      
      {!showDocument && (
        <>
          <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-pulse">
            <h1 className="text-center text-gray-800 font-semibold text-sm md:text-base">
              There is a secret button. Find it.
            </h1>
          </div>

          <button
            onClick={handleSecretClick}
            title="You found me!"
            aria-label="Reveal secret document"
            className="absolute top-[63%] left-[51%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-pink-400/20 opacity-0 hover:opacity-100 hover:bg-pink-400/50 focus:opacity-100 focus:ring-2 focus:ring-white focus:outline-none transition-opacity duration-300"
          ></button>
        </>
      )}

      {showDocument && (
         <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-lg shadow-xl">
            <h1 className="text-center text-gray-900 font-bold text-lg md:text-xl">
              SECRET REVEALED
            </h1>
          </div>
      )}
    </main>
  );
};

export default App;
