import DirectoryLanding from '../../components/DirectoryLanding'
import Categories from '../../components/Categories'
import Landing from '../../components/Landing'
import Head from 'next/head'

import dummyImage1 from '../../public/images/opshop.jpg'
import dummyImage2 from '../../public/images/2.jpg'
import dummyImage3 from '../../public/images/vinc.jpg'
import dummyImage4 from '../../public/images/sneak.jpg'
import dummyImage5 from '../../public/images/upc.jpg'
import dummyImage6 from '../../public/images/jewel.jpg'


import thriftandvintage from '../../public/images/categoryimages/thrift.jpg'
import jewel from '../../public/images/categoryimages/jewel.jpg'
import sneakers from '../../public/images/categoryimages/sneakers.jpg'
import upcycled from '../../public/images/categoryimages/upcycled.jpg'


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
},{
  name: "Opshops",
  image: dummyImage1,
  path: "/directory/opshops",
  alt: "Photo by @Prudenceearl on Unslpash."
  }
]


const dummyShops = [
  { name: "The Portage Store",
    id: 41,
    region: "Auckland",
    description: "Your one stop shop for all things Vintage",
    instagram: true,
    website: true,
    trademe: false,
    facebook: false,
    tags:["madeinnz", "unisex"],
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
  {
    name: "Vintage Friends",
    id: 42,
    region: "Wellington",
    description: "Vintage is love, vintage is life",
    instagram: false,
    website: true,
    trademe: true,
    facebook: true,
    tags:["madeinnz", "unisex"],
    images: ["/images/4.jpg", "/images/3.jpg", "/images/1.jpg", "/images/2.jpg"],
  },
  {
    name: "Dunedin sneakers",
    id: 43,
    region: "Dunedin",
    description: "All the best sneakers, lets get it",
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    tags:["madeinnz", "unisex"],
    images: ["/images/3.jpg", "/images/1.jpg", "/images/2.jpg", "/images/4.jpg"],
  },
  { name: "The Portage Store",
    id: 44,
    region: "Auckland",
    description: "The best thing since sliced bread. Hottest vintage shipping from Auckland to all our whanau across Aotearoa",
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    tags:["madeinnz", "unisex"],
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
  {
    name: "Vintage Friends",
    id: 45,
    region: "Wellington",
    description: "Vintage is love, vintage is life",
    instagram: false,
    website: true,
    trademe: true,
    facebook: true,
    tags:["alterations", "customsizes"],
    images: ["/images/4.jpg", "/images/3.jpg", "/images/1.jpg", "/images/2.jpg"],
  },
  {
    name: "Dunedin sneakers",
    id: 46,
    region: "Dunedin",
    description: "All the best sneakers, lets get it",
    instagram: true,
    website: false,
    tags:["alterations", "customsizes"],
    images: ["/images/3.jpg", "/images/1.jpg", "/images/2.jpg", "/images/4.jpg"],
  },
  { name: "The Portage Store",
    id: 47,
    region: "Auckland",
    description: "Your one stop shop for all things Vintage",
    instagram: true,
    website: true,
    trademe: false,
    facebook: false,
    tags:["alterations", "customsizes"],
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
  {
    name: "Vintage Friends",
    id: 48,
    region: "Wellington",
    description: "Vintage is love, vintage is life",
    instagram: false,
    website: true,
    trademe: false,
    facebook: true,
    tags:["alterations", "customsizes"],
    images: ["/images/4.jpg", "/images/3.jpg", "/images/1.jpg", "/images/2.jpg"],
  },
  {
    name: "Dunedin sneakers",
    id: 49,
    region: "Dunedin",
    description: "All the best sneakers, lets get it",
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    tags:["inclusivesizes"],
    images: ["/images/3.jpg", "/images/1.jpg", "/images/2.jpg", "/images/4.jpg"],
  },
  { name: "The Portage Store",
    id: 50,
    region: "Auckland",
    description: "Your one stop shop for all things Vintage",
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    tags:["inclusivesizes"],
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
]



export default function Directory({addToCart, activeHearts, updateHeartState, heartId, cartItems, removeItem, cartEmpty}) {
  return (
    <>
    <Head>
    <title>Upcycling || Vintageclothing.co.nz</title>
    <meta name="description" content="Shop Sustainably. Connecting you to the best Upcycled stores in New Zealand" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
     <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
     <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
     <link rel="manifest" href="/site.webmanifest" />
     <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f3d2c1" />
     <meta name="theme-color" content="#f3d2c1" />
      </Head>
        <Categories header="UPCYCLING" subHeader="Shop Sustainably" addToCart={addToCart} activeHearts={activeHearts} updateHeartState={updateHeartState} heartId={heartId} catImage={upcycled} dummyShops={dummyShops}  />
        <DirectoryLanding categories={categories} subHeader="I want more..." />
    </>
  )
}
