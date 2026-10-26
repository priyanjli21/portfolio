'use client';
import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, FileDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Annotations/Icons';
import { personalInfo } from '../../data/portfolio';
import { WavyUnderline, ScribbleSparkle } from '../Annotations/HandDrawn';
import confetti from 'canvas-confetti';
import styles from './Contact.module.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#FF6B6B', '#F5C542', '#5F27CD', '#FAF8F5']
        });
      } catch (e) {}
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      // clipboard unavailable — silent fallback
    }
  };

  return (
    <footer id="contact" className={styles.contactSection}>
      <div className="container-main">
        <div className={styles.contactContainer}>
          {/* Top Section */}
          <div className={styles.contactTop}>
            <span className={styles.contactSuper}>06. INITIATE CONNECTION</span>
            <h2 className={styles.contactTitle}>
              LET'S BUILD SOMETHING INTELLIGENT.
            </h2>
            <div style={{ maxWidth: '420px' }}>
              <WavyUnderline color="var(--accent-coral)" strokeWidth={4} />
            </div>
            <p className={styles.contactSubtitle}>
              Whether you're looking to deploy production AI agents, design low-latency RAG systems, or scale machine learning architectures—I'm open for collaboration and full-time opportunities.
            </p>
          </div>

          {/* Contact Grid */}
          {/* Contact Grid */}
          <div className={styles.contactGrid}>
            {/* Direct Channels */}
            <div className={styles.directChannels}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelCard}
                aria-label="Visit Priyanjli's LinkedIn Profile"
              >
                <div className={styles.channelHeader}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <LinkedinIcon size={18} color="#0A66C2" />
                    <span className={styles.channelType}>LINKEDIN</span>
                  </div>
                  <ArrowUpRight size={18} color="var(--accent-coral)" />
                </div>
                <div className={styles.channelValue}>in/priyanjli21</div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelCard}
                aria-label="Visit Priyanjli's GitHub Profile"
              >
                <div className={styles.channelHeader}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <GithubIcon size={18} color="#FFFFFF" />
                    <span className={styles.channelType}>GITHUB</span>
                  </div>
                  <ArrowUpRight size={18} color="var(--accent-coral)" />
                </div>
                <div className={styles.channelValue}>github.com/priyanjli21</div>
              </a>

              <a
                href={`mailto:${personalInfo.email}?subject=AI%2FML%20Engineering%20Opportunity%20%E2%80%94%20Priyanjli%20Gautam&body=Hi%20Priyanjli,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding%20an%20AI/ML%20engineering%20opportunity%20with%20our%20team.`}
                className={styles.channelCard}
                aria-label="Send direct email to Priyanjli"
              >
                <div className={styles.channelHeader}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Mail size={18} color="var(--accent-gold)" />
                    <span className={styles.channelType}>EMAIL INBOX</span>
                  </div>
                  <ArrowUpRight size={18} color="var(--accent-coral)" />
                </div>
                <div className={styles.channelValue}>{personalInfo.email}</div>
              </a>

              <div className={styles.channelCard} style={{ cursor: 'default' }}>
                <div className={styles.channelHeader}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={18} color="var(--accent-lime)" />
                    <span className={styles.channelType}>LOCATION // STATUS</span>
                  </div>
                  <span className={styles.liveIndicator}>
                    <span className={styles.pulseDot} />
                    <span>ACTIVE</span>
                  </span>
                </div>
                <div className={styles.channelValue} style={{ color: '#34D399', fontSize: '0.98rem' }}>
                  OPEN FOR AI/ML &amp; GENAI ROLES
                </div>
                <div className={styles.channelMeta}>
                  📍 Gurgaon, India • IST (UTC+5:30)
                </div>
              </div>
            </div>

            {/* Quick Action Panel */}
            <div className={styles.contactActionsPanel}>
              <div className={styles.actionPanelHeader}>
                <h3 className={styles.actionPanelTitle}>QUICK CONNECT</h3>
                <span className={styles.actionPanelTag}>HIRING RADAR</span>
              </div>

              {/* Recruiter Response SLA & Preferences */}
              <div className={styles.slaBadgeBox}>
                <div className={styles.slaItem}>
                  <span className={styles.slaDot} />
                  <div className={styles.slaContent}>
                    TYPICAL RESPONSE TIME: <strong style={{ color: '#34D399' }}>IN SECONDS // ACTIVE NOW</strong>
                  </div>
                </div>
                <div className={styles.slaItem}>
                  <span className={styles.slaPin}>📍</span>
                  <div className={styles.slaContent}>
                    PREFERENCE: <strong>HYBRID / REMOTE / ONSITE (GENAI &amp; AGENTS)</strong>
                  </div>
                </div>
              </div>
              
              <button
                type="button"
                className={styles.copyEmailBtn}
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                <span>{copied ? '✓ EMAIL COPIED TO CLIPBOARD' : personalInfo.email}</span>
                {copied ? <Check size={18} color="#10B981" /> : <Copy size={18} />}
              </button>

              <div className={styles.actionButtonRow}>
                <a
                  href={`mailto:${personalInfo.email}?subject=AI%2FML%20Engineering%20Opportunity%20%E2%80%94%20Priyanjli%20Gautam&body=Hi%20Priyanjli,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding%20an%20AI/ML%20engineering%20opportunity%20with%20our%20team.`}
                  className={`btn-brutal btn-brutal-secondary ${styles.actionBtnItem}`}
                >
                  <Mail size={16} />
                  <span>SEND EMAIL ↗</span>
                </a>

                <a
                  href="/priyanjli_resume.pdf"
                  download="Priyanjli_Gautam_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-brutal btn-brutal-accent ${styles.actionBtnItem}`}
                >
                  <FileDown size={16} />
                  <span>RESUME [PDF]</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className={styles.footer}>
            <div>
              PRIYANJLI GAUTAM © 2026 // INTENTIONAL CHAOS &amp; PRODUCTION RIGOR
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="/#hero" style={{ textDecoration: 'underline' }}>BACK TO TOP ↑</a>
              <span>GURGAON, INDIA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
