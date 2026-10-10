import { useEffect, useState } from 'react'
import AOS from 'aos'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import EducationSkills from './components/EducationSkills'
import Certificates from './components/Certificates'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DarkModeToggle from './components/DarkModeToggle'

// Guard so AOS.init runs once even under React StrictMode double-invocation (dev)
let aosInitialized = false

export default function App() {
  const [dark, setDark] = useState(false)

  // Initialize scroll-reveal animations (replaces AOS.init from main.js)
  useEffect(() => {
    if (aosInitialized) return
    aosInitialized = true
    AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' })
  }, [])

  // Keep the <body> dark-mode class in sync with state
  useEffect(() => {
    document.body.classList.toggle('dark-mode', dark)
  }, [dark])

  // Smooth scrolling for in-page anchor links (replaces the delegated handler in main.js)
  useEffect(() => {
    const onClick = (e) => {
      const target = e.target
      if (!(target instanceof Element)) return
      const anchor = target.closest('a[href^="#"]')
      if (!anchor) return
      const targetId = anchor.getAttribute('href')
      if (!targetId || targetId === '#') return
      const targetElement = document.querySelector(targetId)
      if (!targetElement) return
      e.preventDefault()
      const offset = targetElement.offsetTop - 80
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <EducationSkills />
        <Certificates />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <DarkModeToggle dark={dark} onToggle={() => setDark((d) => !d)} />
    </>
  )
}
