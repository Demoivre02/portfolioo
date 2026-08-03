import one from '../assets/png/one (1).png'
import three from '../assets/png/three.png'
import four from '../assets/png/four.png'
import five from '../assets/png/five.jpg'
import eight from '../assets/png/eight.png'
import nine from '../assets/png/nine.png'
import ten from '../assets/png/ten.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'MailVault (Lttr) — Serverless Document Platform',
        projectDesc: 'A mail digitization platform I architected and built end to end on AWS. Users capture physical mail, Textract extracts the text, and Bedrock summarizes, categorizes and answers questions about it. The whole stack is codified in a single parameterized CloudFormation template: Cognito with Google OAuth federation, an S3 document bucket, DynamoDB single-table design and a scoped IAM policy, deployable per environment. Hardened with strict Content-Security-Policy, HSTS, and JWT verification against Cognito JWKS in edge middleware on every protected route. Abuse and cost controls run on DynamoDB atomic counters: sliding-window rate limiting at 10 login attempts per IP per 15 minutes, plus per-user daily AI quotas that hold under concurrent requests. Ships as a PWA with a React Native client designed against the same unchanged API.',
        tags: ['AWS', 'CloudFormation', 'Lambda', 'S3', 'DynamoDB', 'Cognito', 'Textract', 'Bedrock', 'Next.js', 'TypeScript', 'WebAuthn'],
        code: '',
        demo: 'https://getlttr.com',
        image: ten
    },
    {
        id: 2,
        projectName: 'High-Volume Ingestion Pipeline Re-architecture',
        projectDesc: 'Production data pipeline work at Cornerstone OnDemand, described without internal detail. The pipeline pulls from a third-party API across roughly 19 partitioned sources at 2.2M+ records per run and delivers to S3 for BI consumption. Several partitions were silently producing empty output: exports completed cleanly, returned zero rows and reported success, so nothing alerted. I proved the fault with a controlled comparison against the legacy pipeline on identical same-day data, 1,174 rows against 0, eliminated severity filters, state, time window and API concurrency one at a time, and traced it to a Unicode en dash standing in where an ASCII hyphen was expected inside a filter key sent over the wire. The local code path normalized both sides before matching so it agreed with itself, while the raw filter sent to the server matched nothing. I then re-architected extraction from per-partition filtered queries to a single partition map plus two global scoped exports, cutting external API jobs per run from roughly 133 to 3, and converted a fully materialized in-memory path to generator streaming with multipart upload to remove a multi-gigabyte out-of-memory failure mode.',
        tags: ['Python', 'AWS S3', 'boto3', 'Jenkins', 'Data Engineering', 'Root Cause Analysis', 'Streaming'],
        code: '',
        demo: '',
        image: three
    },
    {
        id: 3,
        projectName: 'Agent Gateway Identity with Microsoft Entra ID',
        projectDesc: 'Integrated Microsoft Entra ID as the OAuth2 identity provider for an Amazon Bedrock AgentCore Gateway, standing up the machine-to-machine client-credentials flow so MCP clients authenticate with short-lived JWTs instead of long-lived static credentials. The interesting part was the debugging: three distinct causes of 403 rejection produced identical symptoms, and separating them meant working through Entra app registration, application scopes and short names, required group membership, JWT audience and issuer alignment, and custom scope-claim validation on the gateway authorizer. Also closed a least-privilege gap where token retrieval failed because no identity-based policy permitted ssm:GetParameter, keeping client secrets in Parameter Store rather than in code or environment files.',
        tags: ['Microsoft Entra ID', 'OAuth2', 'OIDC', 'JWT', 'AWS Bedrock AgentCore', 'MCP', 'IAM', 'Python'],
        code: '',
        demo: '',
        image: four
    },
    {
        id: 4,
        projectName: 'AWS Cost Guardrails & Anomaly Response',
        projectDesc: 'Designed a proactive cost control system that stays silent on normal days and escalates only when spend is abnormal. An EventBridge-scheduled Lambda queries Cost Explorer against tiered daily thresholds, with DynamoDB-backed deduplication so a crossed threshold pages once rather than hourly, SNS fan-out to Slack and email, and LLM-generated cause analysis that names the likely service in plain language instead of just reporting a number. Critical-level remediation runs through Step Functions and is gated behind resource tags and human approval, with dry run as the default launch mode. AWS Budgets and Cost Anomaly Detection are wired in as independent backup signals, since billing data is not real time and a single source of truth would be a single point of failure.',
        tags: ['AWS Lambda', 'Cost Explorer', 'EventBridge', 'Step Functions', 'SNS', 'DynamoDB', 'AWS Budgets', 'Python'],
        code: '',
        demo: '',
        image: one
    },
    {
        id: 5,
        projectName: 'Calebyte Health',
        projectDesc: 'A healthcare platform connecting patients with doctors and other healthcare professionals, with support for telemedicine and online consultations.',
        tags: ['Next.js', 'TypeScript', 'CSS'],
        code: 'https://github.com/Demoivre02/stackBuildTest',
        demo: 'https://calebyte-health.vercel.app/',
        image: ten
    },
    {
        id: 6,
        projectName: 'Crypto Tracker',
        projectDesc: 'A cryptocurrency tracker for following favourite coins alongside the latest market news and updates.',
        tags: ['Next.js', 'JavaScript', 'Tailwind CSS'],
        code: 'https://github.com/Demoivre02/crypto-tracker',
        demo: 'https://crypto-tracker-azure-alpha.vercel.app/',
        image: nine
    },
    {
        id: 7,
        projectName: 'Sales Management System',
        projectDesc: 'A sales management system for tracking sales, customers and products, with reporting and analytics to support business decisions.',
        tags: ['Vite', 'React', 'JavaScript', 'Tailwind CSS', 'Firebase'],
        code: '',
        demo: 'https://my-autobiz.vercel.app/',
        image: eight
    },
    {
        id: 8,
        projectName: 'Credit Homes',
        projectDesc: 'An accommodation booking platform for hotels and short-lets, built as the customer-facing frontend.',
        tags: ['TypeScript', 'Next.js', 'Chakra UI'],
        code: 'https://github.com/Demoivre02/credithomes-customer',
        demo: 'https://credithomes-customer.vercel.app/auth/signin',
        image: five
    },
]
