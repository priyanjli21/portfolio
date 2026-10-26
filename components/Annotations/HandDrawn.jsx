'use client';
import React from 'react';

// Hand-drawn organic ellipse around text matching Concept 2 exactly
export function WobblyCircle({ children, color = '#5F27CD', strokeWidth = 2.8, className = '' }) {
  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px 16px',
        margin: '2px 4px'
      }}
      className={className}
    >
      <span
        style={{
          position: 'relative',
          zIndex: 2,
          fontFamily: 'var(--font-sans)',
          fontWeight: 900,
          fontSize: '0.92rem',
          letterSpacing: '-0.01em',
          textTransform: 'uppercase',
          color: '#0A0A0A'
        }}
      >
        {children}
      </span>
      <svg
        viewBox="0 0 180 50"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: '120%',
          height: '130%',
          pointerEvents: 'none',
          zIndex: 1,
          overflow: 'visible'
        }}
      >
        <path
          d="M 16,25 C 14,10 40,4 90,5 C 145,6 172,12 170,28 C 168,44 140,48 90,47 C 35,46 10,40 16,24 C 20,12 50,6 96,6"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

// Organic wavy underline for headlines & subtitles
export function WavyUnderline({ color = 'var(--accent-coral)', strokeWidth = 4, className = '' }) {
  return (
    <svg
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      className={className}
      style={{
        width: '100%',
        height: '16px',
        display: 'block',
        marginTop: '4px',
        overflow: 'visible'
      }}
    >
      <path
        d="M 3,12 Q 30,2 60,12 T 120,12 T 180,12 T 240,12 T 297,12"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

// Scratchy hand-drawn arrow pointing to things
export function ScratchyArrow({ direction = 'right', color = 'var(--accent-coral)', size = 48, label = '', className = '' }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }} className={className}>
      {label && (
        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', color: color }}>
          {label}
        </span>
      )}
      <svg
        width={size}
        height={size * 0.5}
        viewBox="0 0 80 40"
        fill="none"
        style={{
          transform: direction === 'down' ? 'rotate(90deg)' : direction === 'left' ? 'scaleX(-1)' : 'none',
          overflow: 'visible'
        }}
      >
        <path
          d="M 5,20 Q 35,5 72,18 M 55,8 Q 66,15 73,19 Q 62,28 50,34"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// Hand-drawn doodle stars & sparkles
export function ScribbleSparkle({ size = 28, color = 'var(--accent-gold)', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path
        d="M 16,2 Q 17,12 28,16 Q 18,18 16,30 Q 14,19 3,16 Q 13,13 16,2 Z"
        fill={color}
        stroke="#0A0A0A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Explosive Graphic Starburst Sticker Badge (Behance / Sorawit style)
export function StarburstSticker({
  text = 'PRODUCTION TESTED',
  subtext = 'AI / ML',
  rotation = -4,
  bgColor = '#FFDE00',
  textColor = '#0A0A0A',
  size = 110,
  className = ''
}) {
  return (
    <div
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `rotate(${rotation}deg)`,
        filter: 'drop-shadow(4px 4px 0px #0A0A0A)',
        cursor: 'default',
        userSelect: 'none',
        transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `rotate(${rotation + 6}deg) scale(1.08)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotation}deg) scale(1)`;
      }}
    >
      {/* Multi-point Starburst Polygon */}
      <svg
        viewBox="0 0 100 100"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'visible'
        }}
      >
        <polygon
          points="50,0 62,24 88,14 80,40 100,50 80,62 88,88 62,80 50,100 38,80 12,88 20,62 0,50 20,40 12,14 38,24"
          fill={bgColor}
          stroke="#0A0A0A"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
      </svg>
      {/* Content centered inside */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          lineHeight: 1.05,
          color: textColor,
          fontFamily: 'var(--font-sans)',
          fontWeight: 900,
          textTransform: 'uppercase',
          padding: '4px'
        }}
      >
        {subtext && (
          <div style={{ fontSize: `${size * 0.095}px`, letterSpacing: '0.08em', opacity: 0.9 }}>
            {subtext}
          </div>
        )}
        <div style={{ fontSize: `${size * 0.125}px`, letterSpacing: '-0.02em', fontWeight: 900 }}>
          {text}
        </div>
      </div>
    </div>
  );
}

// Vector Design Bounding Box with Figma/Illustrator Transform Handles
export function VectorBoundingBox({
  children,
  label = 'AI_ENGINEER // V2.6',
  borderColor = '#2E66FF',
  handleColor = '#FFFFFF',
  className = ''
}) {
  const handleStyle = {
    position: 'absolute',
    width: '8px',
    height: '8px',
    backgroundColor: handleColor,
    border: `2px solid ${borderColor}`,
    zIndex: 4,
    pointerEvents: 'none'
  };

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        padding: '12px 14px',
        border: `2px dashed ${borderColor}`,
        backgroundColor: 'rgba(46, 102, 255, 0.02)'
      }}
    >
      {/* Corner Handles */}
      <span style={{ ...handleStyle, top: '-5px', left: '-5px' }} />
      <span style={{ ...handleStyle, top: '-5px', right: '-5px' }} />
      <span style={{ ...handleStyle, bottom: '-5px', left: '-5px' }} />
      <span style={{ ...handleStyle, bottom: '-5px', right: '-5px' }} />

      {/* Midpoint Handles */}
      <span style={{ ...handleStyle, top: '-5px', left: 'calc(50% - 4px)' }} />
      <span style={{ ...handleStyle, bottom: '-5px', left: 'calc(50% - 4px)' }} />
      <span style={{ ...handleStyle, left: '-5px', top: 'calc(50% - 4px)' }} />
      <span style={{ ...handleStyle, right: '-5px', top: 'calc(50% - 4px)' }} />

      {/* Dimension / Spec Label Tag */}
      {label && (
        <div
          style={{
            position: 'absolute',
            bottom: '-12px',
            right: '16px',
            backgroundColor: borderColor,
            color: '#FFFFFF',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            fontWeight: 800,
            padding: '1px 7px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            boxShadow: '2px 2px 0px #0A0A0A',
            zIndex: 5,
            pointerEvents: 'none'
          }}
        >
          {label}
        </div>
      )}

      {children}
    </div>
  );
}

