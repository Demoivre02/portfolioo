import { experienceData } from '../data/experienceData'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="eyebrow reveal">Experience</div>
        <h2 className="h2 reveal">Where I have worked</h2>
        <div className="timeline">
          {experienceData.map((e) => {
            const current = /present/i.test(e.endYear || '')
            return (
              <div className={`job reveal${current ? ' now' : ''}`} key={e.id}>
                <div className="job-top">
                  <div>
                    <h3>{e.jobtitle}</h3>
                    <div className="co">{e.company}</div>
                  </div>
                  <div className="when">{e.startYear} — {e.endYear}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
