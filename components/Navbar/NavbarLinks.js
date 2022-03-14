import styles from './Navbar.module.css'
import Image from 'next/image'
import NavbarFav from './NavbarFav'


const NavbarLinks = ({links, heart}) => {


  return(
    <>
      <ul className={styles.navLinks}>
        {links.map(link =>

            <li className={styles.linkItems} key={link}>{link}</li>

          )}


      </ul>
      <NavbarFav heart={heart} className={styles.desktopFav} />


      </>
  )
}

export default NavbarLinks
