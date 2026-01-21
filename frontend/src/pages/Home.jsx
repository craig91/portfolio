import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="kicker">Infrastructure • Security • Linux</div>

          <h1>
            I build reliable systems and practical security labs.
          </h1>

          <p>
            I’m Craig Dejean — a hands-on IT professional focused on Linux,
            automation, and security operations. This site is where I document
            projects, write clear technical breakdowns, and show proof of work.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">
              View Projects
            </Link>
            <Link className="btn" to="/blog">
              Read the Blog
            </Link>
          </div>

          {/* Mini proof row */}
          <div className="grid grid-3" style={{ marginTop: 22 }}>
            <div className="card">
              <div className="card-title">
                <h3>10+ years IT support</h3>
                <span className="card-meta">Experience</span>
              </div>
              <p>
                Real-world troubleshooting, user support, and systems thinking —
                not just theory.
              </p>
            </div>

            <div className="card">
              <div className="card-title">
                <h3>Security lab builds</h3>
                <span className="card-meta">Homelab</span>
              </div>
              <p>
                Detection + logging practice with tools like Wazuh, Suricata,
                and Linux hardening.
              </p>
            </div>

            <div className="card">
              <div className="card-title">
                <h3>Clear write-ups</h3>
                <span className="card-meta">Blog</span>
              </div>
              <p>
                I document what I build, what breaks, how I fix it, and what I
                learned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SECTIONS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="grid grid-2">
          <div className="card">
            <div className="card-title">
              <h3>Featured Projects</h3>
              <span className="card-meta">Work</span>
            </div>
            <p>
              Practical projects that show infrastructure thinking, security
              awareness, and execution.
            </p>

            <div className="hero-actions" style={{ marginTop: 14 }}>
              <Link className="btn btn-primary" to="/projects">
                Explore Projects
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <h3>Latest Writing</h3>
              <span className="card-meta">Notes</span>
            </div>
            <p>
              Short, high-signal posts: lab notes, troubleshooting, and lessons
              learned.
            </p>

            <div className="hero-actions" style={{ marginTop: 14 }}>
              <Link className="btn" to="/blog">
                Go to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
