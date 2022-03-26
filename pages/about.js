import Head from 'next/head'
import AboutPage from '../components/About/About'
import aboutImage from '../public/images/about.JPG'
import aboutImageEnd from '../public/images/aboutend.jpg'
import aboutImageMiddle from '../public/images/aboutmiddle.jpg'
import github from '../public/svgs/github.svg'
import DirectoryLanding from '../components/DirectoryLanding/DirectoryLanding'

import dummyImage1 from '../public/images/opshop.jpg'
import dummyImage2 from '../public/images/2.jpg'
import dummyImage3 from '../public/images/vinc.jpg'
import dummyImage4 from '../public/images/sneak.jpg'
import dummyImage5 from '../public/images/upc.jpg'
import dummyImage6 from '../public/images/jewel.jpg'


const categories = [
  {
  name: "Thrift",
  image: dummyImage2,
  path: "/directory/thriftandvintage",
  alt: "Photo by @beccamchaffie on Unslpash"
},{
  name: "Vintage",
  image: dummyImage3,
  path: "/directory/thriftandvintage",
  alt: "Photo by @Alessiac_jpg on Unslpash"
},{
  name: "Footwear",
  image: dummyImage4,
  path: "/directory/footwear",
  alt: "Photo by @mxpissioli on Unsplash",

},{
  name: "Jewellery",
  image: dummyImage6,
  path: "/directory/jewellery",
  alt: "Photo by @Joeyy_anne on Unsplash."
},
{
  name: "Upcycling",
  image: dummyImage5,
  alt: "Photo by @kat_snow on Unsplash",
  path: "/directory/upcycling"
},{
  name: "Opshops",
  image: dummyImage1,
  path: "/directory/opshops",
  alt: "Photo by @Prudenceearl on Unslpash."
  }]

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
        <AboutPage aboutImage={aboutImage} aboutImageMiddle={aboutImageMiddle} aboutImageEnd={aboutImageEnd} github={github}>
          <DirectoryLanding categories={categories} />
        </AboutPage>

    </>
  )
}
