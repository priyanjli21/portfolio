import React from 'react';
import Preloader from '../components/Preloader/Preloader';
import Hero from '../components/Hero/Hero';
import KineticRibbon from '../components/SectionDivider/KineticRibbon';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import Publications from '../components/Publications/Publications';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <main>
      <Preloader />
      <Hero />
      <KineticRibbon
        topText="★ AUTONOMOUS AGENT WORKFLOWS // 15+ PRODUCTION GenAI FEATURES // LANGGRAPH MULTI-AGENT DAGs // SUB-MS REDIS CACHING //"
        bottomText="⚡ 16.5X ACCELERATED DIFFUSION // 0.998 ROC-AUC ONCOLOGY // 50+ MODELS ROUTED // RSNA DICOM DE-IDENTIFIED //"
        topBg="#0A0A0A"
        topColor="#FAF8F5"
        bottomBg="var(--accent-gold)"
        bottomColor="#0A0A0A"
      />
      <About />
      <Skills />
      <KineticRibbon
        topText="📁 SYSTEM ARCHIVES & DOSSIERS // FULL INFERENCE TELEMETRY // BENCHMARKS & LATENCY PROFILES // VERIFIED ARCHITECTURES //"
        bottomText="🔬 MULTI-AGENT STATE TRANSITIONS // DUAL-TIER MEMORY // SSE EVENT STREAMING // COMPUTER VISION & LLMs //"
        topBg="var(--accent-indigo)"
        topColor="#FAF8F5"
        bottomBg="var(--accent-coral)"
        bottomColor="#0A0A0A"
      />
      <Projects />
      <Experience />
      <Publications />
      <Contact />
    </main>
  );
}
