import styles from './Explore.module.css'
import Image from 'next/image'
import {useEffect} from 'react'

const ExploreGrid = ({gImages}) => {

useEffect(() => {
  console.log(gImages)
},[])
  return (
    <div className={styles.grid}>
    {gImages.map(image =>
      <div key={image.id} className={styles.imageContainer}>
        <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={`Image by ${image.author}`}
        src={image.download_url}

        />
      </div>
    )}
    </div>
  )
}


export default ExploreGrid
