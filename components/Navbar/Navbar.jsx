'use client';
import React, { useEffect, useState } from 'react';
import { ArrowUpRight, KeyRound, Lock, Unlock, ShieldCheck } from 'lucide-react';
import { useAccess } from '../../context/AccessContext';
import AccessModal from '../AccessLock/AccessModal';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const { isUnlocked, openModal, lock } = useAccess();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      const allSections = ['hero', 'about', 'skills', 'projects', 'experience', 'publications', 'contact'];
      
      for (let i = allSections.length - 1; i >= 0; i--) {
        const id = allSections[i];
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const allSectionsNav = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
  ];

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Left Title */}
        <a href="/#hero" onClick={(e) => handleNavClick(e, 'hero')} className={styles.title}>
          AI/ML ENGINEER
        </a>

        {/* Right Nav Items */}
        <div className={styles.rightGroup}>
          {allSectionsNav.map(({ id, label }) => (
            <a
              key={id}
              href={`/#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={`${styles.navItem} ${styles.sectionItem} ${activeSection === id ? styles.activeNavItem : ''}`}
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            onClick={isUnlocked ? lock : openModal}
            className={`${styles.navItem} ${styles.ndaNavBtn} ${isUnlocked ? styles.ndaNavBtnUnlocked : ''}`}
            title={isUnlocked ? "Click to lock and hide project details" : "Enter password to unmask protected projects"}
          >
            {isUnlocked ? (
              <span className={styles.ndaContent}>
                <span className="live-dot" style={{ width: '7px', height: '7px' }} />
                <span>UNLOCKED</span>
              </span>
            ) : (
              <span className={styles.ndaContent}>
                <KeyRound size={14} />
                <span>UNLOCK</span>
              </span>
            )}
          </button>
          <a
            href="/priyanjli_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.navItem} ${styles.resumeItem}`}
          >
            RESUME
            <ArrowUpRight size={14} className={styles.resumeIcon} />
          </a>
        </div>
      </div>
      <AccessModal />
    </header>
  );
}
