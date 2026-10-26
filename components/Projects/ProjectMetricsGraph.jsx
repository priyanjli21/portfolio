'use client';
import React, { useState, useEffect, useRef } from 'react';
import { BarChart3, Wrench, Layers, AlertCircle, CheckCircle2, Scale } from 'lucide-react';
import styles from './ProjectMetricsGraph.module.css';

const STAGE_COLORS = ['#FF6B6B', '#F5C542', '#5F27CD', '#2E66FF', '#10B981'];

function BenchmarkBar({ b, visible }) {
  const isLower = b.lowerIsBetter !== false;
  const baseP = 100;
  const optP = isLower
    ? Math.max(Math.min((b.optimizedVal / b.baselineVal) * 100, 100), 4)
    : 100;
  const baseActual = isLower ? 100 : Math.max(Math.min((b.baselineVal / b.optimizedVal) * 100, 100), 8);

  return (
    <div className={styles.benchItem}>
      <div className={styles.benchTopRow}>
        <span className={styles.benchMetric}>{b.metric}</span>
        <span className={styles.benchBadge}>{b.improvement}</span>
      </div>
      <div className={styles.barsStack}>
        <div className={styles.barRow}>
          <span className={styles.barLabel}>BASELINE</span>
          <div className={styles.barTrack}>
            <div className={styles.barBase} style={{ width: visible ? `${baseActual}%` : '0%' }} />
          </div>
          <span className={styles.barVal}>{b.baseline}</span>
        </div>
        <div className={styles.barRow}>
          <span className={styles.barLabel} style={{ color: '#10B981' }}>OPTIMIZED</span>
          <div className={styles.barTrack}>
            <div className={styles.barOpt} style={{ width: visible ? `${optP}%` : '0%' }} />
          </div>
          <span className={styles.barVal} style={{ color: '#10B981' }}>{b.optimized}</span>
        </div>
      </div>
    </div>
  );
}

function DAGPipeline({ nodes }) {
  return (
    <div className={styles.dagOuter}>
      <div className={styles.dagScroll}>
        {nodes.map((n, i) => (
          <div key={i} className={styles.dagNodeWrap}>
            <div className={styles.dagNode} style={{ borderColor: STAGE_COLORS[i % STAGE_COLORS.length] }}>
              <div className={styles.dagTopBar} style={{ background: STAGE_COLORS[i % STAGE_COLORS.length] }} />
              <span className={styles.dagStep} style={{ color: STAGE_COLORS[i % STAGE_COLORS.length] }}>
                {n.step}
              </span>
              <span className={styles.dagName}>{n.name}</span>
              <span className={styles.dagTech}>{n.tech}</span>
              <span className={styles.dagLatency}>{n.latency}</span>
              <span className={styles.dagDesc}>{n.desc}</span>
            </div>
            {i < nodes.length - 1 && (
              <div className={styles.dagConnector}>
                <div className={styles.dagLine} />
                <div className={styles.dagArrowHead} />
                <div
                  className={styles.dagPacket}
                  style={{ animationDelay: `${i * 0.55}s` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectMetricsGraph({ project }) {
  const [activeTab, setActiveTab] = useState('benchmarks');
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);
  const data = project?.behindTheNumbers;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Re-trigger bar animation when switching to benchmarks tab
  useEffect(() => {
    if (activeTab === 'benchmarks') {
      setVisible(false);
      const t = setTimeout(() => setVisible(true), 60);
      return () => clearTimeout(t);
    }
  }, [activeTab]);

  if (!data) return null;

  const tabs = [
    { key: 'benchmarks', icon: <BarChart3 size={13} />, label: 'BENCHMARKS & SPEEDUP' },
    { key: 'how', icon: <Wrench size={13} />, label: 'HOW WE ACHIEVED IT' },
    { key: 'dag', icon: <Layers size={13} />, label: 'SYSTEM DAG PIPELINE' },
  ];

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.headerRow}>
        <span className={styles.headlineBadge}>⚡ BEHIND THE NUMBERS</span>
        <div className={styles.headlineText}>{data.headline}</div>
      </div>

      <div className={styles.tabNav}>
        {tabs.map(({ key, icon, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveTab(key)}
            className={`${styles.tabBtn} ${activeTab === key ? styles.activeTabBtn : ''}`}
          >
            {icon}
            <span>{label}</span>
          </button>
        ))}
      </div>

      {activeTab === 'benchmarks' && (
        <div className={styles.benchList}>
          {data.benchmarks.map((b, i) => (
            <BenchmarkBar key={i} b={b} visible={visible} />
          ))}
        </div>
      )}

      {activeTab === 'how' && (
        <div className={styles.howGrid}>
          <div className={styles.howCard} style={{ '--card-accent': 'var(--accent-coral)' }}>
            <div className={styles.howCardHeader} style={{ color: 'var(--accent-coral)' }}>
              <AlertCircle size={14} />
              <span>THE PRODUCTION BOTTLENECK</span>
            </div>
            <p className={styles.howCardText}>{data.bottleneck}</p>
          </div>
          <div className={styles.howCard} style={{ '--card-accent': 'var(--accent-lime)' }}>
            <div className={styles.howCardHeader} style={{ color: 'var(--accent-lime)' }}>
              <CheckCircle2 size={14} />
              <span>THE ARCHITECTURAL SOLUTION</span>
            </div>
            <p className={styles.howCardText}>{data.howWeAchieved}</p>
          </div>
          <div className={styles.howCard} style={{ '--card-accent': 'var(--accent-gold)' }}>
            <div className={styles.howCardHeader} style={{ color: 'var(--accent-gold)' }}>
              <Scale size={14} />
              <span>ENGINEERING TRADE-OFFS &amp; GUARDRAILS</span>
            </div>
            <p className={styles.howCardText}>{data.tradeoffs}</p>
          </div>
        </div>
      )}

      {activeTab === 'dag' && (
        <DAGPipeline nodes={data.dagNodes} />
      )}
    </div>
  );
}
