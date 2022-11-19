import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

// gtag google analytics
import * as gtag from '../lib/gtag'
import GoogleAnalytics from '../components/GoogleAnalytics'

import Layout from '../components/Layout'

import '../styles/globals.css'
import "swiper/css/bundle"
import '../styles/swiper.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }

  }, [router.events])

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <VercelAnalytics />
        <GoogleAnalytics />
      </Layout>
    </>
  )
}

export default MyApp
