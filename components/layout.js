import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

import Carrousel from '../containers/Carrousel'

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default ({ children, title = 'Travesia Hotel' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
      <link rel='stylesheet' type='text/css' href='/static/index.css' />
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400' rel='stylesheet' />
      <link rel='icon' type='image/png' href='static/favicon/favicon-32x32.png' sizes='32x32' />
      <link rel='icon' type='image/png' href='static/favicon/favicon-16x16.png' sizes='16x16' />
    </Head>
    <header>
      <Carrousel />
    </header>

    {children}

    <footer>{'I`m here to stay'}</footer>

    <style jsx global>{`
      body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
      }  
    `}</style>
  </div>
)
