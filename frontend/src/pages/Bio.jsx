import { Link } from "react-router-dom";

function Bio() {
  return (
    <section className="stack">
      <div className="stack" style={{ gap: 8 }}>
        <div className="kicker">About</div>
        <h2>About Me</h2>

        <div className="prose">
          <p>
            I’m Craig Dejean — an infrastructure-minded IT professional focused on
            Linux, automation, and security operations. I build virtualized lab
            environments, write scripts to reduce manual work, and document what I
            learn through practical projects.
          </p>

          <p>
            I’m especially interested in how systems behave under real-world
            conditions — networking, logging, monitoring, hardening, and incident
            response workflows. My goal is simple: build reliable systems and make
            them safer.
          </p>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="card-title">
            <h3>What I’m good at</h3>
            <span className="card-meta">Strengths</span>
          </div>

          <p>
            Hands-on troubleshooting, clear documentation, and building systems
            that are maintainable and observable.
          </p>

          <div className="badges">
            <span className="badge">Linux</span>
            <span className="badge">Automation</span>
            <span className="badge">Networking</span>
            <span className="badge">Logging / Monitoring</span>
            <span className="badge">Security Mindset</span>
          </div>
        </div>

        <div className="card">
          <div className="card-title">
            <h3>What I’m focused on</h3>
            <span className="card-meta">Now</span>
          </div>

          <p>
            Building security lab projects and writing high-signal posts that show
            real execution — what I built, what broke, and how I fixed it.
          </p>

          <div className="badges">
            <span className="badge">Wazuh</span>
            <span className="badge">Suricata</span>
            <span className="badge">SIEM Fundamentals</span>
            <span className="badge">Hardening</span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <h3>What I’m looking for</h3>
          <span className="card-meta">Roles</span>
        </div>

        <p>
          Remote IT Support / Systems roles, and entry-level Security or SecOps
          roles where I can contribute through troubleshooting, automation, and
          operational security thinking.
        </p>

        <div className="hero-actions" style={{ marginTop: 14 }}>
          <Link className="btn btn-primary" to="/projects">
            View Projects →
          </Link>
          <a className="btn" href="mailto:cdejeantsuno@icloud.com">
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Bio;
