import Image from 'next/image'
import Navbar from '../../components/Navbar'
import DirectoryLanding from '../../components/DirectoryLanding'
import Categories from '../../components/Categories'
import Footer from '../../components/Footer'
import Landing from '../../components/Landing'
import styles from '../../styles/Home.module.css'

import dummyImage1 from '../../public/images/1.jpg'
import dummyImage2 from '../../public/images/2.jpg'
import dummyImage3 from '../../public/images/3.jpg'
import dummyImage4 from '../../public/images/4.jpg'
import dummyImage5 from '../../public/images/5.jpg'
import dummyImage6 from '../../public/images/g1.jpg'

import logo from '../../public/logos/logo-white.svg'
import heart from '../../public/images/heart3.svg'


import thriftandvintage from '../../public/images/categoryimages/thrift.jpg'
import jewel from '../../public/images/categoryimages/jewel.jpg'
import sneakers from '../../public/images/categoryimages/sneakers.jpg'
import upcycled from '../../public/images/categoryimages/upcycled.jpg'

const links = [ {
  name: "About",
  path: "/about",
},
{
  name: "Explore",
  path: "/explore",
},
{
  name: "Directory",
  path: "/directory",
} ]

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
    region: "Dunedin",
    description: "All the best sneakers, lets get it",
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    images: ["/images/3.jpg", "/images/1.jpg", "/images/2.jpg", "/images/4.jpg"],
  },
  { name: "The Portage Store",
    region: "Auckland",
    description: "The best thing since sliced bread. Hottest vintage shipping from Auckland to all our whanau across Aotearoa",
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
  {
    name: "Vintage Friends",
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
    region: "Dunedin",
    description: "All the best sneakers, lets get it",
    instagram: true,
    website: false,
    images: ["/images/3.jpg", "/images/1.jpg", "/images/2.jpg", "/images/4.jpg"],
  },
  { name: "The Portage Store",
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
    region: "Wellington",
    description: "Vintage is love, vintage is life",
    instagram: false,
    website: true,
    trademe: false,
    facebook: true,
    images: ["/images/4.jpg", "/images/3.jpg", "/images/1.jpg", "/images/2.jpg"],
  },
  {
    name: "Dunedin sneakers",
    region: "Dunedin",
    description: "All the best sneakers, lets get it",
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    images: ["/images/3.jpg", "/images/1.jpg", "/images/2.jpg", "/images/4.jpg"],
  },
  { name: "The Portage Store",
    region: "Auckland",
    description: "Your one stop shop for all things Vintage",
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
  {
    name: "Vintage Friends",
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
    region: "Dunedin",
    description: "All the best sneakers, lets get it",
    instagram: true,
    website: false,
    trademe: false,
    facebook: false,
    images: ["/images/3.jpg", "/images/1.jpg", "/images/2.jpg", "/images/4.jpg"],
  }
]



export default function Directory() {
  return (
    <>
      <Navbar logo={logo} logoWidth={100} logoHeight={100} links={links} heart={heart} />
      <main className="lockup">
        <Categories header="Footwear" subHeader="Time for new kicks?" dummyShops={dummyShops} catImage={sneakers} />
        <DirectoryLanding categories={categories} subHeader="I want more..." />
        <Footer links={links} logo={logo} logoWidth={150} logoHeight={150} />
        </main>
    </>
  )
}
