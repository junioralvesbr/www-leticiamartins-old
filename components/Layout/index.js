
import { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import WhatssApp from '../WhatsApp'

export default function Layout({ children }) {
  const [scrollTop, setScrollTop] = useState(0)

  // show whatsapp icon
  useEffect(() => {
    window.addEventListener('scroll',
      () => setScrollTop(window.scrollY),
      { passive: true }
    )
  }, [])

  return (
    <>
      <NavBar />
      {children}
      <footer>
        <Footer />
      </footer>
      {scrollTop >= 50 && <WhatssApp />}
    </>
  )
}