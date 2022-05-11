import styles from './Explore.module.css'
import Image from 'next/image'
import heart from '../../public/images/heart1.svg'

const ExploreGrid = ({gImages, categories}) => {


  return (
    <div className={styles.altGrid}>
    {categories.map(image =>
      <div key={image.id} className={`${styles.imageContainer} ${image.classSize}`}>
        <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={`Image by ${image.alt}`}
        src={image.image}

        />
        <div className={styles.circle}>
          <Image
          width={25}
          height={25}
          src={image.icon}
          />
        </div>
        <div className={styles.heart}>
          <Image
          width={25}
          height={25}
          src={heart}
          />
      </div>
      </div>
    )}
    {categories.map(image =>
      <div key={image.id} className={`${styles.imageContainer} ${image.classSize}`}>
        <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={`Image by ${image.alt}`}
        src={image.image}

        />
        <div className={styles.circle}>
          <Image
          width={25}
          height={25}
          src={image.icon}
          />
        </div>
        <div className={styles.heart}>
          <Image
          width={25}
          height={25}
          src={heart}
          />
      </div>
      </div>
    )}
    </div>
  )
}


export default ExploreGrid
