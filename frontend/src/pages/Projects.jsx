import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import projects from "../data/projects";

function isInternalLink(href) {
  return typeof href === "string" && href.startsWith("/");
}

function Projects() {
  const hasTypes = projects.some((p) => p.type);

  const types = useMemo(() => {
    if (!hasTypes) return [];
    const unique = Array.from(new Set(projects.map((p) => p.type).filter(Boolean)));
    return ["All", ...unique];
  }, [hasTypes]);

  const [activeType, setActiveType] = useState("All");

  const filteredProjects = useMemo(() => {
    if (!hasTypes) return projects;
    if (activeType === "All") return projects;
    return projects.filter((p) => p.type === activeType);
  }, [activeType, hasTypes]);

  return (
    <section className="stack">
      <div className="stack" style={{ gap: 8 }}>
        <div className="kicker">Work</div>
        <h2>Projects</h2>
        <p className="small">
          Hands-on builds focused on Linux, security, automation, and practical operations.
          Not everything is a “web app” — some projects are systems, lab environments, or workflows.
        </p>
      </div>

      {/* Optional: Filters (only shows if projects have types) */}
      {hasTypes && (
        <div className="filters">
          {types.map((t) => (
            <button
              key={t}
              type="button"
              className={`btn btn-filter ${activeType === t ? "btn-filter-active" : ""}`}
              onClick={() => setActiveType(t)}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-2">
        {filteredProjects.map((project, index) => {
          const caseStudy = project.links?.caseStudy;
          const repo = project.links?.repo;
          const demo = project.links?.demo;

          return (
            <article key={index} className="card">
              <div className="card-title">
                <h3>{project.title}</h3>
                <div className="meta-row">
                  {project.type && <span className="pill">{project.type}</span>}
                  {project.status && <span className="pill pill-accent">{project.status}</span>}
                </div>
              </div>

              <p>{project.description}</p>

              {/* Tools */}
              {project.tools?.length > 0 && (
                <div className="badges">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="badge">
                      {tool}
                    </span>
                  ))}
                </div>
              )}

              {/* Outcomes (big credibility boost) */}
              {project.outcomes?.length > 0 && (
                <ul className="list">
                  {project.outcomes.slice(0, 3).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Actions */}
              <div className="card-actions">
                {/* Prefer case study first */}
                {caseStudy &&
                  (isInternalLink(caseStudy) ? (
                    <Link className="btn btn-primary" to={caseStudy}>
                      Case Study →
                    </Link>
                  ) : (
                    <a className="btn btn-primary" href={caseStudy} target="_blank" rel="noreferrer">
                      Case Study →
                    </a>
                  ))}

                {repo && (
                  <a className="btn" href={repo} target="_blank" rel="noreferrer">
                    Repo →
                  </a>
                )}

                {demo && (
                  <a className="btn" href={demo} target="_blank" rel="noreferrer">
                    Demo →
                  </a>
                )}

                {/* Backward-compatible fallback */}
                {!caseStudy && project.link && (
                  <a className="btn btn-primary" href={project.link} target="_blank" rel="noreferrer">
                    View →
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
