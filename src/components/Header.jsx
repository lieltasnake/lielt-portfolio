import { useState } from 'react'

const navigation = [
  ['Home', '/#home'],
  ['About', '/#about'],
  ['Skills', '/#skills'],
  ['Projects', '/#projects'],
  ['Experience', '/#experience'],
  ['Education', '/#education'],
  ['Contact', '/#contact'],
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${menuOpen ? 'menu-open' : ''}`}>
      <a className="brand" href="/#home" aria-label="Back to home">
        <span className="brand-mark">LA</span>
        <span className="brand-name">Lielt Asnake</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
      </nav>

      <div className="header-actions">
        <a className="button button-small button-outline header-cv" href="/cv.pdf" download="Lielt_Asnake_CV.pdf">
          Download CV <span aria-hidden="true">↗</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Close' : 'Open'} navigation</span>
          <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
        </button>
      </div>

      <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
        {navigation.map(([label, href]) => <a href={href} key={label} onClick={closeMenu}>{label}</a>)}
        <a href="/cv.pdf" download="Lielt_Asnake_CV.pdf" onClick={closeMenu}>Download CV <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  )
}

export default Header
