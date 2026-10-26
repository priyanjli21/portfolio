import React from 'react';
import Contact from '../../components/Contact/Contact';

export const metadata = {
  title: 'Contact & Connect — Priyanjli Gautam | AI/ML Engineer',
  description: 'Initiate connection with Priyanjli Gautam for AI/ML engineering, GenAI systems, and autonomous agent roles.'
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: '60px' }}>
      <Contact />
    </main>
  );
}
