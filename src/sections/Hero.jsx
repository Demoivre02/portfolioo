import { headerData } from '../data/headerData'
import { socialsData } from '../data/socialsData'

const metrics = [
  { v: '2.2M+', l: 'records per pipeline run' },
  { v: '133 → 3', l: 'external API jobs per run' },
  { v: '19', l: 'partitioned sources owned' },
]

export default function Hero() {
  return (
    <header className="section hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="prompt reveal">$ whoami</div>
            <h1 className="reveal">{headerData.name}</h1>
            <div className="hero-role reveal">
              <b>{headerData.title}</b> · Lagos, Nigeria
            </div>
            <p className="hero-desc reveal">{headerData.desciption}</p>
            <div className="hero-cta reveal">
              <a className="btn btn-primary" href="#work">View work</a>
              {headerData.resumePdf && (
                <a className="btn" href={headerData.resumePdf} target="_blank" rel="noreferrer">Download résumé</a>
              )}
              {socialsData.github && (
                <a className="btn" href={socialsData.github} target="_blank" rel="noreferrer">GitHub</a>
              )}
            </div>
            <div className="metrics reveal">
              {metrics.map((m) => (
                <div className="metric" key={m.l}>
                  <b>{m.v}</b>
                  <span>{m.l}</span>
                </div>
              ))}
            </div>
          </div>
          {headerData.image && (
            <div className="hero-portrait reveal">
              <img src={headerData.image} alt={headerData.name} />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
