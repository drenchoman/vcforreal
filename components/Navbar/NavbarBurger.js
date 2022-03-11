import styles from './Navbar.module.css'

const NavbarHamburger = ({handleClick, navClicked}) => {
  return (
    <div className={`${styles.burger} ${navClicked ? styles.activeBurger : ""}`} onClick={handleClick}>
      <div className={`${styles.first} ${navClicked ? styles.firstActive : ""}`}></div>
      <div className={`${styles.second} ${navClicked ? styles.secondActive : ""}`}></div>
      <div className={`${styles.third} ${navClicked ? styles.thirdActive : ""}`}></div>
    </div>
  )
}

export default NavbarHamburger
