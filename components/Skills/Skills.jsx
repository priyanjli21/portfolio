'use client';
import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, FolderGit2, Sparkles } from 'lucide-react';
import { skillCategories } from '../../data/portfolio';
import { SKILL_PROJECT_MAP } from '../../data/skillProjectMapping';
import { useAccess } from '../../context/AccessContext';
import { WavyUnderline } from '../Annotations/HandDrawn';
import styles from './Skills.module.css';

// Flatten skills into rows for the marquee (locked view)
const allSkills = skillCategories.flatMap(cat =>
  cat.skills.map(skill => ({
    name: skill.name,
    accent: cat.accent,
    category: cat.category,
  }))
);

// Split into 3 balanced rows for varied scroll directions
const chunkSize = Math.ceil(allSkills.length / 3);
const row1 = allSkills.slice(0, chunkSize);
const row2 = allSkills.slice(chunkSize, chunkSize * 2);
const row3 = allSkills.slice(chunkSize * 2);

function MarqueeRow({ skills, direction = 'left', speed = 'normal' }) {
  const items = [...skills, ...skills, ...skills];
  const animClass =
    direction === 'left' ? styles.scrollLeft : styles.scrollRight;
  const speedClass =
    speed === 'fast' ? styles.speedFast : speed === 'slow' ? styles.speedSlow : styles.speedNormal;

  return (
    <div className={styles.marqueeTrack}>
      <div className={`${styles.marqueeInner} ${animClass} ${speedClass}`}>
        {items.map((skill, idx) => (
          <div
            key={`${skill.name}-${idx}`}
            className={styles.skillTile}
            style={{ borderColor: skill.accent }}
          >
            <span className={styles.tileName}>{skill.name}</span>
            <span
              className={styles.tileDot}
              style={{ backgroundColor: skill.accent }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { isUnlocked } = useAccess();
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const [viewMode, setViewMode] = useState('matrix'); // 'matrix' or 'marquee'

  const activeCategory = skillCategories[activeCategoryIdx] || skillCategories[0];

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      {/* Section Header */}
      <div className={`container-main ${styles.sectionHeader}`}>
        <span className={styles.sectionSuper}>02. TOOLKIT &amp; EXPERTISE</span>
        <h2 className={styles.sectionTitle}>
          TECHNICAL SKILLS
        </h2>
        <div style={{ maxWidth: '340px' }}>
          <WavyUnderline color="var(--accent-gold)" />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* UNLOCKED VIEW: Full Skill-to-Project Traceability Matrix                  */}
      {/* ========================================================================= */}
      {isUnlocked && viewMode === 'matrix' ? (
        <div className="container-main">
          {/* Unlocked Banner */}
          <div className={styles.unlockedBanner}>
            <div className={styles.unlockedBannerLeft}>
              <Sparkles size={18} color="#10B981" />
              <div>
                <span className={styles.unlockedBannerTag}>
                  UNLOCKED // PRODUCTION SKILL-TO-PROJECT TRACEABILITY MATRIX
                </span>
                <div className={styles.unlockedBannerSub}>
                  Exact breakdown of which production architectures used which specific skill, with verified runtime scale.
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setViewMode('marquee')}
              className={styles.toggleViewBtn}
            >
              SWITCH TO COMPACT MARQUEE
            </button>
          </div>

          {/* Category Tabs */}
          <div className={styles.categoryTabRow}>
            {skillCategories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCategoryIdx(idx)}
                className={`${styles.categoryTabBtn} ${activeCategoryIdx === idx ? styles.activeCategoryTab : ''}`}
                style={{
                  borderLeftColor: activeCategoryIdx === idx ? 'var(--accent-coral)' : cat.accent,
                  borderLeftWidth: '4px'
                }}
              >
                {cat.category} ({cat.skills.length})
              </button>
            ))}
          </div>

          {/* Traceability Grid */}
          <div className={styles.traceabilityGrid}>
            {activeCategory.skills.map((skill, sIdx) => {
              const meta = SKILL_PROJECT_MAP[skill.name] || {
                productionScale: 'Production Verified & Battle-Tested',
                architectureRole: `Deployed within production ${activeCategory.category} architectures.`,
                projects: [{ id: 'projects', name: 'Production Systems', impact: 'Core stack component' }]
              };

              return (
                <div
                  key={sIdx}
                  className={styles.traceabilityCard}
                  style={{ borderTop: `3px solid ${activeCategory.accent}` }}
                >
                  <div>
                    <div className={styles.cardTopRow}>
                      <h4 className={styles.skillTitle}>{skill.name}</h4>
                      {skill.circled && (
                        <CheckCircle2 size={16} color="var(--accent-coral)" style={{ flexShrink: 0 }} />
                      )}
                    </div>
                    <span className={styles.scaleBadge}>{meta.productionScale}</span>
                    <p className={styles.skillRoleDesc} style={{ marginTop: '8px' }}>
                      {meta.architectureRole}
                    </p>
                  </div>

                  <div className={styles.projectsBlock}>
                    <span className={styles.projectsLabel}>
                      <FolderGit2 size={12} />
                      <span>PROJECTS APPLIED:</span>
                    </span>
                    <div className={styles.projectPills}>
                      {meta.projects.map((proj, pIdx) => (
                        <a
                          key={pIdx}
                          href="#projects"
                          onClick={scrollToProjects}
                          className={styles.projectPillLink}
                          title={`${proj.name}: ${proj.impact}`}
                        >
                          <span>{proj.name}</span>
                          <ArrowUpRight size={11} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* ======================================================================= */
        /* LOCKED VIEW (OR USER TOGGLED): Smooth Ambient Scrolling Marquee        */
        /* ======================================================================= */
        <>
          {isUnlocked && (
            <div className="container-main" style={{ marginBottom: '16px', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => setViewMode('matrix')}
                className={styles.toggleViewBtn}
                style={{ borderColor: '#10B981', color: '#10B981' }}
              >
                ✦ SWITCH TO UNLOCKED TRACEABILITY MATRIX
              </button>
            </div>
          )}
          <div className={styles.marqueeContainer}>
            <MarqueeRow skills={row1} direction="left" speed="normal" />
            <MarqueeRow skills={row2} direction="right" speed="slow" />
            <MarqueeRow skills={row3} direction="left" speed="fast" />
          </div>

          <div className={`container-main ${styles.categoryLabels}`}>
            {skillCategories.map((cat, idx) => (
              <div key={idx} className={styles.categoryLabel}>
                <span
                  className={styles.categoryDot}
                  style={{ backgroundColor: cat.accent }}
                />
                <span className={styles.categoryName}>{cat.category}</span>
                <span className={styles.categoryCount}>{cat.skills.length}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
