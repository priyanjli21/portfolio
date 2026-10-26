'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Activity, ShieldCheck, Sparkles } from 'lucide-react';
import styles from './Hero3DVisualizer.module.css';

export default function Hero3DVisualizer() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 380;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGL initialization failed:', e);
      return;
    }

    // Group to hold all rotating elements
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner Solid Glow Sphere (Core)
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x5f27cd,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // 2. Outer Wireframe Polyhedron
    const outerGeo = new THREE.IcosahedronGeometry(2.0, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xff6b6b,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // 3. Orbiting Data Ring 1
    const ring1Geo = new THREE.TorusGeometry(2.5, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xf5c542, transparent: true, opacity: 0.7 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    // 4. Orbiting Data Ring 2
    const ring2Geo = new THREE.TorusGeometry(2.7, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x2e66ff, transparent: true, opacity: 0.6 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    coreGroup.add(ring2);

    // 5. Floating Vertex Particles
    const particleCount = 220;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.4 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = radius * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0x10b981,
      transparent: true,
      opacity: 0.8
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particles);

    // Mouse tracking for dynamic interactive tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX = (x / rect.width) * 2 - 1;
      mouseY = -(y / rect.height) * 2 + 1;
    };

    container.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      coreGroup.rotation.y += delta * 0.4 + targetX * 0.04;
      coreGroup.rotation.x += delta * 0.2 - targetY * 0.04;

      innerMesh.rotation.y -= delta * 0.3;
      ring1.rotation.z += delta * 0.5;
      ring2.rotation.x += delta * 0.35;
      particles.rotation.y += delta * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', onMouseMove);

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      innerGeo.dispose();
      innerMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <div className={styles.canvasWrapper} ref={mountRef}>
      {/* Top HUD Overlay */}
      <div className={styles.hudOverlay}>
        <div className={styles.hudHeader}>
          <div className={styles.hudTitle}>
            <Activity size={14} />
            <span>3D AUTONOMOUS NEURAL TOPOLOGY</span>
          </div>
          <div className={styles.hudSub}>
            50+ ROUTED MODELS // REAL-TIME DAG TELEMETRY
          </div>
        </div>
      </div>

      <div className={styles.interactionHint}>
        MOUSE INTERACTION: ORBIT
      </div>

      {/* Bottom Telemetry Overlay */}
      <div className={styles.telemetryGrid}>
        <div className={styles.telemetryCard}>
          <span className={styles.telemetryKey}>SCHEDULER:</span>
          <span className={styles.telemetryVal}>LANGGRAPH DAG</span>
        </div>
        <div className={styles.telemetryCard}>
          <span className={styles.telemetryKey}>SESSION CACHE:</span>
          <span className={styles.telemetryVal}>REDIS &lt;1ms</span>
        </div>
        <div className={styles.telemetryCard}>
          <span className={styles.telemetryKey}>STREAMING:</span>
          <span className={styles.telemetryVal}>SSE LIVE REASONING</span>
        </div>
        <div className={styles.telemetryCard}>
          <span className={styles.telemetryKey}>INDEXING:</span>
          <span className={styles.telemetryVal}>SIGLIP + HNSW</span>
        </div>
      </div>
    </div>
  );
}
