import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBurger from './NavbarBurger'
import NavbarFav from './NavbarFav'
import NavbarMobileLinks from './NavbarMobileLinks'
import {useEffect, useState} from 'react'
import styles from './Navbar.module.css'


const Navbar = (props) => {

  const [navClicked, setNavClicked]= useState(false);

  const handleClick = () => {
    setNavClicked(!navClicked)
    console.log("hello world", navClicked)
  }


  return <nav className="navbar">
    <NavbarLogo logo={props.logo} />
    <NavbarLinks links={props.links} heart={props.heart}  />
    <div className={styles.mobileNav}>
    <NavbarFav heart={props.heart} className={styles.mobileFav} />
    <NavbarBurger handleClick={handleClick} navClicked={navClicked} />
    </div>
    <NavbarMobileLinks links={props.links} navClicked={navClicked} />
  </nav>
}

export default Navbar
