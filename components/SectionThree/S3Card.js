import styles from './SectionThree.module.css'
import Image from 'next/image'
import S3CardImage from './S3CardImage'
import CTE from 'react-click-to-edit'
import react, {useState, useEffect} from 'react';
import refresh from '../../public/svgs/refresh.svg'

const S3Card = ({shops, insta, pc}) => {

const [heartActive, setHeartActive] = useState(false);


  return(
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.cardName}>
          <CTE
            initialValue={shops.name}
          />

        </div>
        <div className={styles.heartContainer}>
          <div onClick={()=> setHeartActive(!heartActive)} className={`${heartActive ? styles.favouriteActive : styles.favourite}`}>

          </div>
        </div>
      </div>
      <div className={styles.cardMiddle}>
        <div className={styles.smallInfo}>
          <div className={styles.timeInfo}>
            <div className={styles.refreshImage}>
              <Image src={refresh} width={20} height={20} alt="Last updated"/>
            </div>
              <span>1d ago</span>
            </div>
        <div className={styles.cardRegion}>
          <CTE
            initialValue={shops.region}
          />
        </div>
        </div>
        <div className={styles.cardDescription}>
          <CTE
            initialValue={shops.description}
          />
        </div>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.linksContainer}>
          <h3 className={styles.linksHeader}>Visit</h3>
          <div className={styles.linksDiv}>
          {shops.instagram && <div className={styles.visitIcon}>
            <Image
              width={20}
              height={20}
              src={insta}
              alt=""
            />
          </div> }
          {shops.website && <div className={styles.visitIcon}>
            <Image
              width={20}
              height={20}
              src={pc}
              alt=""
            />
          </div>}
          {shops.facebook && <div className={styles.visitIcon}>
            <Image
              width={20}
              height={20}
              src={pc}
              alt=""
            />
          </div>}
          {shops.trademe && <div className={styles.visitIcon}>
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
              <S3CardImage image={shops.images[0]} id="image0" />
            </li>
            <li>
            <S3CardImage image={shops.images[1]} id="image1" />
            </li>
            <li>
            <S3CardImage image={shops.images[2]} id="image2" />
            </li>
            <li>
              <S3CardImage image={shops.images[3]} id="image3" />
            </li>
          </ul>

      </div>
    </div>
  )
}

export default S3Card
