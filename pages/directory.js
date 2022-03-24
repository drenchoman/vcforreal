import DirectoryLanding from '../components/DirectoryLanding'
import Categories from '../components/Categories'
import Landing from '../components/Landing'

import dummyImage1 from '../public/images/1.jpg'
import dummyImage2 from '../public/images/2.jpg'
import dummyImage3 from '../public/images/3.jpg'
import dummyImage4 from '../public/images/4.jpg'
import dummyImage5 from '../public/images/5.jpg'
import dummyImage6 from '../public/images/g1.jpg'


import thriftandvintage from '../public/images/categoryimages/thrift.jpg'
import jewel from '../public/images/categoryimages/jewel.jpg'
import sneakers from '../public/images/categoryimages/sneakers.jpg'
import upcycled from '../public/images/categoryimages/upcycled.jpg'
import opshops from '../public/images/categoryimages/opshops.jpg'


const categories = [{
  name: "Opshops",
  image: dummyImage1,
  path: "/directory/opshops"
  },
  {
  name: "Thrift",
  image: dummyImage2,
  path: "/directory/thriftandvintage"
},{
  name: "Vintage",
  image: dummyImage3,
  path: "/directory/thriftandvintage"
},{
  name: "Footwear",
  image: dummyImage4,
  path: "/directory/footwear"
},{
  name: "Jewellery",
  image: dummyImage6,
  path: "/directory/jewellery"
},
{
  name: "Upcycling",
  image: dummyImage5,
  path: "/directory/upcycling"
}]


const dummyShops = [
  { name: "The Portage Store",
    id: 51,
    region: "Auckland",
    description: "Your one stop shop for all things Vintage",
    instagram: true,
    website: true,
    trademe: false,
    facebook: false,
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
  {
    name: "Vintage Friends",
    id: 52,
    region: "Wellington",
    description: "Vintage is love, vintage is life",
    instagram: false,
    website: true,
    trademe: true,
    facebook: true,
    images: ["/images/4.jpg", "/images/3.jpg", "/images/1.jpg", "/images/2.jpg"],
  },
  {
    name: "Dunedin sneakers",
    id: 53,
    region: "Dunedin",
    description: "All the best sneakers, lets get it",
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    images: ["/images/3.jpg", "/images/1.jpg", "/images/2.jpg", "/images/4.jpg"],
  },
  { name: "The Portage Store",
    id: 54,
    region: "Auckland",
    description: "Hottest vintage shipping from Auckland to all our whanau across Aotearoa",
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
  {
    name: "Vintage Friends",
    id: 55,
    region: "Wellington",
    description: "Vintage is love, vintage is life",
    instagram: false,
    website: true,
    trademe: true,
    facebook: true,
    images: ["/images/4.jpg", "/images/3.jpg", "/images/1.jpg", "/images/2.jpg"],
  },
  {
    name: "Dunedin sneakers",
    id: 56,
    region: "Dunedin",
    description: "All the best sneakers, lets get it",
    instagram: true,
    website: false,
    images: ["/images/3.jpg", "/images/1.jpg", "/images/2.jpg", "/images/4.jpg"],
  },
  { name: "The Portage Store",
    id: 57,
    region: "Auckland",
    description: "Your one stop shop for all things Vintage",
    instagram: true,
    website: true,
    trademe: false,
    facebook: false,
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
  {
    name: "Vintage Friends",
    id: 58,
    region: "Wellington",
    description: "The best thing since sliced bread.",
    instagram: false,
    website: true,
    trademe: false,
    facebook: true,
    images: ["/images/4.jpg", "/images/3.jpg", "/images/1.jpg", "/images/2.jpg"],
  },
  {
    name: "Dunedin sneakers",
    id: 59,
    region: "Dunedin",
    description: "All the best sneakers, lets get it",
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    images: ["/images/3.jpg", "/images/1.jpg", "/images/2.jpg", "/images/4.jpg"],
  },
  { name: "The Portage Store",
    id: 60,
    region: "Auckland",
    description: "Your one stop shop for all things Vintage",
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
]



export default function Directory({ addToCart, activeHearts, updateHeartState, heartId}) {
  return (
    <>
        <DirectoryLanding categories={categories} subHeader="I'm looking for..." />
        <Categories header="THRIFT & VINTAGE" subHeader="Find your new favourite Thrift store." dummyShops={dummyShops} catImage={thriftandvintage} addToCart={addToCart} activeHearts={activeHearts} updateHeartState={updateHeartState} heartId={heartId} />

        <Categories header="FOOTWEAR" subHeader="Time for new kicks?" dummyShops={dummyShops} catImage={sneakers} />

        <Categories header="JEWELLERY" subHeader="Custom made jewellery of all varieties." dummyShops={dummyShops} catImage={jewel} />

        <Categories header="UPCYCLING" subHeader="Shop Sustainably" dummyShops={dummyShops} catImage={upcycled} />

        <Categories header="OPSHOPS" subHeader="The best Opshops in Auckland, Hamilton, Wellington, Christchurch and beyond." dummyShops={dummyShops} catImage={opshops} />

    </>
  )
}
