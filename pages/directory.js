import DirectoryLanding from '../components/DirectoryLanding'
import Categories from '../components/Categories'
import Landing from '../components/Landing'
import Head from 'next/head'

import dummyImage1 from '../public/images/opshop.jpg'
import dummyImage2 from '../public/images/2.jpg'
import dummyImage3 from '../public/images/vinc.jpg'
import dummyImage4 from '../public/images/sneak.jpg'
import dummyImage5 from '../public/images/upc.jpg'
import dummyImage6 from '../public/images/jewel.jpg'

import thriftandvintage from '../public/images/categoryimages/thrift.jpg'
import jewel from '../public/images/categoryimages/jewel.jpg'
import sneakers from '../public/images/categoryimages/sneakers.jpg'
import upcycled from '../public/images/categoryimages/upcycled.jpg'
import opshops from '../public/images/categoryimages/opshops.jpg'

const categories = [
  {
    name: 'Thrift',
    image: dummyImage2,
    path: '/directory/thriftandvintage',
    alt: 'Photo by @beccamchaffie on Unslpash',
  },
  {
    name: 'Vintage',
    image: dummyImage3,
    path: '/directory/thriftandvintage',
    alt: 'Photo by @Alessiac_jpg on Unslpash',
  },
  {
    name: 'Footwear',
    image: dummyImage4,
    path: '/directory/footwear',
    alt: 'Photo by @mxpissioli on Unsplash',
  },
  {
    name: 'Jewellery',
    image: dummyImage6,
    path: '/directory/jewellery',
    alt: 'Photo by @Joeyy_anne on Unsplash.',
  },
  {
    name: 'Upcycling',
    image: dummyImage5,
    alt: 'Photo by @kat_snow on Unsplash',
    path: '/directory/upcycling',
  },
  {
    name: 'Opshops',
    image: dummyImage1,
    path: '/directory/opshops',
    alt: 'Photo by @Prudenceearl on Unslpash.',
  },
]

const dummyFootwear = [
  {
    name: 'The Portage Store',
    id: 1,
    region: 'Auckland',
    description: 'Your one stop shop for all things Vintage',
    instagram: true,
    website: true,
    trademe: false,
    facebook: false,
    tags: ['hypesneak', 'Jordans', 'Women'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'Vintage Friends',
    id: 2,
    region: 'Wellington',
    description: 'Vintage is love, vintage is life',
    instagram: false,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['hypesneak', 'Jordans', 'Women'],
    images: [
      '/images/4.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
    ],
  },
  {
    name: 'Dunedin sneakers',
    id: 3,
    region: 'Dunedin',
    description: 'All the best sneakers, lets get it',
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    tags: ['hypesneak', 'Jordans', 'Women'],
    images: [
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'The Portage Store',
    id: 4,
    region: 'Auckland',
    description: 'Hottest vintage shipping from Auckland.',
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['hypesneak', 'Jordans', 'Women'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'Vintage Friends',
    id: 5,
    region: 'Wellington',
    description: 'Vintage is love, vintage is life',
    instagram: false,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['hypesneak', 'Jordans', 'Women'],
    images: [
      '/images/4.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
    ],
  },
  {
    name: 'Dunedin sneakers',
    id: 6,
    region: 'Dunedin',
    description: 'All the best sneakers, lets get it',
    instagram: true,
    website: false,
    tags: ['hypesneak', 'Jordans', 'Unisex'],
    images: [
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'The Portage Store',
    id: 7,
    region: 'Auckland',
    description: 'Your one stop shop for all things Vintage',
    instagram: true,
    website: true,
    trademe: false,
    facebook: false,
    tags: ['hypesneak', 'Jordans', 'Unisex'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'Vintage Friends',
    id: 8,
    region: 'Wellington',
    description: 'Vintage is love, vintage is life',
    instagram: false,
    website: true,
    trademe: false,
    facebook: true,
    tags: ['hypesneak', 'Jordans', 'Unisex'],
    images: [
      '/images/4.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
    ],
  },
  {
    name: 'Dunedin sneakers',
    id: 9,
    region: 'Dunedin',
    description: 'All the best sneakers, lets get it',
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    tags: ['hypesneak', 'Jordans', 'Men'],
    images: [
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'The Portage Store',
    id: 10,
    region: 'Auckland',
    description: 'Your one stop shop for all things Vintage',
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    facebook: true,
    tags: ['hypesneak', 'Jordans', 'Men'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
]

const dummyJewellery = [
  {
    name: 'The Portage Store',
    region: 'Auckland',
    id: 11,
    description: 'Your one stop shop for all things Vintage',
    instagram: true,
    website: true,
    trademe: false,
    facebook: false,
    tags: ['earrings'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'Vintage Friends',
    id: 12,
    region: 'Wellington',
    description: 'Vintage is love, vintage is life',
    instagram: false,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['earrings'],
    images: [
      '/images/4.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
    ],
  },
  {
    name: 'Dunedin sneakers',
    id: 13,
    region: 'Dunedin',
    description: 'All the best sneakers, lets get it',
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    tags: ['earrings'],
    images: [
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'The Portage Store',
    id: 14,
    region: 'Auckland',
    description: 'Hottest vintage shipping from Auckland.',
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['earrings'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'Vintage Friends',
    id: 15,
    region: 'Wellington',
    description: 'Vintage is love, vintage is life',
    instagram: false,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['rings'],
    images: [
      '/images/4.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
    ],
  },
  {
    name: 'Dunedin sneakers',
    id: 16,
    region: 'Dunedin',
    description: 'All the best sneakers, lets get it',
    instagram: true,
    website: false,
    tags: ['rings'],
    images: [
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'The Portage Store',
    id: 17,
    region: 'Auckland',
    description: 'Your one stop shop for all things Vintage',
    instagram: true,
    website: true,
    trademe: false,
    facebook: false,
    tags: ['rings'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'Vintage Friends',
    id: 18,
    region: 'Wellington',
    description: 'Vintage is love, vintage is life',
    instagram: false,
    website: true,
    trademe: false,
    facebook: true,
    tags: ['rings'],
    images: [
      '/images/4.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
    ],
  },
  {
    name: 'Dunedin sneakers',
    id: 19,
    region: 'Dunedin',
    description: 'All the best sneakers, lets get it',
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    tags: ['crystals'],
    images: [
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'The Portage Store',
    region: 'Auckland',
    id: 20,
    description: 'Your one stop shop for all things Vintage',
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['crystals'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
]

const dummyOpshops = [
  {
    name: 'The Portage Store',
    region: 'Auckland',
    id: 21,
    description: 'Your one stop shop for all things Vintage',
    instagram: true,
    website: true,
    trademe: false,
    facebook: false,
    tags: ['opensaturday'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'Vintage Friends',
    id: 22,
    region: 'Wellington',
    description: 'Vintage is love, vintage is life',
    instagram: false,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['opensaturday'],
    images: [
      '/images/4.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
    ],
  },
  {
    name: 'Dunedin sneakers',
    id: 23,
    region: 'Dunedin',
    description: 'All the best sneakers, lets get it',
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    tags: ['opensaturday'],
    images: [
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'The Portage Store',
    id: 24,
    region: 'Auckland',
    description: 'Hottest vintage shipping from Auckland.',
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['opensaturday'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'Vintage Friends',
    id: 25,
    region: 'Wellington',
    description: 'Vintage is love, vintage is life',
    instagram: false,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['opensunday'],
    images: [
      '/images/4.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
    ],
  },
  {
    name: 'Dunedin sneakers',
    id: 26,
    region: 'Dunedin',
    description: 'All the best sneakers, lets get it',
    instagram: true,
    website: false,
    tags: ['opensunday'],
    images: [
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'The Portage Store',
    id: 27,
    region: 'Auckland',
    description: 'Your one stop shop for all things Vintage',
    instagram: true,
    website: true,
    trademe: false,
    facebook: false,
    tags: ['opensunday'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'Vintage Friends',
    id: 28,
    region: 'Wellington',
    description: 'Vintage is love, vintage is life',
    instagram: false,
    website: true,
    trademe: false,
    facebook: true,
    tags: ['openweekends'],
    images: [
      '/images/4.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
    ],
  },
  {
    name: 'Dunedin sneakers',
    id: 29,
    region: 'Dunedin',
    description: 'All the best sneakers, lets get it',
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    images: [
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'The Portage Store',
    id: 30,
    region: 'Auckland',
    description: 'Your one stop shop for all things Vintage',
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['openweekends'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
]

const dummyThrift = [
  {
    name: 'The Portage Store',
    region: 'Auckland',
    id: 31,
    description: 'Your one stop shop for all things Vintage',
    instagram: true,
    website: true,
    trademe: false,
    facebook: false,
    tags: ['preloved', 'men'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'Vintage Friends',
    id: 32,
    region: 'Wellington',
    description: 'Vintage is love, vintage is life',
    instagram: false,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['preloved', 'men'],
    images: [
      '/images/4.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
    ],
  },
  {
    name: 'Dunedin sneakers',
    id: 33,
    region: 'Dunedin',
    description: 'All the best sneakers, lets get it',
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    tags: ['preloved', 'women'],
    images: [
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'The Portage Store',
    id: 34,
    region: 'Auckland',
    description: 'Hottest vintage shipping from Auckland.',
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['preloved', 'women'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'Vintage Friends',
    id: 35,
    region: 'Wellington',
    description: 'Vintage is love, vintage is life',
    instagram: false,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['preloved', 'women'],
    images: [
      '/images/4.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
    ],
  },
  {
    name: 'Dunedin sneakers',
    id: 36,
    region: 'Dunedin',
    description: 'All the best sneakers, lets get it',
    instagram: true,
    website: false,
    tags: ['preloved', 'unisex', 'americanthrift'],
    images: [
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'The Portage Store',
    id: 37,
    region: 'Auckland',
    description: 'Your one stop shop for all things Vintage',
    instagram: true,
    website: true,
    trademe: false,
    facebook: false,
    tags: ['preloved', 'unisex', 'americanthrift'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'Vintage Friends',
    id: 38,
    region: 'Wellington',
    description: 'Vintage is love, vintage is life',
    instagram: false,
    website: true,
    trademe: false,
    facebook: true,
    tags: ['preloved', 'unisex', 'japanesethrift'],
    images: [
      '/images/4.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
    ],
  },
  {
    name: 'Dunedin sneakers',
    id: 39,
    region: 'Dunedin',
    description: 'All the best sneakers, lets get it',
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    tags: ['preloved', 'unisex', 'japanesethrift'],
    images: [
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'The Portage Store',
    id: 40,
    region: 'Auckland',
    description: 'Your one stop shop for all things Vintage',
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['preloved', 'unisex', 'japanesethrift'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
]

const dummyUpcycling = [
  {
    name: 'The Portage Store',
    id: 41,
    region: 'Auckland',
    description: 'Your one stop shop for all things Vintage',
    instagram: true,
    website: true,
    trademe: false,
    facebook: false,
    tags: ['madeinnz', 'unisex'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'Vintage Friends',
    id: 42,
    region: 'Wellington',
    description: 'Vintage is love, vintage is life',
    instagram: false,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['madeinnz', 'unisex'],
    images: [
      '/images/4.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
    ],
  },
  {
    name: 'Dunedin sneakers',
    id: 43,
    region: 'Dunedin',
    description: 'All the best sneakers, lets get it',
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    tags: ['madeinnz', 'unisex'],
    images: [
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'The Portage Store',
    id: 44,
    region: 'Auckland',
    description: 'Hottest vintage shipping from Auckland.',
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['madeinnz', 'unisex'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'Vintage Friends',
    id: 45,
    region: 'Wellington',
    description: 'Vintage is love, vintage is life',
    instagram: false,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['alterations', 'customesizes'],
    images: [
      '/images/4.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
    ],
  },
  {
    name: 'Dunedin sneakers',
    id: 46,
    region: 'Dunedin',
    description: 'All the best sneakers, lets get it',
    instagram: true,
    website: false,
    tags: ['alterations', 'customesizes'],
    images: [
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'The Portage Store',
    id: 47,
    region: 'Auckland',
    description: 'Your one stop shop for all things Vintage',
    instagram: true,
    website: true,
    trademe: false,
    facebook: false,
    tags: ['alterations', 'customesizes'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'Vintage Friends',
    id: 48,
    region: 'Wellington',
    description: 'Vintage is love, vintage is life',
    instagram: false,
    website: true,
    trademe: false,
    facebook: true,
    tags: ['alterations', 'customesizes'],
    images: [
      '/images/4.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
    ],
  },
  {
    name: 'Dunedin sneakers',
    id: 49,
    region: 'Dunedin',
    description: 'All the best sneakers, lets get it',
    instagram: true,
    website: false,
    trademe: true,
    facebook: true,
    tags: ['inclusivesizes'],
    images: [
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/4.jpg',
    ],
  },
  {
    name: 'The Portage Store',
    id: 50,
    region: 'Auckland',
    description: 'Your one stop shop for all things Vintage',
    instagram: true,
    website: true,
    trademe: true,
    facebook: true,
    tags: ['inclusivesizes'],
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
    ],
  },
]

export default function Directory({
  addToCart,
  activeHearts,
  updateHeartState,
  heartId,
}) {
  return (
    <>
      <Head>
        <title>Directory || Vintageclothing.co.nz</title>
        <meta
          name="description"
          content="Browse our directory and find your new favorite store"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f3d2c1" />
        <meta name="theme-color" content="#f3d2c1" />
      </Head>
      <DirectoryLanding
        categories={categories}
        subHeader="I'm looking for..."
      />
      <Categories
        header="THRIFT & VINTAGE"
        subHeader="Find your new favourite Thrift store."
        catImage={thriftandvintage}
        addToCart={addToCart}
        activeHearts={activeHearts}
        updateHeartState={updateHeartState}
        heartId={heartId}
        dummyShops={dummyThrift}
      />

      <Categories
        header="FOOTWEAR"
        subHeader="Time for new kicks?"
        addToCart={addToCart}
        activeHearts={activeHearts}
        updateHeartState={updateHeartState}
        heartId={heartId}
        catImage={sneakers}
        dummyShops={dummyFootwear}
      />

      <Categories
        header="JEWELLERY"
        subHeader="Custom made jewellery of all varieties."
        addToCart={addToCart}
        activeHearts={activeHearts}
        updateHeartState={updateHeartState}
        heartId={heartId}
        catImage={jewel}
        dummyShops={dummyJewellery}
      />

      <Categories
        header="UPCYCLING"
        subHeader="Shop Sustainably"
        addToCart={addToCart}
        activeHearts={activeHearts}
        updateHeartState={updateHeartState}
        heartId={heartId}
        catImage={upcycled}
        dummyShops={dummyUpcycling}
      />

      <Categories
        header="OPSHOPS"
        subHeader="The best Opshops in Auckland, Hamilton, Wellington, Christchurch and beyond."
        addToCart={addToCart}
        activeHearts={activeHearts}
        updateHeartState={updateHeartState}
        heartId={heartId}
        catImage={opshops}
        dummyShops={dummyOpshops}
      />
    </>
  )
}
