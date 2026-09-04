import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Plate from '../components/Plate';
import './About.css';

const expertise = [
  'AI strategy & adoption',
  'Agent harnesses',
  'Long-running agentic systems',
  'Cloud architecture',
  'Backend engineering',
  'Product vision',
];

const plates = [
  { src: '/images/ProfilePicture.jpg', alt: 'Jack hiking in a mountain valley in Colorado', numeral: 'II', caption: 'Vail, Colorado' },
  { src: '/images/AnnecyLake.jpg', alt: 'Lake Annecy in France', numeral: 'III', caption: "Lac d'Annecy, Haute-Savoie" },
  { src: '/images/ChamonixMountains.jpg', alt: 'Mountains above Chamonix', numeral: 'IV', caption: 'Chamonix, Mont Blanc massif' },
  { src: '/images/SwissCows.jpg', alt: 'Cows in an alpine pasture in Switzerland', numeral: 'V', caption: 'Alpine pasture, Switzerland' },
];

export default function About() {
  return (
    <Layout>
      <main className="content about">
        <header className="about-head">
          <p className="folio">Biographical note</p>
          <h1 className="page-title">About</h1>
          <p className="page-dek">An engineer's short account of himself.</p>
        </header>

        <hr className="rule rule--oxford" />

        <div className="about-grid">
          <article className="essay">
            <p className="essay-lead">
              I am an AI engineer with end-to-end experience, from research and product vision through
              to the infrastructure that keeps a system running in production. Much of my work has been
              in healthcare, where the cost of getting it wrong is high and the reward for getting it
              right is measured in people, not dashboards.
            </p>

            <blockquote className="pull-quote">
              The interesting problems are no longer whether a model can do the work, but whether a
              system can be trusted to keep doing it.
            </blockquote>

            <p>
              Today my practice sits at the intersection of strategy and systems. I help enterprises
              decide where AI belongs and how to adopt it without theatre; I build agent harnesses,
              the tools, memory, evaluation, and guardrails that turn a model into a dependable
              colleague; and I design long-running agentic systems that work for hours or days,
              with durable state, recovery, and humans in the loop where it counts.
            </p>

            <p>
              Away from the keyboard I am usually in the mountains. I read widely in politics,
              economics, and the hard sciences, and I am always looking for the next thing worth
              understanding properly.
            </p>

            <section className="expertise" aria-labelledby="expertise-heading">
              <h2 id="expertise-heading" className="expertise-heading small-caps">Expertise</h2>
              <ul className="expertise-list">
                {expertise.map((item, index) => (
                  <li key={item} className="expertise-item">
                    <span className="expertise-index folio">{String(index + 1).padStart(2, '0')}</span>
                    <span className="expertise-text">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="essay-actions">
              <Link to="/work" className="button primary">Selected works</Link>
              <a href="mailto:jackfiengo@proton.me" className="link-rule">
                Write to Jack<span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <aside className="plates" aria-label="Plates">
            <p className="plates-label folio">Plates</p>
            <div className="plates-grid">
              {plates.map((plate) => (
                <Plate
                  key={plate.numeral}
                  src={plate.src}
                  alt={plate.alt}
                  ratio="4 / 3"
                  colorOnHover
                  caption={<><em>Plate {plate.numeral}</em> — {plate.caption}</>}
                />
              ))}
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
