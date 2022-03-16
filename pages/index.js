import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import styles from '../styles/Home.module.css'
import logo from '../public/logos/logo-white.svg'
import heart from '../public/images/heart3.svg'
import girl from '../public/images/girl.jpg'
import tupac from '../public/images/tupac.png'

import insta from '../public/svgs/insta.svg'
import pc from '../public/svgs/pc.svg'
import vcpants from '../public/images/pants-i.svg'
import vcjacket from '../public/images/jacket-i.svg'
import vcshoes from '../public/images/shoes-i.svg'
import vccolourshirt from '../public/images/colourshirt-i.svg'

const links = [ "About", "Explore", "Discover"
]

const categories = [ {
  name: "Opshops",
  image: vcpants,
  path: "/directory/opshops"
},
{
  name: "Thrift",
  image: vcjacket,
  path: "/directory/thriftandvintage"
},
{
  name: "Vintage",
  image: vccolourshirt,
  path: "/directory/thriftandvintage"
},
{
  name: "Footwear",
  image: vcshoes,
  path: "/directory/footwear"
}]

const shops =
  { name: "Portage Store",
    region: "Auckland",
    description: "Your one stop shop for all things Vintage",
    instagram: true,
    website: true,
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],

  }


export default function Home() {
return (
<>
  <Navbar logo={logo} links={links} heart={heart} />
 <main className="lockup">
 <Landing landingImage={girl} header="VINTAGE CLOTHING" subHeader="And so much more" />
 <SectionOne text="Connecting you to your local" categories={categories} />
 <SectionTwo tupac={tupac} text="Find your new favourite store" />
 <SectionThree text="Or add your own!" heart={heart} shops={shops} insta={insta} pc={pc} />
</main>
</>
)
}
