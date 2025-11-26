export const zh = {
  name: "孙钰伟（Peter）",
  title: "纽约大学(NYU) -> 伊利诺伊大学香槟分校(UIUC) · 高性能计算 & AI Infra",
  description: "展示孙宇巍在高性能计算、个人项目和职业经历方面的成果。",
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
      title: "高性能计算实习生",
      dateRange: "2025 年 5 月 - 2025 年 8 月",
      links: [{ label: "nifty-ls", href: "https://github.com/flatironinstitute/nifty-ls" }],
      bullets: [
        "扩展 nifty-ls，使其支持多组正弦基函数，灵活计算 Lomb-Scargle 周期图。",
        "用 nanobind 将计算密集函数从 Python 绑定到 C++ 并通过 OpenMP 并行化，单核状态下速度提升 100倍。",
        "借助 CuPy 和经核级优化的 CUDA kernel 加速批处理计算，可扩展性再提升 50倍。",
        "引入 FINUFFT重构三角求和计算核心，将 FastChi2 数值误差从 1e-3 降到 1e-6。",
      ],
    },
    {
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
        "在 NVIDIA Grace Hopper ARM CPU 上编译并基准测试 Gaussian 与 Amber，评估ARM CPU能效与ARM 生态对于HPC的兼容性。",
        "使用 Podman、Singularity、Kubernetes 将物理 HPC 集群迁移计算环境和数据到基于 OpenShift 的本地云。",
      ],
    },
    {
      company: "NYU High-Performance Computing Team",
      title: "HPC 助理",
      dateRange: "2024 年 5 月 - 2024 年 9 月",
      links: [{ label: "Reform", href: "https://github.com/YuWei-CH/reform" }],
      bullets: [
        "为 Reform 增强顺序处理、压缩文件处理和并行执行，适配基因组工作负载。",
        "更新 ReformWeb，使 Reform 可通过 Flask、SQLite、Redis、Werkzeug、Jinja2 在 HPC 服务器上运行。",
        "构建 GitHub Actions + Python unittest 的 CI/CD，并用 Bash 验证流水线与 TTL 日志保留。",
      ],
    },
    {
      company: "NYU High-Performance Computing Team",
      title: "兼职研究工程师",
      dateRange: "2024 年 1 月 - 2024 年 5 月",
      bullets: [
        "用 HIPify 将 CUDA 代码翻译为 HIP，使 AlphaFold 和 DualPhysics 支持 AMD GPU 的 ROCm 平台。",
        "为 HIPify 修复 Math_constant.h 相关问题，提高 CUDA 到 HIP 的转换可靠性。",
        "在 AWS Graviton 与 GCP Axion 上编译 HPL、Amber24、Gaussian 并基准测试，评估基于 ARM CPU 云计算的性价比。",
      ],
    },
  ],
  researchIntro:
    "我研究面向科学应用的异构计算与晶圆级 GPU 架构。工作包括与 Flatiron Institute 合作，优化周期图的并行计算，以及在可扩展体系结构实验室进行大规模加速器的性能分析与内存系统研究。",
  research: [
    {
      org: "Flatiron Institute, Simons Foundation",
      title: "HPC 科学软件",
      dateRange: "2025 年 9 月",
      focus: "海报展示：通过 OpenMP 和 CUDA 优化并扩展 Lomb-Scargle 周期图计算。",
      publicationTitle: "Optimizing and Extending Periodogram Computations for Astronomy",
      publicationLink: "https://sc25.conference-program.com/presentation/?id=post133&sess=sess527",
      mentor: "Dr. Lehman Garrison",
    },
    {
      org: "Scalable Architecture Lab",
      title: "晶圆级 GPU 架构",
      dateRange: "2025 年 3 月",
      focus: "提出晶圆级 GPU 的分层分布式页地址转换方案，提升内存系统可扩展性。",
      publicationTitle:
        "HDPAT: Hierarchical Distributed Page Address Translation for Wafer-Scale GPUs",
      publicationLink: "https://hpca-conf.org/",
      mentor: "Prof. Yifan Sun",
    },
    {
      org: "Scalable Architecture Lab",
      title: "GPU 性能工具链",
      dateRange: "2024 年 9 月",
      focus: "为 AMD GPU 设计动态二进制插桩工具，研究GPU加速器的性能特征。",
      publicationTitle:
        "Luthier: A Dynamic Binary Instrumentation Framework Targeting AMD GPUs",
      publicationLink: "https://ieeexplore.ieee.org/abstract/document/11096405",
      mentor: "Prof. Yifan Sun",
    },
  ],
  news: [
    {
      title: "论文被 HPCA 2026 录用",
      date: "2025 年 11 月",
      description: "我参与的论文 *HDPAT: Hierarchical Distributed Page Address Translation for Wafer-Scale GPUs* 被录用。感谢 Daoxuan学长 和 Yifan 教授的指导。",
    },
    {
      title: "海报入选 SC25 海报展示",
      date: "2025 年 9 月",
      description:
        "暑期实习工作的总结海报 *Optimizing and Extending Periodogram Computations for Astronomy* 被录用。感谢导师 Dr. Lehman Garrison。",
    },
    {
      title: "开启 UIUC MCS 学习",
      date: "2025 年 8 月",
      description:
        "很高兴加入伊利诺伊大学香槟分校 (UIUC) 计算机科学硕士项目，期待学术与职业上的成长。",
    },
    {
      title: "加入 Flatiron Institute 担任 HPC 实习生",
      date: "2025 年 5 月",
      description:
        "在 Flatiron Institute (Simons Foundation) 从事高性能计算实习，专注于 HPC 应用的并行优化。",
    },
    {
      title: "论文被 ISPASS 2025 录用",
      date: "2025 年 3 月",
      description:
        "我们的工作 *Luthier: A Dynamic Binary Instrumentation Framework Targeting AMD GPUs* 被 ISPASS 2025 录用。感谢 Daoxuan 学长 和 Yifan 教授。",
    },
    {
      title: "加入可扩展体系结构实验室",
      date: "2024 年 8 月",
      description: "在 Yifan 教授指导下，参与 GPU 性能分析工具与晶圆级 GPU 项目的内存系统研究。",
    },
    {
      title: "参与 Reform Hipify",
      date: "2024 年 5 月",
      description:
        "将在暑期继续在 NYU HPC 工作，贡献 reformWeb 和 *Reform*，并持续推进 AMD HPC 应用适配。",
    },
    {
      title: "参加 SC23 学生超算竞赛",
      date: "2023 年 11 月",
      description: "参与 SC23 学生超算竞赛，取得 *全球第六名*，NYU 队加油！",
    },
    {
      title: "获得 UCP Fellowship",
      date: "2023 年 1 月",
      description:
        "很荣幸入选 *Uber Career Prep (UCP)* 2023 软件工程奖学金项目。",
    },
    {
      title: "参加 Google HPS 2022",
      date: "2022 年 4 月",
      description:
        "参加 Google Hardware Product Sprint 2022 电子电路工程方向，设计并制作一块基于 PCB 的时钟。",
    },
    {
      title: "被 NYU Tandon 录取",
      date: "2021 年 12 月",
      description:
        "获得 *NYU Tandon* 数学与计算机科学录取，期待开始在美国的留学生活。",
    },
  ],
  projects: [
    {
      name: "基于云的旅行规划器（AWS 赞助）",
      description:
        "负责无服务器（serverless）自适应的旅行规划器，使用 Lambda、RDS、Cognito、API Gateway，结合 LLM 推荐与票据 OCR；基于 SQS 的事件驱动处理，并用 ElastiCache 将 OpenAI API 成本降低约 30%。",
      skills: ["AWS Lambda", "API Gateway", "Cognito", "RDS", "SQS", "OpenAI API"],
      link: "https://github.com/YuWei-CH/Travel-Planner",
    },
    {
      name: "Byte-Pi-Cluster",
      description:
        "搭建由 6 个 Raspberry Pi 组成的集群，使用 Kubernetes、MPI 和 NFS 共享存储，并通过 FRP 提供安全公网访问，便于远程实验和教学。",
      link: "https://github.com/YuWei-CH/Byte-Pi-Cluster",
      skills: ["Kubernetes", "MPI", "Raspberry Pi", "NFS", "FRP"],
    },
    {
      name: "分布式订单系统重构",
      description:
        "参与“立即购买”功能的规划与实现；在 MySQL 主从架构中引入 Redis 与 RocketMQ，将吞吐从 1,000 提升到 50,000 QPS。",
      link: "",
      skills: ["MySQL", "Redis", "Spring Boot", "Java", "Message Queue"],
    },
    {
      name: "计算机体系结构与系统编程项目",
      description: "用 Python 开发 E20 汇编器，并用 C++ 编写 CPU 与缓存模拟器，模拟指令执行与内存行为。",
      link: "",
      skills: ["C++", "Computer Architecture", "Python", "CPU", "Assembly Language"],
    },
    {
      name: "Google Hardware Product Sprint（硬件方向）",
      description:
        "使用 KiCAD 与微控制器设计、测试并制作一块 PCB 时钟，在 Google HPS 项目中交付硬件原型。",
      link: "https://github.com/YuWei-CH/RedSun_Clock",
      skills: ["KiCAD", "Embedded C", "PCB Design"],
    },
  ],
  education: [
    {
      school: "伊利诺伊大学香槟分校（UIUC）",
      degree: "计算机科学硕士（MCS）",
      dateRange: "2025 年 8 月 - 2027 年 5 月",
      achievements: ["专注高性能计算与 GPU 优化。"],
      honors: [],
    },
    {
      school: "纽约大学（NYU）",
      degree: "计算机科学学士，数学辅修",
      dateRange: "2021 年 9 月 - 2025 年 5 月",
      achievements: ["NYU 高性能计算团队助理。"],
      honors: ["University Honors 荣誉", "Tandon 院长学生名单", "优步（Uber）软件开发职业奖学金"],
    },
  ],
  memberships: [
    {
      org: "BOINC (Science United)",
      role: "志愿贡献者",
      dateRange: "2024 年 3 月 - 至今",
      description:
        "通过 BOINC 的 Science United 平台贡献算力，支持生物医学、气候建模与基础物理等研究。",
    },
    {
      org: "ACM SIGHPC",
      role: "学生会员",
      dateRange: "2023 年 9 月 - 至今",
      description:
        "协助 ACM SIGHPC 学生分会开展校园宣讲与社区活动，并在 SC 大会担任学生志愿者。",
    },
    {
      org: "科罗拉多大学博德分校",
      role: "落基山计算联盟高性能计算学徒",
      dateRange: "2025 年 8 月",
      description: "",
    },
    {
      org: "学生集群竞赛 (SC23)",
      role: "基准与硬件负责人",
      dateRange: "2023 年 7 月 - 2023 年 11 月",
      description: "在 Intel MAX 9480 CPU 与 Nvidia A100 GPU 上优化 HPC 基准；团队全球第六名。",
    },
    {
      org: "优步（Uber）软件开发职业奖学金",
      role: "Fellow",
      dateRange: "2023 年 1 月 - 2023 年 8 月",
      description: "完成六个月的软件工程培训、模拟面试与导师辅导，提升问题解决与协作能力。",
    },
    {
      org: "HiTech 社团",
      role: "社团主席",
      dateRange: "2020 年 5 月 - 2021 年 5 月",
      description: "教授 Java 与 Swift 编程，并辅导社员准备 APCSA 课程。",
    },
    {
      org: "济南外国语学校",
      role: "初中教学志愿者",
      dateRange: "2023 年 4 月 - 2023 年 5 月",
      description: "为初中生提供课堂教学与学习生活帮助。",
    },
  ],
  hobbies: [
    {
      name: "摄影",
      description: "我喜欢记录建筑与街头瞬间，作品会陆续更新。",
      highlights: ["建筑与街拍", "长曝光与弱光拍摄", "旅途中的图文故事"],
    },
    {
      name: "诗歌",
      description: "在 Felsenthal 教授的指导下学习写诗，作品也会陆续更新。",
      highlights: ["主题：城市、动物与记忆"],
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
    },
    hero: {
      greeting: "你好！👋",
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
    common: {
      moreAbout: "更多关于我",
      rights: "保留所有权利。",
      thanks: "感谢浏览！",
    },
  },
};
