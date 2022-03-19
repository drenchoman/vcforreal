import Image from 'next/image'
import {useState, useEffect} from 'react'
import styles from './Navbar.module.css'
import Favourites from './Favourites'

const NavbarFav = ({heart, className}) => {
  const [heartClicked, setHeartClicked] = useState(false);

  const [favouritesExist, setFavouritesExist]= useState(false);

  const handleClick = () => {
    setHeartClicked(!heartClicked)
  }

  const testData = [
    { name: "Portage Store",
      description: "An amazing store",
      image: "/images/1.jpg"
    },
      {
        name: "Good ole Vintage",
        description: "Really good, and old.",
        image: "/images/2.jpg"
      },
      {
        name: "Super Vintage Friends",
        description: "The most super vintage",
        image: "/images/3.jpg"
      },
      {
        name: "Churchi",
        description: "What even is a Churchi?",
        image: "/images/4.jpg",
      }
  ]

  const handleStoreClick = () => {
    setFavouritesExist(true)
  }


  return(
    <>
  <div className={`${heartClicked ? styles.heartModal : styles.small}`} >
    {heartClicked &&
      // Need to create seperate component for this container
    <div className={styles.modalContainer}>
      <h2 className={styles.modalHeader}> Your favourite stores </h2>
      {favouritesExist ? <Favourites testData={testData} /> :
      <div className={styles.modalButtonContainer}>
      <button className={styles.storeButton}>Explore</button>
      <button onClick={handleStoreClick} className={styles.storeButton}>Add Stores</button>
      </div>
      }
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
