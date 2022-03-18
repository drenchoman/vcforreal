import styles from './Navbar.module.css'

const NavbarMobileLinks = ({links, navClicked}) => {
  return (
    <div className={`${styles.mobileLinksWrapper} ${navClicked ? styles.active : ""}`}>
      <div className={styles.mobileLinksCard}>
        <ul className={styles.mobileLinksList}>
          {links.map(link =>
            <li className={`${styles.mobileListItem} ${navClicked ? styles.activeListItem : ""}`} key={link}>{link}</li>
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
