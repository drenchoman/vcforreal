import styles from './Navbar.module.css'
import Link from 'next/link'
import NavbarFav from './NavbarFav'


const NavbarLinks = ({className, links}) => {


  return(
    <>
      <ul className={className}>
        {links.map(link =>
          <Link href={link.path}>
            <li className={styles.linkItems} key={link.name}><a>{link.name}</a></li>
          </Link>
          )}


      </ul>


      </>
  )
}

export default NavbarLinks
