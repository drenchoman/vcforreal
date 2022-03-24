import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBurger from './NavbarBurger'
import NavbarFav from './NavbarFav'
import NavbarMobileLinks from './NavbarMobileLinks'
import {useEffect, useState} from 'react'
import styles from './Navbar.module.css'


const Navbar = ({logo, logoHeight, logoWidth, links, heart, insta, pc, cartCount}) => {

  const [navClicked, setNavClicked]= useState(false);

  const handleClick = () => {
    setNavClicked(!navClicked)
  }


  return <nav className="navbar">
    <NavbarLogo logo={logo} height={logoHeight} width={logoWidth} />
    <NavbarLinks links={links} heart={heart} cartCount={cartCount} />

    <div className={styles.mobileNav}>
    <NavbarFav heart={heart} className={styles.mobileFav} insta={insta} pc={pc} cartCount={cartCount} />
    <NavbarBurger handleClick={handleClick} navClicked={navClicked} />
    </div>
    <NavbarMobileLinks links={links} navClicked={navClicked} />
  </nav>
}

export default Navbar
