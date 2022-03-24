import Navbar from './Navbar/Navbar.js'
import Footer from './Footer/Footer.js'
import logo from '../public/logos/logo-white.svg'
import heart from '../public/images/heart3.svg'


const links = [{
  name: "About",
  path: "/about",
},
{
  name: "Explore",
  path: "/explore",
},
{
  name: "Directory",
  path: "/directory",
} ]

export default function Layout({children, cartCount}){
  return (
    <>
    <Navbar logo={logo} logoWidth={100} logoHeight={100} links={links} heart={heart} cartCount={cartCount} />
    <main className="lockup">{children}</main>
    <Footer links={links} logo={logo} logoWidth={150} logoHeight={150} />
    </>
  )
}
