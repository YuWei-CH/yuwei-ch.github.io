export const experience = [
  {
    id: "waymo",
    company: "Waymo",
    title: "Software Engineering Intern",
    dateRange: "May 2026 - Aug 2026",
    bullets: [
      "Built an end-to-end ML workflow for agent-handover prediction, covering data sampling, model training, offline evaluation, and inference.",
      "Integrated inference scores into driving-set candidate selection to support log-based evaluation without requiring simulation-derived queries.",
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
      "Benchmarked and compiled Gaussian and Amber on NVIDIA Grace Hopper ARM CPUs, evaluating energy efficiency and compatibility.",
      "Led migration from a physical HPC cluster to an OpenShift-based on-prem cloud using Podman, Singularity, and Kubernetes.",
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
  {
    id: "nyu-hpc-research-engineer",
    company: "NYU High-Performance Computing Team",
    title: "Part-time Research Engineer",
    dateRange: "Jan 2024 - May 2024",
    bullets: [
      "Translated CUDA codebases to HIP with HIPify, enabling AMD GPU support for AlphaFold and DualPhysics on ROCm.",
      "Contributed fixes to HIPify for Math_constant.h issues to improve CUDA-to-HIP translation reliability.",
      "Evaluated cloud based ARM CPU suitability on AWS Graviton and GCP Axion by compiling HPL, Amber24, and Gaussian and benchmarking price-performance.",
    ],
  },
];
