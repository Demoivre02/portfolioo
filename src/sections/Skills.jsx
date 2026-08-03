import { skillsData } from '../data/skillsData'

// Group flat skillsData into meaningful buckets for display.
const GROUPS = [
  { title: 'Cloud', match: ['AWS','EC2','S3','Lambda','DynamoDB','RDS','ECS','ECR','VPC','IAM','EventBridge','Step Functions','API Gateway','CloudFront','Route 53','Auto Scaling','Cost Explorer','GCP'] },
  { title: 'Infrastructure as Code', match: ['Terraform','CloudFormation','AWS CDK','Docker'] },
  { title: 'CI/CD & Automation', match: ['Jenkins','CodePipeline','CodeBuild','CodeDeploy','GitHub Actions','Git'] },
  { title: 'Observability & Reliability', match: ['CloudWatch','AWS X-Ray','Structured Logging','Incident Response','Root Cause Analysis','Postmortems','On-call','Capacity Planning','Disaster Recovery'] },
  { title: 'Security', match: ['Least-privilege IAM','KMS','GuardDuty','CloudTrail','AWS Config','WAF','Microsoft Entra ID','OAuth2 / OIDC','JWT / JWKS','Tenable.io','SBOM'] },
  { title: 'Data & AI Platform', match: ['ETL Pipelines','Data Streaming','SQL','Tableau','Amazon Bedrock','Bedrock AgentCore','MCP','RAG','AWS Textract'] },
  { title: 'Languages & Runtime', match: ['Python','Bash','TypeScript','JavaScript','Linux','React.js','Next.js','Node.js'] },
]

export default function Skills() {
  const known = new Set(GROUPS.flatMap((g) => g.match))
  const groups = GROUPS.map((g) => ({
    title: g.title,
    items: g.match.filter((m) => skillsData.includes(m)),
  })).filter((g) => g.items.length)

  const extras = skillsData.filter((s) => !known.has(s))
  if (extras.length) groups.push({ title: 'Also', items: extras })

  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="eyebrow reveal">Stack</div>
        <h2 className="h2 reveal">What I build and run with</h2>
        <p className="lede reveal">Weighted toward what I use in production. Kubernetes and EKS are working knowledge, not yet operated at production scale.</p>
        <div className="skill-groups">
          {groups.map((g) => (
            <div className="card skill-card reveal" key={g.title}>
              <h3>{g.title}</h3>
              <div className="skill-chips">
                {g.items.map((s) => <span className="chip" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
