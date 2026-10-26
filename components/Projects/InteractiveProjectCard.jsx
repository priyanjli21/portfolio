'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, FileText, Layers, Database, Scale, Sparkles, CheckCircle2, Calculator, ChevronDown, ChevronUp } from 'lucide-react';
import { GithubIcon } from '../Annotations/Icons';
import { PROJECT_DEEP_DIVES } from '../../data/projectDeepDives';
import styles from './Projects.module.css';
import tiltStyles from './InteractiveProjectCard.module.css';

export default function InteractiveProjectCard({
  project,
  idx,
  isUnlocked,
  openDossier
}) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [unlockedTab, setUnlockedTab] = useState('dataset');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const conf = project.confidential || {};
  const deepDive = PROJECT_DEEP_DIVES[project.id] || null;

  // Extract project-specific DAG nodes: prioritize behindTheNumbers.dagNodes, then conf.architectureSteps
  const dagNodes = project.behindTheNumbers?.dagNodes ||
    (conf.architectureSteps?.map((s, i) => ({
      step: `0${i + 1}`,
      name: s.step,
      tech: conf.division || 'Pipeline Node',
      desc: s.desc
    })) || []);

  return (
    <div
      ref={cardRef}
      className={`${tiltStyles.cardWrapper} ${visible ? tiltStyles.cardVisible : tiltStyles.cardHidden}`}
      style={{ transitionDelay: `${(idx % 2) * 0.12}s` }}
    >
      <article
        className={`${tiltStyles.projectCard} ${isUnlocked ? tiltStyles.unlockedGlow : ''}`}
        style={{ borderTop: `6px solid ${project.accentColor}` }}
      >
        {isUnlocked && <div className={tiltStyles.cardBorderBeam} />}

        <div className={tiltStyles.cardInnerTop}>
          {/* Card Top Category & Tag */}
          <div className={styles.cardTop}>
            <span
              className={styles.categoryPill}
              style={{
                backgroundColor: project.category?.includes('Independent') ? 'var(--accent-coral)' : 'var(--bg-dark)',
                color: project.category?.includes('Independent') ? '#0A0A0A' : '#FAF8F5'
              }}
            >
              {project.category?.includes('Independent') ? 'INDEPENDENT RESEARCH' : 'INDUSTRY PLATFORM'}
            </span>
            {isUnlocked && conf.company ? (
              <span className={styles.cardTag} style={{ background: '#DCFCE7', color: '#14532D', borderColor: '#16A34A', fontWeight: 800 }}>
                🏢 {conf.company}
              </span>
            ) : (
              project.tag && <span className={styles.cardTag}>{project.tag}</span>
            )}
          </div>

          {/* UNLOCKED TELEMETRY BADGE HEADER */}
          {isUnlocked && (
            <div className={styles.unlockedBadgeBanner}>
              <span className={styles.unlockedBadgeText}>
                <Sparkles size={13} />
                <span>UNLOCKED AI/ML DEEP DIVE ARCHITECTURE</span>
              </span>
              {conf.division && (
                <span className={styles.unlockedCompanyText}>
                  {conf.division}
                </span>
              )}
            </div>
          )}

          {/* Title & Subtitle */}
          <h3 className={styles.projectTitle}>
            {isUnlocked && conf.unmaskedTitle ? conf.unmaskedTitle : project.title}
          </h3>
          <div className={styles.projectSub}>
            {isUnlocked && conf.unmaskedSubtitle ? conf.unmaskedSubtitle : project.subtitle}
          </div>

          {/* ========================================================================= */}
          {/* 1. LOCKED VIEW: Clean, safe, high-level case study (user's preferred view) */}
          {/* ========================================================================= */}
          {!isUnlocked && (
            <>
              <div className={styles.caseStudyFlow}>
                <div className={styles.flowSection}>
                  <div className={styles.flowHeader}>
                    <span className={styles.flowStepBadge}>01</span>
                    <span className={styles.flowLabel}>WHAT WAS BUILT:</span>
                  </div>
                  <p className={styles.flowText}>{project.whatWeBuilt || project.description}</p>
                </div>

                {expanded && (
                  <>
                    {project.whatInfluenced && (
                      <div className={styles.flowSection}>
                        <div className={styles.flowHeader}>
                          <span className={styles.flowStepBadge} style={{ backgroundColor: 'var(--accent-coral)', color: '#0A0A0A' }}>02</span>
                          <span className={styles.flowLabel}>WHAT INFLUENCED IT (THE CHALLENGE):</span>
                        </div>
                        <p className={styles.flowText}>{project.whatInfluenced}</p>
                      </div>
                    )}
                    {project.whatEffect && (
                      <div className={styles.flowSection}>
                        <div className={styles.flowHeader}>
                          <span className={styles.flowStepBadge} style={{ backgroundColor: 'var(--accent-gold)', color: '#0A0A0A' }}>03</span>
                          <span className={styles.flowLabel}>THE IMPACT &amp; EFFECT:</span>
                        </div>
                        <p className={styles.flowText}>{project.whatEffect}</p>
                      </div>
                    )}
                  </>
                )}
              </div>

              {(project.whatInfluenced || project.whatEffect) && (
                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  className={styles.inCardExpandBtn}
                  aria-expanded={expanded}
                >
                  <span>{expanded ? 'COLLAPSE DETAILS ↑' : 'EXPAND ARCHITECTURAL CHALLENGE & IMPACT (02 // 03) ↓'}</span>
                  {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              )}

              {project.kpis?.length > 0 && (
                <div className={styles.kpiContainer}>
                  <div className={styles.kpiHeading}>KEY KPIs &amp; ARCHITECTURAL METRICS:</div>
                  <div className={styles.kpiPills}>
                    {project.kpis.map((kpi, kIdx) => (
                      <span key={kIdx} className={styles.kpiPill}>
                        <span className={styles.kpiDot} />
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* ========================================================================= */}
          {/* 2. UNLOCKED VIEW: Rich end-to-end AI/ML breakdown with visual elements    */}
          {/* ========================================================================= */}
          {isUnlocked && (
            <>
              {/* Unlocked Technical Exploration Tabs */}
              <div className={styles.deepDiveTabsRow}>
                <button
                  type="button"
                  onClick={() => setUnlockedTab('dataset')}
                  className={`${styles.deepDiveTabBtn} ${unlockedTab === 'dataset' ? styles.activeDeepDiveTab : ''}`}
                >
                  <Database size={13} />
                  <span>DATASET &amp; PREPROCESSING</span>
                </button>
                <button
                  type="button"
                  onClick={() => setUnlockedTab('dag')}
                  className={`${styles.deepDiveTabBtn} ${unlockedTab === 'dag' ? styles.activeDeepDiveTab : ''}`}
                >
                  <Layers size={13} />
                  <span>PIPELINE DAG &amp; LATENCIES</span>
                </button>
                <button
                  type="button"
                  onClick={() => setUnlockedTab('calculation')}
                  className={`${styles.deepDiveTabBtn} ${unlockedTab === 'calculation' ? styles.activeDeepDiveTab : ''}`}
                >
                  <Calculator size={13} />
                  <span>METRIC CALCULATIONS</span>
                </button>
                <button
                  type="button"
                  onClick={() => setUnlockedTab('tradeoffs')}
                  className={`${styles.deepDiveTabBtn} ${unlockedTab === 'tradeoffs' ? styles.activeDeepDiveTab : ''}`}
                >
                  <Scale size={13} />
                  <span>TRADEOFFS &amp; BOTTLENECKS</span>
                </button>
                <button
                  type="button"
                  onClick={() => setUnlockedTab('caseStudy')}
                  className={`${styles.deepDiveTabBtn} ${unlockedTab === 'caseStudy' ? styles.activeDeepDiveTab : ''}`}
                >
                  <FileText size={13} />
                  <span>CASE STUDY</span>
                </button>
              </div>



              {/* Tab 1: Dataset Strategy & Feature Engineering */}
              {unlockedTab === 'dataset' && deepDive?.dataset && (
                <div className={styles.datasetContainer}>
                  <div className={styles.datasetHeading}>
                    <Database size={15} color="var(--accent-indigo)" />
                    <span>DATASET ARCHITECTURE &amp; PREPROCESSING PIPELINE:</span>
                  </div>
                  <div className={styles.datasetGrid}>
                    <div className={styles.datasetItem}>
                      <span className={styles.datasetItemLabel}>DATASET SOURCE &amp; REPOSITORIES</span>
                      <div className={styles.datasetItemValue}>{deepDive.dataset.source}</div>
                    </div>
                    <div className={styles.datasetItem}>
                      <span className={styles.datasetItemLabel}>TRAINING SCALE &amp; COHORTS</span>
                      <div className={styles.datasetItemValue}>{deepDive.dataset.scale}</div>
                    </div>
                    <div className={styles.datasetItemFull}>
                      <span className={styles.datasetItemLabel}>MODALITIES &amp; INPUT DATA TYPES</span>
                      <div className={styles.datasetItemValue}>{deepDive.dataset.modalities}</div>
                    </div>
                    <div className={styles.datasetItemFull}>
                      <span className={styles.datasetItemLabel}>PREPROCESSING &amp; NORMALIZATION PIPELINE</span>
                      <div className={styles.datasetItemValue}>{deepDive.dataset.preprocessing}</div>
                    </div>
                    <div className={styles.datasetItemFull}>
                      <span className={styles.datasetItemLabel}>FEATURE ENGINEERING &amp; LATENT REPRESENTATIONS</span>
                      <div className={styles.datasetItemValue}>{deepDive.dataset.featureEngineering}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Visual End-to-End Pipeline DAG Flow */}
              {unlockedTab === 'dag' && dagNodes.length > 0 && (() => {
                const WATERFALL_COLORS = ['#FF6B6B', '#38BDF8', '#10B981', '#F59E0B', '#A855F7', '#EC4899'];
                const parseMs = (lat) => {
                  if (!lat) return 10;
                  if (lat.includes('ms')) return parseFloat(lat);
                  if (lat.includes('s')) return parseFloat(lat) * 1000;
                  return 10;
                };
                const totalMs = dagNodes.reduce((acc, n) => acc + parseMs(n.latency), 0);

                return (
                  <div className={styles.visualDagContainer}>
                    <div className={styles.visualDagHeading}>
                      <Layers size={14} color="var(--accent-indigo)" />
                      <span>END-TO-END PIPELINE DAG (NODE-BY-NODE TELEMETRY):</span>
                    </div>

                    <div className={styles.visualDagFlow}>
                      {dagNodes.map((n, i) => (
                        <div key={i} className={styles.visualDagStep}>
                          <div className={styles.visualDagCard}>
                            <div className={styles.visualDagTop}>
                              <span className={styles.visualDagNum}>0{i + 1}</span>
                              {n.latency && (
                                <span className={styles.visualDagLatency}>{n.latency}</span>
                              )}
                            </div>
                            <div className={styles.visualDagName}>{n.name}</div>
                            {n.tech && (
                              <span className={styles.visualDagTech}>{n.tech}</span>
                            )}
                            <p className={styles.visualDagDesc}>{n.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Segmented Latency Waterfall Bar */}
                    {dagNodes.some(n => n.latency) && (
                      <div className={styles.latencyWaterfallBox}>
                        <div className={styles.latencyWaterfallTitle}>
                          <span>INFERENCE LATENCY WATERFALL DISTRIBUTION:</span>
                          <span style={{ color: 'var(--accent-coral)' }}>TOTAL: ~{totalMs > 1000 ? `${(totalMs / 1000).toFixed(2)}s` : `${Math.round(totalMs)}ms`}</span>
                        </div>
                        <div className={styles.latencyWaterfallBar}>
                          {dagNodes.map((n, i) => {
                            const pct = Math.max(4, Math.round((parseMs(n.latency) / totalMs) * 100));
                            return (
                              <div
                                key={i}
                                className={styles.latencyWaterfallSegment}
                                style={{
                                  width: `${pct}%`,
                                  backgroundColor: WATERFALL_COLORS[i % WATERFALL_COLORS.length]
                                }}
                                title={`Step 0${i + 1} (${n.name}): ${n.latency || 'N/A'} (${pct}%)`}
                              />
                            );
                          })}
                        </div>
                        <div className={styles.latencyWaterfallLegend}>
                          {dagNodes.map((n, i) => (
                            <span key={i} className={styles.legendItem}>
                              <span
                                className={styles.legendDot}
                                style={{ backgroundColor: WATERFALL_COLORS[i % WATERFALL_COLORS.length] }}
                              />
                              <span>0{i + 1} {n.latency ? `(${n.latency})` : ''}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Tab 3: How Metrics Were Calculated & Verified */}
              {unlockedTab === 'calculation' && (() => {
                const benchmarks = project.behindTheNumbers?.benchmarks || [];

                return (
                  <div className={styles.calculationContainer} style={{ marginTop: 0, marginBottom: '16px' }}>
                    <div className={styles.calculationHeading}>
                      <CheckCircle2 size={14} color="var(--accent-lime)" />
                      <span>EMPIRICAL BENCHMARKS &amp; MATHEMATICAL METHODOLOGY:</span>
                    </div>

                    {/* Visual Dual-Bar Benchmark Charts */}
                    {benchmarks.length > 0 && (
                      <div className={styles.benchmarkList}>
                        {benchmarks.map((b, bIdx) => {
                          const maxVal = Math.max(b.baselineVal || 1, b.optimizedVal || 1);
                          const basePct = Math.min(100, Math.max(12, Math.round(((b.baselineVal || 1) / maxVal) * 100)));
                          const optPct = Math.min(100, Math.max(12, Math.round(((b.optimizedVal || 1) / maxVal) * 100)));

                          return (
                            <div key={bIdx} className={styles.benchmarkCard}>
                              <div className={styles.benchmarkTop}>
                                <span className={styles.benchmarkMetricName}>{b.metric}</span>
                                {b.improvement && (
                                  <span className={styles.benchmarkImprovementBadge}>
                                    ⚡ {b.improvement}
                                  </span>
                                )}
                              </div>

                              <div className={styles.dualBarContainer}>
                                <div className={styles.barTrackRow}>
                                  <span className={styles.barTagLabel}>BASELINE</span>
                                  <div className={styles.barOuterTrack}>
                                    <div
                                      className={styles.barFillBaseline}
                                      style={{ width: `${basePct}%` }}
                                    />
                                  </div>
                                  <span className={styles.barValueText} style={{ color: '#A1A1AA' }}>
                                    {b.baseline}
                                  </span>
                                </div>

                                <div className={styles.barTrackRow}>
                                  <span className={styles.barTagLabel} style={{ color: '#10B981' }}>OPTIMIZED</span>
                                  <div className={styles.barOuterTrack}>
                                    <div
                                      className={styles.barFillOptimized}
                                      style={{ width: `${optPct}%` }}
                                    />
                                  </div>
                                  <span className={styles.barValueText} style={{ color: '#10B981' }}>
                                    {b.optimized}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Mathematical Formulation & Evaluation Setup */}
                    {deepDive?.metricCalculation ? (
                      <div className={styles.calculationRow}>
                        <div>
                          <strong>Hardware &amp; Evaluation Setup:</strong> {deepDive.metricCalculation.methodology}
                        </div>
                        {deepDive.metricCalculation.formula && (
                          <div>
                            <strong>Mathematical Formulation:</strong>
                            <div className={styles.calculationFormulaBox}>
                              {deepDive.metricCalculation.formula}
                            </div>
                          </div>
                        )}
                        <div>
                          <strong>Baseline Reference:</strong> {deepDive.metricCalculation.baselineComparison}
                        </div>
                      </div>
                    ) : (
                      <p style={{ color: '#D1D5DB', fontSize: '0.82rem', margin: 0 }}>
                        Performance verified via multi-run empirical benchmarks under production concurrency.
                      </p>
                    )}

                    {project.kpis?.length > 0 && (
                      <div className={styles.kpiContainer} style={{ marginTop: '14px', marginBottom: 0 }}>
                        <div className={styles.kpiHeading} style={{ color: 'var(--accent-gold)' }}>VERIFIED PRODUCTION TELEMETRY:</div>
                        <div className={styles.kpiPills}>
                          {project.kpis.map((kpi, kIdx) => (
                            <span key={kIdx} className={styles.kpiPill}>
                              <span className={styles.kpiDot} />
                              {kpi}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Tab 4: Bottlenecks & Architectural Tradeoffs */}
              {unlockedTab === 'tradeoffs' && deepDive?.tradeoffs && (
                <div className={styles.tradeoffContainer}>
                  <div className={styles.tradeoffItem}>
                    <span className={styles.tradeoffLabel}>CRITICAL ENGINEERING BOTTLENECK:</span>
                    <p className={styles.tradeoffText}>{deepDive.tradeoffs.bottleneck}</p>
                  </div>
                  <div className={styles.tradeoffItem} style={{ borderLeftColor: 'var(--accent-lime)' }}>
                    <span className={styles.tradeoffLabel} style={{ color: 'var(--accent-lime)' }}>AI/ML ARCHITECTURAL SOLUTION:</span>
                    <p className={styles.tradeoffText}>{deepDive.tradeoffs.solution}</p>
                  </div>
                  <div className={styles.tradeoffItem} style={{ borderLeftColor: 'var(--accent-gold)' }}>
                    <span className={styles.tradeoffLabel} style={{ color: '#D97706' }}>ENGINEERING TRADEOFF ACCEPTED:</span>
                    <p className={styles.tradeoffText}>{deepDive.tradeoffs.tradeoff}</p>
                  </div>
                </div>
              )}

              {/* Tab 5: Case Study Flow */}
              {unlockedTab === 'caseStudy' && (
                <div className={styles.caseStudyFlow}>
                  <div className={styles.flowSection}>
                    <div className={styles.flowHeader}>
                      <span className={styles.flowStepBadge}>01</span>
                      <span className={styles.flowLabel}>WHAT WAS BUILT:</span>
                    </div>
                    <p className={styles.flowText}>{project.whatWeBuilt || project.description}</p>
                  </div>
                  {project.whatInfluenced && (
                    <div className={styles.flowSection}>
                      <div className={styles.flowHeader}>
                        <span className={styles.flowStepBadge} style={{ backgroundColor: 'var(--accent-coral)', color: '#0A0A0A' }}>02</span>
                        <span className={styles.flowLabel}>WHAT INFLUENCED IT (THE CHALLENGE):</span>
                      </div>
                      <p className={styles.flowText}>{project.whatInfluenced}</p>
                    </div>
                  )}
                  {project.whatEffect && (
                    <div className={styles.flowSection}>
                      <div className={styles.flowHeader}>
                        <span className={styles.flowStepBadge} style={{ backgroundColor: 'var(--accent-gold)', color: '#0A0A0A' }}>03</span>
                        <span className={styles.flowLabel}>THE IMPACT &amp; EFFECT:</span>
                      </div>
                      <p className={styles.flowText}>{project.whatEffect}</p>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Card Footer: Tech Stack and Links (Pinned Strictly to Bottom Baseline) */}
        <div className={styles.cardBottom}>
          {isUnlocked && openDossier && project.id === 'prism-video-intelligence' && (
            <button
              type="button"
              onClick={() => openDossier(project)}
              className={styles.dossierTriggerBtn}
            >
              <FileText size={15} />
              <span>VIEW FULL ARCHITECTURAL DOSSIER [PRISM LAB]</span>
              <ArrowUpRight size={15} />
            </button>
          )}

          <div className={styles.techPills}>
            {project.tech.map((t, tIdx) => (
              <span key={tIdx} className={styles.techPill}>{t}</span>
            ))}
          </div>
          {(project.github || project.liveUrl) && (
            <div className={styles.cardActionRow}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.codeLink}>
                  <GithubIcon size={16} />
                  <span>VIEW GITHUB REPO</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal btn-brutal-accent"
                  style={{ padding: '8px 16px', fontSize: '0.75rem', gap: '6px' }}
                >
                  <span>LIVE PLATFORM</span>
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
