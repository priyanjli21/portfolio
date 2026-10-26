'use client';
import React, { useEffect, useState } from 'react';
import styles from './MobileNav.module.css';

const NAV_ITEMS = [
  { id: 'hero', label: 'HOME' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'WORK' },
  { id: 'experience', label: 'EXP' },
  { id: 'publications', label: 'RESEARCH' },
  { id: 'contact', label: 'CONTACT' },
];

export default function MobileNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
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
    <nav className={styles.mobileNav} aria-label="Mobile Section Navigation">
      {NAV_ITEMS.map(({ id, label }) => (
        <a
          key={id}
          href={`/#${id}`}
          onClick={(e) => handleClick(e, id)}
          className={`${styles.mobileNavItem} ${activeSection === id ? styles.activeItem : ''}`}
          aria-current={activeSection === id ? 'location' : undefined}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
