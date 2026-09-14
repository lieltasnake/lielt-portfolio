import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetails from './components/ProjectDetails'
import { projects } from './data/portfolioData'
import './App.css'

function App() {
  const [projectSlug, setProjectSlug] = useState(() => getProjectSlug(window.location.pathname))

  useEffect(() => {
    const handlePopState = () => setProjectSlug(getProjectSlug(window.location.pathname))
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const openProject = (event, slug) => {
    event.preventDefault()
    window.history.pushState({}, '', `/projects/${slug}`)
    setProjectSlug(slug)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeProject = (event) => {
    event.preventDefault()
    window.history.pushState({}, '', '/#projects')
    setProjectSlug(null)
    window.requestAnimationFrame(() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }))
  }

  const project = projects.find((item) => item.slug === projectSlug)

  return (
    <div className="app-shell">
      <Header />
      {project ? <ProjectDetails project={project} onBack={closeProject} /> : <main>
        <Hero />
        <About />
        <Skills />
        <Projects onOpenProject={openProject} />
        <Experience />
        <Education />
        <Contact />
      </main>}
      <Footer />
    </div>
  )
}

function getProjectSlug(pathname) {
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/)
  return match ? match[1] : null
}

export default App
