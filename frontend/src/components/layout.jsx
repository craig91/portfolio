import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/bio">Bio</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;