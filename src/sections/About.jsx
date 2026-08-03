import { aboutData } from '../data/aboutData'
import { contactsData } from '../data/contactsData'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="eyebrow reveal">About</div>
        <h2 className="h2 reveal">{aboutData.title}</h2>
        <div className="about-grid" style={{ marginTop: 26 }}>
          <p className="reveal">{aboutData.description1}</p>
          <dl className="about-facts reveal">
            <div className="fact"><dt>Role</dt><dd>SRE / DevSecOps</dd></div>
            <div className="fact"><dt>Based</dt><dd>{contactsData.address}</dd></div>
            <div className="fact"><dt>Cloud</dt><dd>AWS (certified)</dd></div>
            <div className="fact"><dt>IaC</dt><dd>Terraform · CloudFormation</dd></div>
            <div className="fact"><dt>Languages</dt><dd>Python · Bash · TypeScript</dd></div>
            <div className="fact"><dt>Availability</dt><dd>Remote or hybrid</dd></div>
          </dl>
        </div>
      </div>
    </section>
  )
}
