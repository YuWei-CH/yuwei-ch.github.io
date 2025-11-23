export const siteConfig = {
  name: "Yuwei (Peter) Sun",
  title: "MCS @ UIUC · High-Performance Computing Engineer",
  description:
    "Showcasing Yuwei Sun's research in high-performance computing, personal projects, and professional experience.",
  accentColor: "#E84A27",
  social: {
    email: "yuweis2@illinois.edu",
    linkedin: "https://linkedin.com/in/yuwei-sun-1136b0217",
    twitter: "",
    github: "https://github.com/YuWei-CH",
  },
  aboutMe:
    "I build high-performance AI systems by applying HPC principles to model inference and infrastructure. My goal is to make large-scale AI run faster, cheaper, and smarter.",
  keywords: [
    "High Performance Computing (HPC)",
    "AI Infrastructure",
    "Cloud Computing",
    "Kernel Engineering",
  ],
  skills: [
    "Python",
    "C/C++",
    "CUDA",
    "Flask",
    "Redis",
    "MySQL",
    "Docker",
    "SLURM",
    "Singularity",
    "CMake",
    "Git/GitHub",
    "Linux",
    "OpenMP",
    "MPI",
    "GCP",
    "CI/CD",
    "Raspberry Pi",
    "cProfile",
  ],
  experience: [
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
  ],
  researchIntro:
    "I investigate GPU performance for scientific computing and wafer-scale architectures, collaborating with the Flatiron Institute on GPU-accelerated periodograms and with the Scalable Architecture Lab on memory systems for large accelerators.",
  research: [
    {
      org: "Flatiron Institute, Simons Foundation",
      title: "HPC Scientific Software",
      dateRange: "Sep 2025",
      focus:
        "Poster on optimizing and extending Lomb-Scargle periodogram computations for astronomy using GPU acceleration.",
      publicationTitle: "Optimizing and Extending Periodogram Computations for Astronomy",
      publicationLink: "https://sc25.conference-program.com/presentation/?id=post133&sess=sess527",
      mentor: "Dr. Lehman Garrison",
    },
    {
      org: "Scalable Architecture Lab",
      title: "Wafer-scale GPU Architecture",
      dateRange: "March 2025",
      focus:
        "Hierarchical distributed page address translation for wafer-scale GPUs to improve memory-system scalability.",
      publicationTitle:
        "HDPAT: Hierarchical Distributed Page Address Translation for Wafer-Scale GPUs",
      publicationLink: "https://hpca-conf.org/",
      mentor: "Prof. Yifan Sun",
    },
    {
      org: "Scalable Architecture Lab",
      title: "GPU Performance Tooling",
      dateRange: "Sep 2024",
      focus:
        "Dynamic binary instrumentation for AMD GPUs to study performance of large-scale accelerators.",
      publicationTitle:
        "Luthier: A Dynamic Binary Instrumentation Framework Targeting AMD GPUs",
      publicationLink: "https://ieeexplore.ieee.org/abstract/document/11096405",
      mentor: "Prof. Yifan Sun",
    },
  ],
  news: [
    {
      title: "Poster accepted to SC25 Poster Session",
      date: "Sep 2025",
      description:
        "Optimizing and Extending Periodogram Computations for Astronomy accepted for presentation; mentored by Dr. Lehman Garrison.",
    },
    {
      title: "Started MCS program at UIUC",
      date: "Aug 2025",
      description:
        "Beginning the Master of Computer Science program at the University of Illinois Urbana-Champaign.",
    },
    {
      title: "Joined Flatiron Institute as HPC Intern",
      date: "May 2025",
      description:
        "High-Performance Computing internship at the Flatiron Institute, Simons Foundation, focusing on GPU optimization.",
    },
  ],
  projects: [
    {
      name: "AWS-Sponsored Travel Planner",
      description:
        "Led a serverless, auto-scaling travel planner with Lambda, RDS, Cognito, and API Gateway, integrating LLM-based recommendations and OCR-based ticket parsing; built event-driven processing with SQS and cut OpenAI API costs by ~30% using ElastiCache.",
      skills: ["AWS Lambda", "API Gateway", "Cognito", "RDS", "SQS", "OpenAI API"],
      link: "https://github.com/YuWei-CH/Travel-Planner",
    },
    {
      name: "Google Hardware Product Sprint (EE Track)",
      description:
        "Designed, tested, and fabricated a PCB-based clock using KiCAD and microcontrollers, delivering a hardware prototype through the Google Hardware Product Sprint program.",
      link: "https://github.com/YuWei-CH/RedSun_Clock",
      skills: ["KiCAD", "Embedded C", "PCB Design"],
    },
    {
      name: "Byte-Pi-Cluster",
      description:
        "Built a five-node Raspberry Pi cluster with Kubernetes, MPI, and NFS for shared storage, enabling secure public network access via FRP for remote experiments.",
      link: "https://github.com/YuWei-CH/Byte-Pi-Cluster",
      skills: ["Kubernetes", "MPI", "Raspberry Pi", "NFS", "FRP"],
    },
  ],
  education: [
    {
      school: "University of Illinois Urbana-Champaign",
      degree: "Master of Computer Science",
      dateRange: "2025 - 2027",
      achievements: ["Focused on high-performance computing and GPU optimization."],
      honors: [],
    },
    {
      school: "New York University",
      degree: "B.S in CS, Minor in Math",
      dateRange: "2021 - 2025",
      achievements: ["Part-time member of the NYU High-Performance Computing Team."],
      honors: [
        "University Honors",
        "Tandon Dean's List",
        "Uber Career Prep Fellowship",
      ],
    },
  ],
  memberships: [
    {
      org: "BOINC (Science United)",
      role: "Volunteer Contributor",
      dateRange: "March 2024 - Present",
      description:
        "Contributed computing resources to global research projects via BOINC’s Science United platform, supporting areas such as biomedical research, climate modeling, and fundamental physics.",
    },
    {
      org: "ACM SIGHPC",
      role: "Student Member",
      dateRange: "Sep 2023 - Present",
      description:
        "Assisted the ACM SIGHPC student chapter with campus outreach and community events; served as a student volunteer at the SC conference.",
    },
    {
      org: "Student Cluster Competition (SC23)",
      role: "Benchmark and Hardware Specialist",
      dateRange: "Jul 2023 - Nov 2023",
      description:
        "Competed at SC23 optimizing HPC benchmarks on Intel MAX 9480 CPUs and Nvidia A100 GPUs; team placed 6th globally.",
    },
    {
      org: "Uber Career Prep Fellowship",
      role: "Fellow",
      dateRange: "Jan 2023 - Aug 2023",
      description:
        "Completed six months of software engineering training, mock interviews, and mentorship to sharpen problem-solving and collaboration.",
    },
  ],
  hobbies: [
    {
      name: "Photography",
      description:
        "Capturing architecture and urban stories with a focus on light, symmetry, and motion. I enjoy long-exposure night shots and documenting travel through photo essays.",
      highlights: [
        "Architecture and street photography",
        "Long-exposure and low-light work",
        "Photo essays from travels",
      ],
    },
    {
      name: "Poetry",
      description:
        "Writing short poems about cities, transit, and people—often pairing words with photos to explore place and memory.",
      highlights: [
        "Themes: city life, motion, and memory",
        "Pairing poems with photography",
        "Occasional readings with friends",
      ],
    },
  ],
};
