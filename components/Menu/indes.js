import Link from 'next/link'
import { useState } from 'react';
import { slide as Hamburger } from 'react-burger-menu'

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  const isMenuOpen = (state) => {
    setMenuOpen(state.isOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className='fixed z-50 bg-primary-color'>
      <Hamburger right width={280} onStateChange={isMenuOpen} isOpen={menuOpen}>
        <Link href="/" className="menu-item" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/aboutme" className="menu-item" onClick={closeMenu}>
          Sobre Mim
        </Link>
        <a href="https://curso.leticiamartins.com.br" className="menu-item">
          Curso
        </a>
        <a href="#contact" className="menu-item" onClick={closeMenu}>
          Contato
        </a>
      </Hamburger>
    </nav >
  )
}