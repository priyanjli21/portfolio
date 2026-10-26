'use client';
import React from 'react';
import styles from './KineticRibbon.module.css';

export default function KineticRibbon({
  topText = "★ AUTONOMOUS AGENT WORKFLOWS // 15+ PRODUCTION GenAI FEATURES // LANGGRAPH MULTI-AGENT DAGs // SUB-MS REDIS CACHING //",
  bottomText = "⚡ 16.5X ACCELERATED DIFFUSION // 0.998 ROC-AUC ONCOLOGY // 50+ MODELS ROUTED // TRITON BATCHING //",
  topBg = "#0A0A0A",
  topColor = "#FAF8F5",
  bottomBg = "var(--accent-gold)",
  bottomColor = "#0A0A0A"
}) {
  return (
    <div className={styles.ribbonContainer}>
      {/* Top Track (Left Scroll) */}
      <div className={styles.track} style={{ backgroundColor: topBg, color: topColor }}>
        <div className={`${styles.inner} ${styles.scrollLeft}`}>
          <span>{topText}</span>
          <span>{topText}</span>
          <span>{topText}</span>
          <span>{topText}</span>
        </div>
      </div>

      {/* Bottom Track (Right Scroll) */}
      <div className={styles.track} style={{ backgroundColor: bottomBg, color: bottomColor }}>
        <div className={`${styles.inner} ${styles.scrollRight}`}>
          <span>{bottomText}</span>
          <span>{bottomText}</span>
          <span>{bottomText}</span>
          <span>{bottomText}</span>
        </div>
      </div>
    </div>
  );
}
