import Head from 'next/head'
import ExploreComp from '../components/Explore/Explore'
import DirectoryLanding from '../components/DirectoryLanding/DirectoryLanding'

import dummyImage1 from '../public/images/opshop.jpg'
import dummyImage2 from '../public/images/2.jpg'
import dummyImage3 from '../public/images/vinc.jpg'
import dummyImage4 from '../public/images/sneak.jpg'
import dummyImage5 from '../public/images/upc.jpg'
import dummyImage6 from '../public/images/jewel.jpg'

import vcjacket from '../public/images/vcjacket.svg'
import vcshoes from '../public/images/vcshoes.svg'
import vcpants from '../public/images/vcpants.svg'


const categories = [
  {
  name: "Thrift",
  image: dummyImage2,
  path: "/directory/thriftandvintage",
  alt: "Photo by @beccamchaffie on Unslpash",
  classSize: "small",
  icon: vcjacket,
},{
  name: "Vintage",
  image: dummyImage3,
  path: "/directory/thriftandvintage",
  alt: "Photo by @Alessiac_jpg on Unslpash",
  classSize: "small",
  icon: vcshoes,
},{
  name: "Footwear",
  image: dummyImage4,
  path: "/directory/footwear",
  alt: "Photo by @mxpissioli on Unsplash",
  classSize: "large",
  icon: vcpants

},{
  name: "Jewellery",
  image: dummyImage6,
  path: "/directory/jewellery",
  alt: "Photo by @Joeyy_anne on Unsplash.",
  classSize: "large",
  icon: vcjacket,
},
{
  name: "Upcycling",
  image: dummyImage5,
  alt: "Photo by @kat_snow on Unsplash",
  path: "/directory/upcycling",
  classSize: "small",
  icon: vcshoes,
},{
  name: "Opshops",
  image: dummyImage1,
  path: "/directory/opshops",
  alt: "Photo by @Prudenceearl on Unslpash.",
  classSize: "large",
  icon: vcpants
  }]

export default function Explore({gImages}) {
  return (
    <>
    <Head>
    <title>Explore || Vintageclothing.co.nz</title>
    <meta name="description" content="Explore and connect with your new favourite Vintage store." />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
     <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
     <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
     <link rel="manifest" href="/site.webmanifest" />
     <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f3d2c1" />
     <meta name="theme-color" content="#f3d2c1" />
      </Head>
    <ExploreComp gImages={gImages} categories={categories} />
    <DirectoryLanding categories={categories} />
    </>
  )
}

// export async function getStaticProps() {
//   const res = await fetch("https://picsum.photos/v2/list");
//   const gImages = await res.json();
//
//   return {
//     props:{
//       gImages,
//     },
//   }
// }
