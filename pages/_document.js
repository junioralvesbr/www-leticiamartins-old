import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />

        <meta name="google-site-verification" content="GghVFBxAikIe_2o_ejIKVulvhSwG3cI5JAaAgl4OfXM" />

        <meta name="author" content="Junior Alves" />
        <meta name="copyright" content="Junior Alves" />
        <meta name="robots" content="all" />
        <meta name="robots" content="index, follow" />
        <meta name="description"
          content="Site da Leticia Martins personal organizer. Profissional especializada em organização de ambientes residenciais e empresariais. Tudo sobre organização, mudança residencial, conforto e bem estar no seu lar. Planeje seu movel de forma funcional e com organização." />
        <meta name="keywords"
          content="Curso, organização, personal-organizer, curso-personal-organizer, organizadores, Minha casa organizada, mudança, mudança residencial, organização empresarial, organização de lojas, organização de vitrines, marcenaria inteligente, movel planejado" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#000000"></meta>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  )
}