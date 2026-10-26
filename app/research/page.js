import React from 'react';
import Publications from '../../components/Publications/Publications';

export const metadata = {
  title: 'Research & Publications — Priyanjli Gautam | AI/ML Engineer',
  description: 'Published research in reinforcement learning dynamics (ICITEEB), deep oncology biomarkers (IJCA), and LLM optimal context architectures.'
};

export default function ResearchPage() {
  return (
    <main style={{ paddingTop: '60px' }}>
      <Publications />
    </main>
  );
}
