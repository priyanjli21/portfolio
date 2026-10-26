'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './InteractiveTiltCard.module.css';

export default function InteractiveTiltCard({
  id,
  href = '#projects',
  title,
  subtitle,
  bgColor,
  textColor,
  baseRotation = 0,
  baseTranslateX = 0,
  maxWidth = '440px',
  type = 'dag',
  indexLabel = 'SYS_01',
  telemetryTag = 'PROD // HIGH-THROUGHPUT'
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, normX: 0, normY: 0, isHovered: false });
  const [scrollY, setScrollY] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = (x / rect.width) * 2 - 1; // -1 to 1
    const normY = (y / rect.height) * 2 - 1; // -1 to 1

    const MAX_TILT = 14;
    setTilt({
      x: -normY * MAX_TILT,
      y: normX * MAX_TILT,
      normX,
      normY,
      isHovered: true
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, normX: 0, normY: 0, isHovered: false });
  };

  // Parallax subtle drift based on scroll
  const scrollOffset = (scrollY * 0.04) * (baseRotation > 0 ? 1 : -1);

  const transformStyle = isMobile
    ? 'none'
    : tilt.isHovered
    ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.04, 1.04, 1.04) translateY(${scrollOffset}px)`
    : `perspective(1000px) rotate(${baseRotation}deg) translateX(${baseTranslateX}px) translateY(${scrollOffset}px)`;

  const shadowStyle = isMobile
    ? '4px 4px 0px #0A0A0A'
    : tilt.isHovered
    ? `${8 - tilt.normX * 8}px ${8 - tilt.normY * 8}px 0px #0A0A0A`
    : `6px 6px 0px #0A0A0A`;

  return (
    <div className={styles.tiltCardWrapper} style={{ maxWidth: isMobile ? '100%' : maxWidth }}>
      <a
        id={id}
        href={href}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={styles.tiltedCard}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          transform: transformStyle,
          boxShadow: shadowStyle
        }}
      >
        {/* Top Folder Tab / Architectural Index */}
        <div className={styles.cardFolderTab}>
          <span className={styles.cardIndexBadge}>{indexLabel}</span>
          <span className={styles.cardTelemetryTag}>{telemetryTag}</span>
        </div>

        <div className={styles.cardMainRow}>
          <div className={styles.cardLeftContent}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <span className={styles.cardSubtitle}>{subtitle}</span>
          </div>

          {/* Dynamic Animated Visual Thumbnail */}
          <div className={styles.cardThumbnail}>
          {type === 'dag' && (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              {/* Connecting Lines */}
              <line x1="14" y1="16" x2="24" y2="34" stroke="#0A0A0A" strokeWidth="2.5" />
              <line x1="34" y1="16" x2="24" y2="34" stroke="#0A0A0A" strokeWidth="2.5" />
              <line
                x1="14"
                y1="16"
                x2="34"
                y2="16"
                stroke="#0A0A0A"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                className={styles.dagPulse}
              />
              {/* Nodes */}
              <circle cx="14" cy="16" r="6" fill="#0A0A0A" />
              <circle cx="14" cy="16" r="3" fill="#FAF8F5" />
              <circle cx="34" cy="16" r="6" fill="#FF6B6B" stroke="#0A0A0A" strokeWidth="1.5" />
              <circle cx="24" cy="34" r="7" fill="#F5C542" stroke="#0A0A0A" strokeWidth="2" />
              <circle cx="24" cy="34" r="3" fill="#0A0A0A" />
            </svg>
          )}

          {type === 'wave' && (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect
                x="6"
                y="6"
                width="36"
                height="36"
                stroke="#0A0A0A"
                strokeWidth="2"
                strokeDasharray="4 2"
                className={styles.wavePath}
              />
              <path
                d="M 10 24 Q 18 10, 24 24 T 38 24"
                stroke="#0A0A0A"
                strokeWidth="3"
                fill="none"
              />
              <circle cx="24" cy="24" r="5" fill="#0A0A0A" />
              <circle cx="24" cy="24" r="2" fill="#FAF8F5" />
              <circle cx="14" cy="18" r="2.5" fill="#5F27CD" />
              <circle cx="34" cy="30" r="2.5" fill="#F5C542" />
            </svg>
          )}

          {type === 'vision' && (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              {/* Corner Reticles */}
              <path d="M 6 12 L 6 6 L 12 6" stroke="#0A0A0A" strokeWidth="2.5" className={styles.cornerReticle} />
              <path d="M 36 6 L 42 6 L 42 12" stroke="#0A0A0A" strokeWidth="2.5" className={styles.cornerReticle} />
              <path d="M 6 36 L 6 42 L 12 42" stroke="#0A0A0A" strokeWidth="2.5" className={styles.cornerReticle} />
              <path d="M 36 42 L 42 42 L 42 36" stroke="#0A0A0A" strokeWidth="2.5" className={styles.cornerReticle} />
              {/* Inner Target Box */}
              <rect x="12" y="12" width="24" height="24" stroke="#0A0A0A" strokeWidth="1.5" />
              {/* Scanning Laser Beam */}
              <line x1="12" y1="12" x2="36" y2="12" stroke="#FF6B6B" strokeWidth="2" className={styles.radarLaser} />
              {/* Center Lock Dot */}
              <circle cx="24" cy="24" r="3.5" fill="#0A0A0A" />
            </svg>
          )}
        </div>
      </div>
    </a>
  </div>
  );
}
