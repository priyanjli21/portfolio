'use client';
import React from 'react';
import { ShieldCheck, Lock, ArrowDown, Activity, Cpu, Sparkles } from 'lucide-react';
import { useAccess } from '../../context/AccessContext';
import styles from './UnlockedHUD.module.css';

export default function UnlockedHUD() {
  const { isUnlocked, lock } = useAccess();

  if (!isUnlocked) return null;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.hudBar} role="region" aria-label="Unlocked Telemetry Mission Control">
      <div className={styles.hudContainer}>
        {/* Left: Status & Codename Badge */}
        <div className={styles.hudLeft}>
          <span className={styles.hudBadge}>
            <ShieldCheck size={13} />
            <span>CONFIDENTIAL ARCHITECTURE ACTIVE</span>
          </span>
          <span className={styles.hudTitle}>
            5/5 PRODUCTION ENGINES UNMASKED // LIVE BENCHMARKS &amp; 3D TELEMETRY ON
          </span>
        </div>

        {/* Middle Stats Chips */}
        <div className={styles.hudStats}>
          <div className={styles.statChip}>
            <span className={styles.pulseDot} />
            <span>P99: 11.4ms</span>
          </div>
          <div className={styles.statChip}>
            <Cpu size={12} color="var(--accent-gold)" />
            <span>TRITON + CUDA</span>
          </div>
          <div className={styles.statChip}>
            <Activity size={12} color="var(--accent-coral)" />
            <span>REDIS CACHE: &lt;1ms</span>
          </div>
        </div>

        {/* Right Actions */}
        <div className={styles.hudActions}>
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className={styles.jumpBtn}
            title="Jump to declassified projects"
          >
            <span>DEEP BLUEPRINTS</span>
            <ArrowDown size={13} />
          </button>
          <button
            type="button"
            onClick={lock}
            className={styles.lockBtn}
            title="Lock confidential view"
          >
            <Lock size={12} />
            <span>LOCK ACCESS</span>
          </button>
        </div>
      </div>
    </div>
  );
}
