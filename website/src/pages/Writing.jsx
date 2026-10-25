import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { posts, formatDate } from '../data/posts';
import './Writing.css';

export default function Writing() {
  return (
    <Layout>
      <main className="content writing">
        <header className="writing-head">
          <p className="folio">Journal</p>
          <h1 className="page-title">Writing</h1>
          <p className="page-dek">
            Notes on building with language models, shipping software, and whatever else
            seemed worth working through on paper.
          </p>
        </header>

        <hr className="rule rule--oxford" />

        {posts.length === 0 ? (
          <p className="writing-empty">The first pieces are forthcoming.</p>
        ) : (
          <ol className="writing-index">
            {posts.map((post) => (
              <li key={post.slug} className="writing-item">
                <aside className="writing-item-margin folio">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </aside>

                <article className="writing-item-body">
                  <h2 className="writing-item-title">
                    <Link to={`/writing/${post.slug}`}>{post.title}</Link>
                    {post.draft && <span className="writing-draft folio">Draft</span>}
                  </h2>
                  <p className="writing-item-summary">{post.summary}</p>
                  <span className="folio">{post.readingTime} min read</span>
                </article>
              </li>
            ))}
          </ol>
        )}
      </main>
    </Layout>
  );
}
