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
  heroTitle:
    "Designing scalable backend systems and building reliable services that handle real-world data at scale.",
  intro:
    "Experienced in Spring Boot, Kafka, and distributed processing.",
  summary: [
    "I build backend systems that are reliable because I understand how they fail at scale.",
    "Expert in Java and Apache Spark, I drive impactful data pipeline improvements, including reducing delivery cycles from 3 hours to 30 minutes.",
    "I focus on high-performance, reliable systems while fostering collaboration, clearer engineering decisions, and better outcomes for downstream teams.",
  ],
  strengths: [
    {
      title: "Architecture-minded execution",
      description:
        "I work across implementation and design, turning latency, scale, and reliability constraints into practical pipeline and platform decisions.",
    },
    {
      title: "Cross-team engineering influence",
      description:
        "I align product, analytics, and downstream consumers around cleaner contracts, safer integrations, and more dependable delivery.",
    },
    {
      title: "Quality and reliability focus",
      description:
        "I treat validation, observability, testing, and defect prevention as part of system design rather than cleanup work after release.",
    },
  ],
  impactLens: [
    "Defined architecture for scalable data pipelines handling high-volume campaign data.",
    "Led cross-team discussions to align data contracts and reduce downstream inconsistencies.",
    "Made trade-off decisions between batch vs streaming based on cost, latency, and reliability.",
    "Standardized data validation frameworks across pipelines to reduce production defects.",
    "Mentored engineers on debugging distributed systems and performance optimization.",
  ],
  systemThinking: [
    "I design systems assuming failures will happen in production.",
    "I focus on reliability and fault tolerance in distributed services.",
    "I prefer event-driven architectures for scalability and decoupling.",
    "I ensure idempotency and safe retries in asynchronous workflows.",
    "I think in terms of system behavior under load, not just code paths.",
  ],
  metrics: [
    {
      value: "90%",
      label: "faster delivery cycle",
      context: "Reduced campaign data freshness cycle from 3 hours to 30 minutes.",
    },
    {
      value: "Near real-time",
      label: "pricing integration",
      context:
        "Enabled real-time pricing feeds from multiple stockbrokers at Fidelity.",
    },
    {
      value: "Production-focused",
      label: "validation mindset",
      context:
        "Improved data validation and reliability to reduce invalid data and downstream issues.",
    },
  ],
  experience: [
    {
      company: "Walmart",
      role: "Senior Software Engineer",
      period: "Feb 2022 - Current",
      description:
        "Driving data-platform and analytics improvements through distributed systems, streaming workflows, and cloud-native architecture on Google Cloud Platform.",
      highlights: [
        "Optimized data workflows using Java, Apache Spark, Airflow, Python, and Kafka to improve efficiency and performance.",
        "Developed and maintained solutions for distributed systems, data streaming, and cloud-based architectures on GCP.",
        "Engineered critical pipeline improvements that increased customer data freshness by reducing delivery cycles from a 3-hour batch process to 30-minute intervals.",
        "Focused on high performance and reliability for campaign analytics while solving complex data challenges at scale.",
      ],
    },
    {
      company: "Fidelity Investments",
      role: "Lead Software Engineer",
      period: "May 2021 - Feb 2022",
      description:
        "Delivered pricing and market-data improvements in a financial-services environment where accuracy, resilience, and validation were essential.",
      highlights: [
        "Engineered pricing module for batch processing of external files and updating system with actual values.",
        "Drove development and integration of real-time pricing feeds from various stockbrokers, enhancing data accuracy.",
        "Enhanced data pipeline robustness by implementing efficient data validation mechanisms, significantly reducing invalid data.",
      ],
    },
    {
      company: "TCS",
      role: "IT Analyst",
      period: "Mar 2016 - May 2021",
      description:
        "Built strong systems-integration and middleware experience through enterprise delivery work focused on reliability and operational performance.",
      highlights: [
        "Resolved complex integration issues by identifying bottlenecks and implementing effective solutions.",
        "Developed and maintained robust middleware solutions for seamless communication between enterprise applications.",
        "Optimized integration platform performance, enhancing system reliability and reducing latency for operations.",
      ],
    },
  ],
  projects: [
    {
      title: "User Segmentation & Delivery Platform",
      oneLiner:
        "Backend system for generating user segments and delivering them to external CRM systems using event-driven and batch processing.",
      problem: [
        "Marketing teams needed to create dynamic user segments.",
        "The system had to handle data at the scale of millions of users.",
        "Segment output needed to be delivered reliably to external CRM systems.",
        "The platform had to support both real-time triggers and scheduled execution.",
      ],
      challenges: [
        "Translating UI filters into executable Spark queries.",
        "Handling large dataset processing efficiently.",
        "Breaking huge datasets into uploadable chunks.",
        "Managing failures across Spark jobs, SFTP uploads, and external API calls.",
        "Ensuring idempotency and retry safety.",
        "Supporting scheduled re-processing.",
      ],
      architecture: [
        "UI for filter selection.",
        "Designed a Spring Boot backend service that parses filters and generates executable processing queries.",
        "Built processing jobs that handle large-scale datasets and persist outputs for downstream delivery.",
        "Implemented a chunking service to split large payloads into safe transfer units.",
        "Integrated with external CRM systems through SFTP uploads and sync/async import APIs.",
        "Added scheduler-driven execution based on database configurations for recurring workflows.",
      ],
      contributions: [
        "Designed a backend service that translates user-defined filters into executable processing queries for dynamic segment generation at scale.",
        "Built a downstream delivery pipeline that handles large datasets through safe chunked uploads.",
        "Implemented a multi-channel integration layer using both SFTP and API-based ingestion.",
        "Integrated asynchronous bulk import APIs for scalable external delivery.",
        "Developed scheduler-based execution for recurring segment generation workflows.",
        "Ensured fault tolerance across distributed processing and external integration paths.",
      ],
      failures: [
        "Large datasets caused failures during upload.",
        "API rate limits and timeouts from the CRM partner affected delivery.",
        "Spark job delays impacted downstream processes.",
      ],
      improvements: [
        "Introduced chunking and batching to control load.",
        "Implemented retry and backoff strategies for API calls.",
        "Optimized Spark jobs for better performance.",
        "Improved pipeline orchestration for stability.",
      ],
      impact: [
        "Enabled marketing teams to generate segments at scale through a backend-driven workflow.",
        "Reduced manual effort in preparing and delivering segment data.",
        "Improved reliability of backend delivery pipelines under high-volume loads.",
        "Supported both real-time and scheduled workflows for external integrations.",
      ],
    },
    {
      title: "Campaign Processing System",
      oneLiner:
        "Spring Boot and Kafka-based backend for handling high-volume campaign workflows with fault-tolerant processing.",
      problem: [
        "Campaign workflows needed reliable backend processing under high load.",
        "The system had to support distributed execution without losing operational stability.",
        "Downstream consumers depended on timely and accurate campaign state transitions.",
      ],
      challenges: [
        "Handling asynchronous workflows safely across distributed services.",
        "Maintaining throughput while controlling failure propagation.",
        "Managing retries, delivery guarantees, and operational visibility.",
      ],
      architecture: [
        "Spring Boot services coordinate campaign workflow execution.",
        "Kafka-based event flow enables decoupled processing across components.",
        "Validation and fault-handling layers protect downstream systems from inconsistent states.",
      ],
      contributions: [
        "Built backend workflows for high-volume campaign execution.",
        "Used event-driven processing patterns to improve scalability and decoupling.",
        "Applied fault-tolerant handling to reduce operational instability during failures.",
      ],
      failures: [
        "Processing delays created downstream pressure during peak load.",
        "Failure handling had to account for distributed retries and partial completion.",
      ],
      improvements: [
        "Improved retry safety and idempotent processing behavior.",
        "Strengthened system reliability under load with better validation and error handling.",
      ],
      impact: [
        "Improved backend system reliability for campaign workflows.",
        "Reduced production issues through safer asynchronous processing patterns.",
      ],
    },
    {
      title: "Reliability & Performance Framework",
      oneLiner:
        "Improved backend system stability through automation, performance benchmarking, and failure analysis.",
      problem: [
        "Backend services needed stronger quality controls to avoid recurring production issues.",
        "Performance bottlenecks and weak validation created reliability risk under load.",
      ],
      challenges: [
        "Finding production failure patterns across multiple systems and workflows.",
        "Benchmarking behavior under load and identifying weak points before release.",
      ],
      architecture: [
        "Automation and validation layers were introduced earlier in the delivery lifecycle.",
        "Performance benchmarking and failure analysis informed system hardening decisions.",
      ],
      contributions: [
        "Built automation-heavy validation workflows for service reliability.",
        "Applied performance benchmarking to identify and reduce bottlenecks.",
        "Used failure analysis to drive better defect prevention strategies.",
      ],
      failures: [
        "Production issues exposed weak validation and observability gaps.",
      ],
      improvements: [
        "Improved testing and validation strategies to catch issues earlier.",
        "Strengthened backend stability with better performance and reliability practices.",
      ],
      impact: [
        "Improved backend system stability under high-volume loads.",
        "Reduced production issues through better validation and testing strategies.",
      ],
    },
  ],
  ownershipStories: [
    {
      title: "Improving campaign data freshness",
      problem:
        "Batch-oriented campaign data delivery was too slow for timely business decisions.",
      action:
        "Introduced more incremental processing patterns and optimized Spark-based pipeline execution.",
      result:
        "Reduced delivery intervals from 3 hours to 30 minutes, enabling faster campaign optimization.",
    },
    {
      title: "Strengthening pricing data reliability",
      problem:
        "Pricing workflows needed cleaner ingestion and more dependable updates from external sources.",
      action:
        "Built batch-processing support for external files and integrated real-time pricing feeds from multiple stockbrokers.",
      result:
        "Improved data accuracy and created a stronger foundation for downstream pricing decisions.",
    },
    {
      title: "Reducing integration friction in enterprise systems",
      problem:
        "Middleware and integration bottlenecks were affecting system reliability and operational latency.",
      action:
        "Diagnosed bottlenecks, resolved complex issues, and improved middleware communication patterns.",
      result:
        "Enhanced platform reliability and reduced latency for enterprise operations.",
    },
  ],
  quality: [
    "Designed automation-heavy quality workflows including API testing and structured validation approaches.",
    "Built data validation layers for pipelines and integration flows to catch defects earlier.",
    "Performed root-cause analysis for production issues and fed learnings back into system hardening.",
    "Applied performance-testing thinking to benchmark workloads and reduce bottlenecks.",
    "Favor shift-left quality practices so reliability is designed into systems from the start.",
  ],
  aiExploration: [
    "Understanding of retrieval-augmented generation architectures and evaluation concerns.",
    "Exposure to LLM testing strategies including hallucination risk, grounding, latency, and context-window trade-offs.",
    "Hands-on familiarity with LangChain, OpenAI APIs, Claude, Copilot, and MCP-enabled workflows.",
    "Interested in building intelligent data systems and agentic engineering workflows.",
  ],
  crossTeamInfluence: [
    "Collaborated with product and analytics teams to define data requirements and pipeline expectations.",
    "Worked with downstream consumers to improve schema design and reduce integration friction.",
    "Acted as a bridge between engineering implementation and business-facing data needs.",
  ],
  decisions: [
    "Chose streaming-oriented patterns over batch where near real-time freshness justified the operational trade-off.",
    "Balanced cost vs performance in GCP data pipelines when optimizing latency and throughput.",
    "Used validation and contract discipline to reduce downstream defects instead of relying on reactive fixes.",
  ],
  education: {
    heading: "Education",
    description:
      "Bachelor of Technology in Mechanical Engineering from GCEK, Bhawanipatna, with a CGPA of 7.7.",
  },
  skills: {
    heading: "Skills & abilities",
    description:
      "Structured around the kinds of capabilities expected from engineers who design systems, improve reliability, and influence delivery.",
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
