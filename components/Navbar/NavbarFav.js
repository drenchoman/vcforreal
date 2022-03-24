import Image from 'next/image'
import {useState, useEffect} from 'react'
import styles from './Navbar.module.css'
import Favourites from './Favourites'
import Link from 'next/link'

const NavbarFav = ({heart, className, cartCount}) => {

const [count, setCount]= useState(false);

useEffect(()=>{
  if(cartCount > 0){
    setCount(true)
  } else if (cartCount === 0){

  setCount(false)
}
},[cartCount])

  return(
    <>
    <Link href={'/favourites'} passHref >
  <div className={className} >
    <Image
      width={22}
      height={22}
      alt=''
      src={heart}
      />
      {count &&
      <div className={styles.cartCount}>
      {cartCount}
      </div>
    }

  </div>
  </Link>
</>
)
}

export default NavbarFav
