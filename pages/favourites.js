import FavouritesPage from '../components/Navbar/Favourites'
import Head from 'next/head'
export default function Favourites({ cartItems, removeItem, cartEmpty}) {
  return (
    <>
    <Head>
    <title>Your Favourites ❤️ || Vintageclothing.co.nz</title>
    <meta name="description" content="Your favourite stores in one place." />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
     <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
     <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
     <link rel="manifest" href="/site.webmanifest" />
     <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f3d2c1" />
     <meta name="theme-color" content="#f3d2c1" />
      </Head>
        <FavouritesPage cartItems={cartItems} removeItem={removeItem} cartEmpty={cartEmpty} />
    </>
  )
}
