import { projectsData } from '../data/projectsData'

const INFRA_IDS = [1, 2, 3, 4]

function Project({ p, index }) {
  const hasLinks = p.code || p.demo
  return (
    <article className="card proj reveal">
      <div className="proj-top">
        <h3>{p.projectName}</h3>
        <span className="proj-num">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <p className="proj-desc">{p.projectDesc}</p>
      <div className="proj-tags">
        {p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
      </div>
      <div className="proj-links">
        {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live ↗</a>}
        {p.code && <a href={p.code} target="_blank" rel="noreferrer">Source ↗</a>}
        {!hasLinks && <span className="none">Private / under NDA</span>}
      </div>
    </article>
  )
}

export default function Projects() {
  const infra = projectsData.filter((p) => INFRA_IDS.includes(p.id))
  const other = projectsData.filter((p) => !INFRA_IDS.includes(p.id))

  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="eyebrow reveal">Selected work</div>
        <h2 className="h2 reveal">Infrastructure & platform</h2>
        <p className="lede reveal">Systems I have designed, operated or repaired. Client and employer work is described without internal detail.</p>
        <div className="proj-list">
          {infra.map((p, i) => <Project p={p} index={i} key={p.id} />)}
        </div>

        {other.length > 0 && (
          <>
            <h2 className="h2 reveal" style={{ marginTop: 72 }}>Product & frontend</h2>
            <p className="lede reveal">Earlier application work. I shipped the systems that reliability engineering exists to protect.</p>
            <div className="proj-list">
              {other.map((p, i) => <Project p={p} index={i} key={p.id} />)}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
