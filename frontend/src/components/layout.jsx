import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bio">Bio</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to={"/blog"}>Blog</Link></li>

                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}

export default Layout;