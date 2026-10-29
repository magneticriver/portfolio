// Everything a visitor reads that is reused across pages lives here.

export const site = {
  name: 'Mohit Khanduri',
  role: 'Product Analytics Engineer',
  headline:
    "I turn product and usage data into metrics teams trust, and I'm building toward AI on top of them.",
  pitch:
    "I build the data layer behind product decisions: app and usage data modelled in dbt, clear metrics, and self-serve dashboards. Lately I've been building LLM agents on top of governed data, with every access checked and every run traced.",
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
    title: 'Exploring: AI on top of data',
    body: 'LLM agents that go through the same access checks as any other user of the data, with every run traced. See the lab below.',
  },
];

// Each principle points at work where it was applied, so none of it is theory.
export const principles = [
  {
    title: 'Measure every feature, not just signups',
    body: 'Signups say people arrived; feature usage says whether the product works for them.',
    evidence: 'Tracked signups and usage of every AI feature at an early-stage AI startup.',
    href: '/work/saas-product-analytics',
  },
  {
    title: 'Self-serve beats a ticket queue',
    body: 'Model the data so the product team can answer the next question in the BI tool themselves.',
    evidence: 'Set up Metabase self-serve reporting for the product team on top of dbt models.',
    href: '/work/saas-product-analytics',
  },
  {
    title: "Keep history, so last quarter's number never changes",
    body: 'When source data changes, past figures should still be reproducible.',
    evidence: 'SCD Type 2 history in the lakehouse models at an industrial energy company.',
    href: '/work/trusted-lakehouse-metrics',
  },
  {
    title: 'Check the data before it reaches a dashboard',
    body: 'Quality rules catch problems upstream, before anyone makes a decision on a wrong number.',
    evidence: 'Data quality rules in Lightup on the same lakehouse.',
    href: '/work/trusted-lakehouse-metrics',
  },
  {
    title: 'Decide who sees what once, in the model',
    body: 'Access rules belong in one place, not copied into every report.',
    evidence: 'A four-tier row-level security model for Power BI across several businesses.',
    href: '/work/multi-business-metrics',
  },
  {
    title: 'Test the grain of every model',
    body: 'Joins that fan out quietly double-count. A test that checks one row per entity catches it.',
    evidence: 'Found and fixed a double-counting join in my own pipeline, with tests that fail on the old version.',
    href: 'https://github.com/mandakani/healthcare-data-agent-poc',
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

export const now = [
  'Learning PostHog event tracking, funnel and retention metrics, and A/B test analysis',
  'Exploring text-to-SQL over a metrics layer, and how to evaluate it',
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
