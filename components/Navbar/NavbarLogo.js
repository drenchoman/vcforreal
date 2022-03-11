import Image from 'next/image'
import styles from './Navbar.module.css'

const NavbarLogo = (props) => {

  return (
  <div className="">
    <Image
    src = {props.logo}
    alt="Vintage Clothing Logo"
    width={100}
    height={100}
    />
  </div>
)
}

export default NavbarLogo
