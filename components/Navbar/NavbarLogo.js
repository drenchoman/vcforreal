import Image from 'next/image'
import styles from './Navbar.module.css'

const NavbarLogo = ({logo, width, height}) => {
// TODO: Turn logo into link using Link and A href
  return (
  <div className={styles.logo}>
    <Image
    src = {logo}
    alt="Vintage Clothing Logo"
    width={width}
    height={height}
    />
  </div>
)
}

export default NavbarLogo
