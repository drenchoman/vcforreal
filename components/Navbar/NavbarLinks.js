import styles from './Navbar.module.css'
import Image from 'next/image'
import NavbarFav from './NavbarFav'


const NavbarLinks = ({links, heart}) => {


  return(

      <ul className={styles.navLinks}>
        {links.map(link =>

            <li key={link}>{link}</li>

          )}
          <li>
            <NavbarFav heart={heart} className={styles.desktopFav} />
          </li>




      </ul>


  )
}

export default NavbarLinks
