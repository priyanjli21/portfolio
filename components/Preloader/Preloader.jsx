'use client';
import React, { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING NEURAL SUBSYSTEMS...');
  const [isDone, setIsDone] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatusText('SYSTEM ONLINE // PRIYANJLI GAUTAM');
          setTimeout(() => setIsDone(true), 450);
          setTimeout(() => {
            setIsRemoved(true);
          }, 1100);
          return 100;
        }

        // Smooth steady increments over ~1.5s
        const next = prev + Math.floor(Math.random() * 3) + 1;
        if (next > 25 && next < 55) {
          setStatusText('CALIBRATING DUAL-TIER CACHE [<1ms]...');
        } else if (next >= 55 && next < 85) {
          setStatusText('MOUNTING 50+ GENERATIVE MODELS...');
        } else if (next >= 85) {
          setStatusText('SYNAPSE COMPILATION COMPLETE...');
        }
        return next > 100 ? 100 : next;
      });
    }, 28);

    return () => clearInterval(interval);
  }, []);

  if (isRemoved) return null;

  return (
    <div className={`${styles.preloaderOverlay} ${isDone ? styles.overlayFading : ''}`}>
      {/* Top and Bottom Splitting Shutter Doors */}
      <div className={`${styles.shutterDoor} ${styles.shutterTop} ${isDone ? styles.shutterTopOpen : ''}`} />
      <div className={`${styles.shutterDoor} ${styles.shutterBottom} ${isDone ? styles.shutterBottomOpen : ''}`} />

      {/* Center Console Content */}
      <div className={`${styles.centerConsole} ${isDone ? styles.consoleFadeOut : ''}`}>
        {/* Corner Reticles */}
        <span className={`${styles.reticle} ${styles.reticleTL}`}>+</span>
        <span className={`${styles.reticle} ${styles.reticleTR}`}>+</span>
        <span className={`${styles.reticle} ${styles.reticleBL}`}>+</span>
        <span className={`${styles.reticle} ${styles.reticleBR}`}>+</span>

        {/* Top Tag */}
        <div className={styles.systemTag}>
          <span className={styles.livePulse} />
          <span>INITIALIZING ML PIPELINE // V2.6</span>
        </div>

        {/* Massive Animated Percentage */}
        <div className={styles.counterRow}>
          <div className={styles.bigNumber}>{String(progress).padStart(2, '0')}</div>
          <span className={styles.percentSign}>%</span>
        </div>

        {/* High-Impact Progress Bar */}
        <div className={styles.progressBarTrack}>
          <div
            className={styles.progressBarFill}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Telemetry Status Line */}
        <div className={styles.statusLine}>
          <span className={styles.promptArrow}>&gt;</span>
          <span className={styles.statusMsg}>{statusText}</span>
        </div>
      </div>
    </div>
  );
}
