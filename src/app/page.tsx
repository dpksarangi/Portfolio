import { portfolio } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Systems", href: "#systems" },
  { label: "Projects", href: "#projects" },
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
            <p className="kicker">{portfolio.location}</p>
            <h1>
              Designing scalable{" "}
              <span className="no-break">backend systems</span> and building
              reliable services that handle{" "}
              <span className="no-break">real-world data</span> at scale.
            </h1>
            <p className="lede">{portfolio.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#impact">
                View engineering impact
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

          <aside className="hero-side">
            <div className="metric-strip">
              {portfolio.metrics.map((metric) => (
                <article key={metric.label} className="metric-card">
                  <p className="metric-value">{metric.value}</p>
                  <h3>{metric.label}</h3>
                  <p>{metric.context}</p>
                </article>
              ))}
            </div>

            <div className="hero-card">
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
            </div>
          </aside>
        </div>
      </section>

      <section className="content-grid" id="about">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Built through scalable systems, reliability, and thoughtful execution.</h2>
        </div>
        <div className="stack">
          {portfolio.summary.map((item) => (
            <p key={item} className="body-copy">
              {item}
            </p>
          ))}
          <div className="strength-grid">
            {portfolio.strengths.map((strength) => (
              <article key={strength.title} className="info-card compact-card">
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-grid" id="impact">
        <div className="section-heading">
          <p className="eyebrow">Impact</p>
          <h2>Engineering impact and technical leadership.</h2>
        </div>
        <div className="split-panel">
          <ul className="detail-list">
            {portfolio.impactLens.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-grid" id="systems">
        <div className="section-heading">
          <p className="eyebrow">Systems</p>
          <h2>How I build backend systems.</h2>
        </div>
        <div className="split-panel">
          <ul className="detail-list">
            {portfolio.systemThinking.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-grid">
        <div className="section-heading">
          <p className="eyebrow">Decisions</p>
          <h2>Decision-making and trade-offs.</h2>
        </div>
        <div className="split-panel">
          <ul className="detail-list">
            {portfolio.decisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-grid project-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Backend systems and reliability-focused projects.</h2>
        </div>
        <div className="project-stack">
          {portfolio.projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-header">
                <p className="timeline-company">Project title</p>
                <h3>{project.title}</h3>
                <p className="body-copy">{project.oneLiner}</p>
              </div>

              <div className="project-grid">
                <section className="project-block">
                  <p className="eyebrow">Problem</p>
                  <ul className="detail-list">
                    {project.problem.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="project-block">
                  <p className="eyebrow">Challenges</p>
                  <ul className="detail-list">
                    {project.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="project-block">
                  <p className="eyebrow">Architecture</p>
                  <ul className="detail-list">
                    {project.architecture.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="project-block">
                  <p className="eyebrow">Key contributions</p>
                  <ul className="detail-list">
                    {project.contributions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="project-block">
                  <p className="eyebrow">What went wrong</p>
                  <ul className="detail-list">
                    {project.failures.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="project-block">
                  <p className="eyebrow">Fixes & improvements</p>
                  <ul className="detail-list">
                    {project.improvements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="project-impact">
                <p className="eyebrow">Impact</p>
                <div className="pill-wrap">
                  {project.impact.map((item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Roles that shaped my engineering approach.</h2>
        </div>
        <div className="timeline">
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
              <p className="body-copy">{item.description}</p>
              <ul className="detail-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid">
        <div className="section-heading">
          <p className="eyebrow">Ownership</p>
          <h2>Ownership stories.</h2>
        </div>
        <div className="story-grid">
          {portfolio.ownershipStories.map((story) => (
            <article key={story.title} className="info-card">
              <h3>{story.title}</h3>
              <p>
                <strong>Problem:</strong> {story.problem}
              </p>
              <p>
                <strong>Action:</strong> {story.action}
              </p>
              <p>
                <strong>Result:</strong> {story.result}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid">
        <div className="section-heading">
          <p className="eyebrow">Quality</p>
          <h2>Quality and reliability engineering.</h2>
        </div>
        <div className="split-panel">
          <ul className="detail-list">
            {portfolio.quality.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-grid">
        <div className="section-heading">
          <p className="eyebrow">Influence</p>
          <h2>Cross-team influence.</h2>
        </div>
        <div className="split-panel">
          <ul className="detail-list">
            {portfolio.crossTeamInfluence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-grid">
        <div className="section-heading">
          <p className="eyebrow">AI</p>
          <h2>AI and next-gen systems.</h2>
        </div>
        <div className="split-panel">
          <ul className="detail-list">
            {portfolio.aiExploration.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
