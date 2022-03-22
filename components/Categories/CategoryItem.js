import styles from './Card.module.css'
import {useState} from 'react'
import insta from '../../public/svgs/insta.svg'
import pc from '../../public/svgs/pc.svg'
import Image from 'next/image'

const CategoryItem = ({shop}) => {

  const [heartActive, setHeartActive] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.cardName}>
          <h2 className={styles.cardNameText}>{shop.name}</h2>
        </div>
        <div className={styles.heartContainer}>
          <div onClick={()=> setHeartActive(!heartActive)} className={`${heartActive ? styles.favouriteActive : styles.favourite}`}>

          </div>
        </div>
      </div>
      <div className={styles.cardMiddle}>
        <div className={styles.cardRegion}>
          <span>{shop.region}</span>
        </div>
        <div className={styles.cardDescription}>
          <p>{shop.description}</p>
        </div>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.linksContainer}>
          <h3 className={styles.linksHeader}>Visit</h3>
          <div className={styles.linksDiv}>
              {shop.instagram && <div className={styles.visitIcon}>
                <Image
                  width={20}
                  height={20}
                  src={insta}
                  alt=""
                />
              </div> }
              {shop.website && <div className={styles.visitIcon}>
                <Image
                  width={20}
                  height={20}
                  src={pc}
                  alt=""
                />
              </div>}
              {shop.facebook && <div className={styles.visitIcon}>
                <Image
                  width={20}
                  height={20}
                  src={pc}
                  alt=""
                />
              </div>}
              {shop.trademe && <div className={styles.visitIcon}>
                <Image
                  width={20}
                  height={20}
                  src={pc}
                  alt=""
                />
              </div>}
          </div>

        </div>

          <ul className={styles.grid}>
            <li>
              <Image
                width={150}
                height={150}
                alt=""
                src={shop.images[0]}
              />
            </li>
            <li>
            <Image
              width={150}
              height={150}
              alt=""
              src={shop.images[1]}
            />
            </li>
            <li>
            <Image
              width={150}
              height={150}
              alt=""
              src={shop.images[2]}
            />
            </li>
            <li>
            <Image
              width={150}
              height={150}
              alt=""
              src={shop.images[3]}
            />
            </li>
          </ul>

      </div>
    </div>
  )
}

export default CategoryItem
