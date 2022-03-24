import styles from './Card.module.css'
import {useState, useEffect} from 'react'
import insta from '../../public/svgs/insta.svg'
import pc from '../../public/svgs/pc.svg'
import refresh from '../../public/svgs/refresh.svg'
import Image from 'next/image'
import CardImages from './CardImages'

const CategoryItem = ({shop, addToCart, activeHearts, updateHeartState, heartId}) => {

  const [heartActive, setHeartActive] = useState(false);

  const [active, setActive] = useState(false);

const idMatch = () => {
  if (heartId === shop.id && heartActive){
    setActive(!active)
    updateHeartState
    setHeartActive(!heartActive);
    return;
  }
    return;
}

const checkHeartActive = (activeHearts) => {
  if (activeHearts === undefined){
    return;
  } else
  { const index = activeHearts.indexOf(shop.id)
      if (index > -1){
        setActive(true);
        setHeartActive(true);
        return
      } else {
        setActive(false);
        setHeartActive(false);
        return;
      }
    }
};

const handleClick = () => {
  setHeartActive(!heartActive);
  setActive(!active);
  addToCart(shop)
}

useEffect(() => {
  checkHeartActive(activeHearts)
},[]);

useEffect(() => {
  idMatch()
},[heartId])

  return (
    <li className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.cardName}>
          <h2 className={styles.cardNameText}>{shop.name}</h2>
        </div>
        <div className={styles.heartContainer}>
          <div onClick={handleClick} className={`${heartActive ? styles.favouriteActive : styles.favourite}`}>

          </div>
        </div>
      </div>
      <div className={styles.cardMiddle}>
        <div className={styles.smallInfo}>
          <div className={styles.timeInfo}>
            <div className={styles.refreshImage}>
              <Image src={refresh} width={20} height={20} alt=""/>
            </div>
              <span>2d ago </span>
          </div>
          <div>
            <span className={styles.cardRegion}>{shop.region}</span>
          </div>
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
            <CardImages images={shop.images} />

          </ul>

      </div>
    </li>
  )
}

export default CategoryItem
