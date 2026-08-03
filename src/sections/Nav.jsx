const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Stack' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav({ resumePdf }) {
  return (
    <nav className="nav">
      <div className="nav-in">
        <a href="#top" className="brand">animasaun<span>.dev</span></a>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          {resumePdf && (
            <a className="btn" href={resumePdf} target="_blank" rel="noreferrer">Résumé</a>
          )}
        </div>
      </div>
    </nav>
  )
}
