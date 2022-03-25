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

    if(cartItems.length > 0) {
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
            <span className={styles.linksHeader}>Visit</span>
            <div className={styles.linksDiv}>
            {item.instagram &&
            <div className={styles.favLink}>
              <Image
                width={20}
                height={20}
                src={insta}
                alt="Instagram Icon"
              />
            </div>
          }
          {item.website &&
            <div className={styles.favLink}>
              <Image
                width={20}
                height={20}
                src={pc}
                alt="PC icon"
              />
            </div>
          }
          {item.facebook &&
            <div className={styles.favLink}>
              <Image
                width={20}
                height={20}
                src={pc}
                alt="FB icon"
              />
            </div>
          }
          {item.trademe &&
            <div className={styles.favLink}>
              <Image
                width={20}
                height={20}
                src={pc}
                alt="Trademe icon"
              />
            </div>
          }
          </div>
          </div>
          <div onClick={() => handleClick(item.id)} className={styles.xToClose}>
            <Image
              width={20}
              height={20}
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
