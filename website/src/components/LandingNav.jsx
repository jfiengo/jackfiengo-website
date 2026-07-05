import { Link } from 'react-router-dom';
import './LandingNav.css';

export default function LandingNav() {
  return (
    <nav className="landing-nav" aria-label="Primary">
      <Link to="/" className="landing-nav-logo">JF</Link>
      <div className="landing-nav-links">
        <Link to="/work" className="landing-nav-link">Work</Link>
        <Link to="/about" className="landing-nav-link">About</Link>
        <a href="mailto:jackfiengo@proton.me" className="landing-nav-link">Contact</a>
      </div>
    </nav>
  );
}
