import Layout from '../components/Layout';
import './Work.css';

export default function Work() {
  return (
    <Layout backgroundVariant="work">
      <div className="content">
        <h1 className="page-title">MY WORK</h1>
        <p className="page-subtitle">Explore my portfolio of projects. Each piece represents a unique challenge and solution, showcasing my approach to design and development.</p>

        <div className="project-grid">
          {/* Shopify Structured Data Project */}
          <div className="project-card">
            <div className="project-content">
              <div className="project-date">2025</div>
              <h3 className="project-title">Shopify Structured Data & AI Content Optimization</h3>
              <p className="project-description">
                A Shopify app that combines AI-powered content optimization with comprehensive structured data implementation. Enhances e-commerce stores through intelligent content generation and automated schema markup, dramatically improving SEO performance and search engine visibility.
              </p>
              <div className="project-tags">
                <span className="project-tag">AI</span>
                <span className="project-tag">Shopify</span>
                <span className="project-tag">SEO</span>
                <span className="project-tag">Content Optimization</span>
                <span className="project-tag">Schema.org</span>
                <span className="project-tag">JavaScript</span>
                <span className="project-tag">E-commerce</span>
              </div>
              <div className="project-details">
                <h4>Key Features:</h4>
                <ul>
                  <li>AI-powered content optimization for product descriptions and metadata</li>
                  <li>Automated structured data generation for products</li>
                  <li>Intelligent SEO enhancement with schema markup</li>
                  <li>Seamless Shopify theme integration</li>
                  <li>Improved search engine visibility and rankings</li>
                  <li>Customizable schema configurations</li>
                  <li>Rich snippets support for better SERP display</li>
                </ul>
                <h4>Technical Stack:</h4>
                <ul>
                  <li>AI/ML for content optimization</li>
                  <li>Shopify Liquid templating</li>
                  <li>Schema.org structured data standards</li>
                  <li>JSON-LD format implementation</li>
                  <li>SEO best practices integration</li>
                </ul>
                <a href="https://github.com/jfiengo/ShopifyStructuredData" className="view-project" target="_blank" rel="noopener noreferrer">View Repository</a>
              </div>
            </div>
          </div>

          {/* ReplyGenius Project */}
          <div className="project-card">
            <div className="project-content">
              <div className="project-date">2025</div>
              <h3 className="project-title">ReplyGenius</h3>
              <p className="project-description">
                An automated customer inquiry response system that integrates with Gmail to provide intelligent, context-aware email responses using RAG (Retrieval-Augmented Generation) technology and Anthropic Claude.
              </p>
              <div className="project-tags">
                <span className="project-tag">Python</span>
                <span className="project-tag">Gmail API</span>
                <span className="project-tag">RAG</span>
                <span className="project-tag">Anthropic Claude</span>
                <span className="project-tag">OAuth 2.0</span>
                <span className="project-tag">Email Automation</span>
              </div>
              <div className="project-details">
                <h4>Key Features:</h4>
                <ul>
                  <li>Automatic Gmail monitoring for unread messages</li>
                  <li>Semantic search for business context retrieval</li>
                  <li>AI-powered response generation using Claude</li>
                  <li>Conversation history tracking</li>
                  <li>Customer management system</li>
                  <li>Safety filters for testing environments</li>
                </ul>
                <h4>Technical Stack:</h4>
                <ul>
                  <li>Google Cloud Platform & Gmail API</li>
                  <li>OAuth 2.0 authentication</li>
                  <li>RAG (Retrieval-Augmented Generation)</li>
                  <li>Anthropic Claude integration</li>
                  <li>Database-driven conversation storage</li>
                </ul>
                <a href="https://github.com/jfiengo/ReplyGenius/tree/develop-email" className="view-project" target="_blank" rel="noopener noreferrer">View Repository</a>
              </div>
            </div>
          </div>

          {/* Alzheimers Prediction Project */}
          <div className="project-card">
            <div className="project-content">
              <div className="project-date">2025</div>
              <h3 className="project-title">Alzheimers Prediction Pipeline</h3>
              <p className="project-description">
                A comprehensive machine learning pipeline that automates testing of multiple ML methods on a global Alzheimers dataset spanning 20 countries, with API exposure and Docker containerization.
              </p>
              <div className="project-tags">
                <span className="project-tag">Machine Learning</span>
                <span className="project-tag">Python</span>
                <span className="project-tag">DVC</span>
                <span className="project-tag">Docker</span>
                <span className="project-tag">API</span>
                <span className="project-tag">MLOps</span>
              </div>
              <div className="project-details">
                <h4>Key Features:</h4>
                <ul>
                  <li>Automated ML pipeline testing multiple algorithms</li>
                  <li>Global dataset analysis (20 countries)</li>
                  <li>Data version control with DVC</li>
                  <li>RESTful API exposure</li>
                  <li>Docker containerization</li>
                  <li>Virtual environment management</li>
                </ul>
                <h4>Technical Stack:</h4>
                <ul>
                  <li>Python ML libraries (scikit-learn, pandas, numpy)</li>
                  <li>DVC for data version control</li>
                  <li>Flask for API development</li>
                  <li>Docker for containerization</li>
                  <li>Virtual environment management</li>
                </ul>
                <a href="https://github.com/jfiengo/AlzheimerPrediction/tree/main" className="view-project" target="_blank" rel="noopener noreferrer">View Repository</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
