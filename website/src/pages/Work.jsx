import Layout from '../components/Layout';
import { projects } from '../data/projects';
import './Work.css';

export default function Work() {
  return (
    <Layout>
      <main className="content work">
        <header className="work-head">
          <p className="folio">Catalogue</p>
          <h1 className="page-title">Selected Works</h1>
          <p className="page-dek">
            Projects where product thinking, engineering execution, and emerging technology
            were brought to bear on practical problems.
          </p>
        </header>

        <hr className="rule rule--oxford" />

        <ol className="catalogue">
          {projects.map((project) => (
            <li key={project.id} id={project.id} className="entry">
              <aside className="entry-margin">
                <span className="entry-number">{project.number}</span>
                <span className="entry-year folio">{project.year}</span>
              </aside>

              <article className="entry-body">
                <h2 className="entry-title">{project.title}</h2>
                <p className="entry-description">{project.description}</p>

                <div className="entry-columns">
                  <section className="entry-column" aria-label="Features">
                    <h3 className="entry-subhead small-caps">Features</h3>
                    <ul className="entry-list">
                      {project.features.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="entry-column" aria-label="Stack">
                    <h3 className="entry-subhead small-caps">Stack</h3>
                    <ul className="entry-list">
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                </div>

                <footer className="entry-footer">
                  <span className="entry-tags folio">{project.tags.join('  ·  ')}</span>
                  <a href={project.repo} className="link-rule" target="_blank" rel="noopener noreferrer">
                    View repository<span className="arrow" aria-hidden="true">↗</span>
                  </a>
                </footer>
              </article>
            </li>
          ))}
        </ol>
      </main>
    </Layout>
  );
}
