import React from 'react';

/**
 * HeroLigatureTitle
 *
 * Exact Art Nouveau Didone Typography for the Hero headline:
 * Line 1: THE ART OF (spaced uppercase serif)
 * Line 2: TOUCH (giant luxury serif with T sweeping left and H sweeping right)
 *
 * Recreated with vector precision from client reference image fa29b52f.jpg.
 */
export function HeroLigatureTitle({ title = "The Art of Touch" }) {
  const ivory = "#F5EFE6";
  const champagne = "#E8D5B5";
  const gold = "#D9A75E";
  const bronze = "#C28E42";

  return (
    <div className="w-full flex flex-col items-center justify-center mb-6 overflow-visible">
      {/* Semantic H1 for SEO & Screen Readers */}
      <h1 className="sr-only">{title}</h1>

      {/* Desktop & Tablet Display (hidden on <640px) */}
      <div
        className="hidden sm:block w-full max-w-4xl lg:max-w-5xl mx-auto px-2 overflow-visible"
        role="img"
        aria-label={title}
      >
        <svg
          viewBox="0 0 1000 240"
          width="100%"
          height="auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible drop-shadow-[0_2px_16px_rgba(217,167,94,0.35)] drop-shadow-[0_0_28px_rgba(194,142,66,0.18)]"
        >
          <defs>
            <style>
              {`@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,300;0,6..96,400&display=swap');`}
            </style>
          </defs>

          <g strokeLinecap="round" strokeLinejoin="round">
            {/* ==================== LINE 1: THE ART OF ==================== */}
            <text
              x="500"
              y="54"
              textAnchor="middle"
              fontFamily="'Bodoni Moda', 'Italiana', 'Playfair Display', Georgia, serif"
              fontSize="22"
              fontWeight="400"
              letterSpacing="0.45em"
              fill={champagne}
              className="select-none"
            >
              THE ART OF
            </text>

            {/* ==================== LINE 2: TOUCH WITH FLOWING SWASHES ==================== */}
            {/* SWASH FROM T SWEEPING FAR TO THE LEFT */}
            <path
              d="M 35 136 C 85 140, 130 112, 180 86 C 220 65, 255 76, 285 92"
              stroke={gold}
              strokeWidth="2.4"
              fill="none"
            />
            <path
              d="M 45 137 C 90 141, 132 114, 180 90 C 220 70, 255 80, 285 93"
              stroke={champagne}
              strokeWidth="1.2"
              strokeOpacity="0.75"
              fill="none"
            />

            {/* LUXURY DIDONE TEXT: TOUCH */}
            <text
              x="500"
              y="178"
              textAnchor="middle"
              fontFamily="'Bodoni Moda', 'Playfair Display', Didot, 'Cinzel Decorative', Georgia, serif"
              fontSize="120"
              fontWeight="300"
              letterSpacing="0.08em"
              fill={ivory}
              className="select-none"
            >
              TOUCH
            </text>

            {/* SWASH FROM H SWEEPING FAR TO THE RIGHT */}
            <path
              d="M 715 138 C 760 138, 785 168, 830 168 C 880 168, 915 128, 965 148"
              stroke={gold}
              strokeWidth="2.4"
              fill="none"
            />
            <path
              d="M 720 140 C 762 140, 787 165, 830 165 C 878 165, 912 131, 955 150"
              stroke={champagne}
              strokeWidth="1.2"
              strokeOpacity="0.75"
              fill="none"
            />
          </g>
        </svg>
      </div>

      {/* Mobile Display (hidden on sm+) */}
      <div
        className="block sm:hidden w-full max-w-sm mx-auto px-2 overflow-visible"
        role="img"
        aria-label={title}
      >
        <svg
          viewBox="0 0 480 170"
          width="100%"
          height="auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible drop-shadow-[0_2px_14px_rgba(217,167,94,0.32)] drop-shadow-[0_0_24px_rgba(194,142,66,0.15)]"
        >
          <defs>
            <style>
              {`@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,300;0,6..96,400&display=swap');`}
            </style>
          </defs>

          <g strokeLinecap="round" strokeLinejoin="round">
            {/* LINE 1: THE ART OF */}
            <text
              x="240"
              y="40"
              textAnchor="middle"
              fontFamily="'Bodoni Moda', 'Italiana', 'Playfair Display', Georgia, serif"
              fontSize="15"
              fontWeight="400"
              letterSpacing="0.42em"
              fill={champagne}
              className="select-none"
            >
              THE ART OF
            </text>

            {/* SWASH FROM T TO LEFT */}
            <path
              d="M 15 88 C 45 92, 72 72, 102 56 C 118 48, 128 58, 136 70"
              stroke={gold}
              strokeWidth="1.8"
              fill="none"
            />
            <path
              d="M 22 89 C 48 93, 74 74, 102 60 C 118 52, 128 62, 136 71"
              stroke={champagne}
              strokeWidth="0.9"
              strokeOpacity="0.75"
              fill="none"
            />

            {/* LINE 2: TOUCH */}
            <text
              x="240"
              y="124"
              textAnchor="middle"
              fontFamily="'Bodoni Moda', 'Playfair Display', Didot, 'Cinzel Decorative', Georgia, serif"
              fontSize="68"
              fontWeight="300"
              letterSpacing="0.06em"
              fill={ivory}
              className="select-none"
            >
              TOUCH
            </text>

            {/* SWASH FROM H TO RIGHT */}
            <path
              d="M 344 100 C 370 100, 385 118, 410 118 C 435 118, 450 96, 465 106"
              stroke={gold}
              strokeWidth="1.8"
              fill="none"
            />
            <path
              d="M 346 101 C 372 101, 386 116, 410 116 C 434 116, 448 98, 460 107"
              stroke={champagne}
              strokeWidth="0.9"
              strokeOpacity="0.75"
              fill="none"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default HeroLigatureTitle;
