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
import opshops from '../../public/images/categoryimages/opshops.jpg'

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
}]


const dummyShops = [
  { name: "The Portage Store",
    region: "Auckland",
    id: 21,
    description: "Your one stop shop for all things Vintage",
    instagram: true,
    website: true,
    trademe: false,
    facebook: false,
    tags:["opensaturday",],
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
  {
    name: "Vintage Friends",
    id: 22,
    region: "Wellington",
    description: "Vintage is love, vintage is life",
    instagram: false,
    website: true,
    trademe: true,
    facebook: true,
    tags:["opensaturday",],
    images: ["/images/4.jpg", "/images/3.jpg", "/images/1.jpg", "/images/2.jpg"],
  },
  {
    name: "Dunedin sneakers",
    id: 23,
    region: "Dunedin",
    description: "All the best sneakers, lets get it",
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    tags:["opensaturday",],
    images: ["/images/3.jpg", "/images/1.jpg", "/images/2.jpg", "/images/4.jpg"],
  },
  { name: "The Portage Store",
    id: 24,
    region: "Auckland",
    description: "The best thing since sliced bread. Hottest vintage shipping from Auckland to all our whanau across Aotearoa",
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    tags:["opensaturday",],
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
  {
    name: "Vintage Friends",
    id: 25,
    region: "Wellington",
    description: "Vintage is love, vintage is life",
    instagram: false,
    website: true,
    trademe: true,
    facebook: true,
    tags:["opensunday",],
    images: ["/images/4.jpg", "/images/3.jpg", "/images/1.jpg", "/images/2.jpg"],
  },
  {
    name: "Dunedin sneakers",
    id: 26,
    region: "Dunedin",
    description: "All the best sneakers, lets get it",
    instagram: true,
    website: false,
    tags:["opensunday",],
    images: ["/images/3.jpg", "/images/1.jpg", "/images/2.jpg", "/images/4.jpg"],
  },
  { name: "The Portage Store",
    id: 27,
    region: "Auckland",
    description: "Your one stop shop for all things Vintage",
    instagram: true,
    website: true,
    trademe: false,
    facebook: false,
    tags:["opensunday",],
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
  {
    name: "Vintage Friends",
    id: 28,
    region: "Wellington",
    description: "Vintage is love, vintage is life",
    instagram: false,
    website: true,
    trademe: false,
    facebook: true,
    tags:["openweekends",],
    images: ["/images/4.jpg", "/images/3.jpg", "/images/1.jpg", "/images/2.jpg"],
  },
  {
    name: "Dunedin sneakers",
    id: 29,
    region: "Dunedin",
    description: "All the best sneakers, lets get it",
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    images: ["/images/3.jpg", "/images/1.jpg", "/images/2.jpg", "/images/4.jpg"],
  },
  { name: "The Portage Store",
    id: 30,
    region: "Auckland",
    description: "Your one stop shop for all things Vintage",
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    tags:["openweekends",],
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
]



export default function Directory({addToCart, activeHearts, updateHeartState, heartId, cartItems, removeItem, cartEmpty}) {
  return (
    <>
    <Head>
    <title>Opshops || Vintageclothing.co.nz</title>
    <meta name="description" content="Opshopping? Know where you are going, use our directory to find the best opshops in Auckland, Hamilton, Wellington, Christchurch, Dunedin and beyond." />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
     <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
     <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
     <link rel="manifest" href="/site.webmanifest" />
     <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f3d2c1" />
     <meta name="theme-color" content="#f3d2c1" />
      </Head>
        <Categories header="OPSHOPS" subHeader="The best Opshops in Auckland, Hamilton, Wellington, Christchurch and beyond." addToCart={addToCart} activeHearts={activeHearts} updateHeartState={updateHeartState} heartId={heartId} catImage={opshops} dummyShops={dummyShops}  />
        <DirectoryLanding categories={categories} subHeader="I want more..."  />
    </>
  )
}
