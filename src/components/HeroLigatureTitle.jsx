import React from 'react';

/**
 * HeroLigatureTitle
 *
 * Art Nouveau-inspired Ligature Typography for the Hero headline: "The Art of Touch"
 * Features:
 * - Elongated, slender vertical letterforms (perfumery editorial aesthetic)
 * - Custom flowing silk and massage oil ligatures connecting letterforms (H~E, A~R~T, C~H)
 * - Deep champagne gold (#D9A75E, #E8D5B5) and warm ivory (#F5EFE6)
 * - Zero corporate / tech look
 * - Responsive: single-line on desktop (sm+), elegant stacked two-line on mobile (<sm)
 * - Semantic h1 with screen-reader text for SEO and accessibility
 */
export function HeroLigatureTitle({ title = "The Art of Touch" }) {
  const ivory = "#F5EFE6";
  const champagne = "#E8D5B5";
  const gold = "#D9A75E";
  const bronze = "#C28E42";

  return (
    <div className="w-full flex flex-col items-center justify-center mb-6">
      {/* Semantic H1 for SEO & Screen Readers */}
      <h1 className="sr-only">{title}</h1>

      {/* Desktop & Tablet Display: Single Elegant Editorial Line (hidden on <640px) */}
      <div
        className="hidden sm:block w-full max-w-3xl lg:max-w-4xl mx-auto px-2"
        role="img"
        aria-label={title}
      >
        <svg
          viewBox="0 0 960 140"
          width="100%"
          height="auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-[0_2px_14px_rgba(217,167,94,0.30)] drop-shadow-[0_0_24px_rgba(194,142,66,0.12)]"
        >
          <g strokeLinecap="round" strokeLinejoin="round">
            {/* ==================== THE ==================== */}
            {/* T (x: 46) */}
            <path d="M 24 28 C 30 25 36 24 46 24 C 56 24 62 25 68 28" stroke={champagne} strokeWidth="1.8" />
            <path d="M 46 24 L 46 116 M 40 116 L 52 116" stroke={ivory} strokeWidth="2.2" />

            {/* H (x: 78 to 118) */}
            <path d="M 78 24 L 78 116 M 72 24 L 84 24 M 72 116 L 84 116" stroke={ivory} strokeWidth="2.2" />
            <path d="M 118 24 L 118 116 M 112 24 L 124 24 M 112 116 L 124 116" stroke={ivory} strokeWidth="2.2" />
            {/* H to E Ligature Wave: starts at H-left, dips in sensual silk wave, rises through H-right and flows into E! */}
            <path d="M 78 70 C 88 84, 106 84, 118 68 C 126 56, 138 60, 150 70" stroke={gold} strokeWidth="2.2" fill="none" />

            {/* E (x: 150 to 186) */}
            <path d="M 150 24 L 150 116 M 144 24 L 156 24 M 144 116 L 156 116" stroke={ivory} strokeWidth="2.2" />
            <path d="M 150 24 L 184 24 C 187 24 188 26 188 29" stroke={champagne} strokeWidth="1.8" />
            <path d="M 150 116 L 186 116 C 189 116 190 114 190 111" stroke={champagne} strokeWidth="1.8" />
            <path d="M 150 70 C 160 74, 172 70, 180 66 C 184 64, 188 65, 192 68" stroke={gold} strokeWidth="1.8" fill="none" />

            {/* Silk Wave Divider between THE and ART */}
            <path d="M 204 70 C 214 75, 222 75, 232 70" stroke={bronze} strokeWidth="1.5" opacity="0.65" />

            {/* ==================== ART ==================== */}
            {/* A (x: 250 to 300) */}
            <path d="M 275 24 L 250 116 M 244 116 L 256 116" stroke={ivory} strokeWidth="2.2" />
            <path d="M 275 24 L 300 116 M 294 116 L 306 116" stroke={ivory} strokeWidth="2.2" />
            <path d="M 268 24 L 282 24" stroke={champagne} strokeWidth="1.8" />
            {/* A to R Ligature Wave: dips inside A, rises smoothly past right leg, and bridges into R! */}
            <path d="M 256 78 C 265 88, 284 88, 294 74 C 304 60, 320 62, 334 72" stroke={gold} strokeWidth="2.2" fill="none" />

            {/* R (x: 334 to 380) */}
            <path d="M 334 24 L 334 116 M 328 24 L 340 24 M 328 116 L 340 116" stroke={ivory} strokeWidth="2.2" />
            <path d="M 334 24 C 362 24, 376 34, 376 52 C 376 70, 362 76, 334 76" stroke={champagne} strokeWidth="1.8" fill="none" />
            {/* R leg sweeps into an organic silk wave that connects into T! */}
            <path d="M 358 74 C 366 86, 374 104, 384 114 C 394 124, 408 122, 420 106 C 428 94, 438 80, 450 72" stroke={gold} strokeWidth="2.2" fill="none" />

            {/* T (x: 450) */}
            <path d="M 432 28 C 438 25 444 24 454 24 C 464 24 470 25 476 28" stroke={champagne} strokeWidth="1.8" />
            <path d="M 454 24 L 454 116 M 448 116 L 460 116" stroke={ivory} strokeWidth="2.2" />

            {/* Silk Wave Divider between ART and OF */}
            <path d="M 494 70 C 504 75, 514 75, 524 70" stroke={bronze} strokeWidth="1.5" opacity="0.65" />

            {/* ==================== OF ==================== */}
            {/* O (x: 540 to 576) - Elongated Art Nouveau ellipse */}
            <ellipse cx="558" cy="70" rx="16" ry="46" stroke={champagne} strokeWidth="2" fill="none" />

            {/* F (x: 592 to 626) */}
            <path d="M 592 24 L 592 116 M 586 24 L 598 24 M 586 116 L 598 116" stroke={ivory} strokeWidth="2.2" />
            <path d="M 592 24 L 624 24 C 627 24 628 26 628 29" stroke={champagne} strokeWidth="1.8" />
            <path d="M 592 70 C 602 74, 614 72, 622 68" stroke={gold} strokeWidth="2" fill="none" />

            {/* Silk Wave Divider between OF and TOUCH */}
            <path d="M 642 70 C 652 75, 662 75, 672 70" stroke={bronze} strokeWidth="1.5" opacity="0.65" />

            {/* ==================== TOUCH ==================== */}
            {/* T (x: 694) */}
            <path d="M 676 28 C 682 25 688 24 698 24 C 708 24 714 25 720 28" stroke={champagne} strokeWidth="1.8" />
            <path d="M 698 24 L 698 116 M 692 116 L 704 116" stroke={ivory} strokeWidth="2.2" />

            {/* O (x: 726 to 762) */}
            <ellipse cx="744" cy="70" rx="16" ry="46" stroke={champagne} strokeWidth="2" fill="none" />

            {/* U (x: 774 to 814) */}
            <path d="M 774 24 L 774 96 C 774 110, 782 117, 794 117 C 806 117, 814 110, 814 96 L 814 24 M 768 24 L 780 24 M 808 24 L 820 24" stroke={ivory} strokeWidth="2.2" fill="none" />

            {/* C (x: 828 to 868) */}
            <path d="M 866 38 C 860 27, 850 23, 838 24 C 826 26, 822 44, 822 70 C 822 96, 826 114, 838 116 C 850 117, 860 111, 866 102" stroke={champagne} strokeWidth="2" fill="none" />
            {/* Ligature Wave connecting C into H! */}
            <path d="M 866 74 C 874 82, 882 80, 892 70" stroke={gold} strokeWidth="2.2" fill="none" />

            {/* H (x: 892 to 932) */}
            <path d="M 892 24 L 892 116 M 886 24 L 898 24 M 886 116 L 898 116" stroke={ivory} strokeWidth="2.2" />
            <path d="M 932 24 L 932 116 M 926 24 L 938 24 M 926 116 L 938 116" stroke={ivory} strokeWidth="2.2" />
            <path d="M 892 70 C 902 78, 920 78, 932 68 C 936 65, 940 66, 944 69" stroke={gold} strokeWidth="2" fill="none" />
          </g>
        </svg>
      </div>

      {/* Mobile Display: Two-Line Stacked Ligature Title (hidden on sm+) */}
      <div
        className="block sm:hidden w-full max-w-sm mx-auto px-4"
        role="img"
        aria-label={title}
      >
        <svg
          viewBox="0 0 460 210"
          width="100%"
          height="auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-[0_2px_14px_rgba(217,167,94,0.30)] drop-shadow-[0_0_24px_rgba(194,142,66,0.12)]"
        >
          <g strokeLinecap="round" strokeLinejoin="round">
            {/* ==================== LINE 1: THE ART ==================== */}
            {/* T (x: 36) */}
            <path d="M 18 20 C 23 17 28 16 36 16 C 44 16 49 17 54 20" stroke={champagne} strokeWidth="1.8" />
            <path d="M 36 16 L 36 94 M 30 94 L 42 94" stroke={ivory} strokeWidth="2.2" />

            {/* H (x: 64 to 98) */}
            <path d="M 64 16 L 64 94 M 58 16 L 70 16 M 58 94 L 70 94" stroke={ivory} strokeWidth="2.2" />
            <path d="M 98 16 L 98 94 M 92 16 L 104 16 M 92 94 L 104 94" stroke={ivory} strokeWidth="2.2" />
            <path d="M 64 55 C 72 68, 88 68, 98 52 C 104 42, 114 46, 124 55" stroke={gold} strokeWidth="2.2" fill="none" />

            {/* E (x: 124 to 154) */}
            <path d="M 124 16 L 124 94 M 118 16 L 130 16 M 118 94 L 130 94" stroke={ivory} strokeWidth="2.2" />
            <path d="M 124 16 L 152 16 C 155 16 156 18 156 21" stroke={champagne} strokeWidth="1.8" />
            <path d="M 124 94 L 154 94 C 157 94 158 92 158 89" stroke={champagne} strokeWidth="1.8" />
            <path d="M 124 55 C 132 59, 142 55, 148 51" stroke={gold} strokeWidth="1.8" fill="none" />

            {/* Silk Wave Divider */}
            <path d="M 172 55 C 182 60, 192 60, 202 55" stroke={bronze} strokeWidth="1.5" opacity="0.65" />

            {/* A (x: 220 to 264) */}
            <path d="M 242 16 L 220 94 M 214 94 L 226 94" stroke={ivory} strokeWidth="2.2" />
            <path d="M 242 16 L 264 94 M 258 94 L 270 94" stroke={ivory} strokeWidth="2.2" />
            <path d="M 235 16 L 249 16" stroke={champagne} strokeWidth="1.8" />
            <path d="M 226 62 C 234 71, 250 71, 258 58 C 267 46, 280 48, 292 56" stroke={gold} strokeWidth="2.2" fill="none" />

            {/* R (x: 292 to 332) */}
            <path d="M 292 16 L 292 94 M 286 16 L 298 16 M 286 94 L 298 94" stroke={ivory} strokeWidth="2.2" />
            <path d="M 292 16 C 316 16, 328 24, 328 40 C 328 56, 316 61, 292 61" stroke={champagne} strokeWidth="1.8" fill="none" />
            <path d="M 314 60 C 322 70, 330 84, 338 92 C 346 100, 358 98, 368 84 C 374 74, 382 64, 392 58" stroke={gold} strokeWidth="2.2" fill="none" />

            {/* T (x: 394) */}
            <path d="M 376 20 C 381 17 386 16 394 16 C 402 16 407 17 412 20" stroke={champagne} strokeWidth="1.8" />
            <path d="M 394 16 L 394 94 M 388 94 L 400 94" stroke={ivory} strokeWidth="2.2" />

            {/* Center Connecting S-Curve between Line 1 and Line 2 */}
            <path d="M 210 106 C 224 114, 236 114, 250 106" stroke={gold} strokeWidth="1.6" opacity="0.75" />

            {/* ==================== LINE 2: OF TOUCH ==================== */}
            {/* O (x: 28 to 56) */}
            <ellipse cx="42" cy="162" rx="14" ry="40" stroke={champagne} strokeWidth="2" fill="none" />

            {/* F (x: 68 to 98) */}
            <path d="M 68 122 L 68 200 M 62 122 L 74 122 M 62 200 L 74 200" stroke={ivory} strokeWidth="2.2" />
            <path d="M 68 122 L 96 122 C 99 122 100 124 100 127" stroke={champagne} strokeWidth="1.8" />
            <path d="M 68 162 C 78 166, 88 164, 96 160" stroke={gold} strokeWidth="2" fill="none" />

            {/* Silk Wave Divider */}
            <path d="M 112 162 C 120 167, 130 167, 138 162" stroke={bronze} strokeWidth="1.5" opacity="0.65" />

            {/* T (x: 162) */}
            <path d="M 144 126 C 149 123 154 122 162 122 C 170 122 175 123 180 126" stroke={champagne} strokeWidth="1.8" />
            <path d="M 162 122 L 162 200 M 156 200 L 168 200" stroke={ivory} strokeWidth="2.2" />

            {/* O (x: 188 to 218) */}
            <ellipse cx="203" cy="162" rx="14" ry="40" stroke={champagne} strokeWidth="2" fill="none" />

            {/* U (x: 230 to 266) */}
            <path d="M 230 122 L 230 182 C 230 195, 237 201, 248 201 C 259 201, 266 195, 266 182 L 266 122 M 224 122 L 236 122 M 260 122 L 272 122" stroke={ivory} strokeWidth="2.2" fill="none" />

            {/* C (x: 280 to 316) */}
            <path d="M 314 134 C 309 125, 300 121, 290 122 C 279 124, 275 139, 275 162 C 275 185, 279 200, 290 201 C 300 202, 309 197, 314 188" stroke={champagne} strokeWidth="2" fill="none" />
            <path d="M 314 165 C 322 173, 330 171, 338 162" stroke={gold} strokeWidth="2.2" fill="none" />

            {/* H (x: 338 to 374) */}
            <path d="M 338 122 L 338 200 M 332 122 L 344 122 M 332 200 L 344 200" stroke={ivory} strokeWidth="2.2" />
            <path d="M 374 122 L 374 200 M 368 122 L 380 122 M 368 200 L 380 200" stroke={ivory} strokeWidth="2.2" />
            <path d="M 338 162 C 348 170, 364 170, 374 160" stroke={gold} strokeWidth="2" fill="none" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default HeroLigatureTitle;

