'use client';
import React, { useState } from 'react';
import { Lock, Unlock, X, KeyRound, ArrowRight, Mail, Copy, Check } from 'lucide-react';
import { useAccess } from '../../context/AccessContext';
import styles from './AccessModal.module.css';

export default function AccessModal() {
  const { modalOpen, closeModal, unlock } = useAccess();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyDraft = async () => {
    const draftText = `To: priyanjligautam21@gmail.com\nSubject: Request for Passcode to Unmask Projects - Priyanjli Gautam\n\nHey Priyanjli,\n\nWould love the passcode to unmask your production platforms and architectural pipelines.\n\nWho I am (Name / Org / Team): \nWhy I'm tuning in (Hiring / Colab / Snooping): `;
    try {
      await navigator.clipboard.writeText(draftText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  if (!modalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passcode.trim()) {
      setError('Please enter a passcode.');
      return;
    }
    setError('');
    setLoading(true);

    const res = await unlock(passcode);
    setLoading(false);

    if (!res.success) {
      setError(res.message || 'Invalid passcode.');
    } else {
      setPasscode('');
    }
  };

  return (
    <div
      className={styles.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="recruiter-modal-title"
    >
      <div className={styles.modal}>
        <button
          type="button"
          onClick={closeModal}
          className={styles.closeBtn}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className={styles.headerArea}>
          <span className={styles.superTag}>00. CREDENTIALS VERIFICATION</span>
          <h2 id="recruiter-modal-title" className={styles.modalTitle}>
            UNMASK PROTECTED PROJECTS
          </h2>
          <p className={styles.modalDesc}>
            Enter the password provided with my resume or job application to unmask project codenames, company platforms, and detailed architectural workflows.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="recruiter-passcode" className={styles.inputLabel}>
              ENTER PASSWORD:
            </label>
            <input
              id="recruiter-passcode"
              type="text"
              autoFocus
              value={passcode}
              onChange={(e) => {
                setPasscode(e.target.value);
                if (error) setError('');
              }}
              placeholder="ENTER PASSWORD"
              className={styles.inputField}
              autoComplete="off"
            />
          </div>

          {error && <div className={styles.errorBanner}>{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className={styles.submitBtn}
          >
            {loading ? (
              <span>VERIFYING PASSWORD...</span>
            ) : (
              <>
                <KeyRound size={18} />
                <span>UNMASK PROJECTS</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>

          <div className={styles.requestBox}>
            <div className={styles.requestHeader}>
              <span className={styles.requestBadge}>DON'T HAVE THE PASSWORD?</span>
              <span className={styles.slaBadge}>⚡ REPLIES IN SECONDS</span>
            </div>
            <p className={styles.requestNote}>
              Hiring, collaborating, or just snooping on the neural pipelines? Grab an unmask key below — zero bureaucracy required:
            </p>
            <div className={styles.requestActions}>
              <a
                href="mailto:priyanjligautam21@gmail.com?subject=Request%20for%20Passcode%20to%20Unmask%20Projects%20-%20Priyanjli%20Gautam&body=Hey%20Priyanjli,%0D%0A%0D%0AWould%20love%20the%20passcode%20to%20unmask%20your%20production%20platforms%20and%20architectural%20pipelines.%0D%0A%0D%0AWho%20I%20am%20(Name%20/%20Org%20/%20Team):%20%0D%0AWhy%20I'm%20tuning%20in%20(Hiring%20/%20Colab%20/%20Snooping):%20"
                className={styles.emailBtn}
              >
                <Mail size={15} />
                <span>REQUEST VIA EMAIL ↗</span>
              </a>
              <button
                type="button"
                onClick={handleCopyDraft}
                className={styles.copyBtn}
              >
                {copied ? <Check size={15} color="#16a34a" /> : <Copy size={15} />}
                <span>{copied ? 'DRAFT COPIED!' : 'COPY DRAFT'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
