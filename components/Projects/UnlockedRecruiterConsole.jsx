'use client';
import React, { useState } from 'react';
import {
  ShieldCheck,
  Activity,
  Layers,
  BarChart3,
  Wrench,
  FileText,
  ArrowUpRight,
  ChevronRight,
  Cpu,
  Flame,
  CheckCircle2,
  AlertCircle,
  Scale
} from 'lucide-react';
import { GithubIcon } from '../Annotations/Icons';
import ProjectMetricsGraph from './ProjectMetricsGraph';
import Projects3DVisualizer from '../3D/Projects3DVisualizer';
import styles from './UnlockedRecruiterConsole.module.css';

const DOMAIN_TABS = [
  { id: 'all', label: 'ALL ARCHITECTURES' },
  { id: 'agentic', label: 'AGENTIC & LANGGRAPH' },
  { id: 'genai', label: 'GEN AI & DIFFUSION' },
  { id: 'vision', label: 'MEDICAL VISION & ONCOLOGY' },
  { id: 'infra', label: 'HIGH-CONCURRENCY MLOPS' },
];

export default function UnlockedRecruiterConsole({ projects, openDossier }) {
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id || 'diffusion-pipeline');
  const [activeInspectorTab, setActiveInspectorTab] = useState('benchmarks');
  const [show3DPipeline, setShow3DPipeline] = useState(false);

  // Filter projects by domain
  const filteredProjects = projects.filter((p) => {
    if (selectedDomain === 'all') return true;
    const t = `${p.tag} ${p.title} ${p.tech?.join(' ')}`.toLowerCase();
    if (selectedDomain === 'agentic') return t.includes('agent') || t.includes('langgraph') || t.includes('dag');
    if (selectedDomain === 'genai') return t.includes('diffusion') || t.includes('generative') || t.includes('llm');
    if (selectedDomain === 'vision') return t.includes('oncology') || t.includes('tumor') || t.includes('vision') || t.includes('radiology');
    if (selectedDomain === 'infra') return t.includes('redis') || t.includes('concurrency') || t.includes('fastapi') || t.includes('aws');
    return true;
  });

  // Active project
  const activeProject = projects.find((p) => p.id === activeProjectId) || filteredProjects[0] || projects[0];
  const conf = activeProject?.confidential || {};
  const isConf = activeProject?.isConfidential;
  const numbers = activeProject?.behindTheNumbers;

  return (
    <div className={styles.consoleContainer}>
      {/* Console Top Command Ribbon */}
      <div className={styles.commandRibbon}>
        <div className={styles.ribbonLeft}>
          <span className={styles.declassifiedBadge}>
            <ShieldCheck size={14} />
            SYSTEM ARCHITECTURE WORKSTATION
          </span>
          <span className={styles.telemetryMotto}>
            INTERACTIVE TELEMETRY &amp; BENCHMARK SUITE // DECLASSIFIED
          </span>
        </div>
        <button
          type="button"
          onClick={() => setShow3DPipeline(!show3DPipeline)}
          className={`${styles.toggle3DBtn} ${show3DPipeline ? styles.toggle3DBtnActive : ''}`}
        >
          <Activity size={13} />
          <span>{show3DPipeline ? 'HIDE 3D STAGE' : 'VIEW 3D NEURAL STAGE'}</span>
        </button>
      </div>

      {/* Optional 3D Isometric Stage Drawer */}
      {show3DPipeline && (
        <div className={styles.stage3DDrawer}>
          <Projects3DVisualizer />
        </div>
      )}

      {/* Domain Quick Tabs */}
      <div className={styles.domainTabsRow}>
        {DOMAIN_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setSelectedDomain(tab.id);
              const firstInDomain = projects.find((p) => {
                if (tab.id === 'all') return true;
                const t = `${p.tag} ${p.title} ${p.tech?.join(' ')}`.toLowerCase();
                if (tab.id === 'agentic') return t.includes('agent') || t.includes('langgraph') || t.includes('dag');
                if (tab.id === 'genai') return t.includes('diffusion') || t.includes('generative') || t.includes('llm');
                if (tab.id === 'vision') return t.includes('oncology') || t.includes('tumor') || t.includes('vision') || t.includes('radiology');
                if (tab.id === 'infra') return t.includes('redis') || t.includes('concurrency') || t.includes('fastapi') || t.includes('aws');
                return true;
              });
              if (firstInDomain) setActiveProjectId(firstInDomain.id);
            }}
            className={`${styles.domainTabBtn} ${selectedDomain === tab.id ? styles.activeDomainTab : ''}`}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Split Workstation: Left Directory List, Right Deep-Dive Inspector */}
      <div className={styles.workstationGrid}>
        {/* Left Column: Fast Directory Selector */}
        <div className={styles.directoryCol}>
          <div className={styles.directoryHeader}>
            <Cpu size={14} />
            <span>SYSTEM DOSSIERS ({filteredProjects.length})</span>
          </div>

          <div className={styles.directoryList}>
            {filteredProjects.map((p, idx) => {
              const isSelected = p.id === activeProject.id;
              const speedupMetric = p.behindTheNumbers?.benchmarks?.[0]?.improvement || p.kpis?.[0];

              return (
                <div
                  key={p.id}
                  onClick={() => setActiveProjectId(p.id)}
                  className={`${styles.directoryItem} ${isSelected ? styles.directoryItemActive : ''}`}
                  style={{
                    borderLeftColor: isSelected ? (p.accentColor || 'var(--accent-coral)') : 'transparent'
                  }}
                >
                  <div className={styles.itemTopRow}>
                    <span className={styles.itemIndex}>SYS_{String(idx + 1).padStart(2, '0')}</span>
                    <span
                      className={styles.itemCategory}
                      style={{
                        backgroundColor: p.category?.includes('Independent') ? 'var(--accent-coral)' : '#0A0A0A',
                        color: p.category?.includes('Independent') ? '#0A0A0A' : '#FAF8F5'
                      }}
                    >
                      {p.category?.includes('Independent') ? 'RESEARCH' : 'ENTERPRISE'}
                    </span>
                  </div>

                  <h4 className={styles.itemTitle}>
                    {p.isConfidential && conf.unmaskedTitle ? conf.unmaskedTitle : p.title}
                  </h4>

                  {speedupMetric && (
                    <div className={styles.itemMetricPill}>
                      <Flame size={12} color="var(--accent-gold)" />
                      <span>{speedupMetric}</span>
                    </div>
                  )}

                  <div className={styles.itemTechRow}>
                    {p.tech?.slice(0, 3).map((t, tIdx) => (
                      <span key={tIdx} className={styles.miniTech}>{t}</span>
                    ))}
                    {p.tech?.length > 3 && <span className={styles.miniTech}>+{p.tech.length - 3}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Deep-Dive Technical Inspector */}
        <div className={styles.inspectorCol}>
          {activeProject ? (
            <div className={styles.inspectorCard}>
              {/* Top Inspector Header */}
              <div className={styles.inspectorTop}>
                <div>
                  <div className={styles.metaRow}>
                    <span className={styles.systemTagBadge}>
                      {activeProject.category?.includes('Independent') ? '🔬 INDEPENDENT BENCHMARK' : '🏢 ENTERPRISE PRODUCTION SYSTEM'}
                    </span>
                    {isConf && (
                      <span className={styles.confBadge}>
                        🏢 {conf.company || 'Enterprise AI Team'}
                      </span>
                    )}
                  </div>

                  <h3 className={styles.inspectorTitle}>
                    {isConf && conf.unmaskedTitle ? conf.unmaskedTitle : activeProject.title}
                  </h3>
                  <div className={styles.inspectorSubtitle}>
                    {isConf && conf.unmaskedSubtitle ? conf.unmaskedSubtitle : activeProject.subtitle}
                  </div>
                </div>

                {/* Actions */}
                <div className={styles.actionBtns}>
                  {isConf && (
                    <button
                      type="button"
                      onClick={() => openDossier(activeProject)}
                      className={styles.dossierBtn}
                    >
                      <FileText size={14} />
                      <span>FULL CASE STUDY</span>
                      <ArrowUpRight size={14} />
                    </button>
                  )}
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLinkBtn}
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveLinkBtn}
                    >
                      <span>LIVE APP</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Inspector Content Navigation */}
              <div className={styles.inspectorTabNav}>
                <button
                  type="button"
                  onClick={() => setActiveInspectorTab('benchmarks')}
                  className={`${styles.subTabBtn} ${activeInspectorTab === 'benchmarks' ? styles.subTabBtnActive : ''}`}
                >
                  <BarChart3 size={13} />
                  <span>BENCHMARKS &amp; SPEEDUPS</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveInspectorTab('dag')}
                  className={`${styles.subTabBtn} ${activeInspectorTab === 'dag' ? styles.subTabBtnActive : ''}`}
                >
                  <Layers size={13} />
                  <span>DAG PIPELINE LATENCY</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveInspectorTab('bottleneck')}
                  className={`${styles.subTabBtn} ${activeInspectorTab === 'bottleneck' ? styles.subTabBtnActive : ''}`}
                >
                  <Wrench size={13} />
                  <span>BOTTLENECK &amp; TRADEOFFS</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveInspectorTab('specs')}
                  className={`${styles.subTabBtn} ${activeInspectorTab === 'specs' ? styles.subTabBtnActive : ''}`}
                >
                  <Cpu size={13} />
                  <span>ENGINEERING SPECS &amp; KPIS</span>
                </button>
              </div>

              {/* Inspector Tab Panes */}
              <div className={styles.tabContentArea}>
                {/* 1. BENCHMARKS & SPEEDUPS */}
                {activeInspectorTab === 'benchmarks' && (
                  <div>
                    {numbers?.headline && (
                      <div className={styles.headlineCallout}>
                        <Flame size={16} color="var(--accent-coral)" />
                        <span>{numbers.headline}</span>
                      </div>
                    )}
                    <ProjectMetricsGraph project={activeProject} />
                  </div>
                )}

                {/* 2. DAG PIPELINE LATENCY */}
                {activeInspectorTab === 'dag' && (
                  <div className={styles.dagTabContent}>
                    <div className={styles.dagExplainer}>
                      <span>END-TO-END LATENCY &amp; NODE EXECUTION GRAPH:</span>
                    </div>
                    {numbers?.dagNodes ? (
                      <ProjectMetricsGraph project={activeProject} />
                    ) : (
                      <div className={styles.kpiContainer}>
                        {activeProject.features?.map((f, fIdx) => (
                          <div key={fIdx} className={styles.kpiItem}>
                            <CheckCircle2 size={15} color="var(--accent-lime)" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 3. BOTTLENECK & TRADEOFFS */}
                {activeInspectorTab === 'bottleneck' && (
                  <div className={styles.bottleneckStack}>
                    {numbers?.bottleneck && (
                      <div className={styles.tradeoffBox} style={{ borderColor: 'var(--accent-coral)' }}>
                        <div className={styles.boxHeader} style={{ color: 'var(--accent-coral)' }}>
                          <AlertCircle size={14} />
                          <span>PRODUCTION BOTTLENECK</span>
                        </div>
                        <p className={styles.boxText}>{numbers.bottleneck}</p>
                      </div>
                    )}

                    {numbers?.howWeAchieved && (
                      <div className={styles.tradeoffBox} style={{ borderColor: 'var(--accent-lime)' }}>
                        <div className={styles.boxHeader} style={{ color: 'var(--accent-lime)' }}>
                          <CheckCircle2 size={14} />
                          <span>ARCHITECTURAL SOLUTION</span>
                        </div>
                        <p className={styles.boxText}>{numbers.howWeAchieved}</p>
                      </div>
                    )}

                    {numbers?.tradeoffs && (
                      <div className={styles.tradeoffBox} style={{ borderColor: 'var(--accent-gold)' }}>
                        <div className={styles.boxHeader} style={{ color: 'var(--accent-gold)' }}>
                          <Scale size={14} />
                          <span>ENGINEERING TRADEOFFS &amp; GUARDRAILS</span>
                        </div>
                        <p className={styles.boxText}>{numbers.tradeoffs}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* 4. SPECS & KPIS */}
                {activeInspectorTab === 'specs' && (
                  <div className={styles.specsContainer}>
                    <div className={styles.caseStudyStep}>
                      <span className={styles.stepNum}>01</span>
                      <div>
                        <strong>WHAT WAS BUILT:</strong>
                        <p>{activeProject.whatWeBuilt || activeProject.description}</p>
                      </div>
                    </div>

                    {activeProject.whatInfluenced && (
                      <div className={styles.caseStudyStep}>
                        <span className={styles.stepNum} style={{ background: 'var(--accent-coral)', color: '#0A0A0A' }}>02</span>
                        <div>
                          <strong>THE CHALLENGE &amp; INFLUENCE:</strong>
                          <p>{activeProject.whatInfluenced}</p>
                        </div>
                      </div>
                    )}

                    {activeProject.whatEffect && (
                      <div className={styles.caseStudyStep}>
                        <span className={styles.stepNum} style={{ background: 'var(--accent-gold)', color: '#0A0A0A' }}>03</span>
                        <div>
                          <strong>THE IMPACT &amp; EFFECT:</strong>
                          <p>{activeProject.whatEffect}</p>
                        </div>
                      </div>
                    )}

                    {activeProject.kpis?.length > 0 && (
                      <div className={styles.kpisGrid}>
                        {activeProject.kpis.map((kpi, kIdx) => (
                          <div key={kIdx} className={styles.kpiTile}>
                            <span className={styles.kpiTileDot} />
                            <span>{kpi}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Technologies Footer Bar */}
              <div className={styles.inspectorFooter}>
                <span className={styles.techLabel}>SYSTEM STACK:</span>
                <div className={styles.techPillsRow}>
                  {activeProject.tech?.map((t, idx) => (
                    <span key={idx} className={styles.techPill}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.emptyState}>Select a project to inspect</div>
          )}
        </div>
      </div>
    </div>
  );
}
