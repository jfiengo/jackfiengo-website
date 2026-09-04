export const projects = [
  {
    id: 'shopify-structured-data',
    number: '01',
    year: '2025',
    title: 'Shopify Structured Data & AI Content Optimization',
    hook: 'AI-driven content optimisation and automated schema markup for e-commerce search visibility.',
    description:
      'A Shopify app that pairs AI-powered content optimisation with comprehensive structured data. It enhances storefronts through intelligent content generation and automated schema markup, materially improving search performance and visibility.',
    tags: ['AI', 'Shopify', 'SEO', 'Schema.org', 'JavaScript'],
    features: [
      'AI-powered optimisation of product descriptions and metadata',
      'Automated structured data generation for products',
      'Schema markup for rich snippets and improved SERP display',
      'Seamless Shopify theme integration',
      'Customisable schema configurations',
    ],
    stack: [
      'LLM-based content optimisation',
      'Shopify Liquid templating',
      'Schema.org standards, JSON-LD',
      'SEO best-practice integration',
    ],
    repo: 'https://github.com/jfiengo/ShopifyStructuredData',
  },
  {
    id: 'replygenius',
    number: '02',
    year: '2025',
    title: 'ReplyGenius',
    hook: 'Context-aware email replies for customer inquiries, built on retrieval-augmented generation and Claude.',
    description:
      'An automated customer-inquiry response system that integrates with Gmail to draft intelligent, context-aware replies using retrieval-augmented generation and Anthropic Claude.',
    tags: ['Python', 'RAG', 'Gmail API', 'Anthropic Claude', 'OAuth 2.0'],
    features: [
      'Automatic Gmail monitoring for unread messages',
      'Semantic search for business-context retrieval',
      'AI-generated responses using Claude',
      'Conversation history tracking and customer management',
      'Safety filters for testing environments',
    ],
    stack: [
      'Google Cloud Platform and Gmail API',
      'OAuth 2.0 authentication',
      'Retrieval-augmented generation',
      'Anthropic Claude integration',
      'Database-backed conversation storage',
    ],
    repo: 'https://github.com/jfiengo/ReplyGenius/tree/develop-email',
  },
  {
    id: 'alzheimers-pipeline',
    number: '03',
    year: '2025',
    title: "Alzheimer's Prediction Pipeline",
    hook: 'An automated machine-learning pipeline evaluated across a twenty-country dataset, served by API and containerised.',
    description:
      "A comprehensive machine-learning pipeline that automates the evaluation of multiple methods on a global Alzheimer's dataset spanning twenty countries, exposed through an API and packaged with Docker.",
    tags: ['Machine Learning', 'Python', 'DVC', 'Docker', 'MLOps'],
    features: [
      'Automated pipeline testing multiple algorithms',
      'Global dataset analysis across twenty countries',
      'Data version control with DVC',
      'RESTful API exposure',
      'Docker containerisation',
    ],
    stack: [
      'scikit-learn, pandas, numpy',
      'DVC for data versioning',
      'Flask for the API layer',
      'Docker for packaging',
    ],
    repo: 'https://github.com/jfiengo/AlzheimerPrediction/tree/main',
  },
];

export const featuredProjects = projects.slice(0, 3);
