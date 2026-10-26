import React from 'react';
import Skills from '../../components/Skills/Skills';
import About from '../../components/About/About';

export const metadata = {
  title: 'Skills & Technical Stack — Priyanjli Gautam | AI/ML Engineer',
  description: 'Deep technical stack in PyTorch, LangChain, LLM Agents, Vector Databases, MLOps, and Computer Vision.'
};

export default function SkillsPage() {
  return (
    <main style={{ paddingTop: '60px' }}>
      <Skills />
      <About />
    </main>
  );
}
