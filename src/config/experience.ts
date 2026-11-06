export const experience = [
  {
    id: "omnivision",
    company: "OmniVision",
    title: "Performance Engineering Intern",
    dateRange: "Aug 2026 - Dec 2026",
    bullets: [
      "Designed a heterogeneous CPU/GPU workflow around latency and resource constraints, routing research simulations to H200 and RTX PRO 6000 GPUs and production verification to CPU clusters during off-peak hours.",
      "Parallelized PyTorch RCWA with MPI, NUMA-aware placement, and CUDA streams; reduced H2D/D2H synchronization for 8× CPU and 5× GPU speedups over the respective pre-optimization implementations.",
      "Cached invariant RCWA layer computations and fixed PyTorch computation-graph memory leaks, reducing memory usage by ~40%.",
    ],
  },
  {
    id: "waymo",
    company: "Waymo",
    title: "Software Engineering Intern",
    dateRange: "May 2026 - Aug 2026",
    bullets: [
      "Engineered and productionized an end-to-end ML system for candidate selection, integrating model scores into the driving-set sampler and removing simulation as a prerequisite.",
      "Extended Waymo's shared ML infrastructure with a SQL/Python pipeline for 200K+ task-specific examples, integrating the workload into a multi-task training system with 2B+ joint-training examples.",
      "Developed a transformer-based sequence classifier and evaluation for rare, non-deterministic signals, achieving 68.3% AUC-PR vs. a 32% random baseline and 84.8% downstream accuracy.",
    ],
  },
  {
    id: "flatiron",
    company: "Flatiron Institute, Simons Foundation",
    title: "High Performance Computing Intern",
    dateRange: "May 2025 - Aug 2025",
    links: [{ label: "nifty-ls", href: "https://github.com/flatironinstitute/nifty-ls" }],
    bullets: [
      "Extended nifty-ls to support multiple sinusoidal basis terms for flexible Lomb-Scargle periodograms.",
      "Re-engineered compute-heavy Python routines as C++ extensions via nanobind and FINUFFT for ~100× speedup, then reached ~300× with 16-thread OpenMP.",
      "Ported FastChi2 assembly and periodogram post-processing to NVIDIA A100 GPUs with CuPy, achieving ~50× acceleration over single-threaded C++ and up to ~5,600× over the original Python implementation.",
      "Reduced FastChi2 99th-percentile numerical error from 1e-3 to 1e-6 by rewriting trigonometric summation and replacing NumPy FFT with FINUFFT.",
    ],
  },
  {
    id: "nyu-research-engineer",
    company: "New York University",
    title: "Part-time Research Engineer",
    dateRange: "Jan 2024 - May 2025",
    links: [
      {
        label: "OpenShift Migration Guide",
        href: "https://github.com/YuWei-CH/NYU-OpenShift-Tutorial",
      },
    ],
    bullets: [
      "Migrated HPC and inference workloads to Red Hat OpenShift with Docker, Kubernetes, and Globus, automating long-running services and monitoring resource usage with Prometheus.",
      "Packaged 5 HPC and ML workloads, including Amber and AlphaFold2, into reusable Singularity images and Slurm launch scripts for reproducible execution across ARM CPUs and NVIDIA GPUs.",
      "Compiled and benchmarked Gaussian and Amber on NVIDIA Grace Hopper, and HPL, Amber24, and Gaussian on AWS Graviton and GCP Axion, evaluating ARM CPUs for energy efficiency, compatibility, and cloud price-performance.",
      "Translated AlphaFold and DualPhysics from CUDA to HIP with HIPify for AMD GPU support on ROCm, and contributed fixes to HIPify for Math_constant.h issues to improve translation reliability.",
    ],
  },
  {
    id: "nyu-hpc-assistant",
    company: "NYU High-Performance Computing Team",
    title: "HPC Assistant",
    dateRange: "May 2024 - Sep 2024",
    links: [{ label: "Reform", href: "https://github.com/gencorefacility/reform" }],
    bullets: [
      "Enhanced Reform with sequential processing, compressed file handling, and parallel execution for genomics workloads.",
      "Updated ReformWeb to run Reform on HPC servers via a web UI with Flask, SQLite, Redis, Werkzeug, and Jinja2.",
      "Built CI/CD with GitHub Actions and Python unittest plus a Bash-based verification pipeline with TTL-based log retention.",
    ],
  },
];
