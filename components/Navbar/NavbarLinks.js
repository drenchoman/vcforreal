import styles from './Navbar.module.css'

const NavbarLinks = (props) => {
  const {links} = props
  return(

      <ul className={styles.navLinks}>
        {links.map(link =>

            <li key={link}>{link}</li>

          )}

      </ul>
  

  )
}

export default NavbarLinks
