import type { SiteConfig } from "../schema";

export const zh: SiteConfig = {
  name: "孙钰伟（Peter）",
  title: "纽约大学(NYU) -> 伊利诺伊大学香槟分校(UIUC) · 高性能计算 & AI Infra",
  description: "展示孙钰伟在高性能计算、个人项目和职业经历方面的成果。",
  accentColor: "#E84A27",
  social: {
    email: "yuweis2@illinois.edu",
    linkedin: "https://linkedin.com/in/yuwei-sun-1136b0217",
    twitter: "",
    github: "https://github.com/YuWei-CH",
  },
  aboutMe:
    "我通过将 HPC 原理应用到模型推理和基础设施，构建高性能计算系统，让大规模 AI 与 HPC 应用更快、更高效、更智能。",
  keywords: ["高性能计算（HPC）", "AI 基础设施", "云计算", "内核工程"],
  skills: [
    "Python",
    "C/C++",
    "CUDA",
    "HIP",
    "Bash",
    "SQL",
    "HTML/CSS",
    "Java",
    "Flask",
    "vLLM",
    "PyTorch",
    "Redis",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "RocketMQ",
    "Docker",
    "Kubernetes",
    "OpenShift",
    "SLURM",
    "Singularity",
    "Prometheus",
    "CMake",
    "Git/GitHub",
    "Linux",
    "OpenMP",
    "MPI",
    "GCP",
    "AWS",
    "CI/CD",
    "Raspberry Pi",
    "cProfile",
  ],
  experience: [
    {
      id: "omnivision",
      company: "OmniVision",
      title: "性能工程实习生",
      dateRange: "2026 年 8 月 - 2026 年 12 月",
      bullets: [
        "围绕延迟与资源约束设计 CPU/GPU 异构工作流：将研究仿真调度至 H200 与 RTX PRO 6000 GPU，生产验证任务则在非高峰时段分配到 CPU 集群。",
        "使用 MPI、NUMA 感知的进程绑定和 CUDA Streams 并行化基于 PyTorch 的 RCWA，并减少 H2D/D2H 同步，相比各自优化前的实现，CPU 版本加速 8 倍、GPU 版本加速 5 倍。",
        "缓存 RCWA 中不变的层计算结果，并修复 PyTorch 计算图内存泄漏，内存占用降低约 40%。",
      ],
    },
    {
      id: "waymo",
      company: "Waymo",
      title: "软件工程实习生",
      dateRange: "2026 年 5 月 - 2026 年 8 月",
      bullets: [
        "设计并上线面向候选样本筛选的端到端机器学习系统，将模型分数接入 driving-set 采样器，使筛选流程不再以仿真为前提。",
        "基于 SQL/Python 构建数据流水线，为 Waymo 共享机器学习基础设施扩展 20 万+ 条任务专属样本，并将该任务接入拥有 20 亿+ 联合训练样本的多任务训练系统。",
        "针对稀有且非确定性的信号，开发基于 Transformer 的序列分类器及评估流程，AUC-PR 达到 68.3%（随机基线为 32%），下游准确率达到 84.8%。",
      ],
    },
    {
      id: "flatiron",
      company: "Flatiron Institute, Simons Foundation",
      title: "高性能计算实习生",
      dateRange: "2025 年 5 月 - 2025 年 8 月",
      links: [{ label: "nifty-ls", href: "https://github.com/flatironinstitute/nifty-ls" }],
      bullets: [
        "扩展 nifty-ls，使其支持多组正弦基函数，灵活计算 Lomb-Scargle 周期图。",
        "通过 nanobind 和 FINUFFT 将计算密集的 Python 例程重构为 C++ 扩展，速度提升约 100 倍；使用 16 线程 OpenMP 后达到约 300 倍。",
        "借助 CuPy 将 FastChi2 矩阵组装和周期图后处理迁移至 NVIDIA A100 GPU，相比单线程 C++ 加速约 50 倍，相比原始 Python 实现最高加速约 5,600 倍。",
        "重写三角函数求和并以 FINUFFT 替换 NumPy FFT，将 FastChi2 数值误差的第 99 百分位值从 1e-3 降至 1e-6。",
      ],
    },
    {
      id: "nyu-research-engineer",
      company: "New York University",
      title: "研究工程师（兼职）",
      dateRange: "2024 年 1 月 - 2025 年 5 月",
      links: [
        {
          label: "OpenShift Migration Guide",
          href: "https://github.com/YuWei-CH/NYU-OpenShift-Tutorial",
        },
      ],
      bullets: [
        "借助 Docker、Kubernetes 和 Globus 将 HPC 与推理工作负载迁移到 Red Hat OpenShift，实现长期运行服务的自动化，并使用 Prometheus 监控资源使用。",
        "将 Amber、AlphaFold2 等 5 个 HPC 与机器学习工作负载封装为可复用的 Singularity 镜像和 Slurm 启动脚本，保证在 ARM CPU 与 NVIDIA GPU 上可复现运行。",
        "在 NVIDIA Grace Hopper 上编译并基准测试 Gaussian 与 Amber，并在 AWS Graviton 与 GCP Axion 上测试 HPL、Amber24 与 Gaussian，评估 ARM CPU 的能效、HPC 生态兼容性及云上性价比。",
        "用 HIPify 将 AlphaFold 和 DualPhysics 的 CUDA 代码翻译为 HIP，使其支持 AMD GPU 的 ROCm 平台；并为 HIPify 修复 Math_constant.h 相关问题，提高 CUDA 到 HIP 的转换可靠性。",
      ],
    },
    {
      id: "nyu-hpc-assistant",
      company: "NYU High-Performance Computing Team",
      title: "HPC 助理",
      dateRange: "2024 年 5 月 - 2024 年 9 月",
      links: [{ label: "Reform", href: "https://github.com/gencorefacility/reform" }],
      bullets: [
        "为 Reform 增强顺序处理、压缩文件处理和并行执行，适配基因组工作负载。",
        "更新 ReformWeb，使 Reform 可通过 Flask、SQLite、Redis、Werkzeug、Jinja2 在 HPC 服务器上运行。",
        "构建 GitHub Actions + Python unittest 的 CI/CD，并用 Bash 验证流水线与 TTL 日志保留。",
      ],
    },
  ],
  researchIntro:
    "我研究面向科学应用的异构计算与晶圆级 GPU 架构。工作包括与 Flatiron Institute 合作，优化周期图的并行计算，以及在可扩展体系结构实验室进行大规模加速器的性能分析与内存系统研究。",
  research: [
    {
      id: "rabt",
      org: "ISCA 2026 CBP-NG 研讨会",
      title: "分支预测研究",
      dateRange: "2026 年",
      focus: "参与 RABT: Run-Ahead Block TAGE 研究，论文被 ISCA 2026 CBP-NG 研讨会接收。",
      publicationTitle: "RABT: Run-Ahead Block TAGE",
      publicationLink:
        "https://archive.org/download/cbp-ng_proceedings/Gupta_et_al-paper.pdf",
    },
    {
      id: "flatiron-periodogram",
      org: "Flatiron Institute, Simons Foundation",
      title: "HPC 科学软件",
      dateRange: "2025 年 9 月",
      focus: "海报展示：通过 OpenMP 和 CUDA 优化并扩展 Lomb-Scargle 周期图计算。",
      publicationTitle: "Optimizing and Extending Periodogram Computations for Astronomy",
      publicationLink:
        "https://sc25.supercomputing.org/proceedings/posters/poster_pages/post133.html",
      mentor: "Dr. Lehman Garrison",
    },
    {
      id: "hdpat",
      org: "Scalable Architecture Lab",
      title: "晶圆级 GPU 架构",
      dateRange: "2025 年 3 月",
      focus: "提出晶圆级 GPU 的分层分布式页地址转换方案，提升内存系统可扩展性。",
      publicationTitle:
        "HDPAT: Hierarchical Distributed Page Address Translation for Wafer-Scale GPUs",
      publicationLink: "https://ieeexplore.ieee.org/document/11408538",
      mentor: "Prof. Yifan Sun",
    },
    {
      id: "luthier",
      org: "Scalable Architecture Lab",
      title: "GPU 性能工具链",
      dateRange: "2024 年 9 月",
      focus: "为 AMD GPU 设计动态二进制插桩工具，研究GPU加速器的性能特征。",
      publicationTitle:
        "Luthier: A Dynamic Binary Instrumentation Framework Targeting AMD GPUs",
      publicationLink: "https://ieeexplore.ieee.org/document/11096405",
      mentor: "Prof. Yifan Sun",
    },
  ],
  news: [
    {
      id: "omnivision-intern",
      title: "加入 OmniVision 担任性能工程实习生",
      date: "2026 年 8 月",
      description:
        "在 OmniVision（圣克拉拉）开始性能工程实习，在 CPU 集群与 NVIDIA GPU 上优化基于 PyTorch 的 RCWA 仿真。",
    },
    {
      id: "waymo-complete",
      title: "完成 Waymo 软件工程实习",
      date: "2026 年 8 月",
      description:
        "在 Waymo 仿真团队完成软件工程实习，参与面向 driving-set 候选样本筛选的机器学习流程开发。",
    },
    {
      id: "rabt-accepted",
      title: "RABT 被 ISCA 2026 CBP-NG 录用",
      date: "2026 年 4 月",
      description:
        "我们的项目与论文 [*RABT: Run-Ahead Block TAGE*](https://archive.org/download/cbp-ng_proceedings/Gupta_et_al-paper.pdf) 被 ISCA 2026 的 [CBP-NG 研讨会](https://cbp-ng.bpchamp.com/) 录用。感谢所有贡献者！",
    },
    {
      id: "hdpat-accepted",
      title: "论文被 HPCA 2026 录用",
      date: "2025 年 11 月",
      description: "我参与的论文 [*HDPAT: Hierarchical Distributed Page Address Translation for Wafer-Scale GPUs*](https://ieeexplore.ieee.org/document/11408538) 被 HPCA2026录用。感谢 Daoxuan学长 和 Yifan 教授的指导。",
    },
    {
      id: "sc25-poster",
      title: "海报入选 SC25 海报展示",
      date: "2025 年 9 月",
      description:
        "在Flatiron Institute的暑期实习工作的研究海报 [*Optimizing and Extending Periodogram Computations for Astronomy*](https://sc25.supercomputing.org/proceedings/posters/poster_pages/post133.html) 被SC25录用。感谢导师 Dr. Lehman Garrison。",
    },
    {
      id: "uiuc-mcs",
      title: "开启 UIUC MCS 学习",
      date: "2025 年 8 月",
      description:
        "很高兴加入伊利诺伊大学香槟分校 (UIUC) 计算机科学硕士项目，期待学术与职业上的成长！",
    },
    {
      id: "flatiron-intern",
      title: "加入 Flatiron Institute 担任 HPC 实习生",
      date: "2025 年 5 月",
      description:
        "在 Flatiron Institute (Simons Foundation) 从事高性能计算实习，专注于 HPC 应用的并行优化。主要参与 [nifty-ls](https://github.com/flatironinstitute/nifty-ls) 项目。",
    },
    {
      id: "luthier-accepted",
      title: "论文被 ISPASS 2025 录用",
      date: "2025 年 3 月",
      description:
        "我们的工作 [*Luthier: A Dynamic Binary Instrumentation Framework Targeting AMD GPUs*](https://ieeexplore.ieee.org/document/11096405) 被 ISPASS 2025 录用。感谢 Daoxuan 学长 和 Yifan 教授。",
    },
    {
      id: "scalable-architecture-lab",
      title: "加入可扩展体系结构实验室",
      date: "2024 年 8 月",
      description: "在 Yifan 教授指导下，参与 GPU 性能分析工具与晶圆级 GPU 项目的内存系统研究。",
    },
    {
      id: "reform-hipify",
      title: "参与 Reform Hipify",
      date: "2024 年 5 月",
      description:
        "将在暑期继续在 NYU HPC 工作，贡献 reformWeb 和 [*Reform*](https://github.com/gencorefacility/reform)，并持续推进 AMD HPC 应用适配。",
    },
    {
      id: "sc23",
      title: "参加 SC23 学生超算竞赛",
      date: "2023 年 11 月",
      description: "参与 SC23 学生超算竞赛，取得 *全球第六名*，NYU 队加油！",
    },
    {
      id: "uber-career-prep",
      title: "获得 UCP Fellowship",
      date: "2023 年 1 月",
      description:
        "很荣幸入选 *Uber Career Prep (UCP)* 2023 软件工程奖学金项目。",
    },
    {
      id: "google-hps",
      title: "参加 Google HPS 2022",
      date: "2022 年 4 月",
      description:
        "参加 Google Hardware Product Sprint 2022 电子电路工程方向，设计并制作一块基于 PCB 的时钟。",
    },
    {
      id: "nyu-tandon",
      title: "被 NYU Tandon 录取",
      date: "2021 年 12 月",
      description:
        "获得 *NYU Tandon* 数学与计算机科学录取，期待开始在美国的留学生活。",
    },
  ],
  projects: [
    {
      id: "iree",
      name: "IREE MLIR 编译器与运行时（2026 年 2–5 月）",
      description:
        "向 IREE 贡献 8 个已合并 PR，改进 GPU 代码生成、StableHLO 降级的正确性、CUDA Ada/sm_89 目标支持及 Python 运行时互操作。完善 NVIDIA BF16 Tensor Core 降级和 BF16/FP8 buffer view 转换等混合精度功能。",
      link: "https://github.com/iree-org/iree",
      skills: ["MLIR", "GPU Codegen", "CUDA", "StableHLO", "BF16/FP8"],
    },
    {
      id: "moe-inference",
      name: "MoE 推理内核优化（2026 年 2–5 月）",
      description:
        "构建 GPU 常驻的 expert-major MoE 流程，使用 CUDA 构建任务列表并融合 FP8 反量化。通过 Nsight 分析序列长度相关瓶颈，分别优化短序列的 SIMT 内核与长序列的 CUTLASS Grouped GEMM；在 NVIDIA B200 上相较 FlashInfer-Bench 的 Python/PyTorch 参考实现平均加速 6.79 倍、最高加速 17.15 倍，并通过全部 19 项正确性测试。",
      link: "https://github.com/YuWei-CH/Fused-MoE-YWS",
      skills: ["MoE", "CUDA", "FP8", "CUTLASS", "GPU Kernel Optimization"],
    },
    {
      id: "gpt2-kernels",
      name: "GPT-2 内核级优化（2025 年 9 月 - 2025 年 12 月）",
      description:
        "在 A40 GPU 上通过 Tensor Cores、Split-K 和 FlashAttention 优化 GPT-2 推理内核。相比 CUDA 基线将 MatMul 内核运行时间降低 94.6%、计算吞吐提升约 180%；融合注意力计算使全局内存流量降低 85%，并将全局内存到计算核心的数据搬运量从约 800 KB 降至 37–56 KB。利用 Nsight Systems 和 Nsight Compute 的分析结果指导优化。",
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
      name: "基于云的旅行规划器（AWS 赞助，2025 年 2–5 月）",
      description:
        "带领团队开发获得 AWS 技术赞助的无服务器旅行规划平台，整合 LLM 行程推荐与票据 OCR，负责整体架构及用户偏好、行程规划与行程管理的后端 API。基于 SQS 队列驱动 Lambda 消费者并通过 SES 发送邮件，实现事件驱动的通知；使用 CloudFormation 定义基础设施，串联 Lambda、API Gateway、Cognito 和 RDS；依据观察到的缓存命中率，估计 ElastiCache 可将 OpenAI API 成本降低约 30%。",
      skills: ["AWS Lambda", "CloudFormation", "API Gateway", "Cognito", "RDS", "SQS", "SES", "OpenAI API"],
      link: "https://github.com/YuWei-CH/Travel-Planner",
    },
    {
      id: "byte-pi",
      name: "Byte-Pi-Cluster",
      description:
        "搭建由 6 个 Raspberry Pi 组成的集群，使用 Kubernetes、基于 NFS 的共享存储和 FRP 远程访问。集成 MPI/OpenMP 与 Hailo AI 加速器，开展 HPL 和语义分割实验；通过 BOINC Science United 将约 50% 的可用算力用于生物和化学研究。",
      link: "https://github.com/YuWei-CH/Byte-Pi-Cluster",
      skills: ["Kubernetes", "MPI", "OpenMP", "Hailo", "Raspberry Pi", "NFS", "FRP"],
    },
    {
      id: "order-system",
      name: "分布式订单系统重构",
      description:
        "在 MySQL 主从架构中引入 Redis 和 RocketMQ，将订单服务吞吐从 1,000 提升至 50,000 QPS。遵循 DDD 与 SOLID 原则拆分单体系统，并采用 JOOQ 和 Flyway 管理数据访问与迁移；结合 Redis/Lua 的 TCC 库存控制、异步建单、延迟支付核查及乐观锁保障事务正确性。",
      link: "",
      skills: ["MySQL", "Redis", "RocketMQ", "Java", "DDD", "JOOQ", "Flyway"],
    },
    {
      id: "architecture-projects",
      name: "计算机体系结构与系统编程项目",
      description: "用 Python 开发 E20 汇编器，并用 C++ 编写 CPU 与缓存模拟器，模拟指令执行与内存行为。",
      link: "",
      skills: ["C++", "Computer Architecture", "Python", "CPU", "Assembly Language"],
    },
    {
      id: "google-hps-clock",
      name: "Google Hardware Product Sprint（硬件方向）",
      description:
        "作为 25 名入选学生之一，参加 Google Hardware Product Sprint 为期 12 周的电子工程项目。使用 KiCAD、微控制器和 LED 点阵设计并制作 PCB 时钟，最终向 Google 工程师与产品经理展示原型。",
      link: "https://github.com/YuWei-CH/RedSun_Clock",
      skills: ["KiCAD", "Embedded C", "PCB Design"],
    },
  ],
  education: [
    {
      id: "uiuc",
      school: "伊利诺伊大学香槟分校（UIUC）",
      degree: "计算机科学硕士（MCS）",
      dateRange: "2025 年 8 月 - 2027 年 5 月",
      achievements: ["GPA：3.93", "专注高性能计算与 GPU 优化。"],
      honors: [],
    },
    {
      id: "nyu",
      school: "纽约大学（NYU）",
      degree: "计算机科学学士，数学辅修",
      dateRange: "2021 年 9 月 - 2025 年 5 月",
      achievements: ["GPA：3.79", "NYU 高性能计算团队助理。"],
      honors: ["University Scholar", "Tandon Dean’s List", "Cum laude（优等荣誉）"],
    },
  ],
  memberships: [
    {
      id: "boinc",
      org: "BOINC (Science United)",
      role: "志愿贡献者",
      dateRange: "2024 年 3 月 - 至今",
      description:
        "通过 BOINC 的 Science United 平台贡献算力，支持生物医学、气候建模与基础物理等研究。",
    },
    {
      id: "acm-sighpc",
      org: "ACM SIGHPC",
      role: "学生会员",
      dateRange: "2023 年 9 月 - 至今",
      description:
        "协助 ACM SIGHPC 学生分会开展校园宣讲与社区活动，并在 SC 大会担任学生志愿者。",
    },
    {
      id: "colorado-apprenticeship",
      org: "科罗拉多大学博德分校",
      role: "落基山计算联盟高性能计算学徒",
      dateRange: "2025 年 8 月",
      description: "",
    },
    {
      id: "sc23",
      org: "学生集群竞赛 (SC23)",
      role: "基准与硬件负责人",
      dateRange: "2023 年 7 月 - 2023 年 11 月",
      description: "在 SC23 获全球第六名：优化 Intel MAX 9480 CPU 和 NVIDIA A100 GPU 上的 HPL、HPCG 基准，分别在 CPU 节点达到 150 GFlops、四卡 GPU 节点达到 50 TFlops；协同优化散热与任务调度，使能耗低于竞赛基线的 98%。",
    },
    {
      id: "uber-career-prep",
      org: "优步（Uber）软件开发职业奖学金",
      role: "Fellow",
      dateRange: "2023 年 1 月 - 2023 年 8 月",
      description: "入选 Uber Career Prep 2023（录取率约 4%）；完成六个月软件工程培训及 14 次与资深工程师的一对一辅导，并撰写关注包容性设计的产品需求文档。",
    },
    {
      id: "hitech-club",
      org: "HiTech 社团",
      role: "社团主席",
      dateRange: "2020 年 5 月 - 2021 年 5 月",
      description: "教授 Java 与 Swift 编程，并辅导社员准备 APCSA 课程。",
    },
    {
      id: "jinan-volunteer",
      org: "济南外国语学校",
      role: "初中教学志愿者",
      dateRange: "2023 年 4 月 - 2023 年 5 月",
      description: "为初中生提供课堂教学与学习生活帮助。",
    },
  ],
  hobbies: [
    {
      id: "photography",
      name: "摄影",
      description: "我喜欢记录建筑与街头瞬间，作品会陆续更新。",
      highlights: ["建筑与街拍", "长曝光与弱光拍摄", "旅途中的图文故事"],
    },
    {
      id: "poetry",
      name: "诗歌",
      description:
        "2024 年秋季在 Felsenthal 教授的指导下学习写诗，完成了一部二十首诗的作品集：俳句、十四行诗、书信体、图像诗，甚至还有一首用 Python 写成。",
      highlights: ["20 首诗 · 2024 年秋季作品集", "主题：城市、动物与记忆"],
      link: { label: "阅读诗作 ↓", href: "#poetry" },
    },
  ],
  ui: {
    nav: {
      news: "最新动态",
      about: "关于",
      experience: "工作经历",
      education: "教育背景",
      projects: "项目",
      research: "研究",
      more: "更多关于我",
      involvement: "参与",
      hobbies: "创意兴趣",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
    },
    hero: {
      greeting: "你好！👋",
      ctaPrimary: "查看过往经历",
      ctaSecondary: "在 LinkedIn 联系我",
    },
    about: {
      title: "关于我",
      keywords: "关键词",
      skills: "技能",
    },
    news: {
      title: "最新动态",
      subtitle: "这些更新记录了我旅程中的重要节点。",
      hint: "左右滑动或横向滚动查看更多",
    },
    experience: {
      title: "工作经历",
    },
    education: {
      title: "教育背景",
      highlights: "亮点",
      honors: "荣誉",
    },
    projects: {
      title: "项目",
    },
    research: {
      title: "研究",
      viewWork: "查看工作 →",
      mentor: "导师",
      publication: "论文",
    },
    memberships: {
      title: "参与",
      pageTitle: "参与",
      pageIntro: "社团、会员与志愿经历，塑造了我的社区影响力与技术实践。",
    },
    hobbies: {
      title: "创意兴趣",
      pageIntro: "平衡工程工作的个人创作：摄影与诗歌。",
      badge: "创意",
    },
    poetry: {
      title: "诗集",
      meta: "2024 年秋季 · 指导老师：Felsenthal 教授",
      intro:
        "2024 年秋季作品集中的二十首诗：城市夜色、四季流转、家人与师长，还有几首只有程序员才会写的诗。点击任意一首即可阅读（诗作为英文原文）。",
      favorite: "我最喜欢的一首",
      read: "阅读全诗 →",
      back: "← 返回诗集",
      previous: "← 上一首",
      next: "下一首 →",
    },
    common: {
      moreAbout: "更多关于我",
      rights: "保留所有权利。",
      thanks: "感谢浏览！",
    },
  },
};
