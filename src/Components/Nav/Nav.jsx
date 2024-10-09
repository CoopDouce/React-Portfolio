import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className={currentPage === "/" ? "activeLink" : "link"}>
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Portfolio" className={currentPage === "/portfolio" ? "activeLink" : "link"}>
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className={currentPage === "/contact" ? "activeLink" : "link"}>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Resume" className={currentPage === "/contact" ? "activeLink" : "link"}>
            Resume
          </Link>
        </li>
        </ul>
    </nav>
    );
}

export default Nav;