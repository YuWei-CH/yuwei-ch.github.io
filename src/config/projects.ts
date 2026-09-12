export const projects = [
  {
    id: "iree",
    name: "IREE MLIR Compiler & Runtime (Feb–May 2026)",
    description:
      "Contributed 8 merged PRs to IREE, improving GPU codegen, StableHLO lowering correctness, CUDA Ada/sm_89 target support, and Python runtime interoperability. Enabled mixed-precision features including NVIDIA BF16 tensor-core lowering and BF16/FP8 buffer-view conversion.",
    link: "https://github.com/iree-org/iree",
    skills: ["MLIR", "GPU Codegen", "CUDA", "StableHLO", "BF16/FP8"],
  },
  {
    id: "moe-inference",
    name: "MoE Inference Kernel Optimization (Feb–May 2026)",
    description:
      "Built a GPU-resident expert-major MoE pipeline with CUDA worklist construction and fused FP8 dequantization. Used Nsight profiling to tune SIMT kernels for short sequences and CUTLASS Grouped GEMM for long sequences, achieving 6.79× average speedup (up to 17.15×) over the FlashInfer-Bench Python/PyTorch reference on NVIDIA B200 while passing all 19 correctness workloads.",
    link: "https://github.com/YuWei-CH/Fused-MoE-YWS",
    skills: ["MoE", "CUDA", "FP8", "CUTLASS", "GPU Kernel Optimization"],
  },
  {
    id: "gpt2-kernels",
    name: "Kernel-Level Optimization for GPT-2 (Sep 2025 - Dec 2025)",
    description:
      "Optimized GPT-2 inference kernels on A40 GPUs using Tensor Cores, Split-K, and FlashAttention. Reduced MatMul kernel runtime by 94.6% and improved throughput by ~180%; fused attention cut global memory traffic by 85% and global-to-core data movement from ~800 KB to 37–56 KB. Guided kernel tuning with Nsight Systems and Nsight Compute profiling.",
    link: "",
    skills: [
      "LLM",
      "Inference",
      "GPU Kernel Optimization",
      "CUDA",
      "FlashAttention",
      "Performance Profiling",
    ],
  },
  {
    id: "travel-planner",
    name: "AWS-Sponsored Travel Planner",
    description:
      "Led the team and secured AWS technical sponsorship for a serverless travel planner with LLM recommendations and OCR-based ticket parsing. Defined infrastructure with CloudFormation and integrated Lambda, API Gateway, Cognito, RDS, and SQS; ElastiCache caching was estimated to reduce OpenAI API costs by ~30% based on observed cache-hit rates.",
    skills: ["AWS Lambda", "CloudFormation", "API Gateway", "Cognito", "RDS", "SQS", "OpenAI API"],
    link: "https://github.com/YuWei-CH/Travel-Planner",
  },
  {
    id: "byte-pi",
    name: "Byte-Pi-Cluster",
    description:
      "Built a six-node Raspberry Pi cluster with Kubernetes, NFS-backed storage, and FRP remote access. Integrated MPI/OpenMP and a Hailo AI accelerator for HPL and semantic-segmentation experiments, while allocating ~50% of available capacity to biology and chemistry research through BOINC Science United.",
    link: "https://github.com/YuWei-CH/Byte-Pi-Cluster",
    skills: ["Kubernetes", "MPI", "OpenMP", "Hailo", "Raspberry Pi", "NFS", "FRP"],
  },
  {
    id: "order-system",
    name: "Distributed Order System Refactor",
    description:
      "Scaled a high-traffic order service from 1,000 to 50,000 QPS using Redis and RocketMQ with MySQL primary-replica replication. Refactored the monolith using DDD and SOLID with JOOQ and Flyway; implemented TCC inventory control with Redis/Lua, asynchronous order creation, delayed payment checks, and optimistic locking for transactional correctness.",
    link: "",
    skills: ["MySQL", "Redis", "RocketMQ", "Java", "DDD", "JOOQ", "Flyway"],
  },
  {
    id: "architecture-projects",
    name: "Computer Architecture & System Programming Projects",
    description:
      "Developed a Python E20 assembler and C++ CPU and cache simulators to model instruction execution and memory behavior.",
    link: "",
    skills: ["C++", "Computer Architecture", "Python", "CPU", "Assembly Language"],
  },
  {
    id: "google-hps-clock",
    name: "Google Hardware Product Sprint (EE Track)",
    description:
      "Selected as one of 25 students for Google Hardware Product Sprint's 12-week electronics program. Designed and fabricated a PCB clock with KiCAD, a microcontroller, and an LED matrix, then presented the prototype to Google engineers and product managers.",
    link: "https://github.com/YuWei-CH/RedSun_Clock",
    skills: ["KiCAD", "Embedded C", "PCB Design"],
  },
];
