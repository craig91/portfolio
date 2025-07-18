import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <main className='container'>
             {/* <nav>
                <ul>
                     <li><strong>Craig Dejean</strong></li>
                </ul>
               
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/bio">Bio</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/blog">Blog</Link>
                </ul>
            </nav> */}

                <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0" }}>
                 <div style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                        Craig Dejean
                     </Link>
                </div>
                 <ul style={{ display: "flex", gap: "1.25rem", margin: 0, listStyle: "none", padding: 0 }}>
                     <li><Link to="/bio">Bio</Link></li>
                     <li><Link to="/experience">Experience</Link></li>
                     <li><Link to="/projects">Projects</Link></li>
                     <li><Link to="/blog">Blog</Link></li>
                </ul>
                </nav>

                <hr />
                <Outlet />
                <footer>
                    <hr />
                    <p>
                        <a href="https://github.com/craig91" target='__blank' rel='noopener noreferrer'>Github</a> .{""}
                        <a href="https://www.linkedin.com/in/craigdejean/" target='__blank' rel='noopener noreferrer'>LinkedIn</a> .{""}
                        <a href="mailto:cdejeantsuno@icloud.com">Email</a>
                    </p>
                    <p><small>&copy; {new Date().getFullYear()} Craig Dejean</small></p>
                </footer>
        </main>
           

    );
}

export default Layout;