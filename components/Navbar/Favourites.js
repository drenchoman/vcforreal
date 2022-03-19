import styles from './Favourites.module.css'
import Image from 'next/image'
import insta from '../../public/svgs/insta.svg'
import pc from '../../public/svgs/pc.svg'
const Favourites = ({testData}) => {
  return (
    <ul className={styles.favouriteWrapper}>
      {testData.map(test =>
        <div key={test.name} className={styles.favouriteItem}>
          <div className={styles.favouriteImage}>
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={test.image}
              alt=""
              />
          </div>
          <div className={styles.favName}>
            <li>
            {test.name}
            </li>
          </div>
          <div className={styles.favFav}>
            <span>Visit</span>
            <div className={styles.favLink}>
              <Image
                width={30}
                height={30}
                src={insta}
              />
            </div>
            <div className={styles.favLink}>
              <Image
                width={30}
                height={30}
                src={pc}
              />
            </div>
          </div>
        </div>
      )}
    </ul>
  )
}

export default Favourites
