import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Plate from '../components/Plate';
import { featuredProjects } from '../data/projects';
import './Home.css';

const practice = [
  {
    numeral: 'I',
    title: 'Enterprise AI adoption & strategy',
    body:
      'Where AI earns its place in an organisation, and how to get it there without theatre. Choosing the problems, setting the operating model, and measuring what actually changed.',
  },
  {
    numeral: 'II',
    title: 'Agent harnesses',
    body:
      'The scaffolding around a model: tools, memory, evaluation, and guardrails. The loop that turns a capable model into a dependable colleague.',
  },
  {
    numeral: 'III',
    title: 'Long-running agentic systems',
    body:
      'Systems that work for hours or days rather than seconds. Durable state, recovery, observability, and humans in the loop where it counts.',
  },
];

export default function Home() {
  return (
    <Layout>
      <main className="home">
        <section className="hero" aria-labelledby="hero-title">
          <aside className="hero-margin" aria-hidden="true">
            <span className="folio animate-in" style={{ '--delay': '0ms' }}>№ 001</span>
            <span className="folio animate-in" style={{ '--delay': '60ms' }}>Applied AI</span>
            <span className="folio animate-in" style={{ '--delay': '120ms' }}>Est. MMXXVI</span>
          </aside>

          <div className="hero-body">
            <p className="hero-eyebrow small-caps animate-in" style={{ '--delay': '40ms' }}>
              Jack Fiengo&ensp;·&ensp;AI Engineer
            </p>

            <h1 id="hero-title" className="hero-title animate-in" style={{ '--delay': '100ms' }}>
              Building the harnesses that let AI agents work for <em className="em-accent">hours</em>, not seconds.
            </h1>

            <p className="hero-lede animate-in" style={{ '--delay': '180ms' }}>
              I help enterprises move AI from pilot to practice: adoption strategy, agent harnesses,
              and long-running agentic systems that do real work.
            </p>

            <div className="hero-actions animate-in" style={{ '--delay': '240ms' }}>
              <Link to="/work" className="button primary">Selected works</Link>
              <Link to="/about" className="link-rule">
                About Jack<span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="hero-plate animate-in" style={{ '--delay': '220ms' }}>
            <Plate
              src="/images/Presenting.jpg"
              alt="Jack Fiengo speaking at a podium"
              caption={<><em>Plate I</em> — The author, presenting. 2026.</>}
              ratio="3 / 4"
              loading="eager"
            />
          </div>
        </section>

        <hr className="rule rule--oxford" />

        <section className="practice" aria-labelledby="practice-heading">
          <div className="section-head">
            <span className="section-head-numeral" aria-hidden="true">§ I</span>
            <h2 id="practice-heading" className="section-head-label">Practice</h2>
          </div>

          <ol className="practice-grid">
            {practice.map((item) => (
              <li key={item.numeral} className="practice-item">
                <span className="practice-numeral" aria-hidden="true">{item.numeral}</span>
                <h3 className="practice-title">{item.title}</h3>
                <p className="practice-body">{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="works" aria-labelledby="works-heading">
          <div className="section-head">
            <span className="section-head-numeral" aria-hidden="true">§ II</span>
            <h2 id="works-heading" className="section-head-label">Selected works</h2>
          </div>

          <ol className="toc">
            {featuredProjects.map((project) => (
              <li key={project.id} className="toc-row">
                <Link to={`/work#${project.id}`} className="toc-link">
                  <span className="toc-number folio">{project.number}</span>
                  <span className="toc-main">
                    <span className="toc-line">
                      <span className="toc-title">{project.title}</span>
                      <span className="toc-leader" aria-hidden="true" />
                      <span className="toc-year folio">{project.year}</span>
                    </span>
                    <span className="toc-hook">{project.hook}</span>
                    <span className="toc-tags folio">{project.tags.slice(0, 3).join('  ·  ')}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="works-footer">
            <Link to="/work" className="link-rule">
              Complete catalogue<span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
