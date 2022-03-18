import Image from 'next/image'
import {useState} from 'react'
import styles from './Navbar.module.css'

const NavbarFav = ({heart, className}) => {
  const [heartClicked, setHeartClicked] = useState(false);

  const handleClick = () => {
    setHeartClicked(!heartClicked)
  }

  return(
    <>
  <div className={`${heartClicked ? styles.heartModal : styles.small}`} >
    {heartClicked &&
      // Need to create seperate component for this container
    <div className={styles.modalContainer}>
      <h2 className={styles.modalHeader}> Your favourite stores </h2>
      <button className={styles.storeButton}>Explore</button>
    </div>
  }
  </div>
  <div onClick={handleClick} className={`${className} ${heartClicked ? styles.pulse : ""}`}>
  <Image
    width={22}
    height={22}
    alt=''
    src={heart}
    />
  </div>
</>
)
}

export default NavbarFav
