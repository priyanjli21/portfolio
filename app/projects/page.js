import React from 'react';
import Projects from '../../components/Projects/Projects';
import Experience from '../../components/Experience/Experience';

export const metadata = {
  title: 'Projects & Work — Priyanjli Gautam | AI/ML Engineer',
  description: 'Production Generative AI workflows, multi-agent autonomous orchestration, sub-350ms RAG pipelines, and cloud MLOps infrastructure.'
};

export default function ProjectsPage() {
  return (
    <main style={{ paddingTop: '60px' }}>
      <Projects />
      <Experience />
    </main>
  );
}
