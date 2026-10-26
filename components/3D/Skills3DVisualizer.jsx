'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './Skills3DVisualizer.module.css';

export default function Skills3DVisualizer() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 280;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.z = 7;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGL init failed:', e);
      return;
    }

    const constellationGroup = new THREE.Group();
    scene.add(constellationGroup);

    // Tech Cluster Nodes
    const nodes = [
      { name: 'PyTorch', x: -2.2, y: 0.8, z: 0.3, color: 0xff6b6b },
      { name: 'CUDA', x: -1.6, y: -0.9, z: -0.4, color: 0x10b981 },
      { name: 'LangGraph', x: 0.2, y: 1.4, z: 0.5, color: 0x5f27cd },
      { name: 'Triton', x: 0.8, y: -0.2, z: -0.2, color: 0xf5c542 },
      { name: 'Redis', x: 2.1, y: 0.9, z: 0.4, color: 0xff6b6b },
      { name: 'Qdrant HNSW', x: 1.8, y: -1.1, z: -0.5, color: 0x2e66ff },
      { name: 'FastAPI', x: -0.4, y: -1.3, z: 0.6, color: 0x10b981 },
      { name: 'AWS SAM', x: -0.9, y: 0.1, z: -0.8, color: 0xf5c542 }
    ];

    const spheres = [];
    const sphereGeo = new THREE.SphereGeometry(0.18, 16, 16);

    nodes.forEach((n) => {
      const mat = new THREE.MeshBasicMaterial({ color: n.color });
      const mesh = new THREE.Mesh(sphereGeo, mat);
      mesh.position.set(n.x, n.y, n.z);
      constellationGroup.add(mesh);
      spheres.push(mesh);
    });

    // Connecting Synaptic Lines between adjacent nodes
    const lineMat = new THREE.LineBasicMaterial({ color: 0x444444, transparent: true, opacity: 0.6 });
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y, nodes[i].z - nodes[j].z);
        if (d < 2.5) {
          const points = [
            new THREE.Vector3(nodes[i].x, nodes[i].y, nodes[i].z),
            new THREE.Vector3(nodes[j].x, nodes[j].y, nodes[j].z)
          ];
          const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(lineGeo, lineMat);
          constellationGroup.add(line);
        }
      }
    }

    // Background floating data dust
    const dustCount = 100;
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPos[i] = (Math.random() - 0.5) * 8;
      dustPos[i + 1] = (Math.random() - 0.5) * 5;
      dustPos[i + 2] = (Math.random() - 0.5) * 4;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({ size: 0.03, color: 0x888888, transparent: true, opacity: 0.5 });
    const dust = new THREE.Points(dustGeo, dustMat);
    constellationGroup.add(dust);

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    container.addEventListener('mousemove', onMouseMove);

    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      constellationGroup.rotation.y += delta * 0.25 + mouseX * 0.01;
      constellationGroup.rotation.x += delta * 0.1 - mouseY * 0.01;

      renderer.render(scene, camera);
    };

    animate();

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
      sphereGeo.dispose();
      lineMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={mountRef}>
      <div className={styles.overlayTop}>
        <span className={styles.tag}>3D CORE INFRASTRUCTURE MATRIX</span>
        <div className={styles.sub}>
          INTERACTIVE LOW-LATENCY SERVING &amp; REASONING CONSTELLATION
        </div>
      </div>

      <div className={styles.nodePills}>
        <div className={styles.pill}>
          <span className={styles.pillDot} style={{ background: 'var(--accent-coral)' }} />
          <span>PYTORCH / CUDA</span>
        </div>
        <div className={styles.pill}>
          <span className={styles.pillDot} style={{ background: 'var(--accent-indigo)' }} />
          <span>LANGGRAPH DAG</span>
        </div>
        <div className={styles.pill}>
          <span className={styles.pillDot} style={{ background: 'var(--accent-gold)' }} />
          <span>TRITON SERVING</span>
        </div>
        <div className={styles.pill}>
          <span className={styles.pillDot} style={{ background: 'var(--accent-blue)' }} />
          <span>QDRANT HNSW</span>
        </div>
        <div className={styles.pill}>
          <span className={styles.pillDot} style={{ background: 'var(--accent-lime)' }} />
          <span>REDIS SUB-MS CACHE</span>
        </div>
      </div>
    </div>
  );
}
