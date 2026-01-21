import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <nav className="navbar">
            <Link to="/" className="brand">
              Craig Dejean <span>Security • Linux • Ops</span>
            </Link>

            <div className="navlinks">
              <Link to="/bio">Bio</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/blog">Blog</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container section">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-row">
            <div>
              <a
                href="https://github.com/craig91"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              ·{" "}
              <a
                href="https://www.linkedin.com/in/craigdejean/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              · <a href="mailto:cdejeantsuno@icloud.com">Email</a>
            </div>

            <div className="small">
              © {new Date().getFullYear()} Craig Dejean
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
