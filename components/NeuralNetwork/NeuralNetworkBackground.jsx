'use client';
import React, { useEffect, useRef } from 'react';
import styles from './NeuralNetworkBackground.module.css';

export default function NeuralNetworkBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let animId;
    const cleanup = [];

    import('three').then((THREE) => {
      if (!mountRef.current) return;

      const W = mount.clientWidth;
      const H = mount.clientHeight;

      // ── Scene ──────────────────────────────────────────────────
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
      camera.position.z = 10;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      // Dark ink color for wireframes — works on light background
      const INK = 0x0A0A0A;

      const wire = (geo, opacity, pos, rot = [0, 0, 0]) => {
        const edges = new THREE.EdgesGeometry(geo);
        const mat = new THREE.LineBasicMaterial({ color: INK, transparent: true, opacity, depthWrite: false });
        const mesh = new THREE.LineSegments(edges, mat);
        mesh.position.set(...pos);
        mesh.rotation.set(...rot);
        return mesh;
      };

      // ── 3D Wireframe Shapes ───────────────────────────────────
      // These are the "proper 3D elements" — rotating architectural wireframes
      const shapes = [];

      // Large torus — upper right, tilted
      const t1 = wire(new THREE.TorusGeometry(3.2, 0.04, 10, 80), 0.07, [4, 1.5, -4], [0.4, 0.2, 0]);
      scene.add(t1); shapes.push({ m: t1, rx: 0.003, ry: 0.006, rz: 0.001 });

      // Medium torus — left, different axis
      const t2 = wire(new THREE.TorusGeometry(2.1, 0.03, 8, 56), 0.06, [-5, -1, -3], [1.2, 0, 0.3]);
      scene.add(t2); shapes.push({ m: t2, rx: 0.007, ry: 0.002, rz: 0.005 });

      // Icosahedron — upper left
      const ico1 = wire(new THREE.IcosahedronGeometry(2.2, 0), 0.08, [-3.5, 2.5, -5], [0.3, 0.5, 0]);
      scene.add(ico1); shapes.push({ m: ico1, rx: 0.004, ry: 0.009, rz: 0.002 });

      // Octahedron — lower right
      const oct = wire(new THREE.OctahedronGeometry(1.8, 0), 0.09, [5, -3, -2], [0, 0.2, 0.1]);
      scene.add(oct); shapes.push({ m: oct, rx: 0.006, ry: 0.003, rz: 0.009 });

      // Tetrahedron — center-right, close
      const tet = wire(new THREE.TetrahedronGeometry(1.2, 0), 0.10, [3.5, -1, -1], [0.2, 0, 0.3]);
      scene.add(tet); shapes.push({ m: tet, rx: 0.009, ry: 0.006, rz: 0.003 });

      // Giant dodecahedron — far back, very faint
      const dod = wire(new THREE.DodecahedronGeometry(5, 0), 0.04, [0, 0, -8], [0.1, 0.2, 0]);
      scene.add(dod); shapes.push({ m: dod, rx: 0.001, ry: 0.002, rz: 0.0005 });

      // Small icosahedron — right side
      const ico2 = wire(new THREE.IcosahedronGeometry(1.0, 0), 0.11, [5.5, 2, -1], [0, 0, 0.5]);
      scene.add(ico2); shapes.push({ m: ico2, rx: 0.007, ry: 0.012, rz: 0.004 });

      // Neural sphere (subdivided icosahedron) — center back
      const sphere = wire(new THREE.IcosahedronGeometry(2.8, 2), 0.04, [0.5, 0, -7], [0, 0, 0]);
      scene.add(sphere); shapes.push({ m: sphere, rx: 0.002, ry: 0.005, rz: 0.001 });

      // ── Sparse Neural Nodes (tiny dots) ───────────────────────
      const NODE_COUNT = 55;
      const nodePositions = new Float32Array(NODE_COUNT * 3);
      const nodeVelocities = [];

      for (let i = 0; i < NODE_COUNT; i++) {
        nodePositions[i * 3]     = (Math.random() - 0.5) * 18;
        nodePositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        nodePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;
        nodeVelocities.push({
          x: (Math.random() - 0.5) * 0.006,
          y: (Math.random() - 0.5) * 0.006,
          z: (Math.random() - 0.5) * 0.003
        });
      }

      const pointsGeo = new THREE.BufferGeometry();
      pointsGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
      const pointsMat = new THREE.PointsMaterial({
        color: INK,
        size: 0.055,
        transparent: true,
        opacity: 0.25,
        sizeAttenuation: true,
        depthWrite: false
      });
      const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
      scene.add(pointsMesh);

      // ── Edges between nearby nodes ─────────────────────────────
      const MAX_EDGES = 90;
      const edgePos = new Float32Array(MAX_EDGES * 6);
      const edgeGeo = new THREE.BufferGeometry();
      edgeGeo.setAttribute('position', new THREE.BufferAttribute(edgePos, 3));
      const edgeMat = new THREE.LineBasicMaterial({ color: INK, transparent: true, opacity: 0.08, depthWrite: false });
      const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
      scene.add(edgeLines);

      // ── Mouse parallax ─────────────────────────────────────────
      const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
      const onMM = (e) => {
        mouse.tx = (e.clientX / window.innerWidth  - 0.5) * 2;
        mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener('mousemove', onMM);
      cleanup.push(() => window.removeEventListener('mousemove', onMM));

      const onResize = () => {
        const w = mount.clientWidth, h = mount.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', onResize);
      cleanup.push(() => window.removeEventListener('resize', onResize));

      // ── Animation ─────────────────────────────────────────────
      let t = 0;
      const MAX_DIST = 3.8;

      const animate = () => {
        animId = requestAnimationFrame(animate);
        t += 0.008;

        // Smooth mouse parallax
        mouse.x += (mouse.tx - mouse.x) * 0.03;
        mouse.y += (mouse.ty - mouse.y) * 0.03;
        camera.position.x = mouse.x * 0.7;
        camera.position.y = -mouse.y * 0.45;
        camera.lookAt(0, 0, 0);

        // Rotate wireframe shapes
        shapes.forEach((s) => {
          s.m.rotation.x += s.rx;
          s.m.rotation.y += s.ry;
          s.m.rotation.z += s.rz;
        });

        // Move neural nodes
        const pos = nodePositions;
        for (let i = 0; i < NODE_COUNT; i++) {
          const v = nodeVelocities[i];
          pos[i*3]   += v.x;
          pos[i*3+1] += v.y;
          pos[i*3+2] += v.z;
          if (Math.abs(pos[i*3])   > 9.5) v.x *= -1;
          if (Math.abs(pos[i*3+1]) > 5.5) v.y *= -1;
          if (Math.abs(pos[i*3+2]) > 4.5) v.z *= -1;
        }
        pointsGeo.attributes.position.needsUpdate = true;

        // Rebuild edges
        let ec = 0;
        for (let i = 0; i < NODE_COUNT && ec < MAX_EDGES; i++) {
          const ax = pos[i*3], ay = pos[i*3+1], az = pos[i*3+2];
          for (let j = i+1; j < NODE_COUNT && ec < MAX_EDGES; j++) {
            const dx = ax - pos[j*3], dy = ay - pos[j*3+1], dz = az - pos[j*3+2];
            const d = Math.sqrt(dx*dx + dy*dy + dz*dz);
            if (d < MAX_DIST) {
              const b = ec * 6;
              edgePos[b]   = ax;       edgePos[b+1] = ay;       edgePos[b+2] = az;
              edgePos[b+3] = pos[j*3]; edgePos[b+4] = pos[j*3+1]; edgePos[b+5] = pos[j*3+2];
              ec++;
            }
          }
        }
        for (let i = ec*6; i < MAX_EDGES*6; i++) edgePos[i] = 0;
        edgeGeo.attributes.position.needsUpdate = true;
        edgeGeo.setDrawRange(0, ec * 2);

        renderer.render(scene, camera);
      };

      animate();

      cleanup.push(() => {
        cancelAnimationFrame(animId);
        if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
        renderer.dispose();
      });
    });

    return () => cleanup.forEach((fn) => fn());
  }, []);

  return <div ref={mountRef} className={styles.neuralCanvas} aria-hidden="true" />;
}
