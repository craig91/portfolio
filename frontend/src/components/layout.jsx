import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <main className='container'>
             <nav>
                <ul>
                <Link to="/">Home</Link>
                <Link to="/bio">Bio</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/blog">Blog</Link>
                </ul>
            </nav>

                <hr />
                <Outlet />
        </main>
           

    );
}

export default Layout;