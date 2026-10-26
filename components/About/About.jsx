'use client';
import React from 'react';
import { GraduationCap, Award, BookOpen, Sparkles, Cpu, Layers, ShieldCheck, Activity } from 'lucide-react';
import { personalInfo, education } from '../../data/portfolio';
import { useAccess } from '../../context/AccessContext';
import { WavyUnderline, ScribbleSparkle } from '../Annotations/HandDrawn';
import styles from './About.module.css';

export default function About() {
  const { isUnlocked } = useAccess();

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container-main">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSuper}>01. PROFILE &amp; PHILOSOPHY</span>
          <h2 className={styles.sectionTitle}>
            ABOUT ME
          </h2>
          <div style={{ maxWidth: '280px' }}>
            <WavyUnderline color="var(--accent-coral)" />
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className={styles.aboutGrid}>
          {/* Left Column: Bio & Tagline */}
          <div className={styles.bioBlock}>
            <blockquote className={styles.bioQuote}>
              "{personalInfo.tagline}"
            </blockquote>

            <div className={styles.bioBody}>
              <p>
                <strong>Hey, I’m Priyanjli!</strong> An AI/ML Engineer obsessed with building deep intelligence that actually ships to production. My journey into machine learning started in the final year of my Bachelor’s. As AI began surging, my curiosity took over—I needed to understand the mechanics from first principles. I went straight back to the <strong>perceptron</strong>, the elemental building block of neural networks. The revelation that something so mathematically pure could learn representations from data, and that stacking layers could unlock the foundation models driving the world today, completely hooked me.
              </p>
              <p>
                During my Master’s in Computer Science, research pushed me to question not just <em>how</em> systems behave, but <em>why</em>—advancing from classical statistical formulations to designing, training, and benchmarking custom deep neural architectures and reinforcement learning agents.
              </p>
              <p>
                Over the last <strong>2.5+ years in the AI industry</strong>, I’ve operated at the intersection of bleeding-edge research and mission-critical production engineering. I’ve architected and deployed <strong>15+ production Generative AI features</strong>, autonomous multi-agent DAG workflows (LangGraph), low-latency RAG pipelines, and multi-modal recommendation engines serving high-concurrency traffic. My end-to-end workflow bridges model fine-tuning, vector retrieval indexing (<code>FAISS</code>, <code>ChromaDB</code>), Redis sub-millisecond context caching, and serverless MLOps on AWS.
              </p>
              <p>
                Alongside building production systems, I actively conduct scientific research across core AI domains, with 3 published and peer-reviewed papers in oncology biomarkers, statistical survival modeling, and adaptive reinforcement learning.
              </p>
              <p>
                I’m actively looking for high-impact engineering opportunities in <strong>Applied AI</strong>, <strong>Agentic Systems</strong>, and <strong>AI/ML Platform Engineering</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Stats & Education */}
          <div>
            {/* Quick Metrics */}
            <div className={styles.statsGrid}>
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className={styles.statCard}>
                  <div>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                  <div className={styles.statHighlight}>{stat.highlight}</div>
                </div>
              ))}
            </div>

            {/* Academic Background */}
            <div style={{ marginTop: 'var(--space-6)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <GraduationCap size={20} color="var(--accent-indigo)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  ACADEMIC FOUNDATION
                </span>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className={styles.eduCard}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4 className={styles.eduTitle}>{edu.degree}</h4>
                    <span className="brutal-badge" style={{ backgroundColor: idx === 1 ? 'var(--accent-gold)' : 'var(--bg-secondary)' }}>
                      {edu.badge}
                    </span>
                  </div>
                  <div className={styles.eduInstitution}>{edu.institution}</div>
                  <div className={styles.eduMeta}>
                    <span>{edu.score}</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* UNLOCKED ONLY: Staff & Senior AI Engineering Dossier                     */}
        {/* ========================================================================= */}
        {isUnlocked && (
          <div className={styles.unlockedAboutDossier}>
            <div className={styles.unlockedHeaderBanner}>
              <div className={styles.unlockedBadge}>
                <Sparkles size={16} />
                <span>UNLOCKED // STAFF &amp; SENIOR AI/ML ENGINEERING DOSSIER</span>
              </div>
              <span className={styles.unlockedClearance}>
                VERIFIED ARCHITECTURAL SPECIFICATION &amp; PRODUCTION SCOPE
              </span>
            </div>

            <div className={styles.dossierGrid}>
              {/* Left: Engineering Methodology & Pillars */}
              <div className={styles.dossierMain}>
                <h3 className={styles.dossierHeading}>
                  <Cpu size={20} color="var(--accent-coral)" />
                  <span>FIRST-PRINCIPLES SYSTEMS DESIGN &amp; LATENCY BUDGETING</span>
                </h3>

                <p className={styles.dossierText}>
                  In production AI, algorithms succeed or fail on the boundary between <strong>mathematical correctness</strong> and <strong>hardware efficiency</strong>. My engineering methodology is grounded in three uncompromising rules:
                </p>

                <div className={styles.pillarsGrid}>
                  <div className={styles.pillarCard} style={{ borderLeftColor: 'var(--accent-coral)' }}>
                    <span className={styles.pillarTitle}>01. ZERO-BLACKBOX NEURAL MECHANICS</span>
                    <p className={styles.pillarDesc}>
                      I construct backbones from first principles—whether designing custom U-Net residual blocks with cross-attention conditioning, writing custom loss shaping for reinforcement learning agents, or formulating elastic-net regularized Cox survival models for high-dimensional genomics.
                    </p>
                  </div>

                  <div className={styles.pillarCard} style={{ borderLeftColor: 'var(--accent-indigo)' }}>
                    <span className={styles.pillarTitle}>02. DETERMINISTIC AGENT STATE &amp; GUARDRAILS</span>
                    <p className={styles.pillarDesc}>
                      Probabilistic LLMs become reliable enterprise software only when constrained by cyclic LangGraph state machines. I enforce strict Pydantic JSON grammars, sub-graph checkpointing, and dynamic planner-worker-critic validation to guarantee zero infinite loops and zero unvalidated outputs.
                    </p>
                  </div>

                  <div className={styles.pillarCard} style={{ borderLeftColor: 'var(--accent-gold)' }}>
                    <span className={styles.pillarTitle}>03. CACHE-ASIDE LATENCY BUDGETING</span>
                    <p className={styles.pillarDesc}>
                      Every millisecond of inference must justify its token cost. I leverage Redis cache-aside semantic indices to intercept redundant queries (saving up to 68% of LLM compute), dynamic batching on Triton, and quantization to guarantee sub-200ms P99 responses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Production Scope & Cloud GPU Ownership */}
              <div className={styles.scopeBox}>
                <div className={styles.scopeTitle}>
                  <Activity size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                  <span>PRODUCTION INFRASTRUCTURE SCOPE</span>
                </div>

                <div className={styles.scopeMetricsList}>
                  <div className={styles.scopeMetricItem}>
                    <span className={styles.scopeMetricVal}>15+ GenAI Features</span>
                    <span className={styles.scopeMetricLabel}>Architected and shipped to production enterprise users across multiple commercial platforms.</span>
                  </div>

                  <div className={styles.scopeMetricItem}>
                    <span className={styles.scopeMetricVal}>$15K+/mo Compute</span>
                    <span className={styles.scopeMetricLabel}>Hands-on management of NVIDIA A100/H100 GPU clusters, Triton serving instances, and serverless AWS MLOps.</span>
                  </div>

                  <div className={styles.scopeMetricItem}>
                    <span className={styles.scopeMetricVal}>50+ Models Routed</span>
                    <span className={styles.scopeMetricLabel}>Continuous benchmarking across open-weights models (Llama-3, Mistral, Qwen) and proprietary inference APIs.</span>
                  </div>

                  <div className={styles.scopeMetricItem}>
                    <span className={styles.scopeMetricVal}>0.9982 ROC-AUC</span>
                    <span className={styles.scopeMetricLabel}>Clinical oncology biomarker diagnostic accuracy across 5,300+ real patient cfDNA cohorts.</span>
                  </div>

                  <div className={styles.scopeMetricItem}>
                    <span className={styles.scopeMetricVal}>3 Peer-Reviewed Papers</span>
                    <span className={styles.scopeMetricLabel}>Published research in clinical genomics, statistical survival modeling, and reinforcement learning.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
