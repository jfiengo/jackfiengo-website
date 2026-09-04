import { Link, NavLink } from 'react-router-dom';
import './Masthead.css';

export default function Masthead() {
  return (
    <header className="masthead">
      <div className="masthead-inner">
        <Link to="/" className="masthead-name">Jack Fiengo</Link>

        <nav className="masthead-nav" aria-label="Primary">
          <NavLink to="/work" className="masthead-link">Work</NavLink>
          <NavLink to="/about" className="masthead-link">About</NavLink>
          <a href="mailto:jackfiengo@proton.me" className="masthead-link">Contact</a>
        </nav>

        <p className="masthead-folio folio" aria-hidden="true">
          AI Engineer&ensp;·&ensp;Vol. I&ensp;·&ensp;MMXXVI
        </p>
      </div>
    </header>
  );
}
