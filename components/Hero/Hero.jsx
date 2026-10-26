'use client';
import React from 'react';
import { WobblyCircle } from '../Annotations/HandDrawn';
import InteractiveTiltCard from './InteractiveTiltCard';
import { ArrowDownRight, FolderGit2, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {

  return (
    <section id="hero" className={styles.hero}>

      {/* 1. Giant Name in Clean, Massive Brutalist Typography */}
      <div className={styles.heroNameContainer}>
        <h1 className={styles.heroName}>PRIYANJLI</h1>
      </div>

      {/* Tactical Folder Drawer Header Bar (Behance OS Folder Tabs) */}
      <div className={styles.tactileFolderBar}>
        <div className={styles.folderBarLabel}>
          <FolderGit2 size={15} />
          <span>SYSTEM ARCHIVES:</span>
        </div>
        <div className={styles.folderTabsList}>
          <a href="#projects" className={styles.folderTabItem}>
            <span className={styles.folderTabNum}>01</span>
            <span className={styles.folderTabName}>AGENTIC DAGs</span>
          </a>
          <a href="#projects" className={styles.folderTabItem}>
            <span className={styles.folderTabNum}>02</span>
            <span className={styles.folderTabName}>GENERATIVE AI &amp; RAG</span>
          </a>
          <a href="#projects" className={styles.folderTabItem}>
            <span className={styles.folderTabNum}>03</span>
            <span className={styles.folderTabName}>DIFFUSION &amp; VISION</span>
          </a>
          <a href="#publications" className={styles.folderTabItem}>
            <span className={styles.folderTabNum}>04</span>
            <span className={styles.folderTabName}>ONCOLOGY PAPERS</span>
          </a>
        </div>
      </div>

      {/* 2. Body Grid: Interactive 3D Physics Cards on Left, Expertise on Right */}
      <div className={styles.heroBody}>
        {/* Left Tilted Cards Stack with 3D Physics & Folder Notches */}
        <div className={styles.cardsStack}>

          {/* Card 1: Agentic Workflows with Animated DAG */}
          <InteractiveTiltCard
            id="hero-card-1"
            href="#projects"
            indexLabel="SYS_01"
            telemetryTag="LANGGRAPH // REDIS <1ms"
            title="AGENTIC WORKFLOWS"
            subtitle="AUTONOMOUS DAG / MULTI-AGENT / FASTAPI"
            bgColor="#5F27CD"
            textColor="#FAF8F5"
            baseRotation={-3}
            maxWidth="440px"
            type="dag"
          />

          {/* Card 2: Generative AI & LLMs with Animated Attention Waves */}
          <InteractiveTiltCard
            id="hero-card-2"
            href="#projects"
            indexLabel="SYS_02"
            telemetryTag="RAG ARCHITECTURES // 50+ MODELS"
            title="GENERATIVE AI & LLMs"
            subtitle="SUB-MS RETRIEVAL / RECSYS / SSE"
            bgColor="#FF6B6B"
            textColor="#0A0A0A"
            baseRotation={2}
            baseTranslateX={14}
            maxWidth="430px"
            type="wave"
          />

          {/* Card 3: Neural Vision & Multimodal with Scanning Laser Radar */}
          <InteractiveTiltCard
            id="hero-card-3"
            href="#projects"
            indexLabel="SYS_03"
            telemetryTag="PYTORCH // 0.998 ROC-AUC"
            title="NEURAL VISION & MULTIMODAL"
            subtitle="16.5X DDIM DIFFUSION / ONCOLOGY AI"
            bgColor="#F5C542"
            textColor="#0A0A0A"
            baseRotation={4}
            baseTranslateX={8}
            maxWidth="440px"
            type="vision"
          />
        </div>

        {/* Right Side: Status, Value Pitch, Metrics, Expertise & CTAs */}
        <div className={styles.heroRight}>
          {/* Status Badge */}
          <div className={styles.heroStatusBadge}>
            <span className={styles.heroStatusDot} />
            <span>OPEN FOR APPLIED AI &amp; AGENTIC ROLES</span>
          </div>

          {/* Quick Pitch */}
          <p className={styles.heroPitch}>
            <strong>AI/ML Engineer</strong> specializing in <strong>Generative AI</strong>,{' '}
            <strong>Autonomous Agent Workflows</strong>, and <strong>Multi-Modal Systems</strong> with 2.5+ years of
            production experience and published peer-reviewed research.
          </p>

          {/* Mini Highlight Stats with Precision Corner Crosshairs */}
          <div className={styles.heroMetricsRow}>
            <div className={styles.heroMetricCard}>
              <span className={styles.metricCrosshairTL}>+</span>
              <span className={styles.metricCrosshairBR}>+</span>
              <div className={styles.heroMetricValue}>2.5+</div>
              <div className={styles.heroMetricLabel}>Yrs Industry Exp</div>
            </div>
            <div className={styles.heroMetricCard}>
              <span className={styles.metricCrosshairTL}>+</span>
              <span className={styles.metricCrosshairBR}>+</span>
              <div className={styles.heroMetricValue}>15+</div>
              <div className={styles.heroMetricLabel}>GenAI Deployed</div>
            </div>
            <div className={styles.heroMetricCard}>
              <span className={styles.metricCrosshairTL}>+</span>
              <span className={styles.metricCrosshairBR}>+</span>
              <div className={styles.heroMetricValue}>0.998</div>
              <div className={styles.heroMetricLabel}>ROC-AUC Oncology</div>
            </div>
          </div>

          {/* Expertise Section */}
          <div className={styles.expertiseArea}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} color="var(--accent-indigo)" />
              <h3 className={styles.expertiseTitle}>CORE EXPERTISE</h3>
            </div>
            <div className={styles.expertiseTags}>
              <WobblyCircle color="#5F27CD">PYTORCH</WobblyCircle>
              <WobblyCircle color="#FF6B6B">DIFFUSION MODELS</WobblyCircle>
              <WobblyCircle color="#0A0A0A">LANGGRAPH / AGENTS</WobblyCircle>
              <WobblyCircle color="#5F27CD">RAG &amp; VECTOR SEARCH</WobblyCircle>
              <WobblyCircle color="#2E66FF">SERVERLESS AWS</WobblyCircle>
              <WobblyCircle color="#0A0A0A">MLOPS &amp; CI/CD</WobblyCircle>
              <WobblyCircle color="#FF6B6B">MULTIMODAL AI</WobblyCircle>
            </div>
          </div>

          {/* Quick Action CTAs */}
          <div className={styles.heroActions}>
            <a
              href="/priyanjli_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal"
            >
              <span>VIEW RESUME [PDF]</span>
            </a>
            <a
              href="#projects"
              className="btn-brutal btn-brutal-accent"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <span>EXPLORE ARCHIVE</span>
              <ArrowDownRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
