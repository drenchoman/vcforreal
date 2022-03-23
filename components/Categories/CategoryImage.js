import styles from './Categories.module.css'
import Image from 'next/image'

const CategoryImage = ({catImage}) => {
  return (
    <div className={styles.imageWrapper}>
      <Image
      src={catImage}
      width={275}
      height={350}
      alt=""
      />
    </div>
  )
}

export default CategoryImage
