import React from 'react';

type PreloaderProps = {
  exiting?: boolean;
};

const Preloader: React.FC<PreloaderProps> = ({ exiting = false }) => {
  return (
    <div className={`preloader-overlay ${exiting ? 'preloader-hide' : ''}`} role="status" aria-live="polite">
      <div className="preloader-mascot">
        {/* Mascote simples em SVG: cabeça, corpo pequeno e mão que acena */}
        <svg className="mascot-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#6B21A8" floodOpacity="0.08" />
            </filter>
          </defs>
          {/* corpo */}
          <g filter="url(#shadow)">
            <ellipse cx="60" cy="86" rx="28" ry="10" fill="#F3E8FF" />
          </g>
          <circle cx="60" cy="40" r="28" fill="#C7B2FF" />
          {/* olhos */}
          <circle cx="50" cy="36" r="3" fill="#2D3748" />
          <circle cx="70" cy="36" r="3" fill="#2D3748" />
          {/* sorriso */}
          <path d="M50 46 Q60 54 70 46" stroke="#2D3748" strokeWidth="2" fill="transparent" strokeLinecap="round" />
          {/* braço esquerdo (estático) */}
          <rect x="30" y="58" width="10" height="6" rx="3" ry="3" fill="#C7B2FF" transform="rotate(-18 30 58)" />
          {/* mão direita que acena */}
          <g className="mascot-hand">
            <rect x="76" y="54" width="12" height="6" rx="3" ry="3" fill="#C7B2FF" transform="rotate(8 76 54)" />
            <circle cx="86" cy="52" r="5" fill="#C7B2FF" />
          </g>
        </svg>
      </div>

  <div className={`speech-bubble ${exiting ? 'speech-exit' : ''}`} aria-hidden={false}>Olá, bem-vindo!</div>
    </div>
  );
};

export default Preloader;
