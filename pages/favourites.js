import FavouritesPage from '../components/Navbar/Favourites'

export default function Favourites({ cartItems, removeItem, cartEmpty}) {
  return (
    <>
        <FavouritesPage cartItems={cartItems} removeItem={removeItem} cartEmpty={cartEmpty} />
    </>
  )
}
