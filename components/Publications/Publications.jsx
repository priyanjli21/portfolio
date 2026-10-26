'use client';
import React from 'react';
import { BookOpen, ExternalLink, ArrowUpRight } from 'lucide-react';
import { publications } from '../../data/portfolio';
import { WavyUnderline, ScribbleSparkle } from '../Annotations/HandDrawn';
import styles from './Publications.module.css';

export default function Publications() {
  return (
    <section id="publications" className={styles.pubSection}>
      <div className="container-main">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSuper}>05. ACADEMIC DISCOVERY</span>
          <h2 className={styles.sectionTitle}>
            RESEARCH & PAPERS
          </h2>
          <div style={{ maxWidth: '380px' }}>
            <WavyUnderline color="var(--accent-indigo)" />
          </div>
        </div>

        {/* Stack of Academic Papers */}
        <div className={styles.pubsStack}>
          {publications.map((pub) => (
            <article key={pub.id} className={styles.pubCard}>
              <div className={styles.pubTop}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className={styles.venueBadge}>{pub.venue}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700 }}>
                    {pub.year}
                  </span>
                </div>

                <span
                  className={styles.statusBadge}
                  style={{
                    backgroundColor: pub.statusColor,
                    color: pub.status === 'In Progress' ? '#FAF8F5' : '#0A0A0A'
                  }}
                >
                  ● {pub.status}
                </span>
              </div>

              <h3 className={styles.pubTitle}>{pub.title}</h3>
              <p className={styles.pubSummary}>{pub.summary}</p>

              <div className={styles.pubBottom}>
                <div className={styles.pubTagsRow}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', marginRight: '6px' }}>
                    KEYWORDS:
                  </span>
                  {pub.tags.map((t, tIdx) => (
                    <span key={tIdx} className={styles.pubTag}>
                      {t}
                    </span>
                  ))}
                </div>

                {pub.codeOrLink && (
                  <a
                    href={pub.codeOrLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-brutal btn-brutal-accent ${styles.pubActionBtn}`}
                    style={{ padding: '6px 14px', fontSize: '0.72rem', gap: '6px', whiteSpace: 'nowrap' }}
                  >
                    <span>{pub.linkText || 'VIEW PUBLICATION'}</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
