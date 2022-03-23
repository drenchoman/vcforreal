import styles from './Navbar.module.css'
import Link from 'next/link'

const NavbarMobileLinks = ({links, navClicked}) => {
  return (
    <div className={`${styles.mobileLinksWrapper} ${navClicked ? styles.active : ""}`}>
      <div className={styles.mobileLinksCard}>
        <ul className={styles.mobileLinksList}>
          {links.map(link =>
            <Link key={link.name} href={link.path} passHref>
            <li className={`${styles.mobileListItem} ${navClicked ? styles.activeListItem : ""}`} ><a>{link.name}</a></li>
            </Link>
          )}
        </ul>
        <hr/>
        <div className={styles.mobileRegisterWrapper}>

          <button className={`${styles.loginOptions} ${styles.blue} ${navClicked ? styles.activeRegister : ""}`}>Login</button>
          <button className={`${styles.loginOptions} ${navClicked ? styles.activeRegister2 : ""}`}>Register</button>
          </div>
          <hr/>
      </div>

    </div>
  )
}

export default NavbarMobileLinks
