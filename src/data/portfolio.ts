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
    "Designing scalable data systems and driving engineering decisions that improve business outcomes.",
  intro:
    "Dynamic Senior Software Engineer with a proven track record at Walmart, specializing in optimizing data workflows and enhancing cloud architectures.",
  summary: [
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
    "Prefer event-driven architectures for scalability and decoupling, especially in Kafka-based pipelines.",
    "Balance consistency vs latency based on business needs, such as campaign freshness versus infrastructure cost.",
    "Design for observability with logging, metrics, and alerting built in from the start.",
    "Build systems assuming failure through retry handling, idempotency, and backpressure-aware design.",
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
        title: "Core engineering",
        items: ["Java", "Python", "JavaScript", "SQL", "Distributed systems"],
      },
      {
        title: "Data platforms",
        items: [
          "Apache Spark",
          "Apache Kafka",
          "Apache Airflow",
          "BigQuery",
          "Dataflow",
          "Pub/Sub",
          "Dataproc",
          "ETL/ELT",
          "Data modeling",
        ],
      },
      {
        title: "Cloud & infra",
        items: [
          "Google Cloud Platform",
          "Cloud architecture",
          "Cloud deployment",
          "Kubernetes",
          "Docker",
          "Git",
        ],
      },
      {
        title: "Architecture & practices",
        items: [
          "System design",
          "RESTful APIs",
          "System integration",
          "Observability",
          "Data validation",
          "NoSQL databases",
          "Agile",
          "Scrum",
        ],
      },
      {
        title: "Quality engineering",
        items: [
          "Automation",
          "Performance testing",
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
