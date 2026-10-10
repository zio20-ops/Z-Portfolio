import { useEffect, useState } from 'react'
import { navLinks } from '../data/nav'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'header-scrolled' : ''}>
      <div className="container header-inner">
        <nav>
          <a href="#home" className="logo">
            <img src="/Z logo.png" alt="Ziad logo" />
          </a>
          <button
            className="nav-toggle"
            id="navToggle"
            aria-label="Toggle navigation"
            onClick={() => setOpen((o) => !o)}
          >
            <i className={open ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
          <ul className={open ? 'nav-links open' : 'nav-links'}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
