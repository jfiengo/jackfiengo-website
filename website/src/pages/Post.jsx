import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { getPost, formatDate } from '../data/posts';
import './Post.css';

export default function Post() {
  const { slug } = useParams();
  const post = getPost(slug);

  useEffect(() => {
    if (!post) return;
    const previous = document.title;
    document.title = `${post.title} — Jack Fiengo`;
    return () => {
      document.title = previous;
    };
  }, [post]);

  if (!post) return <Navigate to="/writing" replace />;

  return (
    <Layout>
      <main className="content post">
        <header className="post-head">
          <p className="folio">
            <Link to="/writing" className="post-crumb">Writing</Link>
            &ensp;·&ensp;<time dateTime={post.date}>{formatDate(post.date)}</time>
            &ensp;·&ensp;{post.readingTime} min read
          </p>
          <h1 className="post-title">{post.title}</h1>
          <p className="page-dek">{post.summary}</p>
        </header>

        <hr className="rule rule--oxford" />

        <article className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />

        <footer className="post-footer">
          <Link to="/writing" className="link-rule">
            <span className="arrow" aria-hidden="true">←</span> All writing
          </Link>
        </footer>
      </main>
    </Layout>
  );
}
