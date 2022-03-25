import DirectoryLanding from '../../components/DirectoryLanding'
import Categories from '../../components/Categories'
import Landing from '../../components/Landing'

import dummyImage1 from '../../public/images/1.jpg'
import dummyImage2 from '../../public/images/2.jpg'
import dummyImage3 from '../../public/images/3.jpg'
import dummyImage4 from '../../public/images/4.jpg'
import dummyImage5 from '../../public/images/5.jpg'
import dummyImage6 from '../../public/images/g1.jpg'


import thriftandvintage from '../../public/images/categoryimages/thrift.jpg'
import jewel from '../../public/images/categoryimages/jewel.jpg'
import sneakers from '../../public/images/categoryimages/sneakers.jpg'
import upcycled from '../../public/images/categoryimages/upcycled.jpg'


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
        <Categories header="UPCYCLING" subHeader="Shop Sustainably" addToCart={addToCart} activeHearts={activeHearts} updateHeartState={updateHeartState} heartId={heartId} catImage={upcycled} dummyShops={dummyShops}  />
        <DirectoryLanding categories={categories} subHeader="I want more..." />
    </>
  )
}
