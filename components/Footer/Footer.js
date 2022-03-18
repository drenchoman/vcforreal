import styles from './Footer.module.css'
import NavbarLinksNoFav from '../../components/Navbar/NavbarLinksNoFav'
import Logo from '../../components/Navbar/NavbarLogo'

const Footer = ({links, logo, logoHeight, logoWidth}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <Logo logo={logo} height={logoHeight} width={logoWidth} />

        <div className={styles.copyWrapper}>
          <p>Vintageclothing.co.nz aims to connect you to the best vintage, thrift and opshops within NZ. </p>
          <p>Explore, connect and support over 100+ stores. </p>
          <p>If you find this site valuable, please consider sharing 💕  </p>
        </div>
      <div className={styles.linksWrapper}>

        <NavbarLinksNoFav links={links} className={styles.navList} />
      </div>
      </div>
      <div className={styles.copyright}>
        <span>© Copyright Vintageclothing.co.nz 2022</span>
      </div>
    </div>
  )
}

export default Footer
