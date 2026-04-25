import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import './Home.css';

export default function Home() {
  return (
    <Layout showHeader={false} backgroundVariant="home">
      <div className="content home-content">
        <div className="hero-shell">
          <p className="hero-eyebrow">Software engineer · product thinker · systems builder</p>

          <h1 className="glitch">
            Jack Fiengo
          </h1>

          <div className="button-container">
            <Link to="/work" className="button primary">Explore Work</Link>
            <Link to="/about" className="button">About Jack</Link>
            <a href="mailto:jackfiengo@proton.me" className="button">Start a Conversation</a>
          </div>

          <div className="hero-meta" aria-label="Professional focus areas">
            <span>AI-enabled products</span>
            <span>Cloud systems</span>
            <span>Healthcare technology</span>
          </div>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/jackfiengo/" className="social-link" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://github.com/jfiengo" className="social-link" aria-label="GitHub">GitHub</a>
          <a href="mailto:jackfiengo@proton.me" className="social-link" aria-label="Email Jack">Email</a>
        </div>
      </div>
    </Layout>
  );
}
