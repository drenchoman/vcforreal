import styles from './Explore.module.css'
import Image from 'next/image'

const ExploreGrid = ({gridImages}) => {
  return (
    <div className={styles.grid}>
    {gridImages.map(image =>
      <div className={styles.imageContainer}>
        <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={`Image by ${image.author}`}
        src={image.url}

        />
      </div>
    )}
    </div>
  )
}

export default ExploreGrid
