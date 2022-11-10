export default function NavBar() {
  return (
    <nav className="navbar bg-base-100 fixed z-50">
      <div className="flex-1">
        <a
          href="/"
          className="btn btn-ghost normal-case text-xl">
          Leticia Martins
        </a>
      </div>

      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="/aboutme">Sobre Mim</a>
          </li>
          <li tabIndex={0}>
            <a>
              Serviços
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li><a href="/residencial">Organização Residencial</a></li>
              <li><a href="/posmudanca">Pós Mudança</a></li>
              <li><a href="/comercial">Organização Comercial</a></li>
              <li><a href="/#marcenaria">Marcenaria Inteligente</a></li>
            </ul>
          </li>
          <li><a href="https://curso.leticiamartins.com.br">Curso</a></li>
          <li><a href="#contact">Contatos</a></li>
        </ul>
      </div>
    </nav>
  )
}

