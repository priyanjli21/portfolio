'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessContext = createContext({
  isUnlocked: false,
  unlock: async () => false,
  lock: () => {},
  modalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  activeDossier: null,
  openDossier: () => {},
  closeDossier: () => {}
});

export function AccessProvider({ children }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDossier, setActiveDossier] = useState(null);

  useEffect(() => {
    // 1. Check existing session
    try {
      const saved = sessionStorage.getItem('priyanjli_recruiter_nda');
      if (saved === 'unlocked') {
        setIsUnlocked(true);
      }
    } catch (e) {}

    // 2. Check query params for instant unlock via shared link (e.g. ?access=recruiter2026)
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const queryPass = params.get('access') || params.get('key');
        if (queryPass) {
          const valid = ['peekaboo', 'takealook', 'knockknock', 'guesswhat', 'justme'];
          if (valid.includes(queryPass.toLowerCase().trim())) {
            setIsUnlocked(true);
            sessionStorage.setItem('priyanjli_recruiter_nda', 'unlocked');
          }
        }
      }
    } catch (e) {}
  }, []);

  const unlock = async (passcode) => {
    try {
      const res = await fetch('/api/verify-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode })
      });
      const data = await res.json();
      if (data.success) {
        setIsUnlocked(true);
        try {
          sessionStorage.setItem('priyanjli_recruiter_nda', 'unlocked');
        } catch (e) {}
        setModalOpen(false);
        return { success: true };
      }
      return { success: false, message: data.message || 'Invalid passcode.' };
    } catch (err) {
      // Fallback client check if offline or network fails
      const valid = ['peekaboo', 'takealook', 'knockknock', 'guesswhat', 'justme'];
      if (valid.includes((passcode || '').toLowerCase().trim())) {
        setIsUnlocked(true);
        sessionStorage.setItem('priyanjli_recruiter_nda', 'unlocked');
        setModalOpen(false);
        return { success: true };
      }
      return { success: false, message: 'Verification error. Please try again.' };
    }
  };

  const lock = () => {
    setIsUnlocked(false);
    setActiveDossier(null);
    try {
      sessionStorage.removeItem('priyanjli_recruiter_nda');
    } catch (e) {}
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openDossier = (project) => setActiveDossier(project);
  const closeDossier = () => setActiveDossier(null);

  return (
    <AccessContext.Provider
      value={{
        isUnlocked,
        unlock,
        lock,
        modalOpen,
        openModal,
        closeModal,
        activeDossier,
        openDossier,
        closeDossier
      }}
    >
      {children}
    </AccessContext.Provider>
  );
}

export function useAccess() {
  return useContext(AccessContext);
}
