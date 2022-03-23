import styles from './Navbar.module.css'
import Link from 'next/link'
import NavbarFav from './NavbarFav'


const NavbarLinks = ({className, links}) => {


  return(
    <>
      <ul className={className}>
        {links.map(link =>
          <Link key={link.name} href={link.path} passHref >
            <li className={styles.linkItems}><a>{link.name}</a></li>
          </Link>
          )}


      </ul>


      </>
  )
}

export default NavbarLinks
