import styles from './Navbar.module.css'

import NavbarFav from './NavbarFav'


const NavbarLinks = ({className, links}) => {


  return(
    <>
      <ul className={className}>
        {links.map(link =>

            <li className={styles.linkItems} key={link}>{link}</li>

          )}


      </ul>


      </>
  )
}

export default NavbarLinks
