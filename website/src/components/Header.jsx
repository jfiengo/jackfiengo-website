import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">Jack Fiengo</Link>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/work" className="nav-link">Work</Link>
        <Link to="/about" className="nav-link">About</Link>
        <a href="mailto:jackfiengo@proton.me" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}
