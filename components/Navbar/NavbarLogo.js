import Image from 'next/image'
import styles from './Navbar.module.css'

const NavbarLogo = (props) => {

  return (
  <div className="">
    <Image
    src = {props.logo}
    alt="Vintage Clothing Logo"
    width={60}
    height={60}
    />
  </div>
)
}

export default NavbarLogo
