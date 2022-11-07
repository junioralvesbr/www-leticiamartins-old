
import { useState, useEffect } from 'react'
import Footer from '../Footer'
import WhatssApp from '../WhatsApp'

export default function Layout({ children }) {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollTop(window.scrollY)
    })
  }, [])

  return (
    <>
      {children}
      <footer>
        <Footer />
      </footer>
      {scrollTop >= 50 && <WhatssApp />}
    </>
  )
}