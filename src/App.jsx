import Nav from './sections/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Credentials from './sections/Credentials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import useReveal from './sections/useReveal'
import { headerData } from './data/headerData'

export default function App() {
  useReveal()
  return (
    <>
      <Nav resumePdf={headerData.resumePdf} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
