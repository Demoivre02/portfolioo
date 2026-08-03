import { achievementData } from '../data/achievementData'
import { educationData } from '../data/educationData'
import { servicesData } from '../data/servicesData'

export default function Credentials() {
  return (
    <section className="section" id="credentials">
      <div className="wrap">
        <div className="eyebrow reveal">Credentials</div>
        <h2 className="h2 reveal">Certifications & education</h2>
        {achievementData.bio && <p className="lede reveal">{achievementData.bio}</p>}

        <div className="cert-grid">
          {achievementData.achievements.map((a) => (
            <div className="card cert reveal" key={a.id}>
              <div className="cert-ico">AWS</div>
              <h3>{a.title}</h3>
              <p>{a.details}</p>
              {a.field && <span className="field">{a.field}</span>}
            </div>
          ))}
        </div>

        <div className="edu-list">
          {educationData.map((e) => (
            <div className="card edu reveal" key={e.id}>
              <div>
                <h3>{e.course}</h3>
                <div className="inst">{e.institution}</div>
              </div>
              <div className="yr">{[e.startYear, e.endYear].filter(Boolean).join(' — ')}</div>
            </div>
          ))}
        </div>

        {servicesData.length > 0 && (
          <>
            <h2 className="h2 reveal" style={{ marginTop: 72 }}>What I can take on</h2>
            <div className="svc-grid">
              {servicesData.map((s) => (
                <div className="card svc reveal" key={s.id}>
                  <i>▹</i>{s.title}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
