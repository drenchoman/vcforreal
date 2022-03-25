import Head from 'next/head'
import AboutPage from '../components/About/About'
import aboutImage from '../public/images/about.JPG'

export default function About(props) {
  return (
    <>
    <Head>
    <title>About 🤔 || Vintageclothing.co.nz</title>
    <meta name="description" content="Our story, all about Vintageclothing.co.nz" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
     <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
     <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
     <link rel="manifest" href="/site.webmanifest" />
     <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f3d2c1" />
     <meta name="theme-color" content="#f3d2c1" />
      </Head>
        <AboutPage aboutImage={aboutImage} />
    </>
  )
}
