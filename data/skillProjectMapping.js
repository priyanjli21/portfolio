// skillProjectMapping.js - Detailed traceability linking skills to real production projects
export const SKILL_PROJECT_MAP = {
  // Generative AI & Agentic Systems
  "LangGraph": {
    productionScale: "4-Agent Stateful DAGs with Cycle Detection & Sub-Graph Checkpointing",
    architectureRole: "Engineered stateful cyclic graphs for autonomous multi-agent task execution and fallback recovery.",
    projects: [
      { id: "stealth-multiagent", name: "Autonomous Multi-Agent Platform", impact: "4-agent collaborative state graph" },
      { id: "agentic-rag-engine", name: "Context-Aware Autonomous RAG", impact: "Dynamic multi-turn routing" },
      { id: "ai-agent-evaluator", name: "LLM Agent Evaluation Harness", impact: "Automated agent benchmarking" }
    ]
  },
  "LangChain": {
    productionScale: "Production Chains with Structured Output Parsers & Pydantic Validation",
    architectureRole: "Integrated prompt templates, vector store retrievers, and output parsers across 15+ GenAI workflows.",
    projects: [
      { id: "agentic-rag-engine", name: "Context-Aware Autonomous RAG", impact: "Dynamic retrieval chain" },
      { id: "genai-content-suite", name: "Enterprise Generative AI Suite", impact: "Multi-tenant generation pipelines" }
    ]
  },
  "Multi-Agent Orchestration": {
    productionScale: "Parallel Planner-Worker-Critic Consensus Topology",
    architectureRole: "Designed supervisor-worker architectures resolving asynchronous code and text generation tasks.",
    projects: [
      { id: "stealth-multiagent", name: "Autonomous Multi-Agent Platform", impact: "P99 sub-200ms task dispatch" },
      { id: "ai-agent-evaluator", name: "LLM Agent Evaluation Harness", impact: "Multi-agent adversarial judge" }
    ]
  },
  "Autonomous Decision Graphs": {
    productionScale: "Dynamic Branching with Rule-Based & Probabilistic Router Fallbacks",
    architectureRole: "Constructed deterministic DAG routing preventing infinite agent loops and hallucinations.",
    projects: [
      { id: "stealth-multiagent", name: "Autonomous Multi-Agent Platform", impact: "Zero-loop guarantee" },
      { id: "agentic-rag-engine", name: "Context-Aware Autonomous RAG", impact: "Semantic intent classifier" }
    ]
  },
  "RAG Pipelines & Hybrid Search": {
    productionScale: "Reciprocal Rank Fusion (RRF) combining Dense Vectors with BM25 Sparse Indexing",
    architectureRole: "Built low-latency document chunking, semantic vector lookup, and contextual compression pipelines.",
    projects: [
      { id: "agentic-rag-engine", name: "Context-Aware Autonomous RAG", impact: "Sub-45ms contextual retrieval" },
      { id: "genai-content-suite", name: "Enterprise Generative AI Suite", impact: "Multi-document synthesis" }
    ]
  },
  "Context Engineering & Memory Topologies": {
    productionScale: "Dual-Tier Memory (Short-Term In-Memory Session + Long-Term Vector Store)",
    architectureRole: "Engineered sliding-window conversation memory and semantic episodic recall for complex chat contexts.",
    projects: [
      { id: "stealth-multiagent", name: "Autonomous Multi-Agent Platform", impact: "Episodic cross-session recall" },
      { id: "agentic-rag-engine", name: "Context-Aware Autonomous RAG", impact: "Token-budgeted context windows" }
    ]
  },
  "LLM Fine-Tuning (LoRA / QLoRA)": {
    productionScale: "4-Bit Quantized Low-Rank Adaptation on 8B & 14B Parameter Models",
    architectureRole: "Fine-tuned domain-specific open-weights LLMs with synthetic high-quality instruction datasets.",
    projects: [
      { id: "genai-content-suite", name: "Enterprise Generative AI Suite", impact: "84% reduction in per-token inference cost" },
      { id: "diffusion-pytorch", name: "Text-to-Image Generative Diffusion", impact: "Text encoder cross-attention tuning" }
    ]
  },
  "Structured Outputs & Schema Validation": {
    productionScale: "Guaranteed JSON Schema Emission via Pydantic & Instructor",
    architectureRole: "Eliminated downstream parsing errors with zero-shot constrained grammar decoding.",
    projects: [
      { id: "stealth-multiagent", name: "Autonomous Multi-Agent Platform", impact: "100% JSON compliance on tool calls" },
      { id: "ai-agent-evaluator", name: "LLM Agent Evaluation Harness", impact: "Structured evaluation rubrics" }
    ]
  },
  "Multimodal Media Synthesis": {
    productionScale: "Cross-Attention Conditioned Latent Diffusion at 512x512 Resolution",
    architectureRole: "Integrated text token embeddings with spatial image latent representations via cross-attention.",
    projects: [
      { id: "diffusion-pytorch", name: "Text-to-Image Generative Diffusion", impact: "185ms E2E latency with DDIM" },
      { id: "multimodal-recsys", name: "Multimodal Recommendation Engine", impact: "Joint text-image embedding space" }
    ]
  },

  // Machine Learning & Deep Learning
  "PyTorch": {
    productionScale: "Multi-GPU DistributedDataParallel (DDP) on 8x NVIDIA A100 Clusters",
    architectureRole: "Implemented custom loss formulations, backward autograd graphs, and native CUDA-accelerated kernels.",
    projects: [
      { id: "diffusion-pytorch", name: "Text-to-Image Generative Diffusion", impact: "From-scratch U-Net & DDIM loop" },
      { id: "aethel-genomics", name: "Aethel Genomics Liquid Biopsy", impact: "Late-fusion multi-modal neural network" },
      { id: "rl-adaptive-traffic", name: "Adaptive RL Traffic Control", impact: "Deep Q-Network with replay buffer" }
    ]
  },
  "Transformers & Attention Dynamics": {
    productionScale: "Multi-Head Cross-Attention & FlashAttention-2 Latency Profiling",
    architectureRole: "Analyzed attention maps to verify conditioning alignment and eliminate quadratic memory complexity.",
    projects: [
      { id: "diffusion-pytorch", name: "Text-to-Image Generative Diffusion", impact: "Cross-attention text conditioning" },
      { id: "multimodal-recsys", name: "Multimodal Recommendation Engine", impact: "Two-tower Transformer architecture" }
    ]
  },
  "Deep Learning & Representation Learning": {
    productionScale: "Contrastive Latent Spaces & Supervised Metric Learning",
    architectureRole: "Constructed high-dimensional latent representations for multi-analyte clinical genomics and vision.",
    projects: [
      { id: "aethel-genomics", name: "Aethel Genomics Liquid Biopsy", impact: "0.9982 ROC-AUC diagnostic accuracy" },
      { id: "diffusion-pytorch", name: "Text-to-Image Generative Diffusion", impact: "VAE latent space encoding" }
    ]
  },
  "Reinforcement Learning (DQN)": {
    productionScale: "Double DQN with Prioritized Experience Replay (PER) & Target Networks",
    architectureRole: "Formulated custom Markov Decision Processes (MDP) with shaped reward functions for dynamic flow control.",
    projects: [
      { id: "rl-adaptive-traffic", name: "Adaptive RL Traffic Control", impact: "34% reduction in peak queue latencies" }
    ]
  },
  "Recommendation Systems & Neural Ranking": {
    productionScale: "Two-Tower Dual-Encoder Model Serving Top-100 Candidates in <15ms",
    architectureRole: "Built vector similarity candidate generation paired with multi-task cross-network reranking.",
    projects: [
      { id: "multimodal-recsys", name: "Multimodal Recommendation Engine", impact: "98.4% Top-10 catalog retrieval recall" }
    ]
  },
  "NLP & Semantic Representation": {
    productionScale: "Sub-Word BPE Tokenization, Sentence-Transformers & Cosine Similarity Metrics",
    architectureRole: "Trained semantic representation pipelines for clinical notes, e-commerce queries, and research corpora.",
    projects: [
      { id: "agentic-rag-engine", name: "Context-Aware Autonomous RAG", impact: "Semantic clustering & de-duplication" },
      { id: "aethel-genomics", name: "Aethel Genomics Liquid Biopsy", impact: "Clinical terminology normalization" }
    ]
  },
  "Computer Vision & Diffusion U-Nets": {
    productionScale: "Multi-Scale Residual U-Net with Skip Connections & Spatial Attention",
    architectureRole: "Engineered convolutional backbones with spatial downsampling and latent diffusion reverse-processes.",
    projects: [
      { id: "diffusion-pytorch", name: "Text-to-Image Generative Diffusion", impact: "Custom U-Net with cosine scheduling" },
      { id: "medical-imaging-pacs", name: "Clinical DICOM Gateway", impact: "Pixel-level ROI de-identification" }
    ]
  },
  "Statistical Survival Modeling (Cox Models)": {
    productionScale: "Elastic-Net Regularized Cox Proportional Hazards & Kaplan-Meier Curve Fitting",
    architectureRole: "Authored peer-reviewed survival analysis algorithms predicting post-resection oncological recurrence.",
    projects: [
      { id: "aethel-genomics", name: "Aethel Genomics Liquid Biopsy", impact: "+9.7 Mo recurrence lead-time advantage" }
    ]
  },
  "Scikit-Learn": {
    productionScale: "Nested 10-Fold Cross-Validation & TreeSHAP Genomic Biomarker Attribution",
    architectureRole: "Engineered feature scaling, PCA dimensionality reduction, and gradient-boosted ensembles.",
    projects: [
      { id: "aethel-genomics", name: "Aethel Genomics Liquid Biopsy", impact: "Isolated top 150 driver CpG loci" },
      { id: "multimodal-recsys", name: "Multimodal Recommendation Engine", impact: "Cold-start heuristic fallbacks" }
    ]
  },
  "TensorFlow & Keras": {
    productionScale: "Graph Execution & Model Export to ONNX / TensorRT Formats",
    architectureRole: "Benchmarked legacy model architectures and cross-framework model conversions.",
    projects: [
      { id: "medical-imaging-pacs", name: "Clinical DICOM Gateway", impact: "ONNX Runtime accelerated inference" }
    ]
  },

  // Vector Engines & Retrieval Systems
  "FAISS": {
    productionScale: "Hierarchical Navigable Small World (HNSW) & IVF-PQ Vector Indices",
    architectureRole: "Configured sub-millisecond approximate nearest neighbor (ANN) search over multi-million vector datasets.",
    projects: [
      { id: "agentic-rag-engine", name: "Context-Aware Autonomous RAG", impact: "18ms retrieval over 1M+ chunk index" },
      { id: "multimodal-recsys", name: "Multimodal Recommendation Engine", impact: "Sub-15ms top-K candidate retrieval" }
    ]
  },
  "ChromaDB": {
    productionScale: "Persistent Embedded Vector Store with Metadata Filtering Constraints",
    architectureRole: "Integrated local collection management with pre-filtering across tenants and user permission scopes.",
    projects: [
      { id: "agentic-rag-engine", name: "Context-Aware Autonomous RAG", impact: "Multi-tenant partitioned collections" }
    ]
  },
  "Vector Embeddings & Dense Retrieval": {
    productionScale: "768-Dim Dense Embeddings with L2-Normalized Cosine Similarity",
    architectureRole: "Trained and benchmarked dense retrieval embedding models against clinical and financial corpora.",
    projects: [
      { id: "agentic-rag-engine", name: "Context-Aware Autonomous RAG", impact: "High semantic precision retrieval" },
      { id: "diffusion-pytorch", name: "Text-to-Image Generative Diffusion", impact: "CLIP text prompt latent alignment" }
    ]
  },
  "Hybrid BM25 & Semantic Search": {
    productionScale: "Reciprocal Rank Fusion with Dynamic Alpha Tuning",
    architectureRole: "Merged exact keyword term matching with semantic dense search to eliminate false-negative misses.",
    projects: [
      { id: "agentic-rag-engine", name: "Context-Aware Autonomous RAG", impact: "Zero-miss keyword retrieval" }
    ]
  },
  "Cross-Encoder Reranking": {
    productionScale: "Two-Stage Pipeline (Bi-Encoder Retrieval -> Cross-Encoder Precision Rerank)",
    architectureRole: "Maximized NDCG@10 ranking quality by re-scoring top-50 candidate chunks with a cross-encoder model.",
    projects: [
      { id: "agentic-rag-engine", name: "Context-Aware Autonomous RAG", impact: "+26% boost in top-3 context relevance" }
    ]
  },
  "Hugging Face (Transformers & Accelerate)": {
    productionScale: "Accelerate Multi-GPU Pipeline with Mixed Precision (fp16 / bf16)",
    architectureRole: "Deployed open-source models with automated checkpointing, tokenizer streaming, and PEFT integration.",
    projects: [
      { id: "diffusion-pytorch", name: "Text-to-Image Generative Diffusion", impact: "Pre-trained CLIP text encoder" },
      { id: "genai-content-suite", name: "Enterprise Generative AI Suite", impact: "Model hub deployment pipeline" }
    ]
  },
  "High-Throughput Inference Serving": {
    productionScale: "Dynamic Batching with Worker Concurrency & P99 Latency SLA Guarantees",
    architectureRole: "Architected microservices handling high-concurrency requests with worker auto-scaling.",
    projects: [
      { id: "multimodal-recsys", name: "Multimodal Recommendation Engine", impact: "5,000 requests/second capability" },
      { id: "medical-imaging-pacs", name: "Clinical DICOM Gateway", impact: "Real-time streaming PACS throughput" }
    ]
  },
  "FastAPI Asynchronous Microservices": {
    productionScale: "Async/Await Event Loop with Pydantic v2 Serialization & Uvicorn Workers",
    architectureRole: "Engineered ultra-fast REST endpoints with dependency injection, JWT auth, and background task queues.",
    projects: [
      { id: "agentic-rag-engine", name: "Context-Aware Autonomous RAG", impact: "Async streaming query endpoint" },
      { id: "stealth-multiagent", name: "Autonomous Multi-Agent Platform", impact: "WebSocket & SSE coordination" },
      { id: "medical-imaging-pacs", name: "Clinical DICOM Gateway", impact: "Zero-copy binary file streaming" }
    ]
  },
  "Real-Time SSE & Streaming Protocols": {
    productionScale: "Server-Sent Events (SSE) Delivering First-Token Latency <250ms",
    architectureRole: "Implemented asynchronous generator streams providing instant token streaming to user interfaces.",
    projects: [
      { id: "stealth-multiagent", name: "Autonomous Multi-Agent Platform", impact: "Real-time agent thought streaming" },
      { id: "agentic-rag-engine", name: "Context-Aware Autonomous RAG", impact: "Live streaming response generation" }
    ]
  },

  // MLOps & Production Infrastructure
  "Python 3.11+ (Asynchronous Architecture)": {
    productionScale: "High-Performance Type-Annotated AsyncIO Microservices",
    architectureRole: "Leveraged modern Python typing, asyncio coroutines, and memory profiling to achieve high throughput.",
    projects: [
      { id: "stealth-multiagent", name: "Autonomous Multi-Agent Platform", impact: "Full async state orchestrator" },
      { id: "rl-adaptive-traffic", name: "Adaptive RL Traffic Control", impact: "Vectorized environment loop" }
    ]
  },
  "MLOps Pipelines & Automated Workflows": {
    productionScale: "Automated Evaluation Harness with GitHub Actions & Continuous Validation",
    architectureRole: "Created continuous integration pipelines testing model regressions, latency budgets, and accuracy drift.",
    projects: [
      { id: "ai-agent-evaluator", name: "LLM Agent Evaluation Harness", impact: "Automated benchmark CI/CD" },
      { id: "diffusion-pytorch", name: "Text-to-Image Generative Diffusion", impact: "Automated FID evaluation run" }
    ]
  },
  "Model Benchmarking & Latency Profiling": {
    productionScale: "PyTorch Profiler with GPU Kernel Timing & Memory Footprint Auditing",
    architectureRole: "Benchmarked CUDA memory fragmentation, operator latencies, and end-to-end P99 response distributions.",
    projects: [
      { id: "diffusion-pytorch", name: "Text-to-Image Generative Diffusion", impact: "Identified U-Net memory bottleneck" },
      { id: "stealth-multiagent", name: "Autonomous Multi-Agent Platform", impact: "P99 sub-200ms latency certification" }
    ]
  },
  "Docker & Containerized Microservices": {
    productionScale: "Multi-Stage Lightweight Alpine/Debian GPU Container Images (<1.8GB)",
    architectureRole: "Packaged CUDA, PyTorch, and Python dependencies into reproducible containerized artifacts.",
    projects: [
      { id: "medical-imaging-pacs", name: "Clinical DICOM Gateway", impact: "Standardized clinical PACS container" },
      { id: "stealth-multiagent", name: "Autonomous Multi-Agent Platform", impact: "Docker Compose multi-service stack" }
    ]
  },
  "CI/CD & Automated Verification Pipelines": {
    productionScale: "Zero-Downtime Deployment with Blue/Green Verification",
    architectureRole: "Configured automated test runners running linting, unit tests, and mock inference regressions.",
    projects: [
      { id: "genai-content-suite", name: "Enterprise Generative AI Suite", impact: "Automated unit & regression gates" }
    ]
  },
  "Redis Cache-Aside & State Caching": {
    productionScale: "Sub-Millisecond Read Latency on 50M+ Keys with Dynamic TTL Eviction",
    architectureRole: "Built cache-aside semantic caching saving up to 68% of redundant LLM token generation costs.",
    projects: [
      { id: "stealth-multiagent", name: "Autonomous Multi-Agent Platform", impact: "Sub-ms agent session state" },
      { id: "agentic-rag-engine", name: "Context-Aware Autonomous RAG", impact: "Cached frequent query vector results" }
    ]
  },
  "PostgreSQL & High-Concurrency Schemas": {
    productionScale: "Indexed Relational Database with pgvector Extension for Vector Storage",
    architectureRole: "Structured transactional schemas storing multi-turn conversations, user evaluations, and audit logs.",
    projects: [
      { id: "multimodal-recsys", name: "Multimodal Recommendation Engine", impact: "High-concurrency catalog queries" },
      { id: "ai-agent-evaluator", name: "LLM Agent Evaluation Harness", impact: "Structured evaluation experiment logs" }
    ]
  },
  "AWS Lambda / SAM (Serverless ML)": {
    productionScale: "Serverless Event-Driven Inference with Custom Container Images",
    architectureRole: "Built cost-effective scale-to-zero microservices handling asynchronous document and image processing.",
    projects: [
      { id: "medical-imaging-pacs", name: "Clinical DICOM Gateway", impact: "Scale-to-zero serverless ingestion" }
    ]
  },
  "DICOM / PACS Clinical Data Pipelines": {
    productionScale: "HIPAA-Compliant Automated PHI De-Identification & Header Scrubbing",
    architectureRole: "Engineered secure clinical gateways parsing DICOM tags and scrubbing patient demographic metadata.",
    projects: [
      { id: "medical-imaging-pacs", name: "Clinical DICOM Gateway", impact: "100% HIPAA PHI removal verification" }
    ]
  }
};
