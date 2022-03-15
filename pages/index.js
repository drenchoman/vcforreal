import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import SectionOne from '../components/SectionOne'
import styles from '../styles/Home.module.css'
import logo from '../public/logos/logo-white.svg'
import heart from '../public/images/heart3.svg'
import girl from '../public/images/girl.jpg'

const links = [ "About", "Explore", "Discover"
]

export default function Home() {
return (
<>
  <Navbar logo={logo} links={links} heart={heart} />
 <main className="lockup">
 <Landing landingImage={girl} header="VINTAGE CLOTHING" subHeader="And so much more" />
 <SectionOne text="Connecting you to the best" />

</main>
</>
)
}
