import { useState } from 'react'
import Link from 'next/link'

const menu = {
  inicio: '#inicio',
  home: {
    name: 'home',
    path: '/'
  },
  about: {
    name: 'Sobre mim',
    path: '/aboutme'
  },
  services: [
    {

      name: 'Organização Residencial',
      path: '/residencial'

    },
    {
      name: 'Pós Mudança',
      path: '/posmudanca'

    },
    {
      name: 'Organização Comercial',
      path: '/comercial'

    },
    {
      name: 'Marcenaria Inteligente',
      path: '/#marcenaria'

    },
  ],
  curso: {
    name: 'curso',
    path: 'https://curso.leticiamartins.com.br'
  },
  contact: {
    name: 'Contato',
    path: '/#contact'
  },
}

export default function NavBar() {
  return (
    <nav className="navbar bg-base-100 fixed z-50 sm:px-6">
      <MobileMenu />

      <div className="flex-1">
        <Link
          href={menu.inicio}
          className="normal-case text-3xl font-Autography hover:text-fifth-color">
          Leticia Martins
        </Link>
      </div>

      <DesktopMenu />
    </nav>
  )
}

const MobileMenu = () => {

  return (
    <div className="dropdown lg:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </label>

      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-base-100 w-screen uppercase">
        <li>
          <Link href={menu.home.path}>
            {menu.home.name}
          </Link>
        </li>

        <li>
          <Link href={menu.about.path}>
            {menu.about.name}
          </Link>
        </li>

        <div className="collapse" tabIndex={0}>
          <input type="checkbox" />
          <div className="collapse-title text-base font-medium flex items-center justify-between">
            Serviços
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
          </div>

          <ul className="collapse-content">
            {menu.services.map((service, index) => (
              <li tabIndex={0} key={index}>
                <Link href={service.path} legacyBehavior>
                  {service.name}
                </Link>
              </li>
            )
            )}
          </ul>
        </div>

        <li>
          <a href="https://curso.leticiamartins.com.br">Curso</a>
        </li>

        <li>
          <Link href={menu.contact.path}>
            {menu.contact.name}
          </Link>
        </li>

      </ul >
    </div >
  )
}

const DesktopMenu = () => {
  return (
    <div className="flex-none hidden lg:block">
      <ul className="menu menu-horizontal p-0 uppercase">
        <li>
          <Link href={menu.home.path}>
            {menu.home.name}
          </Link>
        </li>

        <li>
          <Link href={menu.about.path}>
            {menu.about.name}
          </Link>
        </li>

        <li tabIndex={0}>
          <a>
            Serviços
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
          </a>

          <ul className="p-2 bg-base-100">
            {menu.services.map((service, index) => (
              <li tabIndex={0} key={index}>
                <Link href={service.path}>
                  {service.name}
                </Link>
              </li>
            )
            )}
          </ul>
        </li>

        <li>
          <a href="https://curso.leticiamartins.com.br">Curso</a>
        </li>

        <li>
          <Link href={menu.contact.path}>
            {menu.contact.name}
          </Link>
        </li>

      </ul>
    </div>
  )
}