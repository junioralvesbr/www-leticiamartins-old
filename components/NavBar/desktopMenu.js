import Link from 'next/link'

export default function DesktopMenu({ menu }) {
  return (
    <nav className="navbar bg-base-100 fixed hidden z-50 sm:px-6 lg:flex">
      <div className="flex-1">
        <Link
          href={menu.inicio}
          className="normal-case text-4xl font-Autography hover:text-fifth-color">
          Leticia Martins
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 uppercase text-sm">
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
            <a href={menu.curso.path} rel="noopener noreferrer" target="_blank">
              {menu.curso.name}
            </a>
          </li>

          <li>
            <Link href={menu.contact.path}>
              {menu.contact.name}
            </Link>
          </li>

        </ul>
      </div>

    </nav>
  )
}