import styles from './Favourites.module.css'
import Image from 'next/image'
import insta from '../../public/svgs/insta.svg'
import pc from '../../public/svgs/pc.svg'
import x from '../../public/svgs/x.svg'
import Link from 'next/link'
import {useState, useEffect} from 'react'

const Favourites = ({cartItems, removeItem, cartEmpty}) => {

  const handleClick = (id) => {
    removeItem(id);
  }

    if(!cartEmpty) {
      return (
        <div className={styles.wrapper}>
          <h2 className={styles.favHeader}>Your favourite stores</h2>
    <ul className={styles.favouriteWrapper}>
      {cartItems.map(item =>
        <div key={item.id} className={styles.favouriteItem}>
          <div className={styles.favouriteImage}>
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={item.images[0]}
              alt=""
              />
          </div>
          <div className={styles.favName}>
            <li>
            {item.name}
            </li>
          </div>
          <div className={styles.favFav}>
            <span>Visit</span>
            <div className={styles.favLink}>
              <Image
                width={30}
                height={30}
                src={insta}
                alt="Instagram Icon"
              />
            </div>
            <div className={styles.favLink}>
              <Image
                width={30}
                height={30}
                src={pc}
                alt="PC icon"
              />
            </div>
          </div>
          <div onClick={() => handleClick(item.id)} className={styles.xToClose}>
            <Image
              width={30}
              height={30}
              src={x}
              alt="X to close"
            />

          </div>
        </div>
      )}
    </ul>
    </div>
  )
  }
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.favHeader}>Your favourite stores</h2>
      <Link href={'/directory'} passHref>
        <button className={styles.storeButton}>Explore stores</button>
      </Link>
    </div>
  )
  }


export default Favourites
