import DesktopMenu from './desktopMenu'
import MobileMenu from './mobileMenu'

const menu = {
  inicio: {
    name: 'Leticia Martins',
    path: '#inicio'
  },
  home: {
    name: 'Início',
    path: '/'
  },
  about: {
    name: 'Sobre Mim',
    path: '/sobremim'
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
    path: '#contact'
  },
}

export default function NavBar() {
  return (
    <>
      <MobileMenu menu={menu} />
      <DesktopMenu menu={menu} />
    </>
  )
}