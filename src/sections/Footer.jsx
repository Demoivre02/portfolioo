import { headerData } from '../data/headerData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-in">
        <span>© {new Date().getFullYear()} {headerData.name}</span>
        <span>Built with React + Vite · Deployed on Vercel</span>
      </div>
    </footer>
  )
}
