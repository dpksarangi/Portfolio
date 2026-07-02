export const portfolio = {
  name: "Deepak Kumar Sarangi",
  role: "Senior Software Engineer",
  location: "Bangalore, India",
  email: "dpksarangi@gmail.com",
  phone: "+91 8270010477",
  links: {
    github: "https://github.com/dpksarangi",
    linkedin: "https://www.linkedin.com/in/deepak-sarangi/",
  },
  hero: {
    title: "Senior Software Engineer",
    subtitle:
      "Backend Engineer specializing in distributed systems and large-scale data processing.",
    metrics: [
      { value: "10+", label: "Years Experience" },
      { value: "50M+", label: "Users Segmented Daily" },
      { value: "1B+", label: "Events Processed Daily" },
    ],
    techStack: ["Java", "Spring Boot", "Spark", "Kafka", "GCP"],
  },
  heroProfile: {
    heading: "At a glance",
    highlights: [
      {
        label: "Specialization",
        value: "Distributed systems, backend platforms, data pipelines",
      },
      {
        label: "Systems owned",
        value: "Segmentation, streaming campaigns, CRM delivery",
      },
    ],
  },
  keyMetrics: [
    {
      value: "10+",
      label: "years experience",
      context:
        "Engineering experience across enterprise delivery, financial systems, and high-scale backend platforms.",
    },
    {
      value: "90%",
      label: "faster data freshness",
      context:
        "Reduced campaign delivery latency from 3 hours to 30 minutes.",
    },
    {
      value: "Millions",
      label: "users segmented",
      context:
        "Built systems that support large-scale audience generation and downstream delivery.",
    },
    {
      value: "10+",
      label: "banners / tenants onboarded",
      context:
        "Worked on multi-tenant and multi-banner platforms that required reusable architecture and reliable onboarding patterns.",
    },
    {
      value: "Multi-platform",
      label: "production ownership",
      context:
        "Worked across campaign systems, market-data integrations, and reliability-critical services.",
    },
  ],
  featuredArchitectures: [
    {
      title: "Customer Segmentation Platform",
      oneLiner:
        "Backend system for generating user segments and delivering them to external CRM systems through batch and asynchronous processing.",
      problem:
        "Marketing teams needed dynamic segment generation for millions of users, with reliable delivery into external CRM platforms through both triggered and scheduled workflows.",
      scale:
        "Large user datasets, recurring scheduled execution, and multiple downstream delivery channels including APIs and file-based ingestion.",
      architecture: [
        "Spring Boot service translates user-defined filters into executable processing logic.",
        "Spark jobs process segment data and persist outputs for downstream workflows.",
        "Chunking service breaks large outputs into manageable transfer units.",
        "Delivery layer pushes data through SFTP uploads and CRM import APIs, including asynchronous bulk ingestion.",
        "Scheduler triggers recurring segment generation based on database-configured workflows.",
      ],
      keyDecisions: [
        "Separated filter parsing from data execution so the system could evolve without coupling UI logic to processing internals.",
        "Introduced a dedicated chunking layer to make large dataset delivery operationally safe.",
        "Supported both API-based and file-based delivery to fit external system constraints without duplicating business logic.",
      ],
      tradeOffs: [
        "Chose a mixed batch and asynchronous delivery model to balance throughput, partner-system limits, and operational simplicity.",
        "Accepted additional orchestration complexity in exchange for safer large-volume delivery and retry handling.",
      ],
      impact: [
        "Enabled marketing teams to generate segments at scale through a backend-driven workflow.",
        "Reduced manual effort in preparing and delivering segment data.",
        "Improved reliability of backend delivery pipelines under high-volume loads.",
        "Supported both real-time and scheduled workflows for external integrations.",
      ],
    },
    {
      title: "Streaming Campaign Processing Platform",
      oneLiner:
        "Event-driven backend for high-volume campaign workflows with fault-tolerant distributed processing.",
      problem:
        "Campaign workflows required faster, more reliable processing without creating downstream instability during load spikes or partial failures.",
      scale:
        "High-volume campaign traffic, asynchronous state changes, and multiple distributed components that needed safe coordination.",
      architecture: [
        "Spring Boot services coordinate campaign lifecycle execution.",
        "Kafka-based event flow decouples producers and downstream processors.",
        "Validation and fault-handling layers protect dependent systems from invalid or duplicate transitions.",
        "Retry-safe processing paths support resilience across asynchronous workflow steps.",
      ],
      keyDecisions: [
        "Used event-driven processing to improve decoupling and horizontal scalability.",
        "Built idempotent handling into asynchronous workflows to keep retries safe.",
        "Prioritized operational visibility and failure containment over tightly coupled synchronous flows.",
      ],
      tradeOffs: [
        "Accepted added complexity in distributed coordination in return for better throughput and reliability.",
        "Balanced latency and delivery guarantees through retry-aware event handling instead of immediate synchronous completion.",
      ],
      impact: [
        "Improved backend system reliability for campaign workflows.",
        "Reduced production issues through safer asynchronous processing patterns.",
        "Created a stronger foundation for scaling campaign operations under load.",
      ],
    },
    {
      title: "Pricing & Market Data Integration Platform",
      oneLiner:
        "Backend integration layer for batch and near real-time pricing updates from external financial data sources.",
      problem:
        "Financial workflows needed accurate pricing updates from external sources with stronger validation and better resilience against invalid or delayed data.",
      scale:
        "Multiple stockbroker integrations, batch file ingestion, and real-time pricing feeds operating in a correctness-sensitive environment.",
      architecture: [
        "Batch pricing module processes external files and updates internal systems with actual values.",
        "Real-time feed integration layer ingests pricing events from multiple stockbrokers.",
        "Validation mechanisms improve data quality before updates propagate to downstream consumers.",
      ],
      keyDecisions: [
        "Used both batch and streaming-style inputs to fit the realities of external source behavior.",
        "Added validation as a first-class layer rather than relying on downstream error discovery.",
        "Optimized for accuracy and robustness in a domain where incorrect data has immediate consequences.",
      ],
      tradeOffs: [
        "Balanced freshness with correctness by combining near real-time integration with more controlled batch workflows.",
        "Accepted additional validation overhead to reduce invalid updates in production.",
      ],
      impact: [
        "Enabled near real-time pricing integration from multiple external providers.",
        "Improved pricing data accuracy in a financial-services environment.",
        "Reduced invalid data through stronger validation and integration discipline.",
      ],
    },
    {
      title: "Reliability & Validation Framework",
      oneLiner:
        "Engineering framework for improving backend stability through validation, performance benchmarking, and failure analysis.",
      problem:
        "Distributed services and integration-heavy systems needed stronger guardrails to catch issues earlier and reduce recurring production failures.",
      scale:
        "Applied across backend workflows, pipeline validation paths, and performance-sensitive systems where production defects were costly.",
      architecture: [
        "Validation layers were introduced earlier in service and pipeline execution paths.",
        "Benchmarking and performance analysis informed system hardening work before release.",
        "Root-cause analysis feedback loops turned incidents into repeatable prevention patterns.",
      ],
      keyDecisions: [
        "Treated reliability as a system design concern instead of an after-release testing concern.",
        "Focused on failure prevention through stronger validation and observability-minded thinking.",
        "Used performance analysis to guide engineering fixes instead of relying on anecdotal tuning.",
      ],
      tradeOffs: [
        "Accepted additional upfront engineering effort to reduce long-term production instability.",
        "Balanced delivery speed with quality by pushing reliability checks earlier into the development flow.",
      ],
      impact: [
        "Improved backend system stability under high-volume loads.",
        "Reduced production issues through better validation and testing strategies.",
        "Strengthened engineering confidence in distributed and integration-heavy workflows.",
      ],
    },
    {
      title: "AI Developer Productivity System",
      oneLiner:
        "Internal AI-assisted system focused on improving developer productivity through workflow automation and modern LLM-enabled tooling.",
      problem:
        "Engineering teams needed faster ways to navigate code, automate repetitive workflows, and improve day-to-day productivity without compromising reliability or developer control.",
      scale:
        "Applied in an engineering environment with multiple users, internal workflows, and integration points across existing development processes.",
      architecture: [
        "Service-oriented backend integrates AI-assisted workflows into developer-facing tooling.",
        "LLM-enabled components support productivity tasks such as information retrieval, workflow assistance, and guided automation.",
        "Integration layer connects AI capabilities with existing engineering systems and internal developer processes.",
      ],
      keyDecisions: [
        "Focused on practical developer productivity use cases instead of broad AI experimentation.",
        "Used integration-friendly backend patterns so AI capabilities could fit existing workflows.",
        "Kept the system workflow-oriented, with emphasis on usefulness, safety, and operational clarity.",
      ],
      tradeOffs: [
        "Balanced speed of AI-assisted workflows with the need for predictable output and developer trust.",
        "Accepted some product iteration complexity in exchange for embedding AI into real engineering workflows rather than isolating it as a demo system.",
      ],
      impact: [
        "Expanded the portfolio from backend and data platforms into AI-assisted engineering systems.",
        "Improved developer workflow efficiency through automation-oriented AI integration.",
        "Added hands-on system experience with LLM-enabled productivity tooling.",
      ],
    },
  ],
  technicalLeadership: [
    "Defined architecture for scalable data pipelines handling high-volume campaign data.",
    "Led cross-team discussions to align data contracts and reduce downstream inconsistencies.",
    "Standardized data validation frameworks across pipelines to reduce production defects.",
    "Worked on platforms with 10+ banners or tenants onboarded, requiring reusable architecture and careful multi-tenant design decisions.",
    "Mentored engineers on debugging distributed systems and performance optimization.",
    "Contributed to engineering standards around reliability, retry safety, and fault tolerance.",
    "Acted as a bridge between engineering implementation and business-facing data needs.",
  ],
  experience: [
    {
      company: "Walmart",
      role: "Senior Software Engineer",
      period: "Feb 2022 - Current",
      summary:
        "Owned backend and distributed data platform improvements across campaign analytics, customer data freshness, and cloud-based processing on Google Cloud Platform.",
      highlights: [
        "Improved data freshness from a 3-hour batch cycle to 30-minute intervals.",
        "Built and maintained distributed systems using Java, Spark, Airflow, Python, Kafka, and GCP.",
        "Worked on platforms supporting 10+ banners or tenants through reusable backend and platform patterns.",
        "Focused on reliability and performance for high-scale campaign analytics workflows.",
      ],
    },
    {
      company: "Fidelity Investments",
      role: "Lead Software Engineer",
      period: "May 2021 - Feb 2022",
      summary:
        "Delivered pricing and market-data systems with batch and real-time integrations in a correctness-sensitive financial environment.",
      highlights: [
        "Built pricing batch-processing support for external file ingestion.",
        "Integrated real-time pricing feeds from multiple stockbrokers.",
        "Improved robustness through stronger validation of incoming data.",
      ],
    },
    {
      company: "TCS",
      role: "IT Analyst",
      period: "Mar 2016 - May 2021",
      summary:
        "Developed middleware and integration systems for enterprise applications with a focus on reliability, latency reduction, and operational stability.",
      highlights: [
        "Resolved complex integration bottlenecks across enterprise systems.",
        "Built and maintained middleware for dependable cross-system communication.",
        "Improved platform performance and reduced latency for operational workflows.",
      ],
    },
  ],
  education: {
    heading: "Education",
    description:
      "Bachelor of Technology in Mechanical Engineering from GCEK, Bhawanipatna, with a CGPA of 7.7.",
  },
  skills: {
    heading: "Skills",
    groups: [
      {
        title: "Backend",
        items: ["Java", "Spring Boot", "REST APIs", "Python"],
      },
      {
        title: "Distributed systems",
        items: ["Kafka", "Event-driven architecture", "Distributed systems"],
      },
      {
        title: "Data processing",
        items: ["Apache Spark", "Hive", "Apache Airflow", "SQL", "ETL/ELT"],
      },
      {
        title: "Cloud & infra",
        items: [
          "Google Cloud Platform",
          "Kubernetes",
          "Docker",
          "Cloud architecture",
          "Cloud deployment",
          "Git",
        ],
      },
      {
        title: "Testing & reliability",
        items: [
          "Automation",
          "Performance testing",
          "Data validation",
          "Observability",
          "CI/CD pipelines",
          "Jenkins",
          "Concord",
          "Root-cause analysis",
        ],
      },
      {
        title: "AI & modern engineering",
        items: [
          "Copilot",
          "Claude",
          "MCP",
          "LangChain",
          "OpenAI APIs",
          "LLM evaluation",
        ],
      },
    ],
  },
  contactCta:
    "If you are hiring for a senior or staff-trajectory engineering role that values architecture thinking, system reliability, and cross-team influence, I am open to discussing opportunities.",
} as const;
