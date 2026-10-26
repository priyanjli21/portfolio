'use client';
import React, { useEffect, useState } from 'react';
import styles from './Sidebar.module.css';

const NAV_ITEMS = [
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'experience', label: 'WORK' },
  { id: 'publications', label: 'RESEARCH' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      let current = '';
      
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            current = item.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <aside className={styles.sidebar} aria-label="Vertical Section Navigation">
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`/#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={`${styles.sidebarBox} ${isActive ? styles.activeBox : ''}`}
            aria-current={isActive ? 'location' : undefined}
          >
            <span className={styles.vertText}>{item.label}</span>
          </a>
        );
      })}
    </aside>
  );
}
