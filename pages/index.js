import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import logo from '../public/logos/logo-white.svg'
import heart from '../public/images/heart3.svg'
import girl from '../public/images/girl.jpg'
import tupac from '../public/images/tupac.png'
import arrowdown from '../public/svgs/arrowdown.svg'

import insta from '../public/svgs/insta.svg'
import pc from '../public/svgs/pc.svg'
import vcpants from '../public/images/pants-i.svg'
import vcjacket from '../public/images/jacket-i.svg'
import vcshoes from '../public/images/shoes-i.svg'
import vccolourshirt from '../public/images/colourshirt-i.svg'
import thrift2 from '../public/images/thrift2.jpg'
import thrift1 from '../public/images/2.jpg'

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
  { name: "The Portage Store",
    region: "Auckland",
    description: "Your one stop shop for all things Vintage",
    instagram: true,
    website: true,
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],

  }

  const testData = [
    { name: "Portage Store",
      description: "An amazing store",
      image: "/images/1.jpg"
    },
      {
        name: "Good ole Vintage",
        description: "Really good, and old.",
        image: "/images/2.jpg"
      },
      {
        name: "Super Vintage Friends",
        description: "The most super vintage",
        image: "/images/3.jpg"
      },
      {
        name: "Churchi",
        description: "What even is a Churchi?",
        image: "/images/4.jpg",
      }
  ]


export default function Home() {
return (
<>
  <Navbar logo={logo} logoWidth={100} logoHeight={100} links={links} heart={heart} />
 <main className="lockup">
 <Landing landingImage={girl} header="VINTAGE CLOTHING" subHeader="And so much more" />
 <SectionOne text="Connecting you to your local" categories={categories} />
 <SectionTwo tupac={tupac} text="Find your new favourite store" />
 <SectionThree text="Or add your own store!" para="Customise your own card and be discovered!" heart={heart} shops={shops} insta={insta} pc={pc} arrow={arrowdown} />
 <SectionFour thriftPic1={thrift1} thriftPic2={thrift2} />
 <Footer links={links} logo={logo} logoWidth={150} logoHeight={150} />

</main>
</>
)
}
