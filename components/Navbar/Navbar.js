import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import {useEffect} from 'react'
import styles from './Navbar.module.css'


const Navbar = (props) => {
  const {elem} = props
  useEffect(()=>{
    console.log(props)

  },[])


  return <nav className="navbar">
    <NavbarLogo logo={props.logo} links={props.links} />
    <NavbarLinks links={props.links} />
  </nav>
}

export default Navbar
