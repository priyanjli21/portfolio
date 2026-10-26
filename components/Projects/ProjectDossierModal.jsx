'use client';
import React, { useEffect } from 'react';
import { X, ShieldCheck, Building2, Layers, Zap, Sparkles, Database, Scale, Cpu, CheckCircle2 } from 'lucide-react';
import { useAccess } from '../../context/AccessContext';
import { PROJECT_DEEP_DIVES } from '../../data/projectDeepDives';
import styles from './ProjectDossierModal.module.css';

export default function ProjectDossierModal() {
  const { activeDossier, closeDossier } = useAccess();

  useEffect(() => {
    const down = (e) => { if (e.key === 'Escape') closeDossier(); };
    if (activeDossier) window.addEventListener('keydown', down);
    return () => window.removeEventListener('keydown', down);
  }, [activeDossier, closeDossier]);

  if (!activeDossier) return null;

  const conf = activeDossier.confidential || {};
  const deepDive = PROJECT_DEEP_DIVES[activeDossier.id] || null;
  const benchmarks = activeDossier.behindTheNumbers?.benchmarks || [];

  return (
    <div
      className={styles.backdrop}
      onClick={(e) => { if (e.target === e.currentTarget) closeDossier(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-title"
    >
      <div className={styles.modal}>
        {/* ── Close ── */}
        <button type="button" onClick={closeDossier} className={styles.closeBtn} aria-label="Close">
          <X size={18} />
        </button>

        {/* ── Clean Header ── */}
        <div style={{
          padding: '20px 24px',
          background: 'var(--bg-dark)',
          borderBottom: '3px solid var(--border-dark)',
          position: 'relative'
        }}>
          <div className={styles.badgeRow}>
            <span className={styles.verifiedBadge}>
              <ShieldCheck size={13} />
              VERIFIED ARCHITECTURAL DOSSIER
            </span>
            {conf.projectType && (
              <span
                className="brutal-badge"
                style={{
                  backgroundColor: conf.projectType.includes('Client') ? 'var(--accent-coral)' : 'var(--accent-lime)',
                  color: '#0A0A0A',
                  fontSize: '0.68rem',
                }}
              >
                {conf.projectType}
              </span>
            )}
            {conf.company && (
              <span className={styles.companyBadge}>
                <Building2 size={12} />
                {conf.company}
              </span>
            )}
            {conf.division && (
              <span className="brutal-badge" style={{ backgroundColor: 'var(--accent-gold)', color: '#0A0A0A', fontSize: '0.68rem' }}>
                {conf.division}
              </span>
            )}
          </div>
        </div>

        {/* ── Scrollable body ── */}
        <div className={styles.body}>

          {/* Title */}
          <div className={styles.titleBlock}>
            <h2
              id="dossier-title"
              className={styles.title}
              style={{ borderBottomColor: activeDossier.accentColor }}
            >
              {conf.unmaskedTitle || activeDossier.title}
            </h2>
            <p className={styles.subtitle}>{conf.unmaskedSubtitle || activeDossier.subtitle}</p>
          </div>

          {/* Client & Deployment Context */}
          {conf.client && (
            <div className={styles.clientBox} style={{ borderLeftColor: activeDossier.accentColor }}>
              <span className={styles.clientLabel}>TARGET PLATFORM &amp; DEPLOYMENT SCOPE:</span>
              <div className={styles.clientValue}>{conf.client}</div>
            </div>
          )}

          {/* Quick Metrics Header Grid */}
          {conf.confidentialMetrics?.length > 0 && (
            <div className={styles.metricsGrid}>
              {conf.confidentialMetrics.map((m, i) => (
                <div key={i} className={styles.metricCard} style={{ borderTopColor: activeDossier.accentColor }}>
                  <div className={styles.metricValue}>{m.value}</div>
                  <div className={styles.metricLabel}>{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* ── 1. The Core Idea Behind The Architecture ── */}
          <div className={styles.dossierIdeaBox} style={{ borderLeftColor: activeDossier.accentColor }}>
            <span className={styles.dossierIdeaTitle}>
              <Cpu size={15} />
              <span>THE CORE ARCHITECTURAL PARADIGM &amp; PROBLEM STATEMENT:</span>
            </span>
            <p className={styles.dossierIdeaText}>
              {deepDive?.overview?.coreIdea || activeDossier.whatWeBuilt}
            </p>
            {(deepDive?.overview?.whyItWasBuilt || activeDossier.whatInfluenced) && (
              <p className={styles.dossierWhyText}>
                <strong>Why It Was Built:</strong> {deepDive?.overview?.whyItWasBuilt || activeDossier.whatInfluenced}
              </p>
            )}
          </div>

          {/* ── 2. Deep Architectural Breakthroughs ── */}
          {deepDive?.overview?.architecturalBreakthroughs?.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionHeading}>
                <Sparkles size={14} color="var(--accent-coral)" />
                <span>CORE ARCHITECTURAL BREAKTHROUGHS &amp; SUBSYSTEMS:</span>
              </div>
              <div className={styles.breakthroughGrid}>
                {deepDive.overview.architecturalBreakthroughs.map((b, bIdx) => (
                  <div key={bIdx} className={styles.breakthroughCard}>
                    <span className={styles.breakthroughCardTitle}>
                      <span style={{ color: activeDossier.accentColor }}>0{bIdx + 1}.</span>
                      <span>{b.title}</span>
                    </span>
                    <p className={styles.breakthroughCardDesc}>{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── 3. Empirical Benchmarks (Baseline vs Optimized) ── */}
          {benchmarks.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionHeading}>
                <CheckCircle2 size={14} color="#10B981" />
                <span>VERIFIED PRODUCTION BENCHMARKS (EMPIRICAL AUDIT):</span>
              </div>
              <div className={styles.benchGrid}>
                {benchmarks.map((b, i) => {
                  const maxVal = Math.max(b.baselineVal || 1, b.optimizedVal || 1);
                  const basePct = Math.min(100, Math.max(12, Math.round(((b.baselineVal || 1) / maxVal) * 100)));
                  const optPct = Math.min(100, Math.max(12, Math.round(((b.optimizedVal || 1) / maxVal) * 100)));

                  return (
                    <div key={i} className={styles.benchItem} style={{ borderLeftColor: activeDossier.accentColor }}>
                      <div className={styles.benchTopRow}>
                        <span className={styles.benchMetric}>{b.metric}</span>
                        {b.improvement && (
                          <span className={styles.benchBadge}>⚡ {b.improvement}</span>
                        )}
                      </div>
                      <div className={styles.benchRows}>
                        <div className={styles.benchRow}>
                          <span className={styles.benchLabel}>BASELINE:</span>
                          <div className={styles.benchTrack}>
                            <div className={styles.benchBase} style={{ width: `${basePct}%` }} />
                          </div>
                          <span className={styles.benchVal}>{b.baseline}</span>
                        </div>
                        <div className={styles.benchRow}>
                          <span className={styles.benchLabel} style={{ color: '#10B981', fontWeight: 800 }}>OPTIMIZED:</span>
                          <div className={styles.benchTrack}>
                            <div className={styles.benchOpt} style={{ width: `${optPct}%` }} />
                          </div>
                          <span className={styles.benchVal} style={{ color: '#10B981', fontWeight: 900 }}>{b.optimized}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── 4. Architecture Pipeline (System DAG) ── */}
          {conf.architectureSteps?.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionHeading}>
                <Layers size={14} color="var(--accent-coral)" />
                <span>CORE ARCHITECTURAL PIPELINE (SYSTEM DAG):</span>
              </div>
              <div className={styles.pipeline}>
                {conf.architectureSteps.map((s, i) => (
                  <div key={i} className={styles.pipelineItem}>
                    {/* Vertical connector line */}
                    {i < conf.architectureSteps.length - 1 && (
                      <div className={styles.pipelineLineWrap}>
                        <div className={styles.pipelineLine} style={{ background: activeDossier.accentColor }} />
                        <div className={styles.pipelineDot} style={{ background: activeDossier.accentColor }} />
                      </div>
                    )}
                    <div className={styles.pipelineStep}>
                      <div
                        className={styles.pipelineNum}
                        style={{ background: activeDossier.accentColor, color: '#0A0A0A' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className={styles.pipelineContent}>
                        <div className={styles.pipelineTitle}>{s.step}</div>
                        <p className={styles.pipelineDesc}>{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── 5. Dataset Strategy & Feature Engineering ── */}
          {deepDive?.dataset && (
            <div className={styles.section}>
              <div className={styles.sectionHeading}>
                <Database size={14} color="var(--accent-indigo)" />
                <span>DATASET ARCHITECTURE &amp; FEATURE ENGINEERING:</span>
              </div>
              <div className={styles.dossierDatasetGrid}>
                <div className={styles.dossierDatasetItem}>
                  <span className={styles.dossierDatasetLabel}>DATASET SOURCE &amp; REPOSITORIES</span>
                  <div className={styles.dossierDatasetVal}>{deepDive.dataset.source}</div>
                </div>
                <div className={styles.dossierDatasetItem}>
                  <span className={styles.dossierDatasetLabel}>TRAINING SCALE &amp; COHORTS</span>
                  <div className={styles.dossierDatasetVal}>{deepDive.dataset.scale}</div>
                </div>
                <div className={styles.dossierDatasetFull}>
                  <span className={styles.dossierDatasetLabel}>MODALITIES &amp; INPUT DATA TYPES</span>
                  <div className={styles.dossierDatasetVal}>{deepDive.dataset.modalities}</div>
                </div>
                <div className={styles.dossierDatasetFull}>
                  <span className={styles.dossierDatasetLabel}>PREPROCESSING &amp; NORMALIZATION PIPELINE</span>
                  <div className={styles.dossierDatasetVal}>{deepDive.dataset.preprocessing}</div>
                </div>
                <div className={styles.dossierDatasetFull}>
                  <span className={styles.dossierDatasetLabel}>FEATURE ENGINEERING &amp; LATENT REPRESENTATIONS</span>
                  <div className={styles.dossierDatasetVal}>{deepDive.dataset.featureEngineering}</div>
                </div>
              </div>
            </div>
          )}

          {/* ── 6. Engineering Tradeoffs & Bottlenecks ── */}
          {deepDive?.tradeoffs && (
            <div className={styles.section}>
              <div className={styles.sectionHeading}>
                <Scale size={14} color="var(--accent-gold)" />
                <span>CRITICAL ENGINEERING BOTTLENECKS &amp; TRADEOFFS:</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ background: '#FFF5F5', borderLeft: '4px solid var(--accent-coral)', padding: '10px 14px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 900, color: 'var(--accent-coral)', display: 'block', marginBottom: '3px' }}>
                    CRITICAL BOTTLENECK:
                  </span>
                  <p style={{ margin: 0, fontSize: '0.84rem', color: '#0A0A0A', lineHeight: 1.5 }}>
                    {deepDive.tradeoffs.bottleneck}
                  </p>
                </div>
                <div style={{ background: '#F0FDF4', borderLeft: '4px solid #10B981', padding: '10px 14px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 900, color: '#166534', display: 'block', marginBottom: '3px' }}>
                    AI/ML ARCHITECTURAL SOLUTION:
                  </span>
                  <p style={{ margin: 0, fontSize: '0.84rem', color: '#0A0A0A', lineHeight: 1.5 }}>
                    {deepDive.tradeoffs.solution}
                  </p>
                </div>
                <div style={{ background: '#FFFBEB', borderLeft: '4px solid #F59E0B', padding: '10px 14px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 900, color: '#92400E', display: 'block', marginBottom: '3px' }}>
                    ENGINEERING TRADEOFF ACCEPTED:
                  </span>
                  <p style={{ margin: 0, fontSize: '0.84rem', color: '#0A0A0A', lineHeight: 1.5 }}>
                    {deepDive.tradeoffs.tradeoff}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ── 7. Engineering Note ── */}
          {(conf.systemNote || conf.dossierNote) && (
            <div className={styles.noteBox}>
              <Zap size={15} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span className={styles.noteLabel}>ENGINEERING IMPACT TAKEAWAY:</span>{' '}
                {conf.systemNote || conf.dossierNote}
              </div>
            </div>
          )}

          {/* ── 8. Tech Stack ── */}
          <div>
            <div className={styles.techHeading}>TECHNOLOGIES &amp; LIBRARIES DEPLOYED:</div>
            <div className={styles.techGrid}>
              {activeDossier.tech.map((t, i) => (
                <span key={i} className={styles.techTag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
