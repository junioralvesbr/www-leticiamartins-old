import Link from 'next/link'
import { useState } from 'react';
import { slide as Hamburger } from 'react-burger-menu'

export default function MobileMenu({ menu }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const isMenuOpen = (state) => {
    setMenuOpen(state.isOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className='fixed z-50 bg-primary-color w-screen py-3 px-4 lg:hidden'>

      <Link
        href={menu.inicio.path}
        className='font-Autography text-4xl hover:text-fifth-color cursor-pointer sm:px-4'
      >
        {menu.inicio.name}
      </Link>

      <Hamburger right width={280}
        onStateChange={isMenuOpen}
        isOpen={menuOpen}
        customBurgerIcon={<img src="/images/hamburger-icon.svg" />}>

        <Link href={menu.home.path} className="hover:text-fifth-color text-lg uppercase" onClick={closeMenu}>
          {menu.home.name}
        </Link>

        <Link href={menu.about.path} className="hover:text-fifth-color text-lg uppercase" onClick={closeMenu}>
          {menu.about.name}
        </Link>

        <div tabIndex={0} className="menu menu-compact dropdown-content text-lg uppercase -translate-x-4">
          <div className="collapse" tabIndex={0}>

            <input type="checkbox" />

            <div className="collapse-title text-lg font-medium flex items-center justify-between hover:text-fifth-color">
              Serviços
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </div>

            <ul className="collapse-content">
              {menu.services.map((service, index) => (
                <li tabIndex={0} className="hover:text-fifth-color" onClick={closeMenu} key={index}>
                  <Link href={service.path}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a href={menu.curso.path}
          className="hover:text-fifth-color text-lg uppercase"
          rel="noopener noreferrer"
          target="_blank"
        >
          {menu.curso.name}
        </a>

        <Link href={menu.contact.path} className="hover:text-fifth-color text-lg uppercase" onClick={closeMenu}>
          {menu.contact.name}
        </Link>

      </Hamburger>

    </div>
  )
}