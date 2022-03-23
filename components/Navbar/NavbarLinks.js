import styles from './Navbar.module.css'
import Image from 'next/image'
import NavbarFav from './NavbarFav'
import Link from 'next/link'

const NavbarLinks = ({links, heart}) => {


  return(
    <>
      <ul className={styles.navLinks}>
        {links.map(link =>
          <Link key={link.name} href={link.path} passHref>
            <li className={styles.linkItems} ><a>{link.name}</a></li>
          </Link>
          )}


      </ul>
      <NavbarFav heart={heart} className={styles.desktopFav} />


      </>
  )
}

export default NavbarLinks
