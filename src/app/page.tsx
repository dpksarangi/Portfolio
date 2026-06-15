import { portfolio } from "@/data/portfolio";

const navItems = [
  { label: "Metrics", href: "#metrics" },
  { label: "Architectures", href: "#architectures" },
  { label: "Leadership", href: "#leadership" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Portfolio / 2026</p>
            <a className="wordmark" href="#top">
              {portfolio.name}
            </a>
          </div>
          <nav className="nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <div>
              <p className="kicker">{portfolio.location}</p>
              <h1>{portfolio.heroTitle}</h1>
              <p className="lede">{portfolio.intro}</p>
            </div>

            <div>
              <div className="hero-actions">
                <a className="button button-primary" href="#architectures">
                  View featured architectures
                </a>
                <a
                  className="button button-secondary"
                  href="/deepak-sarangi-resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open resume
                </a>
              </div>
              <div className="external-links">
                <a
                  href={portfolio.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={portfolio.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <aside className="hero-card">
            <p className="card-label">Quick profile</p>
            <dl>
              <div>
                <dt>Role</dt>
                <dd>{portfolio.role}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Backend systems, reliability, distributed processing</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${portfolio.phone.replace(/\s+/g, "")}`}>
                    {portfolio.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="content-grid project-section" id="metrics">
        <div className="section-heading">
          <p className="eyebrow">Key metrics</p>
          <h2>High-signal evidence from platform and backend work.</h2>
        </div>
        <div className="metrics-grid">
          {portfolio.keyMetrics.map((metric) => (
            <article key={metric.label} className="metric-card metric-card-large">
              <p className="metric-value">{metric.value}</p>
              <h3>{metric.label}</h3>
              <p>{metric.context}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid project-section" id="architectures">
        <div className="section-heading">
          <p className="eyebrow">Featured architectures</p>
          <h2>System ownership, architecture decisions, and business impact.</h2>
        </div>
        <div className="project-stack">
          {portfolio.featuredArchitectures.map((project) => (
            <article key={project.title} className="project-card architecture-card">
              <div className="project-header architecture-header">
                <p className="timeline-company">Architecture</p>
                <h3>{project.title}</h3>
                <p className="body-copy">{project.oneLiner}</p>
              </div>

              <div className="architecture-summary-grid">
                <section className="project-block">
                  <p className="eyebrow">Problem</p>
                  <p className="body-copy">{project.problem}</p>
                </section>

                <section className="project-block">
                  <p className="eyebrow">Scale</p>
                  <p className="body-copy">{project.scale}</p>
                </section>
              </div>

              <div className="project-grid">
                <section className="project-block project-block-wide">
                  <p className="eyebrow">Architecture</p>
                  <ol className="architecture-flow">
                    {project.architecture.map((item, index) => (
                      <li key={item} className="architecture-step">
                        <span className="architecture-index" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="project-block">
                  <p className="eyebrow">Key decisions</p>
                  <ul className="detail-list">
                    {project.keyDecisions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="project-block">
                  <p className="eyebrow">Trade-offs</p>
                  <ul className="detail-list">
                    {project.tradeOffs.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="project-impact">
                <p className="eyebrow">Impact</p>
                <div className="impact-grid">
                  {project.impact.map((item) => (
                    <article key={item} className="impact-card">
                      <p>{item}</p>
                    </article>
                  ))}
                </div>
              </section>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid" id="leadership">
        <div className="section-heading">
          <p className="eyebrow">Technical leadership</p>
          <h2>Architecture influence, standards, and platform ownership.</h2>
        </div>
        <div className="split-panel reading-panel">
          <ul className="detail-list">
            {portfolio.technicalLeadership.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-grid" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Concise summaries of production-facing engineering roles.</h2>
        </div>
        <div className="timeline section-column">
          {portfolio.experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="timeline-card"
            >
              <div className="timeline-head">
                <div>
                  <p className="timeline-company">{item.company}</p>
                  <h3>{item.role}</h3>
                </div>
                <p className="timeline-period">{item.period}</p>
              </div>
              <p className="body-copy">{item.summary}</p>
              <ul className="detail-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>{portfolio.skills.heading}</h2>
        </div>
        <div className="skills-grid">
          {portfolio.skills.groups.map((group) => (
            <article key={group.title} className="info-card compact-card">
              <h3>{group.title}</h3>
              <div className="pill-wrap">
                {group.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid dual-section">
        <article className="info-card" id="education">
          <p className="eyebrow">Education</p>
          <h2>{portfolio.education.heading}</h2>
          <p>{portfolio.education.description}</p>
        </article>

        <article className="info-card" id="contact">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s discuss the next build.</h2>
          <p>{portfolio.contactCta}</p>
          <div className="contact-links">
            <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
            <a href={`tel:${portfolio.phone.replace(/\s+/g, "")}`}>
              {portfolio.phone}
            </a>
            <a href={portfolio.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a
              href="/deepak-sarangi-resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume PDF
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
