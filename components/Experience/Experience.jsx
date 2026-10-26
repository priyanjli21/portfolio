'use client';
import React, { Fragment } from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2, FolderGit2, ArrowUpRight, Sparkles } from 'lucide-react';
import { experiences } from '../../data/portfolio';
import { useAccess } from '../../context/AccessContext';
import { WavyUnderline, ScribbleSparkle } from '../Annotations/HandDrawn';
import styles from './Experience.module.css';

function BoldText({ text }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>
  );
}

const EXPERIENCE_PLATFORMS = {
  "Matchbest Software Pvt. Ltd.": [
    { name: "Autonomous Multi-Agent Platform", id: "stealth-multiagent" },
    { name: "Multimodal RecSys & Ranking Engine", id: "multimodal-recsys" },
    { name: "Context-Aware Autonomous RAG", id: "agentic-rag-engine" },
    { name: "Clinical PACS DICOM Radiology Engine", id: "medical-imaging-pacs" }
  ],
  "Slaaang Media Pvt. Ltd.": [
    { name: "Real-Time Stream Moderation & Neural Feed", id: "projects" }
  ]
};

export default function Experience() {
  const { isUnlocked } = useAccess();

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container-main">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <span className={styles.sectionSuper}>04. TRACK RECORD &amp; IMPACT</span>
            <span className="brutal-badge" style={{ backgroundColor: 'var(--accent-coral)', color: '#0A0A0A' }}>
              2.5+ YEARS COMBINED
            </span>
            {isUnlocked && (
              <span className="brutal-badge" style={{ backgroundColor: '#DCFCE7', color: '#14532D', borderColor: '#16A34A', fontWeight: 800 }}>
                ✨ VERIFIED PRODUCTION TENURE
              </span>
            )}
          </div>
          <h2 className={styles.sectionTitle}>
            WORK EXPERIENCE
          </h2>
          <div style={{ maxWidth: '380px' }}>
            <WavyUnderline color="var(--accent-coral)" />
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine} />

          {experiences.map((exp, idx) => {
            const delivered = EXPERIENCE_PLATFORMS[exp.company] || [];

            return (
              <div key={idx} className={styles.timelineItem}>
                <div
                  className={styles.timelineNode}
                  style={{ backgroundColor: exp.current ? 'var(--accent-coral)' : 'var(--accent-gold)' }}
                />

                <div className={styles.expCard}>
                  <div className={styles.expHeader}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '4px' }}>
                        <h3 className={styles.roleTitle} style={{ margin: 0 }}>{exp.role}</h3>
                        <span
                          className="brutal-badge"
                          style={{
                            backgroundColor: exp.current ? 'var(--accent-coral)' : 'var(--accent-gold)',
                            color: '#0A0A0A'
                          }}
                        >
                          {exp.badge}
                        </span>
                      </div>
                      <div className={styles.companyName}>
                        {exp.company} — <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontStyle: 'normal' }}>{exp.location}</span>
                      </div>
                    </div>

                    <div className={styles.periodBadge}>
                      <Calendar size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className={styles.bulletsList}>
                    {exp.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className={styles.bulletItem}>
                        <span className={styles.bulletPointer}>▪</span>
                        <span><BoldText text={bullet} /></span>
                      </li>
                    ))}
                  </ul>

                  {/* UNLOCKED: Production Platforms Shipped */}
                  {isUnlocked && delivered.length > 0 && (
                    <div className={styles.unlockedPlatformsBlock}>
                      <div className={styles.unlockedPlatformsHeader}>
                        <FolderGit2 size={13} />
                        <span>PRODUCTION ARCHITECTURES SHIPPED DURING THIS TENURE:</span>
                      </div>
                      <div className={styles.unlockedPlatformsList}>
                        {delivered.map((plat, pIdx) => (
                          <a
                            key={pIdx}
                            href="#projects"
                            onClick={scrollToProjects}
                            className={styles.platformPill}
                          >
                            <span>{plat.name}</span>
                            <ArrowUpRight size={11} />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className={styles.expTechRow}>
                    <span className={styles.expTechLabel}>STACK USED:</span>
                    {exp.tech.map((t, tIdx) => (
                      <span key={tIdx} className="brutal-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
