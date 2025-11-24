export const experience = [
  {
    company: "Flatiron Institute, Simons Foundation",
    title: "High Performance Computing Intern",
    dateRange: "May 2025 - Aug 2025",
    links: [{ label: "nifty-ls", href: "https://github.com/flatironinstitute/nifty-ls" }],
    bullets: [
      "Extended nifty-ls to support multiple sinusoidal basis terms for flexible Lomb-Scargle periodograms.",
      "Achieved a 100× speedup by binding and parallelizing compute-heavy routines from Python to C++ with nanobind and OpenMP.",
      "Further accelerated batched computation using CuPy and kernel-level optimized CUDA kernels, improving scalability by 50×.",
      "Improved FastChi2 numerical error from 1e-3 to 1e-6 by rewriting trigonometric summations and adopting FINUFFT.",
    ],
  },
  {
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
    company: "NYU High-Performance Computing Team",
    title: "HPC Assistant",
    dateRange: "May 2024 - Sep 2024",
    links: [{ label: "Reform", href: "https://github.com/YuWei-CH/reform" }],
    bullets: [
      "Enhanced Reform with sequential processing, compressed file handling, and parallel execution for genomics workloads.",
      "Updated ReformWeb to run Reform on HPC servers via a web UI with Flask, SQLite, Redis, Werkzeug, and Jinja2.",
      "Built CI/CD with GitHub Actions and Python unittest plus a Bash-based verification pipeline with TTL-based log retention.",
    ],
  },
  {
    company: "NYU High-Performance Computing Team",
    title: "Part-time Research Engineer",
    dateRange: "Jan 2024 - May 2024",
    bullets: [
      "Translated CUDA codebases to HIP with HIPify, enabling AMD GPU support for AlphaFold and DualPhysics on ROCm.",
      "Contributed fixes to HIPify for Math_constant.h issues to improve CUDA-to-HIP translation reliability.",
      "Evaluated ARM CPU suitability on AWS Graviton and GCP Axion by compiling HPL, Amber24, and Gaussian and benchmarking price-performance.",
    ],
  },
];
