import Link from 'next/link'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400' rel='stylesheet' />
    </Head>
    <header>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>{' '}
        |
        <Link href='/about'>
          <a>About</a>
        </Link>{' '}
        |
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
      </nav>
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
