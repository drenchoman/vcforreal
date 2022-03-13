import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import logo from '../public/logos/logo-white.svg'
import heart from '../public/images/heart3.svg'

const links = [ "About", "Explore", "Discover"
]

export default function Home() {
return (
<>
  <Navbar logo={logo} links={links} heart={heart} />
 <main className="lockup">

  <h1>Vintage Clothing </h1>

  <h2>And so much more </h2>

  <p> Explore over 100+ stores and find your new favourite store </p>

</main>
</>
)
}
