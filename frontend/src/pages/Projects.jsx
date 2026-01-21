import projects from "../data/projects";

function Projects() {
  return (
    <section className="stack">
      <div className="stack" style={{ gap: 8 }}>
        <div className="kicker">Work</div>
        <h2>Projects</h2>
        <p className="small">
          A selection of hands-on builds focused on Linux, security, automation,
          and practical operations.
        </p>
      </div>

      <div className="grid grid-2">
        {projects.map((project, index) => (
          <article key={index} className="card">
            <div className="card-title">
              <h3>{project.title}</h3>
              <span className="card-meta">Project</span>
            </div>

            <p>{project.description}</p>

            {project.tools && project.tools.length > 0 && (
              <div className="badges">
                {project.tools.map((tool, i) => (
                  <span key={i} className="badge">
                    {tool}
                  </span>
                ))}
              </div>
            )}

            {project.link && (
              <div className="hero-actions" style={{ marginTop: 14 }}>
                <a
                  className="btn btn-primary"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
