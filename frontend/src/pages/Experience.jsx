import experience from "../data/experience";

function Experience() {
  return (
    <section className="stack">
      <div className="stack" style={{ gap: 8 }}>
        <div className="kicker">Experience</div>
        <h2>Experience</h2>
        <p className="small">
          Highlights from roles and responsibilities across IT support, systems,
          and security-focused work.
        </p>
      </div>

      <div className="timeline">
        {experience.map((job, index) => (
          <article key={index} className="timeline-item">
            <span className="timeline-dot" />

            <div className="card">
              <div className="card-title">
                <h3>{job.theme}</h3>
                <span className="card-meta">Role</span>
              </div>

              <p>{job.content}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
