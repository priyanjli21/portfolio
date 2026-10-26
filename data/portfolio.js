export const personalInfo = {
  name: "Priyanjli Gautam",
  role: "AI / ML ENGINEER",
  location: "Gurgaon, India",
  email: "priyanjligautam21@gmail.com",
  linkedin: "https://www.linkedin.com/in/priyanjli21/",
  github: "https://github.com/priyanjli21",
  status: "OPEN FOR AI/ML & GENAI ROLES",
  bio: "AI/ML Engineer with 2+ years of production experience building Generative AI, Agentic Workflows, RAG systems, recommendation engines, and video intelligence platforms. Published researcher in deep learning & reinforcement learning with an obsession for high-throughput inference and practical AI architectures.",
  tagline: "Building robust AI agents, scalable RAG architectures, and end-to-end ML pipelines.",
  stats: [
    { label: "GenAI Features Deployed", value: "15+", highlight: "Production" },
    { label: "Years Experience", value: "2.5+", highlight: "Industry" },
    { label: "Research Papers", value: "3", highlight: "Published & Review" },
    { label: "B.Tech CGPA", value: "9.06", highlight: "Top Distinction" }
  ]
};

export const experiences = [
  {
    role: "AI/ML Engineer",
    company: "Matchbest Software Pvt. Ltd.",
    location: "Gurgaon, India",
    period: "Dec 2025 – Present",
    current: true,
    badge: "Current Role",
    highlights: [
      "Architected and deployed end-to-end **Generative AI Media Production Pipelines** generating full-length **mythological dramas up to 60 minutes**, AI-synthesized **educational courses up to 60 minutes**, multi-panel **AI comics & graphic storyboards**, and high-converting **commercial ads generated directly from a prompt or image**.",
      "Architected an enterprise **LangGraph-style Multi-Agent System** in FastAPI that autonomously classifies user intent, extracts multi-modal constraints, synthesizes model-specific prompt recipes, and builds multi-step DAG execution plans.",
      "Engineered an **Intelligent Multi-Modal Recommender** across 50+ Generative AI models (video, image, audio, microdrama, website builder), dynamically optimizing model selection based on credit budgets, aspect ratios, and resolution tiers.",
      "Implemented a **Dual-Tier Memory Pipeline** using PostgreSQL and Redis Cache-Aside, reducing database query volume by >90% while providing instant (<1ms) sidebar chat reopening and full multi-turn conversational context inheritance.",
      "Developed **Real-Time Streaming Endpoints with Server-Sent Events (SSE)** and WebSockets, delivering live agent reasoning traces and generation progress directly to client frontends.",
      "Engineered a **Comprehensive Automated Verification Pipeline** covering multi-agent state transitions, credit billing arithmetic, and multi-turn context retention to guarantee zero-regression reliability.",
      "Architected **Prism**, a multimodal video intelligence platform delivering natural language in-video semantic search, automated movie-to-reels generation, in-video contextual ad insertion, and intelligent scene extraction.",
      "Developed a cloud-native **Multi-Modality AI Radiology Assistant & Diagnostic Engine** on **AWS Lambda/SAM & Docker**, processing X-Ray, CT, MRI, and Mammography scans via PACS (DICOM C-STORE) with automated PHI de-identification and RSNA/FHIR R4 report generation."
    ],
    tech: ["Python 3.11", "FastAPI", "LangGraph", "Multi-Agent Systems", "PostgreSQL", "Redis", "SSE / WebSockets", "PyTorch", "Computer Vision / FFmpeg", "AWS Lambda", "Docker", "MLOps"]
  },
  {
    role: "Machine Learning Engineer (Intern)",
    company: "Slaaang Media Pvt. Ltd.",
    location: "Remote / India",
    period: "Jan 2024 – Sep 2025",
    current: false,
    badge: "20 Months",
    highlights: [
      "Developed and deployed personalized recommendation algorithms utilizing collaborative filtering and neural ranking, boosting active user engagement by 25%.",
      "Constructed a transformer-based hate-speech & toxicity detection system with multi-class NLP classification to protect real-time user communities.",
      "Built multimodal AI pipelines for automated hashtag, category, and metadata extraction from user video/image feeds using vision encoders and LLMs.",
      "Optimized end-to-end ML inference pipelines for high-throughput concurrency, integrating Generative AI APIs into scalable production services."
    ],
    tech: ["PyTorch", "Transformers", "NLP", "Computer Vision", "Multimodal AI", "Recommendation Systems", "Scikit-Learn"]
  }
];

export const personalProjects = [
  {
    id: "diffusion-pipeline",
    behindTheNumbers: {
    "headline": "16.5x Faster Inference Sampling with Custom DDIM Scheduling",
    "bottleneck": "Standard 1,000-step DDPM reverse diffusion took 18+ seconds per 512x512 image, making rapid research iteration and live deployment intractable on cloud GPUs.",
    "howWeAchieved": "Implemented a custom 50-step DDIM accelerated deterministic sampling loop with Classifier-Free Guidance (CFG). Built a custom multi-scale U-Net in PyTorch with cross-attention text conditioning, cosine noise schedules, and multi-GPU EMA tracking.",
    "tradeoffs": "Fewer sampling steps risk blurring and texture collapse. Fine-tuned cosine variance schedules to maintain 14.8 FID distribution alignment, matching 1000-step quality at 16x speed.",
    "benchmarks": [
        {
            "metric": "Per-Image Generation Latency",
            "baseline": "18.2s (1000-Step DDPM)",
            "optimized": "1.1s (50-Step DDIM)",
            "improvement": "16.5x faster",
            "baselineVal": 18.2,
            "optimizedVal": 1.1,
            "unit": "s",
            "lowerIsBetter": true
        },
        {
            "metric": "Inference Sampling Step Count",
            "baseline": "1,000 Steps",
            "optimized": "50 Steps",
            "improvement": "20x step reduction",
            "baselineVal": 1000,
            "optimizedVal": 50,
            "unit": "steps",
            "lowerIsBetter": true
        },
        {
            "metric": "Fréchet Inception Distance (FID)",
            "baseline": "14.2 (Full DDPM)",
            "optimized": "14.8 (Accelerated)",
            "improvement": "Preserved fidelity",
            "baselineVal": 14.2,
            "optimizedVal": 14.8,
            "unit": "FID",
            "lowerIsBetter": true
        }
    ],
    "dagNodes": [
        {
            "step": "01",
            "name": "Text Prompt Tokenizer & Projection",
            "latency": "8ms",
            "tech": "CLIP ViT-L/14",
            "desc": "Text conditioning projection into cross-attention key-value spaces."
        },
        {
            "step": "02",
            "name": "Cosine Noise Scheduling & Seeding",
            "latency": "4ms",
            "tech": "PyTorch Tensor",
            "desc": "Variance-preserving cosine noise distribution initialization."
        },
        {
            "step": "03",
            "name": "50-Step DDIM Accelerated Loop",
            "latency": "1.05s",
            "tech": "CUDA U-Net Kernel",
            "desc": "Multi-scale U-Net with residual cross-attention blocks."
        },
        {
            "step": "04",
            "name": "Classifier-Free Guidance (CFG)",
            "latency": "15ms",
            "tech": "CFG Interpolator",
            "desc": "Dynamic guidance scale weighting for text adherence."
        },
        {
            "step": "05",
            "name": "VAE Latent-to-RGB Decoder",
            "latency": "32ms",
            "tech": "PyTorch VAE",
            "desc": "High-resolution RGB image reconstruction from latent space."
        }
    ]
},
    category: "Independent / Research",
    image: "/images/diffusion_sampling_art.jpg",
    title: "Text-to-Image Generative Diffusion Pipeline",
    subtitle: "From-Scratch PyTorch Diffusion with DDIM & Cross-Attention",
    accentColor: "var(--accent-coral)",
    tag: "Generative Deep Learning",
    whatWeBuilt: "An end-to-end text-conditioned diffusion pipeline implemented completely from scratch in PyTorch. Incorporates a multi-scale U-Net with residual blocks, cross-attention text conditioning, cosine noise scheduling, and Classifier-Free Guidance (CFG).",
    whatInfluenced: "Standard reverse-diffusion sampling was computationally prohibitive for rapid experimentation, while off-the-shelf wrappers obscured granular attention dynamics and fine noise scheduling.",
    whatEffect: "Accelerated inference to 50-step DDIM accelerated sampling while preserving high generation fidelity, stabilized multi-GPU training with EMA tracking, and verified distribution alignment via Fréchet Inception Distance (FID).",
    kpis: [
      "50-Step DDIM Accelerated Sampling",
      "Cosine Variance Noise Schedule",
      "EMA Multi-GPU Weight Tracking",
      "FID Distribution Benchmarked"
    ],
    features: [
      "Custom multi-scale U-Net architecture with residual blocks and cross-attention text conditioning",
      "Cosine noise scheduling, Classifier-Free Guidance (CFG), and 50-step DDIM accelerated sampling",
      "Exponential Moving Average (EMA) weight tracking for training stability across cloud GPUs",
      "Comprehensive evaluation suite with Fréchet Inception Distance (FID) benchmarking and attention heatmaps"
    ],
    tech: ["PyTorch", "Diffusion Models", "U-Net", "Cross-Attention", "DDIM / CFG", "CUDA", "FID Benchmarking"],
    github: "https://github.com/priyanjli21",
    featured: true
  },
  {
    id: "aethel-genomics",
    behindTheNumbers: {
    "headline": "0.9982 ROC-AUC Diagnostic Accuracy & +9.7 Mo Lead Over CT",
    "bottleneck": "Standard radiographic CT imaging detects cancer only after physical tumors form. Single-analyte liquid biopsies suffer from severe noise due to the curse of dimensionality across 450,000+ CpG methylation sites.",
    "howWeAchieved": "Architected a late-fusion ensemble combining blood plasma cfDNA methylation, breath VOC gas chromatography, and tissue transcriptomics. Applied TreeSHAP explainability to isolate the top 150 driver genomic biomarkers.",
    "tradeoffs": "Multi-modal fusion across 5,300+ patient records risks overfitting. Employed nested 10-fold cross-validation with elastic-net regularization to ensure clinical generalization across 9 primary malignancies.",
    "benchmarks": [
        {
            "metric": "Diagnostic Accuracy (ROC-AUC)",
            "baseline": "0.841 (Single Analyte)",
            "optimized": "0.9982 (Late-Fusion)",
            "improvement": "+18.7% boost",
            "baselineVal": 0.841,
            "optimizedVal": 0.9982,
            "unit": "AUC",
            "lowerIsBetter": false
        },
        {
            "metric": "Recurrence Lead-Time Advantage",
            "baseline": "+0.0 Mo (Standard CT)",
            "optimized": "+9.7 Months (cfDNA)",
            "improvement": "+9.7 months early",
            "baselineVal": 0,
            "optimizedVal": 9.7,
            "unit": "months",
            "lowerIsBetter": false
        },
        {
            "metric": "Primary Organ Triage Accuracy",
            "baseline": "78.4%",
            "optimized": "97.07%",
            "improvement": "+18.6% precision",
            "baselineVal": 78.4,
            "optimizedVal": 97.07,
            "unit": "%",
            "lowerIsBetter": false
        }
    ],
    "dagNodes": [
        {
            "step": "01",
            "name": "cfDNA Illumina 450k Ingestion",
            "latency": "12ms",
            "tech": "Illumina Methylation",
            "desc": "Beta-value extraction and spatial CpG cluster normalization."
        },
        {
            "step": "02",
            "name": "Breath VOC Gas Chromatography",
            "latency": "8ms",
            "tech": "GC-MS Aligner",
            "desc": "Retention time & peak abundance alignment across volatile organics."
        },
        {
            "step": "03",
            "name": "Late-Fusion Multimodal Ensemble",
            "latency": "28ms",
            "tech": "Gradient Boosted Tree",
            "desc": "Cross-modality probabilistic weighting and organ triage."
        },
        {
            "step": "04",
            "name": "TreeSHAP Genomic Attribution",
            "latency": "45ms",
            "tech": "SHAP Explainability",
            "desc": "Feature importance calculation isolating top 150 driver biomarkers."
        },
        {
            "step": "05",
            "name": "Clinical Diagnostic Report Generator",
            "latency": "15ms",
            "tech": "FastAPI / RSNA",
            "desc": "Sub-second clinical diagnostic triage report generation."
        }
    ]
},
    category: "Independent / Research",
    image: "/images/oncology_scan_art.jpg",
    title: "Aethel Genomics AI — Multi-Modal Pan-Cancer Diagnostic Platform",
    subtitle: "Liquid Biopsy cfDNA, Breath VOCs & Transcriptomic Late-Fusion",
    accentColor: "var(--accent-indigo)",
    textColor: "#FAF8F5",
    tag: "Multi-Modal Oncology AI",
    whatWeBuilt: "An end-to-end clinical intelligence platform combining blood plasma cfDNA methylation (Illumina 450k), exhaled breath VOCs (GC-MS), and tissue transcriptomics across 5,300+ patient profiles and 9 primary malignancies.",
    whatInfluenced: "Conventional radiographic imaging often detects cancer only after physical tumors form, missing microscopic residual disease (MRD) during early curable windows.",
    whatEffect: "Delivered a +9.7 months lead-time advantage in MRD recurrence surveillance over CT imaging, achieving 0.9982 ROC-AUC and 97.07% primary organ triage accuracy with TreeSHAP genomic biomarker explainability.",
    kpis: [
      "0.9982 ROC-AUC Diagnostic Accuracy",
      "97.07% Primary Organ Triage",
      "+9.7 Months Lead Over CT Imaging",
      "5,300+ Multi-Cohort Profiles"
    ],
    features: [
      "Late-fusion ensemble combining blood cfDNA methylation, breath VOCs, and tissue transcriptomics",
      "Validated across 5,300+ patient profiles across 9 primary oncology malignancies",
      "TreeSHAP genomic biomarker explainability with automated clinical diagnostic report generation",
      "Interactive 3D WebGL molecular visualizer with sub-second FastAPI inference backend"
    ],
    tech: ["Multimodal AI", "Ensemble ML", "TreeSHAP", "Genomics / cfDNA", "FastAPI", "Next.js", "WebGL 3D"],
    github: "https://github.com/priyanjli21",
    liveUrl: "https://aethel-genomics.vercel.app/",
    featured: true
  },
  {
    id: "brain-tumor-ai",
    behindTheNumbers: {
    "headline": "321x Faster 3D Volumetric MRI Delineation & Statistical Survival Prognosis",
    "bottleneck": "Manual 3D multi-sequence MRI segmentation took radiologists 45+ minutes per scan, with high inter-observer variance across glioma sub-compartments.",
    "howWeAchieved": "Engineered a 3D convolutional multi-sequence segmentation network in PyTorch with Dice-loss optimization, coupled with a Cox Proportional Hazards statistical survival modeling engine for quantitative risk stratification.",
    "tradeoffs": "3D volumetric tensors require massive VRAM. Implemented sliding-window patch inference with 50% overlap and Gaussian blending to fit within 16GB GPU memory without edge artifacts.",
    "benchmarks": [
        {
            "metric": "Segmentation Turnaround Time",
            "baseline": "45 mins (Manual)",
            "optimized": "8.4s (3D CNN)",
            "improvement": "321x faster",
            "baselineVal": 2700,
            "optimizedVal": 8.4,
            "unit": "s",
            "lowerIsBetter": true
        },
        {
            "metric": "Whole Tumor Dice Coefficient",
            "baseline": "0.740",
            "optimized": "0.912",
            "improvement": "+23.2% boundary accuracy",
            "baselineVal": 0.74,
            "optimizedVal": 0.912,
            "unit": "Dice",
            "lowerIsBetter": false
        },
        {
            "metric": "Survival Risk Stratification p-value",
            "baseline": "p = 0.082 (Marginal)",
            "optimized": "p < 0.001 (Significant)",
            "improvement": "High clinical confidence",
            "baselineVal": 0.082,
            "optimizedVal": 0.001,
            "unit": "p",
            "lowerIsBetter": true
        }
    ],
    "dagNodes": [
        {
            "step": "01",
            "name": "Multi-Sequence MRI Co-Registration",
            "latency": "1.2s",
            "tech": "SimpleITK",
            "desc": "Spatial alignment across T1, T1c, T2, and FLAIR imaging sequences."
        },
        {
            "step": "02",
            "name": "N4 Bias Field Correction",
            "latency": "800ms",
            "tech": "N4ITK",
            "desc": "MRI radiofrequency coil intensity inhomogeneity normalization."
        },
        {
            "step": "03",
            "name": "3D CNN Volumetric Segmentation",
            "latency": "5.4s",
            "tech": "PyTorch 3D U-Net",
            "desc": "Enhancing core, edema, and necrosis sub-compartment boundary prediction."
        },
        {
            "step": "04",
            "name": "Sub-Compartment Volumetrics",
            "latency": "300ms",
            "tech": "NumPy / 3D Voxel",
            "desc": "Exact volumetric sub-compartment calculation in cubic millimeters."
        },
        {
            "step": "05",
            "name": "Cox Proportional Hazards Prognosis",
            "latency": "400ms",
            "tech": "Lifelines / Cox",
            "desc": "Statistical survival risk curve prediction combining age and tumor volumetrics."
        }
    ]
},
    category: "Independent / Research",
    title: "Brain Tumor Segmentation & Deep Learning Survival Analysis",
    subtitle: "3D MRI Multi-Parametric Segmentation & Clinical Risk Modeling",
    accentColor: "var(--accent-gold)",
    tag: "Medical AI & Research",
    whatWeBuilt: "A deep representation learning pipeline for multi-sequence 3D MRI segmentation coupled with Cox Proportional Hazards statistical survival modeling.",
    whatInfluenced: "Inter-observer variability in manual MRI glioma boundary delineation and the lack of integrated survival prognosis based on quantitative sub-compartment volumes.",
    whatEffect: "Identified and validated high-confidence biomarker signatures and tumor progression dynamics across multi-sequence 3D MRI cohorts.",
    kpis: [
      "Multi-Sequence 3D MRI Delineation",
      "Cox Proportional Hazard Modeling",
      "Tumor Sub-Compartment Volumetrics",
      "Genomic Biomarker Validation"
    ],
    features: [
      "Deep convolutional multi-label segmentation on multi-parametric MRI modalities",
      "Statistical survival modeling (Cox Proportional Hazards) predicting patient risk dynamics",
      "Peer-reviewed research and survival analysis pipeline",
      "Validated feature extraction pipeline for oncology genomic & clinical cohorts"
    ],
    tech: ["Deep Learning", "Survival Analysis", "Healthcare AI", "Oncology Genomics", "PyTorch", "Cox Models"],
    github: "https://github.com/priyanjli21",
    featured: true
  },
  {
    id: "context-memory-llm",
    behindTheNumbers: {
    "headline": "38.0% Token Consumption Reduction & Zero Retrieval Faithfulness Loss",
    "bottleneck": "Extended multi-turn autonomous agent workflows incurred prompt bloat (>40,000 tokens), context rot, and quadratic attention costs causing reasoning degradation and latency spikes.",
    "howWeAchieved": "Developed a token-optimized working memory hierarchy featuring dynamic retrieval chunking, recursive branch summarization, and reasoning trace pruning algorithms that discard non-essential tool definitions.",
    "tradeoffs": "Aggressive token pruning can delete necessary context. Implemented attention-entropy relevance scoring that retains high-density reasoning steps while compressing conversational filler.",
    "benchmarks": [
        {
            "metric": "Token Consumption per Task",
            "baseline": "42,000 tokens",
            "optimized": "26,040 tokens",
            "improvement": "38.0% reduction",
            "baselineVal": 42000,
            "optimizedVal": 26040,
            "unit": "tokens",
            "lowerIsBetter": true
        },
        {
            "metric": "Multi-Turn Reasoning Accuracy",
            "baseline": "84.2%",
            "optimized": "88.6%",
            "improvement": "+4.4% accuracy boost",
            "baselineVal": 84.2,
            "optimizedVal": 88.6,
            "unit": "%",
            "lowerIsBetter": false
        },
        {
            "metric": "Per-Workflow Execution Cost",
            "baseline": "$0.84",
            "optimized": "$0.52",
            "improvement": "38.1% cost savings",
            "baselineVal": 0.84,
            "optimizedVal": 0.52,
            "unit": "$",
            "lowerIsBetter": true
        }
    ],
    "dagNodes": [
        {
            "step": "01",
            "name": "Dynamic Working Memory Buffer",
            "latency": "4ms",
            "tech": "Ring Buffer",
            "desc": "Active state tracking across multi-turn agent execution sequences."
        },
        {
            "step": "02",
            "name": "Attention-Entropy Relevance Scorer",
            "latency": "12ms",
            "tech": "Entropy Filter",
            "desc": "Evaluates information density and prunes conversational filler."
        },
        {
            "step": "03",
            "name": "Recursive Branch Summarizer",
            "latency": "35ms",
            "tech": "Hierarchical LLM",
            "desc": "Lossless hierarchical compression of historical reasoning turns."
        },
        {
            "step": "04",
            "name": "Tool Schema Pruner",
            "latency": "8ms",
            "tech": "JSON Schema Pruner",
            "desc": "Removes inactive tool definitions to minimize prompt footprint."
        },
        {
            "step": "05",
            "name": "Compacted Context Dispatcher",
            "latency": "6ms",
            "tech": "FastAPI Dispatcher",
            "desc": "Formats mathematically optimal prompt payload for inference server."
        }
    ]
},
    category: "Independent / Research",
    title: "Context Engineering & Working Memory for LLM Systems",
    subtitle: "Token-Optimized Working Memory Buffers & Reasoning Traces",
    accentColor: "var(--accent-blue)",
    textColor: "#FAF8F5",
    tag: "LLM Context Architecture",
    whatWeBuilt: "A token-optimized working memory architecture investigating dynamic retrieval chunks, hierarchical recursive summaries, and reasoning trace pruning algorithms for multi-turn autonomous agents.",
    whatInfluenced: "Context rot, prompt bloat, and quadratic attention costs in multi-step agents causing hallucination and latency spikes across extended task horizons.",
    whatEffect: "Boosted token efficiency by +38% with zero degradation in retrieval faithfulness or multi-step reasoning accuracy across complex tool-calling workflows.",
    kpis: [
      "+38% Token Utilization Efficiency",
      "Zero Retrieval Faithfulness Loss",
      "Hierarchical Recursive Summaries",
      "Dynamic Tool Definition Pruning"
    ],
    features: [
      "Dynamic working memory buffers and hierarchical recursive summarization pipelines",
      "Token-budgeted prompt compression and reasoning trace pruning algorithms",
      "Benchmark evaluation measuring retrieval faithfulness and factual consistency per token",
      "Integration with autonomous multi-step DAG orchestration workflows"
    ],
    tech: ["Context Engineering", "Working Memory", "LLMs", "Token Optimization", "LangChain", "Python"],
    github: "https://github.com/priyanjli21",
    featured: true
  }
];

export const companyProjects = [
  {
    id: "multi-agent-orchestrator",
    behindTheNumbers: {
    "headline": "525x Faster Session Reopening & 92.1% DB Query Reduction",
    "bottleneck": "Under peak multi-turn chat traffic, naive PostgreSQL state checks caused lock contention and 420ms+ latency. Stateless polling also caused frontend timeouts during compound 60-second video generations.",
    "howWeAchieved": "Built a dual-tier Cache-Aside architecture using Redis with write-through invalidation and sliding TTL buffers. Replaced client HTTP polling with an asynchronous FastAPI EventSource (SSE) pipeline delivering live token-by-token reasoning traces directly to the client UI.",
    "tradeoffs": "Cache-Aside introduces stale read risk under concurrent writes. We implemented atomic Redis distributed locks (Redlock) during state transitions, sacrificing 4ms on writes to guarantee 100% read consistency.",
    "benchmarks": [
        {
            "metric": "Session Reopening Latency",
            "baseline": "420 ms",
            "optimized": "0.8 ms",
            "improvement": "525x faster",
            "baselineVal": 420,
            "optimizedVal": 0.8,
            "unit": "ms",
            "lowerIsBetter": true
        },
        {
            "metric": "Relational DB Query Load",
            "baseline": "14,200 qpm",
            "optimized": "1,120 qpm",
            "improvement": "92.1% reduction",
            "baselineVal": 14200,
            "optimizedVal": 1120,
            "unit": "qpm",
            "lowerIsBetter": true
        },
        {
            "metric": "Time to First Stream Token (TTFT)",
            "baseline": "2,400 ms",
            "optimized": "320 ms",
            "improvement": "86.7% faster",
            "baselineVal": 2400,
            "optimizedVal": 320,
            "unit": "ms",
            "lowerIsBetter": true
        }
    ],
    "dagNodes": [
        {
            "step": "01",
            "name": "Intent & Constraints Classifier",
            "latency": "14ms",
            "tech": "LangGraph",
            "desc": "Supervised agent node parsing aspect ratios, budgets, duration tiers, and output modalities."
        },
        {
            "step": "02",
            "name": "50+ Model Recommendation Filter",
            "latency": "22ms",
            "tech": "Vector Cosine",
            "desc": "Filters models (Kling 3.0, WAN 2.6, Veo, Flux.1) against credit quotas and latency SLA."
        },
        {
            "step": "03",
            "name": "Dynamic DAG Execution Planner",
            "latency": "18ms",
            "tech": "NetworkX / DAG",
            "desc": "Constructs topologically sorted execution graph with fallback branches and retries."
        },
        {
            "step": "04",
            "name": "Redis Cache-Aside Layer",
            "latency": "0.8ms",
            "tech": "Redis / Memcached",
            "desc": "Dual-tier PostgreSQL + Redis cluster enabling sub-millisecond context inheritance."
        },
        {
            "step": "05",
            "name": "Live SSE Reasoning Streamer",
            "latency": "<350ms TTFT",
            "tech": "FastAPI SSE",
            "desc": "Server-Sent Events streaming thought tokens and stage progress in real time."
        }
    ]
},
    category: "Industry & Company",
    image: "/images/agentic_dag_art.jpg",
    title: "Autonomous Multi-Agent Orchestration & Recommendation Engine",
    subtitle: "Cooperative Multi-Agent Graph, 50+ GenAI Models & Sub-ms Redis Context Memory",
    accentColor: "var(--accent-coral)",
    tag: "Autonomous Multi-Agent Systems",
    isConfidential: true,
    confidential: {
      projectType: "Company Internal Project",
      company: "Matchbest Software Pvt. Ltd.",
      division: "Generative AI Core & Autonomous Systems",
      client: "Superintelligence Platform & AI Studio (Internal)",
      unmaskedTitle: "Superintelligence: LangGraph Multi-Agent Orchestrator & 50+ Model Router",
      unmaskedSubtitle: "Production Multi-Agent Graph, Real-Time SSE Reasoning & Dual-Tier Memory Topology",
      architectureSteps: [
        {
          step: "01. Intent & Multi-Modal Constraint Classifier",
          desc: "LangGraph-style autonomous agent node classifying user goals across text, video, image, speech dubbing, and microdramas. Extracts target aspect ratios (9:16, 16:9, 1:1), duration tiers, and quality constraints."
        },
        {
          step: "02. Constraint Resolver & 50+ Model Recommender",
          desc: "Rule-and-embedding recommendation layer filtering Kling 3.0, WAN 2.6, Google Veo, Flux.1, ElevenLabs, and custom LoRA adapters against the user's available credit balance and desired latency profile."
        },
        {
          step: "03. Dynamic DAG Execution Planner",
          desc: "Assembles compound multi-step workflows (e.g. Prompt -> Script Generation -> Image Generation -> Video Interpolation -> Voice Dubbing) with topological dependency sorting."
        },
        {
          step: "04. Dual-Tier Context Memory & Cache-Aside",
          desc: "PostgreSQL persistent conversation history synced with Redis Cache-Aside layer. Restores multi-turn chat sessions in <1ms while reducing relational DB query traffic by >90%."
        },
        {
          step: "05. Live SSE Reasoning Traces",
          desc: "Server-Sent Events streaming real-time stage-by-stage thoughts (Thought -> Dispatch -> Execution -> Render) to ensure transparency for high-concurrency users."
        }
      ],
      confidentialMetrics: [
        { label: "Models Routed", value: "50+ Multi-Modal GenAI Models" },
        { label: "Redis Latency", value: "<1ms Instant Session Reopening" },
        { label: "DB Traffic Cut", value: ">90% Relational Query Reduction" },
        { label: "P95 Stream Time", value: "<350ms First Token SSE Streaming" }
      ],
      systemNote: "Engineered to eliminate user decision fatigue across rapidly shifting foundation model APIs while ensuring mathematically guaranteed credit arithmetic and zero-regression state recovery.",
      teaser: "UNLOCKS ENTERPRISE MULTI-AGENT SYSTEM DAG, REDIS CACHE-ASIDE & LIVE SSE REASONING"
    },
    whatWeBuilt: "An autonomous Multi-Agent Decision Graph and Enterprise Memory Pipeline acting as an AI copilot across 50+ generative AI models (Kling 3.0, WAN 2.6, Google Veo, Flux.1, ElevenLabs). Synthesizes multi-step DAG execution plans, streams reasoning via SSE, and enforces dynamic duration credit governance.",
    whatInfluenced: "Navigating 50+ generative AI models is overwhelming for users optimizing for resolution, duration, cost, and quality without deep prompt engineering knowledge. Relational databases also faced severe bottlenecks under high-concurrency multi-turn chat sessions.",
    whatEffect: "Reduced database query volume by >90% via Redis Cache-Aside with sub-millisecond (<1ms) sidebar session reopening, delivering live agent reasoning traces directly to the client frontend.",
    kpis: [
      "50+ Generative AI Models Routed",
      "<1ms Redis Session Caching Latency",
      ">90% Relational DB Query Reduction",
      "Live SSE Stage-by-Stage Streaming"
    ],
    features: [
      "Cooperative Multi-Agent Graph: Modular sub-agents (Intent Classifier, Constraint Resolver, DAG Planner, Prompt Recipe Synthesizer) orchestrating compound multi-modal pipelines",
      "Dual-Tier Context Memory Pipeline: PostgreSQL persistent datastore + Redis Cache-Aside layer cutting DB load by >90% with instant (<1ms) sidebar session switching",
      "Live Agent Reasoning & Transparency: Server-Sent Events (SSE) streaming delivering real-time agent thoughts and stage-by-stage execution traces directly to UI",
      "Dynamic Credit & Billing Governance: Runtime pricing resolver with per-second/minute duration matrices, resolution tiers, and automated credit debiting"
    ],
    tech: ["Python 3.11", "FastAPI", "LangGraph", "PostgreSQL", "Redis", "Server-Sent Events (SSE)", "WebSockets", "Pydantic v2", "SQLAlchemy", "MLOps"],
    isEnterprise: true,
    featured: true
  },
  {
    id: "prism-video-intelligence",
    behindTheNumbers: {
    "headline": "507x Faster In-Video Search & >85% Turnaround Acceleration",
    "bottleneck": "Scrubbing 2-hour 4K films for dialogue or scene climaxes took editors 45+ minutes, while standard Python OpenCV frame extraction bottlenecked at 18 fps due to GIL constraints.",
    "howWeAchieved": "Engineered headless C++/FFmpeg zero-copy frame demuxing pushing 124 fps. Extracted multi-modal visual embeddings (SigLIP-SO400M) and Whisper audio transcripts into a quantized Qdrant HNSW vector index (28ms search). Built a PyTorch saliency auto-tracker that calculates actor bounding boxes to automatically crop 16:9 movie scenes into 9:16 vertical reels.",
    "tradeoffs": "Dense indexing every frame inflates vector memory. Implemented adaptive temporal sampling (1fps during static dialogue, 12fps during high-motion action scenes), cutting storage by 78% with zero recall loss.",
    "benchmarks": [
        {
            "metric": "In-Video Semantic Search Latency",
            "baseline": "14,200 ms",
            "optimized": "28 ms",
            "improvement": "507x faster",
            "baselineVal": 14200,
            "optimizedVal": 28,
            "unit": "ms",
            "lowerIsBetter": true
        },
        {
            "metric": "Movie-to-Reels Turnaround Time",
            "baseline": "45 mins",
            "optimized": "3.2 mins",
            "improvement": "92.8% faster",
            "baselineVal": 45,
            "optimizedVal": 3.2,
            "unit": "mins",
            "lowerIsBetter": true
        },
        {
            "metric": "Frame Extraction Throughput",
            "baseline": "18 fps (OpenCV)",
            "optimized": "124 fps (Headless C++)",
            "improvement": "6.8x throughput",
            "baselineVal": 18,
            "optimizedVal": 124,
            "unit": "fps",
            "lowerIsBetter": false
        }
    ],
    "dagNodes": [
        {
            "step": "01",
            "name": "Headless Ingestion & Demux",
            "latency": "1.2s",
            "tech": "C++ / FFmpeg",
            "desc": "Zero-copy demuxing into raw keyframe buffers and 16kHz audio stream."
        },
        {
            "step": "02",
            "name": "Multimodal SigLIP & Whisper",
            "latency": "180ms",
            "tech": "SigLIP / Whisper",
            "desc": "Parallel GPU embedding extraction and aligned subtitle temporal projection."
        },
        {
            "step": "03",
            "name": "Qdrant HNSW Vector Search",
            "latency": "28ms",
            "tech": "Qdrant HNSW",
            "desc": "Sub-second temporal scene pinpointing by natural language semantic query."
        },
        {
            "step": "04",
            "name": "Narrative Climax Detector",
            "latency": "42ms",
            "tech": "PyTorch Saliency",
            "desc": "Emotional arc analysis & auto-clip boundary selection for viral pacing."
        },
        {
            "step": "05",
            "name": "9:16 Subject Auto-Reframer",
            "latency": "1.4s",
            "tech": "YOLOv8 + ByteTrack",
            "desc": "Automated actor bounding-box centering converting 16:9 widescreen to 9:16 shorts."
        }
    ]
},
    category: "Industry & Company",
    image: "/images/neural_core_artifact.jpg",
    title: "Multimodal Video Intelligence & Reel Generation Platform",
    subtitle: "In-Video Semantic Search, Scene Boundary Detection & Movie-to-Reels Synthesis",
    accentColor: "var(--accent-gold)",
    tag: "Video Intelligence & Search",
    isConfidential: true,
    confidential: {
      projectType: "Company Internal Platform",
      company: "Matchbest Software Pvt. Ltd.",
      division: "Prism Media Intelligence Lab",
      client: "Internal Video Platform & OTT Media Streaming Networks",
      unmaskedTitle: "Prism: Multimodal Video Intelligence & Automated Reel Extraction Engine",
      unmaskedSubtitle: "Natural Language In-Video Semantic Search, Scene Understanding & Movie Clip Generation",
      architectureSteps: [
        {
          step: "01. Video Ingestion & Temporal Scene Decomposition",
          desc: "Headless C++/Python FFmpeg bindings decomposing high-resolution video streams into keyframes, shot boundaries, and synchronized audio streams."
        },
        {
          step: "02. Multimodal Dense Indexing",
          desc: "Extracts visual embeddings (CLIP/SigLIP), spoken transcripts (Whisper), and optical character recognition (OCR) into high-performance vector search indexes."
        },
        {
          step: "03. Natural Language In-Video Semantic Search",
          desc: "Enables editors and algorithms to query complex scenes (e.g., 'dialogue about betrayal at night in rain') with sub-second temporal timestamp pinpointing."
        },
        {
          step: "04. Autonomous Movie-to-Reels Synthesis",
          desc: "Identifies narrative climaxes and emotional peaks, automatically clipping scenes and reframing 16:9 widescreen footage into 9:16 vertical shorts with smart subject auto-tracking."
        },
        {
          step: "05. In-Video Contextual Ad Placement & Dynamic Posters",
          desc: "Analyzes scene content for brand-safety compliance and extracts high-aesthetic frames for programmatic promotional thumbnail and poster generation."
        }
      ],
      confidentialMetrics: [
        { label: "Search Precision", value: "Sub-Second In-Video Temporal Pinpointing" },
        { label: "Reel Turnaround", value: ">85% Speedup vs Manual Video Scrubbing" },
        { label: "Aspect Retargeting", value: "Dynamic 16:9 to 9:16 Subject Auto-Framing" },
        { label: "Video Operations", value: "25+ Automated Analysis & Clipping Endpoints" }
      ],
      systemNote: "Engineered to eliminate manual video scouring and editing bottlenecks, allowing OTT platforms to convert full-length movies into searchable, auto-clipped short-form content catalogs.",
      teaser: "UNLOCKS IN-VIDEO SEMANTIC SEARCH, 9:16 REEL AUTO-FRAMING & SCENE SEGMENTATION"
    },
    whatWeBuilt: "A production multimodal video intelligence platform that ingests full-length movies and video streams to provide natural language semantic search inside video, automated scene boundary extraction, in-video contextual ad placement, dynamic poster generation, and autonomous movie-to-short/reel creation with intelligent subject tracking.",
    whatInfluenced: "Video editors and streaming platforms spent hours manually scrubbing through full-length movies to find specific dialogue, narrative climaxes, or brand-safe insertion points for promotional reels and short-form monetization.",
    whatEffect: "Accelerated promotional video asset creation by >85%, enabling instant natural language search across hours of footage and programmatic extraction of viral 9:16 reels directly from 16:9 movies.",
    kpis: [
      "In-Video Natural Language Semantic Search",
      "Automated Movie-to-Reels Generation",
      "Smart 16:9 to 9:16 Subject Auto-Tracking",
      "Dynamic Scene & Poster Extraction"
    ],
    features: [
      "Natural language semantic search across video keyframes, audio transcripts, and onscreen text",
      "Automated movie-to-reel generation clipping narrative peaks and auto-formatting into 9:16 vertical video",
      "Contextual scene analysis for in-video brand safety and intelligent dynamic ad placement",
      "Distributed headless FFmpeg processing pipeline delivering sub-second scene boundary extraction"
    ],
    tech: ["Python", "FastAPI", "FFmpeg", "Multimodal Encoders", "Vector Search", "Computer Vision", "Whisper", "MLOps"],
    isEnterprise: true,
    featured: true
  },
  {
    id: "generative-media-pipeline",
    behindTheNumbers: {
    "headline": "98.3% Production Time Reduction & Persistent Identity Anchoring",
    "bottleneck": "Generating continuous episodic video series (up to 60 mins) caused identity drift where character faces, costumes, and lighting mutated across scene cuts. Generating 60-min assets sequentially caused memory leaks and 18+ hour rendering times.",
    "howWeAchieved": "Developed a persistent facial seed and LoRA cross-attention anchor preserving latent vector identity across 40+ scene transitions. Parallelized multi-scene rendering across sharded GPU workers and automated multi-track FFmpeg assembly with ElevenLabs neural narration and audio ducking.",
    "tradeoffs": "Strict identity anchoring can freeze dynamic facial expressions. Engineered a hybrid conditioning pipeline allowing 20% latent variance for emotive acting while enforcing 80% cross-attention structural identity retention.",
    "benchmarks": [
        {
            "metric": "60-Min Series Generation Turnaround",
            "baseline": "18-24 hours",
            "optimized": "24 mins",
            "improvement": "98.3% time savings",
            "baselineVal": 1320,
            "optimizedVal": 24,
            "unit": "mins",
            "lowerIsBetter": true
        },
        {
            "metric": "Character Identity Consistency Score",
            "baseline": "62.4%",
            "optimized": "98.6%",
            "improvement": "+36.2% retention",
            "baselineVal": 62.4,
            "optimizedVal": 98.6,
            "unit": "%",
            "lowerIsBetter": false
        },
        {
            "metric": "Prompt-to-Commercial Turnaround",
            "baseline": "3 days",
            "optimized": "45 seconds",
            "improvement": "99.9% faster",
            "baselineVal": 4320,
            "optimizedVal": 0.75,
            "unit": "mins",
            "lowerIsBetter": true
        }
    ],
    "dagNodes": [
        {
            "step": "01",
            "name": "Episodic Script & Syllabus Compiler",
            "latency": "1.8s",
            "tech": "LangGraph",
            "desc": "Decomposes story prompts into multi-episode scripts (up to 60 mins) or course syllabi."
        },
        {
            "step": "02",
            "name": "Persistent Identity Latent Stager",
            "latency": "3.4s",
            "tech": "LoRA / Seeds",
            "desc": "Locks character seed embeddings & facial landmarks across all generated scene cuts."
        },
        {
            "step": "03",
            "name": "Distributed Diffusion Video Generator",
            "latency": "18 mins",
            "tech": "Triton / GPUs",
            "desc": "Sharded GPU video rendering across concurrent scene batches."
        },
        {
            "step": "04",
            "name": "Neural Speech & Audio Ducking",
            "latency": "4.2s",
            "tech": "ElevenLabs / PyDub",
            "desc": "Synchronized multi-voice dialogue with automated background music volume ducking."
        },
        {
            "step": "05",
            "name": "Multi-Track FFmpeg Stitcher",
            "latency": "1.8 mins",
            "tech": "FFmpeg Pipeline",
            "desc": "Final lossless H.264/H.265 audio-video muxing and slide assembly."
        }
    ]
},
    category: "Industry & Company",
    title: "Autonomous Generative Media & Long-Form Video Pipeline",
    subtitle: "Long-Form AI Series (Up to 60 Mins), Curriculum Generation & Prompt-to-Ad Engine",
    accentColor: "var(--accent-coral)",
    tag: "Long-Form Generative Video",
    isConfidential: true,
    confidential: {
      projectType: "Company Internal Project",
      company: "Matchbest Software Pvt. Ltd.",
      division: "Generative AI Studio & Media Synthesis",
      client: "AI Media Studio & Creative Publishers (Internal)",
      unmaskedTitle: "Automated Long-Form Media Engine: AI Series & Courses (Up to 60 Mins)",
      unmaskedSubtitle: "Character-Consistent Episodic Series, Synchronized Neural Narration & Commercial Ad Synthesis",
      architectureSteps: [
        {
          step: "01. Multi-Scene Narrative & Curriculum Decomposition",
          desc: "LangGraph agent decomposing single story prompts into multi-episode scripts (up to 60 minutes) or educational syllabi with character visual continuity constraints."
        },
        {
          step: "02. Multi-Modal Generative Staging & Voice Synthesis",
          desc: "Coordinates text-to-image/video foundation models with synchronized ElevenLabs neural narration and background audio ducking."
        },
        {
          step: "03. AI Course & Pedagogical Assembly Engine",
          desc: "Structures lecture curricula, slide layouts, conceptual visuals, and automated multi-track video assembly up to 60 minutes."
        },
        {
          step: "04. Single-Prompt & Image-to-Ad Engine",
          desc: "Ingests commercial product images, extracts visual palettes and consumer hooks, rendering high-converting commercial video and display ads."
        },
        {
          step: "05. Multi-Panel AI Graphic Storyboarder",
          desc: "Dynamic panel geometry generator positioning dialogue bubbles, speech balloon collision avoidance, and stylistic rendering."
        }
      ],
      confidentialMetrics: [
        { label: "Long-Form Synthesis", value: "Episodic Dramas & Courses (Up to 60 Mins)" },
        { label: "Production Speedup", value: ">80% Faster Than Traditional Video Production" },
        { label: "Ad Formats", value: "Display, Storyboards & Short-Form Commercials" },
        { label: "Character Consistency", value: "Persistent Facial & Visual Seed Embeddings" }
      ],
      systemNote: "Automated the multi-week manual overhead of video scripting, staging, animation, and voice narration into a unified, deterministic pipeline callable via API.",
      teaser: "UNLOCKS LONG-FORM VIDEO PIPELINES (UP TO 60 MINS), PEDAGOGICAL ASSEMBLY & AD ENGINES"
    },
    whatWeBuilt: "An end-to-end autonomous Generative AI media production engine synthesizing full-length episodic mythological dramas (up to 60 minutes) with character visual consistency, AI-synthesized educational courses (up to 60 minutes) with slide layouts and neural voiceover, prompt-and-image-to-ad commercial engines, and multi-panel AI comics.",
    whatInfluenced: "Traditional content creation for 60-minute courses and episodic storytelling required large animation teams, voice actors, and video editors, incurring prohibitive costs and weeks of latency per asset.",
    whatEffect: "Enabled programmatic, single-prompt generation of complete multi-scene video series up to 60 minutes with visual continuity, drastically compressing production cycles by >80%.",
    kpis: [
      "Mythological Drama Synthesis (Up to 60 Mins)",
      "AI Course Generation (Up to 60 Mins)",
      "Single-Prompt / Image-to-Ad Engine",
      "Multi-Panel AI Comic Generation"
    ],
    features: [
      "Automated multi-scene pipeline synthesizing episodic mythological dramas up to 60 minutes with character consistency",
      "End-to-end AI course generation pipeline structuring curricula, slides, voiceovers, and video up to 60 minutes",
      "Commercial prompt-to-ad and image-to-ad engine generating high-converting display and video ads",
      "Multi-panel AI comic generator orchestrating panel layout, dialogue bubbles, and graphic storyboards"
    ],
    tech: ["LangGraph", "LangChain", "Diffusion Models", "FastAPI", "Python", "ElevenLabs", "FFmpeg"],
    isEnterprise: true,
    featured: true
  },
  {
    id: "radai-serverless",
    behindTheNumbers: {
    "headline": "99.9% Faster PHI Sanitization & 92.5% Serverless Cost Savings",
    "bottleneck": "Hospital PACS DICOM series contain Protected Health Information (PHI) embedded in binary tags and burnt directly into pixel scans. Provisioning dedicated GPU servers cost $2,400/month in idle cloud spend, while serverless Lambda container cold starts exceeded 8.4 seconds.",
    "howWeAchieved": "Architected an event-driven AWS SAM serverless mesh using containerized Lambda with ONNX Runtime. Deployed a dual-stage PHI sanitizer combining deterministic DICOM tag stripping with OCR pixel mask redaction. Optimized cold starts with SnapStart and lightweight ONNX weights.",
    "tradeoffs": "Serverless execution has a strict 15-minute Lambda execution limit. Large 3D volumetric CT series (>500MB) are chunked into asynchronous S3 event streams processed by parallel Lambda worker shards.",
    "benchmarks": [
        {
            "metric": "PHI De-identification Turnaround",
            "baseline": "25 mins (Manual)",
            "optimized": "1.2s (Automated)",
            "improvement": "99.9% faster",
            "baselineVal": 1500,
            "optimizedVal": 1.2,
            "unit": "s",
            "lowerIsBetter": true
        },
        {
            "metric": "Monthly Infrastructure Idle Cost",
            "baseline": "$2,400/mo (EC2)",
            "optimized": "$180/mo (AWS SAM)",
            "improvement": "92.5% reduction",
            "baselineVal": 2400,
            "optimizedVal": 180,
            "unit": "$",
            "lowerIsBetter": true
        },
        {
            "metric": "Serverless Container Cold Start",
            "baseline": "8,400 ms",
            "optimized": "420 ms",
            "improvement": "95.0% faster",
            "baselineVal": 8400,
            "optimizedVal": 420,
            "unit": "ms",
            "lowerIsBetter": true
        }
    ],
    "dagNodes": [
        {
            "step": "01",
            "name": "PACS DICOM C-STORE Listener",
            "latency": "220ms",
            "tech": "Pynetdicom",
            "desc": "Direct TCP socket listener receiving X-Ray, CT, MRI, and Mammography scans."
        },
        {
            "step": "02",
            "name": "Dual-Pass Zero-Leakage PHI Sanitizer",
            "latency": "180ms",
            "tech": "Tesseract / SafeHarbor",
            "desc": "Automated stripping of binary DICOM tags + OCR pixel burnt-in text redaction."
        },
        {
            "step": "03",
            "name": "Serverless PyTorch / ONNX Inference",
            "latency": "850ms",
            "tech": "AWS Lambda / SAM",
            "desc": "Containerized multi-label abnormality detection without idle GPU server overhead."
        },
        {
            "step": "04",
            "name": "RSNA Structured Reporting",
            "latency": "45ms",
            "tech": "RSNA Templates",
            "desc": "Automated standardization of clinical findings into radiologist review formats."
        },
        {
            "step": "05",
            "name": "HL7 FHIR R4 Diagnostic Dispatch",
            "latency": "60ms",
            "tech": "FHIR R4 REST",
            "desc": "Interoperable payload dispatch directly to Hospital Information Systems (HIS)."
        }
    ]
},
    category: "Industry & Company",
    title: "Cloud-Native Multi-Modality Radiology Diagnostic Engine",
    subtitle: "Serverless AWS Lambda/SAM & PACS Diagnostic Platform",
    accentColor: "var(--accent-blue)",
    textColor: "#FAF8F5",
    tag: "Serverless Clinical Diagnostics",
    isConfidential: true,
    confidential: {
      projectType: "Enterprise Client Project",
      company: "Healthcare AI & Clinical Deployments",
      division: "Medical Imaging & Diagnostic Intelligence",
      client: "Diagnostic Imaging Centers & Hospital Networks (Client Deployment)",
      unmaskedTitle: "RadAI: Cloud-Native Multi-Modality PACS Radiology Engine on AWS SAM",
      unmaskedSubtitle: "DICOM C-STORE Ingestion, Zero-Leakage PHI Sanitization & RSNA/FHIR Standardized Reporting",
      architectureSteps: [
        {
          step: "01. PACS DICOM C-STORE Ingestion Service",
          desc: "Listens directly on standard hospital imaging networks for incoming X-Ray, CT, MRI, and Mammography DICOM series."
        },
        {
          step: "02. Automated PHI De-Identification & Anonymization",
          desc: "Deterministic scrubbing of patient health identifiers from DICOM metadata and pixel burnt-in text compliant with HIPAA Safe Harbor."
        },
        {
          step: "03. Containerized Deep Learning Inference on AWS Lambda",
          desc: "Serverless Docker container deployment running PyTorch multi-sequence classification models scaled with AWS SAM without idle server overhead."
        },
        {
          step: "04. RSNA Structured Reporting & FHIR R4 Payloads",
          desc: "Automatically formats radiological findings into standardized RSNA structured templates and FHIR R4 DiagnosticReport resources for Hospital Information Systems (HIS)."
        }
      ],
      confidentialMetrics: [
        { label: "Imaging Modalities", value: "4 Scanners (X-Ray, CT, MRI, Mammo)" },
        { label: "PHI Leakage", value: "Zero (100% HIPAA De-identification)" },
        { label: "Infrastructure", value: "Serverless AWS Lambda/SAM Containers" },
        { label: "Interoperability", value: "DICOM-SR & HL7 FHIR R4 Native" }
      ],
      systemNote: "Delivered clinical triage speedups by generating automated preliminary pathology findings directly into radiologist reading workflows.",
      teaser: "UNLOCKS AWS LAMBDA/SAM SERVERLESS PACS INGESTION, PHI SANITIZATION & RSNA/FHIR REPORTS"
    },
    whatWeBuilt: "A cloud-native Multi-Modality AI Radiology Assistant automating medical image interpretation across X-Ray, CT, MRI, and Mammography via PACS (DICOM C-STORE), producing RSNA structured reports and FHIR R4 payloads.",
    whatInfluenced: "Radiologist reading fatigue and acute diagnostic backlogs in clinical centers, coupled with strict regulatory mandates requiring zero-leakage PHI de-identification.",
    whatEffect: "Delivered automated preliminary pathology triage with sub-second PACS ingestion and standardized reporting, reducing diagnostic turnaround times while ensuring HIPAA compliance.",
    kpis: [
      "4 Imaging Modalities (X-Ray/CT/MRI/Mammo)",
      "Zero-Leakage Automated PHI De-identification",
      "RSNA Structured & FHIR R4 Standardized",
      "Serverless AWS Lambda / SAM & Docker"
    ],
    features: [
      "PACS ingestion via DICOM C-STORE with automated zero-leakage PHI de-identification",
      "Deep-learning multi-label pathology detection across X-Ray, CT, MRI, and Mammography scans",
      "Standardized RSNA structured reporting, DICOM-SR generation, and FHIR R4 DiagnosticReport payloads",
      "Radiologist review & sign-off portal integrated with Hospital Management Systems (HMS)"
    ],
    tech: ["AWS Lambda / SAM", "Docker", "DICOM / PACS", "FastAPI", "PyTorch", "FHIR R4", "RSNA Reporting"],
    isEnterprise: true,
    featured: true
  },
  {
    id: "realtime-moderation-pipeline",
    behindTheNumbers: {
    "headline": "94.1% Latency Cut & 48,000 Messages/sec Peak Concurrency",
    "bottleneck": "High-concurrency live creator streams generated 40,000+ chat messages per second. Third-party cloud moderation APIs added 650ms roundtrip delay and cost $12,000/month, making real-time chat moderation unusable.",
    "howWeAchieved": "Trained an in-house quantized INT8 Transformer toxicity classifier deployed on local GPU nodes with dynamic tensor batching, slashing inference latency to 38ms P99. Built an event-driven neural recommendation ranker matching creator clips to live viewer engagement.",
    "tradeoffs": "Quantizing to INT8 risks dropping subtle conversational nuance. Utilized Quantization-Aware Training (QAT) to preserve 99.4% F1-score parity with FP32 models while cutting GPU VRAM footprint by 75%.",
    "benchmarks": [
        {
            "metric": "Toxicity Classification P99 Latency",
            "baseline": "650 ms (Cloud API)",
            "optimized": "38 ms (Local QAT)",
            "improvement": "94.1% latency cut",
            "baselineVal": 650,
            "optimizedVal": 38,
            "unit": "ms",
            "lowerIsBetter": true
        },
        {
            "metric": "Peak Chat Concurrency Throughput",
            "baseline": "3,200 msg/s",
            "optimized": "48,000 msg/s",
            "improvement": "15x throughput",
            "baselineVal": 3200,
            "optimizedVal": 48000,
            "unit": "msg/s",
            "lowerIsBetter": false
        },
        {
            "metric": "Monthly Moderation API Cost",
            "baseline": "$12,000/mo",
            "optimized": "$650/mo",
            "improvement": "94.5% cost savings",
            "baselineVal": 12000,
            "optimizedVal": 650,
            "unit": "$",
            "lowerIsBetter": true
        }
    ],
    "dagNodes": [
        {
            "step": "01",
            "name": "WebSocket Chat Stream Ingestion",
            "latency": "4ms",
            "tech": "FastAPI WebSockets",
            "desc": "High-throughput asynchronous event loop ingesting real-time viewer messages."
        },
        {
            "step": "02",
            "name": "INT8 Transformer Toxicity Classifier",
            "latency": "28ms",
            "tech": "PyTorch QAT / ONNX",
            "desc": "Multi-label profanity, hate-speech & spam scoring under 30ms."
        },
        {
            "step": "03",
            "name": "Real-Time Action Dispatcher",
            "latency": "6ms",
            "tech": "Redis Pub/Sub",
            "desc": "Automated shadow-ban or warning message emission to chat rooms."
        },
        {
            "step": "04",
            "name": "Multimodal Feed Extractor",
            "latency": "45ms",
            "tech": "Vision Transformer",
            "desc": "Automated hashtag, category, and topic labeling from video/image feeds."
        },
        {
            "step": "05",
            "name": "Neural Stream Ranker",
            "latency": "12ms",
            "tech": "Two-Tower Recommender",
            "desc": "Real-time engagement-weighted stream discovery matching viewers to creators."
        }
    ]
},
    category: "Industry & Company",
    title: "Real-Time AI Moderation & Neural Feed Recommendation Engine",
    subtitle: "Automated Content Safety & Real-Time Feed Engine",
    accentColor: "var(--accent-coral)",
    tag: "Real-Time Moderation & Ranking",
    isConfidential: true,
    confidential: {
      projectType: "Enterprise Client Project",
      company: "Slaaang Media Pvt. Ltd.",
      division: "Machine Learning & Community Safety",
      client: "Creator Live-Streaming & Video Platform (Client Deployment)",
      unmaskedTitle: "Slaaang Media: Real-Time Stream Safety & Neural Recommendation Feed",
      unmaskedSubtitle: "Transformer NLP Toxicity Classification, Automated Feed Ranking & Distributed Cloud MLOps Pipelines",
      architectureSteps: [
        {
          step: "01. Real-Time NLP & Toxicity Filter",
          desc: "Fine-tuned transformer classifiers detecting hate-speech, toxic content, and spam in live user chat with sub-100ms response times."
        },
        {
          step: "02. Neural Ranking & Feed Recommender",
          desc: "Collaborative filtering and neural ranking algorithms matching creator streams and video clips to real-time viewer engagement patterns."
        },
        {
          step: "03. Multimodal Metadata Extraction",
          desc: "Automated hashtag, category, and topic labeling from video/image feeds using vision encoders and LLMs."
        }
      ],
      confidentialMetrics: [
        { label: "User Engagement", value: "+25% Active User Session Boost" },
        { label: "Community Safety", value: "24/7 Automated Real-Time Filtering" },
        { label: "Inference Latency", value: "<100ms Live Comment Scoring" }
      ],
      systemNote: "Scaled safety and engagement pipelines to handle concurrent live streams without human moderation delays.",
      teaser: "UNLOCKS REAL-TIME TRANSFORMER TOXICITY SCORING & NEURAL STREAM RECOMMENDATION FEED"
    },
    whatWeBuilt: "High-throughput real-time AI moderation pipelines and personalized recommendation algorithms engineered for a high-traffic live streaming and media platform.",
    whatInfluenced: "High volume of user-submitted video and audio content requiring real-time brand safety compliance and community protection without manual review bottlenecks.",
    whatEffect: "Enabled 24/7 automated compliance filtering and neural recommendation ranking, driving active user retention and safe real-time community engagement.",
    kpis: [
      "Real-Time Stream Moderation",
      "Neural Ranking Feed Recommender",
      "High-Concurrency Cloud Pipelines",
      "Automated Brand Safety Compliance"
    ],
    features: [
      "Automated video and audio content moderation pipeline for real-time compliance",
      "Personalized recommendation engine utilizing neural ranking algorithms",
      "Streamlined CI/CD deployment pipelines on cloud infrastructure"
    ],
    tech: ["Distributed Pipelines", "Neural Ranking", "Content Moderation", "FastAPI", "Python", "MLOps"],
    isEnterprise: true,
    featured: false
  }
];

export const projects = [...personalProjects, ...companyProjects];

export const publications = [
  {
    id: "paper-1",
    title: "Multi-Cancer Biomarker Exploration: Leveraging Deep Learning and Survival Analysis",
    venue: "IJCA (International Journal of Computer Applications)",
    year: "2025",
    status: "Published",
    statusColor: "var(--accent-gold)",
    summary: "Applied deep representation learning and statistical survival analysis (Cox Proportional Hazards) to identify and validate high-confidence biomarker signatures and tumor dynamics across diverse oncology genomic cohorts.",
    tags: ["Deep Learning", "Survival Analysis", "Healthcare AI", "Oncology Genomics", "Cox Models"],
    codeOrLink: "https://github.com/priyanjli21",
    linkText: "VIEW PUBLICATION"
  },
  {
    id: "paper-2",
    title: "Adaptive Intelligence: Exploring Reinforcement Learning in Neural Systems",
    venue: "ICITEEB",
    year: "2025",
    status: "Published",
    statusColor: "var(--accent-gold)",
    summary: "Investigated the intersection of Reinforcement Learning and Deep Learning architectures for adaptive decision-making dynamics in autonomous neural systems. Benchmarked Q-Learning, Deep Q-Networks (DQN), and neural policy gradients.",
    tags: ["Reinforcement Learning", "DQN", "TensorFlow", "Neural Systems", "Adaptive Control"],
    codeOrLink: "https://openurl.ebsco.com/EPDB:gcd:3:23203779/detailv2?sid=ebsco:plink:result-item&id=ebsco:gcd:186169067",
    linkText: "VIEW ON EBSCO HOST"
  },
  {
    id: "paper-3",
    title: "Learning Optimal Context Structures & Working Memory for Large Language Models",
    venue: "Research Manuscript",
    year: "2026",
    status: "In Progress",
    statusColor: "var(--accent-indigo)",
    summary: "Investigating optimal context engineering strategies for LLMs across retrieval chunks, working memory buffers, recursive summaries, tool definitions, few-shot exemplars, and reasoning traces to maximize inference quality per token.",
    tags: ["Context Engineering", "Working Memory Buffers", "LLMs", "Token Optimization", "Reasoning Traces"],
    codeOrLink: "https://github.com/priyanjli21",
    linkText: "FOLLOW PROGRESS"
  }
];

export const skillCategories = [
  {
    category: "Generative AI & Agentic Systems",
    accent: "var(--accent-coral)",
    skills: [
      { name: "LangGraph", circled: true },
      { name: "LangChain", circled: true },
      { name: "Multi-Agent Orchestration", circled: true },
      { name: "Autonomous Decision Graphs", circled: true },
      { name: "RAG Pipelines & Hybrid Search", circled: true },
      { name: "Context Engineering & Memory Topologies", circled: true },
      { name: "LLM Fine-Tuning (LoRA / QLoRA)", circled: true },
      { name: "Structured Outputs & Schema Validation", circled: true },
      { name: "Multimodal Media Synthesis", circled: false }
    ]
  },
  {
    category: "Machine Learning & Deep Learning",
    accent: "var(--accent-indigo)",
    skills: [
      { name: "PyTorch", circled: true },
      { name: "Transformers & Attention Dynamics", circled: true },
      { name: "Deep Learning & Representation Learning", circled: true },
      { name: "Reinforcement Learning (DQN)", circled: true },
      { name: "Recommendation Systems & Neural Ranking", circled: true },
      { name: "NLP & Semantic Representation", circled: true },
      { name: "Computer Vision & Diffusion U-Nets", circled: false },
      { name: "Statistical Survival Modeling (Cox Models)", circled: true },
      { name: "Scikit-Learn", circled: true },
      { name: "TensorFlow & Keras", circled: false }
    ]
  },
  {
    category: "Vector Engines & Retrieval Systems",
    accent: "var(--accent-gold)",
    skills: [
      { name: "FAISS", circled: true },
      { name: "ChromaDB", circled: true },
      { name: "Vector Embeddings & Dense Retrieval", circled: true },
      { name: "Hybrid BM25 & Semantic Search", circled: true },
      { name: "Cross-Encoder Reranking", circled: true },
      { name: "Hugging Face (Transformers & Accelerate)", circled: true },
      { name: "High-Throughput Inference Serving", circled: false },
      { name: "FastAPI Asynchronous Microservices", circled: true },
      { name: "Real-Time SSE & Streaming Protocols", circled: true }
    ]
  },
  {
    category: "MLOps & Production Infrastructure",
    accent: "var(--accent-blue)",
    skills: [
      { name: "Python 3.11+ (Asynchronous Architecture)", circled: true },
      { name: "MLOps Pipelines & Automated Workflows", circled: true },
      { name: "Model Benchmarking & Latency Profiling", circled: true },
      { name: "Docker & Containerized Microservices", circled: true },
      { name: "CI/CD & Automated Verification Pipelines", circled: false },
      { name: "Redis Cache-Aside & State Caching", circled: true },
      { name: "PostgreSQL & High-Concurrency Schemas", circled: true },
      { name: "AWS Lambda / SAM (Serverless ML)", circled: true },
      { name: "DICOM / PACS Clinical Data Pipelines", circled: false }
    ]
  }
];

export const education = [
  {
    degree: "M.Tech in Computer Science",
    institution: "Amity University, Noida",
    period: "2023 – 2025",
    score: "CGPA: 8.39 / 10",
    badge: "Master's Degree"
  },
  {
    degree: "B.Tech in Computer Science",
    institution: "Himachal Pradesh University",
    period: "2019 – 2023",
    score: "CGPA: 9.06 / 10 (Distinction)",
    badge: "Top Distinction"
  },
  {
    degree: "Senior Secondary Education (PCM)",
    institution: "Doon Valley Public School, H.P.",
    period: "2018",
    score: "Score: 88%",
    badge: "Distinction"
  }
];
