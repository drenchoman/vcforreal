import styles from './Navbar.module.css'
import Image from 'next/image'
import NavbarFav from './NavbarFav'
import Link from 'next/link'

const NavbarLinks = ({links, heart}) => {


  return(
    <>
      <ul className={styles.navLinks}>
        {links.map(link =>
          <Link href={link.path}>
            <li className={styles.linkItems} key={link.name}><a>{link.name}</a></li>
          </Link>
          )}


      </ul>
      <NavbarFav heart={heart} className={styles.desktopFav} />


      </>
  )
}

export default NavbarLinks
