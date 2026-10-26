'use client';
import React, { useState } from 'react';
import styles from './InteractiveTechnicalCharts.module.css';

export default function InteractiveTechnicalCharts({ projectId, accentColor = 'var(--accent-coral)', project }) {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // 1. Diffusion Pipeline: FID Curve & Latency Bar Chart
  if (projectId === 'diffusion-pipeline') {
    const fidPoints = [
      { step: 10, fid: 42.1, latency: '0.22s' },
      { step: 25, fid: 22.4, latency: '0.55s' },
      { step: 50, fid: 14.8, latency: '1.10s', highlight: true, label: 'DDIM OPTIMAL (1.1s)' },
      { step: 100, fid: 14.5, latency: '2.10s' },
      { step: 250, fid: 14.3, latency: '4.80s' },
      { step: 500, fid: 14.2, latency: '9.20s' },
      { step: 1000, fid: 14.2, latency: '18.20s', label: 'DDPM BASELINE (18.2s)' }
    ];

    const getX = (step) => 40 + (Math.log10(step) - 1) * 200; // log scale
    const getY = (fid) => 150 - ((fid - 10) / 35) * 120; // 10 to 45 FID

    const pathData = fidPoints.reduce((acc, pt, i) => {
      const x = getX(pt.step);
      const y = getY(pt.fid);
      return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
    }, '');

    return (
      <div className={styles.chartContainer}>
        <div className={styles.chartHeader}>
          <div className={styles.chartTitle}>
            <span>FID SCORE VS SAMPLING STEPS (LOG SCALE)</span>
          </div>
          <span className={styles.chartTag}>16.5X ACCELERATION VERIFIED</span>
        </div>

        {/* Interactive SVG Line Plot */}
        <div className={styles.svgWrapper}>
          <svg viewBox="0 0 460 180" className={styles.svgPlot}>
            {/* Grid Lines */}
            <line x1="40" y1="30" x2="440" y2="30" stroke="#222" strokeDasharray="3 3" />
            <line x1="40" y1="70" x2="440" y2="70" stroke="#222" strokeDasharray="3 3" />
            <line x1="40" y1="110" x2="440" y2="110" stroke="#222" strokeDasharray="3 3" />
            <line x1="40" y1="150" x2="440" y2="150" stroke="#333" strokeWidth="1.5" />
            <line x1="40" y1="20" x2="40" y2="150" stroke="#333" strokeWidth="1.5" />

            {/* Y Axis Labels */}
            <text x="32" y="34" className={styles.axisLabel}>40</text>
            <text x="32" y="74" className={styles.axisLabel}>30</text>
            <text x="32" y="114" className={styles.axisLabel}>20</text>
            <text x="32" y="154" className={styles.axisLabel}>10</text>

            {/* Area Fill */}
            <path
              d={`${pathData} L ${getX(1000)} 150 L ${getX(10)} 150 Z`}
              fill="rgba(255, 107, 107, 0.12)"
            />

            {/* Curve Path */}
            <path
              d={pathData}
              fill="none"
              stroke="var(--accent-coral)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Optimal Step 50 Reference Line */}
            <line
              x1={getX(50)}
              y1="25"
              x2={getX(50)}
              y2="150"
              stroke="var(--accent-gold)"
              strokeWidth="1.5"
              strokeDasharray="4 2"
            />

            {/* Plot Points */}
            {fidPoints.map((pt, i) => {
              const cx = getX(pt.step);
              const cy = getY(pt.fid);
              const isSelected = hoveredPoint?.step === pt.step || pt.highlight;

              return (
                <g
                  key={i}
                  className={styles.plotPointGroup}
                  onMouseEnter={() => setHoveredPoint(pt)}
                  onMouseLeave={() => setHoveredPoint(null)}
                >
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? 6 : 4}
                    fill={pt.highlight ? "var(--accent-gold)" : "var(--accent-coral)"}
                    stroke="#0A0A0A"
                    strokeWidth="2"
                    style={{ cursor: 'pointer' }}
                  />
                  {isSelected && (
                    <g>
                      <rect
                        x={cx - 50}
                        y={cy - 28}
                        width="100"
                        height="20"
                        fill="#0A0A0A"
                        stroke={pt.highlight ? "var(--accent-gold)" : "#FAF8F5"}
                        strokeWidth="1"
                      />
                      <text
                        x={cx}
                        y={cy - 14}
                        textAnchor="middle"
                        fill="#FAF8F5"
                        fontSize="9"
                        fontFamily="var(--font-mono)"
                        fontWeight="700"
                      >
                        {pt.step}s: FID {pt.fid} ({pt.latency})
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Speedup Metric Comparison Bar */}
        <div className={styles.barComparisonBox}>
          <div className={styles.barHeader}>
            <span className={styles.barMetricTitle}>GENERATION LATENCY COMPARISON</span>
            <span className={styles.speedupChip}>16.5X FASTER SAMPLING</span>
          </div>
          <div className={styles.barsStack}>
            <div className={styles.barItem}>
              <div className={styles.barMeta}>
                <span>1000-STEP FULL DDPM BASELINE</span>
                <strong>18.20s</strong>
              </div>
              <div className={styles.track}>
                <div className={styles.fillBase} style={{ width: '100%' }} />
              </div>
            </div>
            <div className={styles.barItem}>
              <div className={styles.barMeta}>
                <span style={{ color: 'var(--accent-lime)' }}>50-STEP DDIM ACCELERATED</span>
                <strong style={{ color: 'var(--accent-lime)' }}>1.10s</strong>
              </div>
              <div className={styles.track}>
                <div className={styles.fillOpt} style={{ width: '6.04%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Oncology Pan-Cancer: ROC-AUC Sensitivity Curve
  if (projectId === 'aethel-genomics') {
    const rocPoints = [
      { fpr: 0.00, tpr: 0.00 },
      { fpr: 0.01, tpr: 0.88 },
      { fpr: 0.02, tpr: 0.96 },
      { fpr: 0.04, tpr: 0.985, highlight: true, label: 'OPTIMAL SENSITIVITY' },
      { fpr: 0.08, tpr: 0.996 },
      { fpr: 0.15, tpr: 0.999 },
      { fpr: 1.00, tpr: 1.00 }
    ];

    const getX = (fpr) => 45 + fpr * 380;
    const getY = (tpr) => 150 - tpr * 125;

    const pathData = rocPoints.reduce((acc, pt, i) => {
      const x = getX(pt.fpr);
      const y = getY(pt.tpr);
      return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
    }, '');

    return (
      <div className={styles.chartContainer}>
        <div className={styles.chartHeader}>
          <div className={styles.chartTitle}>
            <span>RECEIVER OPERATING CHARACTERISTIC (ROC) CURVE</span>
          </div>
          <span className={styles.chartTag} style={{ borderColor: 'var(--accent-lime)', color: 'var(--accent-lime)' }}>
            ROC-AUC: 0.9982 (p &lt; 0.001)
          </span>
        </div>

        <div className={styles.svgWrapper}>
          <svg viewBox="0 0 460 180" className={styles.svgPlot}>
            <line x1="45" y1="25" x2="425" y2="25" stroke="#222" strokeDasharray="3 3" />
            <line x1="45" y1="87" x2="425" y2="87" stroke="#222" strokeDasharray="3 3" />
            <line x1="45" y1="150" x2="425" y2="150" stroke="#333" strokeWidth="1.5" />
            <line x1="45" y1="25" x2="45" y2="150" stroke="#333" strokeWidth="1.5" />
            <line x1="45" y1="150" x2="425" y2="25" stroke="#444" strokeWidth="1" strokeDasharray="4 4" />

            <text x="36" y="29" className={styles.axisLabel}>1.0</text>
            <text x="36" y="91" className={styles.axisLabel}>0.5</text>
            <text x="36" y="154" className={styles.axisLabel}>0.0</text>
            <text x="45" y="168" className={styles.axisLabel}>0.0 (FPR)</text>
            <text x="235" y="168" className={styles.axisLabel}>0.5</text>
            <text x="415" y="168" className={styles.axisLabel}>1.0</text>

            <path
              d={`${pathData} L ${getX(1)} 150 L ${getX(0)} 150 Z`}
              fill="rgba(16, 185, 129, 0.12)"
            />

            <path
              d={pathData}
              fill="none"
              stroke="var(--accent-lime)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {rocPoints.map((pt, i) => {
              const cx = getX(pt.fpr);
              const cy = getY(pt.tpr);
              const isSelected = hoveredPoint?.fpr === pt.fpr || pt.highlight;

              return (
                <g
                  key={i}
                  className={styles.plotPointGroup}
                  onMouseEnter={() => setHoveredPoint(pt)}
                  onMouseLeave={() => setHoveredPoint(null)}
                >
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? 6 : 4}
                    fill={pt.highlight ? "var(--accent-gold)" : "var(--accent-lime)"}
                    stroke="#0A0A0A"
                    strokeWidth="2"
                    style={{ cursor: 'pointer' }}
                  />
                  {isSelected && (
                    <g>
                      <rect
                        x={cx - 52}
                        y={cy - 28}
                        width="104"
                        height="20"
                        fill="#0A0A0A"
                        stroke="var(--accent-gold)"
                        strokeWidth="1"
                      />
                      <text
                        x={cx}
                        y={cy - 14}
                        textAnchor="middle"
                        fill="#FAF8F5"
                        fontSize="9"
                        fontFamily="var(--font-mono)"
                        fontWeight="700"
                      >
                        TPR: {(pt.tpr * 100).toFixed(1)}% | FPR: {(pt.fpr * 100).toFixed(1)}%
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        <div className={styles.barComparisonBox}>
          <div className={styles.barHeader}>
            <span className={styles.barMetricTitle}>CLINICAL LEAD-TIME OVER CONVENTIONAL CT</span>
            <span className={styles.speedupChip} style={{ background: 'var(--accent-lime)', color: '#0A0A0A' }}>
              +9.7 MONTHS ADVANTAGE
            </span>
          </div>
          <div className={styles.barsStack}>
            <div className={styles.barItem}>
              <div className={styles.barMeta}>
                <span>MICROSCOPIC RESIDUAL DETECTION (MRD)</span>
                <strong>+9.7 MONTHS LEAD</strong>
              </div>
              <div className={styles.track}>
                <div className={styles.fillOpt} style={{ width: '92%', background: 'var(--accent-lime)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. Brain Tumor AI: Kaplan-Meier Survival Curve & 321x Speedup
  if (projectId === 'brain-tumor-ai') {
    const kmPoints = [
      { month: 0, survival: 1.00 },
      { month: 6, survival: 0.94 },
      { month: 12, survival: 0.82 },
      { month: 18, survival: 0.68, highlight: true },
      { month: 24, survival: 0.54 },
      { month: 36, survival: 0.38 },
      { month: 48, survival: 0.28 }
    ];

    const getX = (m) => 45 + (m / 48) * 380;
    const getY = (s) => 150 - s * 125;

    const pathData = kmPoints.reduce((acc, pt, i) => {
      const x = getX(pt.month);
      const y = getY(pt.survival);
      return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
    }, '');

    return (
      <div className={styles.chartContainer}>
        <div className={styles.chartHeader}>
          <div className={styles.chartTitle}>
            <span>KAPLAN-MEIER STATISTICAL SURVIVAL PROGNOSIS</span>
          </div>
          <span className={styles.chartTag} style={{ borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}>
            COX HAZARD RATIO: p &lt; 0.001
          </span>
        </div>

        <div className={styles.svgWrapper}>
          <svg viewBox="0 0 460 180" className={styles.svgPlot}>
            <line x1="45" y1="25" x2="425" y2="25" stroke="#222" strokeDasharray="3 3" />
            <line x1="45" y1="87" x2="425" y2="87" stroke="#222" strokeDasharray="3 3" />
            <line x1="45" y1="150" x2="425" y2="150" stroke="#333" strokeWidth="1.5" />
            <line x1="45" y1="25" x2="45" y2="150" stroke="#333" strokeWidth="1.5" />

            <text x="36" y="29" className={styles.axisLabel}>100%</text>
            <text x="36" y="89" className={styles.axisLabel}>50%</text>
            <text x="36" y="154" className={styles.axisLabel}>0%</text>
            <text x="45" y="168" className={styles.axisLabel}>0 Mo</text>
            <text x="235" y="168" className={styles.axisLabel}>24 Mo</text>
            <text x="415" y="168" className={styles.axisLabel}>48 Mo</text>

            <path
              d={`${pathData} L ${getX(48)} 150 L ${getX(0)} 150 Z`}
              fill="rgba(245, 197, 66, 0.12)"
            />

            <path
              d={pathData}
              fill="none"
              stroke="var(--accent-gold)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {kmPoints.map((pt, i) => {
              const cx = getX(pt.month);
              const cy = getY(pt.survival);
              const isSelected = hoveredPoint?.month === pt.month || pt.highlight;

              return (
                <g
                  key={i}
                  className={styles.plotPointGroup}
                  onMouseEnter={() => setHoveredPoint(pt)}
                  onMouseLeave={() => setHoveredPoint(null)}
                >
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? 6 : 4}
                    fill={pt.highlight ? "var(--accent-coral)" : "var(--accent-gold)"}
                    stroke="#0A0A0A"
                    strokeWidth="2"
                    style={{ cursor: 'pointer' }}
                  />
                  {isSelected && (
                    <g>
                      <rect
                        x={cx - 48}
                        y={cy - 28}
                        width="96"
                        height="20"
                        fill="#0A0A0A"
                        stroke="var(--accent-gold)"
                        strokeWidth="1"
                      />
                      <text
                        x={cx}
                        y={cy - 14}
                        textAnchor="middle"
                        fill="#FAF8F5"
                        fontSize="9"
                        fontFamily="var(--font-mono)"
                        fontWeight="700"
                      >
                        {pt.month} Mo: {(pt.survival * 100).toFixed(0)}% Survival
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        <div className={styles.barComparisonBox}>
          <div className={styles.barHeader}>
            <span className={styles.barMetricTitle}>3D VOLUMETRIC SEGMENTATION TURNAROUND</span>
            <span className={styles.speedupChip}>321X ACCELERATION</span>
          </div>
          <div className={styles.barsStack}>
            <div className={styles.barItem}>
              <div className={styles.barMeta}>
                <span>MANUAL RADIOLOGIST CONTOURING</span>
                <strong>45 mins (2,700s)</strong>
              </div>
              <div className={styles.track}>
                <div className={styles.fillBase} style={{ width: '100%' }} />
              </div>
            </div>
            <div className={styles.barItem}>
              <div className={styles.barMeta}>
                <span style={{ color: 'var(--accent-lime)' }}>3D CNN RESIDUAL U-NET</span>
                <strong style={{ color: 'var(--accent-lime)' }}>8.4s</strong>
              </div>
              <div className={styles.track}>
                <div className={styles.fillOpt} style={{ width: '3.11%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. Prism Video Intelligence: In-Video Search Latency & Throughput
  if (projectId === 'prism-video-intelligence') {
    return (
      <div className={styles.chartContainer}>
        <div className={styles.chartHeader}>
          <div className={styles.chartTitle}>
            <span>IN-VIDEO TEMPORAL SEARCH &amp; DEMUX BENCHMARK</span>
          </div>
          <span className={styles.chartTag} style={{ borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}>
            507X FASTER SEARCH
          </span>
        </div>

        <div className={styles.barComparisonBox}>
          <div className={styles.barHeader}>
            <span className={styles.barMetricTitle}>IN-VIDEO SEMANTIC SEARCH LATENCY</span>
            <span className={styles.speedupChip}>28ms VECTOR RETRIEVAL</span>
          </div>
          <div className={styles.barsStack}>
            <div className={styles.barItem}>
              <div className={styles.barMeta}>
                <span>MANUAL VIDEO TIMELINE SCRUBBING</span>
                <strong>14,200 ms</strong>
              </div>
              <div className={styles.track}>
                <div className={styles.fillBase} style={{ width: '100%' }} />
              </div>
            </div>
            <div className={styles.barItem}>
              <div className={styles.barMeta}>
                <span style={{ color: 'var(--accent-lime)' }}>QDRANT HNSW QUANTIZED VECTOR INDEX</span>
                <strong style={{ color: 'var(--accent-lime)' }}>28 ms</strong>
              </div>
              <div className={styles.track}>
                <div className={styles.fillOpt} style={{ width: '1.97%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.barComparisonBox} style={{ marginTop: '8px' }}>
          <div className={styles.barHeader}>
            <span className={styles.barMetricTitle}>FRAME DEMUXING EXTRACTION THROUGHPUT</span>
            <span className={styles.speedupChip} style={{ background: 'var(--accent-lime)', color: '#0A0A0A' }}>
              6.8X THROUGHPUT
            </span>
          </div>
          <div className={styles.barsStack}>
            <div className={styles.barItem}>
              <div className={styles.barMeta}>
                <span>PYTHON OPENCV (GIL-BOUND)</span>
                <strong>18 fps</strong>
              </div>
              <div className={styles.track}>
                <div className={styles.fillBase} style={{ width: '14.5%', background: '#666' }} />
              </div>
            </div>
            <div className={styles.barItem}>
              <div className={styles.barMeta}>
                <span style={{ color: 'var(--accent-gold)' }}>HEADLESS C++ / FFMPEG ZERO-COPY</span>
                <strong style={{ color: 'var(--accent-gold)' }}>124 fps</strong>
              </div>
              <div className={styles.track}>
                <div className={styles.fillOpt} style={{ width: '100%', background: 'var(--accent-gold)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. Context Memory LLM: Token Consumption & Accuracy
  if (projectId === 'context-memory-llm') {
    return (
      <div className={styles.chartContainer}>
        <div className={styles.chartHeader}>
          <div className={styles.chartTitle}>
            <span>TOKEN COMPRESSION &amp; RETRIEVAL EFFICIENCY</span>
          </div>
          <span className={styles.chartTag} style={{ borderColor: 'var(--accent-blue)', color: 'var(--accent-blue)' }}>
            -38% TOKEN FOOTPRINT
          </span>
        </div>

        <div className={styles.barComparisonBox}>
          <div className={styles.barHeader}>
            <span className={styles.barMetricTitle}>TOKEN CONSUMPTION PER AGENTIC WORKFLOW</span>
            <span className={styles.speedupChip}>38% COST REDUCTION</span>
          </div>
          <div className={styles.barsStack}>
            <div className={styles.barItem}>
              <div className={styles.barMeta}>
                <span>NAIVE FULL CONVERSATION BUFFER</span>
                <strong>42,000 tokens ($0.84)</strong>
              </div>
              <div className={styles.track}>
                <div className={styles.fillBase} style={{ width: '100%' }} />
              </div>
            </div>
            <div className={styles.barItem}>
              <div className={styles.barMeta}>
                <span style={{ color: 'var(--accent-lime)' }}>PRUNED WORKING MEMORY + RECURSIVE SUMMARIES</span>
                <strong style={{ color: 'var(--accent-lime)' }}>26,040 tokens ($0.52)</strong>
              </div>
              <div className={styles.track}>
                <div className={styles.fillOpt} style={{ width: '62%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.barComparisonBox} style={{ marginTop: '8px' }}>
          <div className={styles.barHeader}>
            <span className={styles.barMetricTitle}>MULTI-TURN REASONING FIDELITY</span>
            <span className={styles.speedupChip} style={{ background: 'var(--accent-lime)', color: '#0A0A0A' }}>
              ZERO FIDELITY LOSS (+4.4%)
            </span>
          </div>
          <div className={styles.barsStack}>
            <div className={styles.barItem}>
              <div className={styles.barMeta}>
                <span>BASELINE AGENT ACCURACY</span>
                <strong>84.2%</strong>
              </div>
              <div className={styles.track}>
                <div className={styles.fillBase} style={{ width: '84.2%', background: '#666' }} />
              </div>
            </div>
            <div className={styles.barItem}>
              <div className={styles.barMeta}>
                <span style={{ color: 'var(--accent-lime)' }}>ATTENTION-ENTROPY PRUNED ACCURACY</span>
                <strong style={{ color: 'var(--accent-lime)' }}>88.6%</strong>
              </div>
              <div className={styles.track}>
                <div className={styles.fillOpt} style={{ width: '88.6%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 6. Multi-Agent Orchestrator & Default Concurrency Waterfall
  const latencyPoints = [
    { label: 'POSTGRES COLD RETRIEVAL (NO CACHE)', latency: 180, unit: 'ms', color: 'var(--accent-coral)' },
    { label: 'REDIS SUB-MS CACHE HIT', latency: 0.8, unit: 'ms', color: 'var(--accent-lime)', highlight: true },
    { label: 'SSE STREAMING TIME-TO-FIRST-TOKEN', latency: 320, unit: 'ms', color: 'var(--accent-gold)' },
    { label: '50+ MODEL VECTOR CONSTRAINT FILTER', latency: 22, unit: 'ms', color: 'var(--accent-indigo)' }
  ];

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartHeader}>
        <div className={styles.chartTitle}>
          <span>P99 INFERENCE &amp; MEMORY RETRIEVAL LATENCY (ms)</span>
        </div>
        <span className={styles.chartTag} style={{ borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}>
          REDIS CACHE-ASIDE: &lt;1ms
        </span>
      </div>

      <div className={styles.barsStack} style={{ padding: '12px 0 4px' }}>
        {latencyPoints.map((item, idx) => (
          <div key={idx} className={styles.barItem}>
            <div className={styles.barMeta}>
              <span>{item.label}</span>
              <strong style={{ color: item.color }}>{item.latency}{item.unit}</strong>
            </div>
            <div className={styles.track}>
              <div
                className={styles.fillBase}
                style={{
                  width: `${Math.max(Math.min((item.latency / 320) * 100, 100), 2)}%`,
                  background: item.color
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Speedup Comparison Callout */}
      <div className={styles.barComparisonBox} style={{ marginTop: '8px' }}>
        <div className={styles.barHeader}>
          <span className={styles.barMetricTitle}>SESSION REOPENING LATENCY SPEEDUP</span>
          <span className={styles.speedupChip}>525X SPEEDUP</span>
        </div>
        <div className={styles.barsStack}>
          <div className={styles.barItem}>
            <div className={styles.barMeta}>
              <span>RELATIONAL DB QUERY (420ms)</span>
              <strong>BASELINE</strong>
            </div>
            <div className={styles.track}>
              <div className={styles.fillBase} style={{ width: '100%' }} />
            </div>
          </div>
          <div className={styles.barItem}>
            <div className={styles.barMeta}>
              <span style={{ color: 'var(--accent-lime)' }}>REDIS CACHE-ASIDE (0.8ms)</span>
              <strong style={{ color: 'var(--accent-lime)' }}>SUB-MILLISECOND</strong>
            </div>
            <div className={styles.track}>
              <div className={styles.fillOpt} style={{ width: '2.5%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
