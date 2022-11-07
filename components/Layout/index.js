
import Footer from '../Footer'
import WhatssApp from '../WhatsApp'

export default function Layout({ children }) {
  return (
    <>
      {children}
      <footer>
        <Footer />
      </footer>

      {/* <WhatssApp /> */}
    </>
  )
}