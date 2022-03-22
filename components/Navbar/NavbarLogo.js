import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'

const NavbarLogo = ({logo, width, height}) => {
// TODO: Turn logo into link using Link and A href
  return (
    <Link href="/">
      <a>
        <div className={styles.logo}>
          <Image
            src = {logo}
            alt="Vintage Clothing Logo"
            width={width}
            height={height}
          />
        </div>
      </a>
    </Link>
)
}

export default NavbarLogo
