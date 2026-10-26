'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Layers, Activity } from 'lucide-react';
import styles from './Projects3DVisualizer.module.css';

export default function Projects3DVisualizer() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 700;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(5, 4, 6);
    camera.lookAt(0, 0, 0);

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

    const gridGroup = new THREE.Group();
    scene.add(gridGroup);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(10, 20, 0xff6b6b, 0x222222);
    gridHelper.position.y = -1;
    gridGroup.add(gridHelper);

    // 5 Isometric Stage Pillars
    const stageColors = [0xff6b6b, 0xf5c542, 0x5f27cd, 0x2e66ff, 0x10b981];
    const stagePositions = [
      [-3.2, 0, 0],
      [-1.6, 0.3, 0],
      [0, 0.6, 0],
      [1.6, 0.3, 0],
      [3.2, 0, 0]
    ];

    const boxes = [];
    const boxGeo = new THREE.BoxGeometry(0.8, 1.2, 0.8);
    const edgesGeo = new THREE.EdgesGeometry(boxGeo);

    stagePositions.forEach((pos, idx) => {
      const boxMat = new THREE.MeshBasicMaterial({
        color: stageColors[idx],
        transparent: true,
        opacity: 0.35
      });
      const mesh = new THREE.Mesh(boxGeo, boxMat);
      mesh.position.set(pos[0], pos[1], pos[2]);
      gridGroup.add(mesh);

      // Wireframe edge highlight
      const edgeMat = new THREE.LineBasicMaterial({ color: stageColors[idx], linewidth: 2 });
      const edgeLines = new THREE.LineSegments(edgesGeo, edgeMat);
      mesh.add(edgeLines);

      boxes.push(mesh);
    });

    // Connecting data conduit lines
    const linePoints = stagePositions.map((pos) => new THREE.Vector3(pos[0], pos[1] + 0.6, pos[2]));
    const pipeGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
    const pipeMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
    const pipeLine = new THREE.Line(pipeGeo, pipeMat);
    gridGroup.add(pipeLine);

    // Traveling Pulsing Data Packet
    const packetGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x00ffcc });
    const packetMesh = new THREE.Mesh(packetGeo, packetMat);
    gridGroup.add(packetMesh);

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
    let packetProgress = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Gentle isometric yaw and tilt
      gridGroup.rotation.y = Math.sin(clock.getElapsedTime() * 0.4) * 0.15 + mouseX * 0.2;
      gridGroup.rotation.x = mouseY * 0.1;

      // Animate packet along pipeline
      packetProgress = (packetProgress + delta * 0.6) % 1;
      const totalStages = stagePositions.length - 1;
      const currentSegment = Math.min(Math.floor(packetProgress * totalStages), totalStages - 1);
      const segmentT = (packetProgress * totalStages) - currentSegment;

      const p1 = stagePositions[currentSegment];
      const p2 = stagePositions[currentSegment + 1];

      packetMesh.position.x = p1[0] + (p2[0] - p1[0]) * segmentT;
      packetMesh.position.y = (p1[1] + (p2[1] - p1[1]) * segmentT) + 0.65;
      packetMesh.position.z = p1[2] + (p2[2] - p1[2]) * segmentT;

      // Hover bobbing on boxes
      boxes.forEach((b, i) => {
        b.position.y = stagePositions[i][1] + Math.sin(clock.getElapsedTime() * 2 + i) * 0.08;
      });

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
      boxGeo.dispose();
      edgesGeo.dispose();
      pipeGeo.dispose();
      pipeMat.dispose();
      packetGeo.dispose();
      packetMat.dispose();
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={mountRef}>
      <div className={styles.topBar}>
        <span className={styles.titleBadge}>
          3D PIPELINE DAG TOPOLOGY
        </span>
        <span className={styles.dragNotice}>
          INTERACTIVE ISOMETRIC PIPELINE
        </span>
      </div>

      <div className={styles.stageCards}>
        <div className={styles.stageCard}>
          <span className={styles.stageIndex}>01. INGESTION</span>
          <span className={styles.stageName}>Raw Multi-Modal Stream</span>
          <span className={styles.stageLatency}>1.2s Zero-Copy</span>
        </div>
        <div className={styles.stageCard}>
          <span className={styles.stageIndex}>02. SHARDING</span>
          <span className={styles.stageName}>SigLIP / Whisper Embed</span>
          <span className={styles.stageLatency}>180ms Parallel</span>
        </div>
        <div className={styles.stageCard}>
          <span className={styles.stageIndex}>03. ROUTING</span>
          <span className={styles.stageName}>50+ Model Decision DAG</span>
          <span className={styles.stageLatency}>18ms Scheduler</span>
        </div>
        <div className={styles.stageCard}>
          <span className={styles.stageIndex}>04. CACHING</span>
          <span className={styles.stageName}>Redis Cache-Aside Layer</span>
          <span className={styles.stageLatency}>&lt;1ms P99 Latency</span>
        </div>
        <div className={styles.stageCard}>
          <span className={styles.stageIndex}>05. STREAMING</span>
          <span className={styles.stageName}>FastAPI SSE Output</span>
          <span className={styles.stageLatency}>&lt;350ms TTFT</span>
        </div>
      </div>
    </div>
  );
}
