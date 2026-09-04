import './Colophon.css';

export default function Colophon() {
  return (
    <footer className="colophon">
      <div className="colophon-inner">
        <div className="colophon-col">
          <p className="colophon-label folio">Correspondence</p>
          <ul className="colophon-links">
            <li><a href="mailto:jackfiengo@proton.me" className="colophon-link">jackfiengo@proton.me</a></li>
            <li><a href="https://www.linkedin.com/in/jackfiengo/" className="colophon-link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/jfiengo" className="colophon-link" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>

        <div className="colophon-col">
          <p className="colophon-label folio">Colophon</p>
          <p className="colophon-text">
            Set in Fraunces and Newsreader, with IBM Plex Mono for the marginalia.
            Built with React, hosted on AWS.
          </p>
        </div>

        <div className="colophon-col colophon-col--end">
          <p className="colophon-label folio">Imprint</p>
          <p className="colophon-text">© MMXXVI Jack Fiengo</p>
        </div>
      </div>
    </footer>
  );
}
