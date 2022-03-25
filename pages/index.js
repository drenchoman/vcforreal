import Head from 'next/head'
import Image from 'next/image'
import Landing from '../components/Landing'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'

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



export default function Home({cartItems, removeItem, cartEmpty}) {
return (
<>
<Head>
<title>Find your new favourite store || Vintageclothing.co.nz</title>
<meta name="description" content="Connecting you to the best Vintage, Thrift, Footwear, Upcycling and Opshops in NZ" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
 <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
 <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
 <link rel="manifest" href="/site.webmanifest" />
 <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f3d2c1" />
 <meta name="theme-color" content="#f3d2c1" />
  </Head>
 <Landing landingImage={girl} header="VINTAGE CLOTHING" subHeader="And so much more" />
 <SectionOne text="Connecting you to your local" categories={categories} />
 <SectionTwo tupac={tupac} text="Find your new favourite store" />
 <SectionThree text="Or add your own store!" para="Customise your own card and be discovered!" shops={shops} insta={insta} pc={pc} arrow={arrowdown} />
 <SectionFour thriftPic1={thrift1} thriftPic2={thrift2} />
</>
)
}
