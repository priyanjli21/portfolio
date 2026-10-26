'use client';
import React, { useState } from 'react';
import { personalProjects, companyProjects, projects } from '../../data/portfolio';
import { WavyUnderline } from '../Annotations/HandDrawn';
import { useAccess } from '../../context/AccessContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ProjectDossierModal from './ProjectDossierModal';
import InteractiveProjectCard from './InteractiveProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const { isUnlocked, openDossier } = useAccess();

  const displayedProjects = filter === 'personal'
    ? personalProjects
    : filter === 'company'
    ? companyProjects
    : projects;

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container-main">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSuper}>03. ARCHITECTURE &amp; CODE</span>
          <h2 className={styles.sectionTitle}>
            PROJECTS &amp; PLATFORMS
          </h2>
          <div style={{ maxWidth: '380px' }}>
            <WavyUnderline color="var(--accent-indigo)" />
          </div>
        </div>

        {/* Filter Tabs: Separate Personal vs Company */}
        <div className={styles.filterRow}>
          <button
            onClick={() => setFilter('all')}
            className={`${styles.filterBtn} ${filter === 'all' ? styles.activeFilterBtn : ''}`}
            aria-pressed={filter === 'all'}
          >
            ALL PROJECTS ({projects.length})
          </button>
          <button
            onClick={() => setFilter('personal')}
            className={`${styles.filterBtn} ${filter === 'personal' ? styles.activeFilterBtn : ''}`}
            aria-pressed={filter === 'personal'}
          >
            ⚡ INDEPENDENT &amp; RESEARCH ({personalProjects.length})
          </button>
          <button
            onClick={() => setFilter('company')}
            className={`${styles.filterBtn} ${filter === 'company' ? styles.activeFilterBtn : ''}`}
            aria-pressed={filter === 'company'}
          >
            🏢 INDUSTRY &amp; COMPANY ({companyProjects.length})
          </button>
        </div>

        {/* Grand 2-Column Grid with Full-Scale Clean Cards */}
        <div className={styles.projectsGrid}>
          {displayedProjects.map((project, idx) => (
            <InteractiveProjectCard
              key={project.id}
              project={project}
              idx={idx}
              isUnlocked={isUnlocked}
              openDossier={openDossier}
            />
          ))}
        </div>
      </div>

      <ProjectDossierModal />
    </section>
  );
}
