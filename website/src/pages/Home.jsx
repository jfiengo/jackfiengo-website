import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import LandingNav from '../components/LandingNav';
import { featuredProjects } from '../data/featuredProjects';
import './Home.css';

const focusAreas = [
  'AI-enabled products',
  'Cloud systems',
  'Healthcare technology',
];

export default function Home() {
  return (
    <Layout showHeader={false} backgroundVariant="home">
      <LandingNav />

      <main className="home-page">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-stack">
              <p className="hero-marginalia animate-in" style={{ '--delay': '0ms' }}>
                DOSSIER · 001 · 2026
              </p>
              <p className="hero-eyebrow animate-in" style={{ '--delay': '40ms' }}>
                AI engineer · product thinker · systems builder
              </p>

              <h1 id="hero-title" className="hero-title animate-in" style={{ '--delay': '80ms' }}>
                Jack Fiengo
              </h1>

              <p className="hero-subtitle animate-in" style={{ '--delay': '120ms' }}>
                Building AI systems that ship — from product vision to production infrastructure.
              </p>

              <div className="hero-actions animate-in" style={{ '--delay': '160ms' }}>
                <Link to="/work" className="button primary">Explore Work</Link>
                <Link to="/about" className="hero-text-link">About Jack →</Link>
              </div>
            </div>

            <div className="index-card-wrap animate-in" style={{ '--delay': '200ms' }}>
              <div className="index-card-shadow index-card-shadow--back" aria-hidden="true" />
              <div className="index-card-shadow index-card-shadow--mid" aria-hidden="true" />
              <aside className="index-card" aria-label="Focus areas and contact">
                <span className="index-card-bracket index-card-bracket--tl" aria-hidden="true" />
                <span className="index-card-bracket index-card-bracket--br" aria-hidden="true" />

                <svg className="index-card-watermark" viewBox="0 0 100 100" aria-hidden="true">
                  <g transform="translate(50, 50)">
                    <path
                      d="M 0 -22 L 0 14 Q 0 22 -8 22 Q -16 22 -16 14"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M -16 -22 L 18 -22" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M 0 -2 L 14 -2" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </g>
                </svg>

                <p className="index-card-label">Field index</p>
                <ol className="index-list">
                  {focusAreas.map((area, index) => (
                    <li key={area}>
                      <span className="index-number">{String(index + 1).padStart(2, '0')}</span>
                      <span className="index-text">{area}</span>
                    </li>
                  ))}
                </ol>

                <footer className="index-card-footer">
                  <a href="mailto:jackfiengo@proton.me" className="index-link">Email →</a>
                  <a href="https://www.linkedin.com/in/jackfiengo/" className="index-link" target="_blank" rel="noopener noreferrer">LinkedIn →</a>
                  <a href="https://github.com/jfiengo" className="index-link" target="_blank" rel="noopener noreferrer">GitHub →</a>
                </footer>
              </aside>
            </div>
          </div>
        </section>

        <section className="dossiers" aria-labelledby="dossiers-heading">
          <div className="dossiers-header">
            <h2 id="dossiers-heading" className="dossiers-title">Selected dossiers</h2>
            <span className="dossiers-rule" aria-hidden="true" />
          </div>

          <div className="dossier-grid">
            {featuredProjects.map((project) => (
              <article key={project.id} className="dossier-card">
                <span className="dossier-number">{project.number}</span>
                <h3 className="dossier-card-title">{project.title}</h3>
                <p className="dossier-hook">{project.hook}</p>
                <div className="dossier-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="dossier-tag">{tag}</span>
                  ))}
                </div>
                <Link to={project.href} className="dossier-link">Read dossier →</Link>
              </article>
            ))}
          </div>

          <div className="dossiers-footer">
            <Link to="/work" className="dossiers-view-all">View all work →</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
