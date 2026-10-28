// Everything a visitor reads that is reused across pages lives here.

export const site = {
  name: 'Mohit Khanduri',
  role: 'Product Analytics Engineer',
  headline:
    "I turn product and usage data into metrics teams trust, and I'm building toward AI on top of them.",
  pitch:
    "I build the data layer behind product decisions: event and app data modelled in dbt, clear metrics for activation, retention and feature usage, and self-serve dashboards. Lately I'm extending it with AI, like letting teams ask their product data questions in plain English, checked with evals.",
  description:
    'Mohit Khanduri, product analytics engineer in India. Product analytics, analytics engineering, dbt, PostHog, Snowflake, Metabase and AI for SaaS teams.',
  location: 'India',
  openTo: 'Open to product analytics and analytics engineering roles, India or remote.',
  linkedin: 'https://www.linkedin.com/in/khandurimohit/',
  github: 'https://github.com/mandakani',
};

export const whatIDo = [
  {
    title: 'Model product data',
    body: 'I turn app events, users and accounts into clean dbt models, so teams can see activation, retention and feature usage without writing SQL.',
  },
  {
    title: 'Make metrics trustworthy',
    body: 'One agreed definition per metric, tests on every model, data quality rules and access control, so every team sees the same numbers.',
  },
  {
    title: 'Exploring: AI on top of analytics',
    body: 'Plain-English questions over the metrics layer, LLM tagging of user feedback, and evals that check the answers. Follow along in the lab.',
  },
];

// DRAFT: rewrite these in your own words before publishing. They are the page recruiters remember.
export const principles = [
  {
    title: 'Define the metric before the dashboard',
    body: 'Write down what a number means, its grain and its owner, then build the chart. Most dashboard arguments are really definition arguments.',
  },
  {
    title: 'One agreed definition of an active user',
    body: 'Activation, active and retained each get one definition in the metrics layer, used by every dashboard and every team.',
  },
  {
    title: 'A tracking plan before tracking code',
    body: 'Fewer events with clear names and properties beat hundreds of auto-captured clicks nobody can explain a year later.',
  },
  {
    title: 'Test every model',
    body: 'Uniqueness, nulls, row counts and joins that can fan out. A wrong number on a dashboard costs more trust than a missing one.',
  },
  {
    title: 'Self-serve beats a ticket queue',
    body: 'Model the data so a PM can answer the next question in the BI tool, without waiting on the data team.',
  },
  {
    title: 'No AI answer ships without an eval',
    body: 'If an LLM answers questions about the data, a fixed set of questions with known answers checks it on every change.',
  },
];

export const caseStudies = [
  {
    slug: 'saas-product-analytics',
    title: 'Product analytics for an AI SaaS product',
    context: 'Early-stage AI startup, built solo',
    summary:
      'Set up the data stack from scratch and gave the product team self-serve reporting on signups and usage of every AI feature.',
    stack: ['dlt', 'Estuary', 'MotherDuck', 'dbt', 'Kestra', 'Metabase', 'OpenTelemetry'],
  },
  {
    slug: 'trusted-lakehouse-metrics',
    title: 'Trusted metrics in a lakehouse',
    context: 'Industrial energy company',
    summary:
      'Owned lakehouse models with medallion layers, SCD Type 2 history and data quality rules, so business metrics stayed consistent.',
    stack: ['Databricks', 'Kimball', 'SCD Type 2', 'Lightup'],
  },
  {
    slug: 'multi-business-metrics',
    title: 'One set of metrics across several businesses',
    context: 'Group of portfolio businesses',
    summary:
      'Consolidated ERP data from several companies into one warehouse, with shared metric definitions and four-tier row-level security.',
    stack: ['Snowflake', 'Airflow', 'dbt', 'Power BI'],
  },
];

export const lab = [
  {
    title: 'AI research advisor',
    tag: 'AI lab',
    body: 'A LangGraph agent that asks clarifying questions, researches the web and recommends with sources. Every run is traced in Opik.',
    href: 'https://github.com/mandakani/ai-projects-sdd',
    stack: ['LangGraph', 'FastAPI', 'React', 'Opik'],
  },
  {
    title: 'Governed data agent',
    tag: 'AI lab',
    body: 'An LLM agent over a medallion pipeline that goes through the same consent checks, data masking and filtered retrieval as any other caller.',
    href: 'https://github.com/mandakani/healthcare-data-agent-poc',
    stack: ['DuckDB', 'Python', 'litellm'],
  },
];

// Newest first. Keep notes short: what you tried, what you learned.
export const buildLog = [
  {
    date: '2026-10-28',
    title: 'Scoped the flagship project',
    body: 'Usage analytics for a sample fleet and field-service SaaS app: PostHog events, dbt models, activation and retention dashboards, then an "ask the data" layer with an eval set.',
  },
];

export const now = [
  'Building the flagship: product analytics for a sample fleet-service SaaS app',
  'Learning PostHog event tracking, funnel and retention metrics, and A/B test analysis',
  'Exploring text-to-SQL over a metrics layer, and how to eval it',
];

export const about =
  "I started in enterprise IT as a business analyst, moved into software and have spent the last seven years in data modelling and analytics engineering. The part I enjoy most is the moment a product team agrees on what a metric means and starts using it to decide. I've built analytics platforms at a SaaS startup, an industrial energy company and across a group of businesses. Now I'm focused on product analytics for SaaS companies serving small businesses, and I'm learning how AI can make that data easier to use.";

export const timeline = [
  { years: '2025–2026', role: 'Senior Consultant, Data', org: 'Preferred Square Analytics',
    line: 'Consolidated ERP data from several portfolio companies into Snowflake, built Airflow and dbt pipelines, a four-tier row-level security model for Power BI, and led a data team.' },
  { years: '2024–2025', role: 'Data & Solutions Architect', org: 'MyNextFilm (mnf.ai)',
    line: 'Built the analytics platform from scratch and added OpenTelemetry monitoring, CI and Docker to the SaaS app. Mentored 15+ engineers.' },
  { years: '2023–2024', role: 'Data Analytics Engineer Lead', org: 'Baker Hughes',
    line: 'Owned Databricks lakehouse models (medallion, Kimball, SCD Type 2) and data quality rules in Lightup for an industrial energy business.' },
  { years: '2021–2023', role: 'Data Analysis Manager', org: 'Cisco',
    line: 'Automated the Alation catalog with PII tags, quality metadata and lineage across BigQuery and Snowflake.' },
  { years: '2019–2021', role: 'Senior Business Data / IT Analyst', org: 'Cognizant',
    line: 'Built a Python framework to match and clean customer master data across systems, plus a semantic search prototype.' },
  { years: '2010–2018', role: 'Business analyst and consultant', org: 'Virtusa, Genpact',
    line: 'Enterprise systems, requirements and migrations.' },
];

export const stack = [
  { layer: 'Model and transform', items: 'dbt, SQL, Python, Kimball, medallion' },
  { layer: 'Warehouse', items: 'Snowflake, Databricks, MotherDuck / DuckDB, Postgres, BigQuery' },
  { layer: 'Ingest and orchestrate', items: 'dlt, Estuary, Airflow, Kestra' },
  { layer: 'BI and self-serve', items: 'Metabase, Power BI, Tableau' },
  { layer: 'Quality and governance', items: 'Lightup, Alation, row-level security, OpenTelemetry' },
  { layer: 'Learning now', items: 'PostHog (event tracking, funnels, retention), metrics layers, A/B test analysis' },
  { layer: 'Exploring', items: 'LLM APIs, LangGraph, text-to-SQL, evals' },
];
