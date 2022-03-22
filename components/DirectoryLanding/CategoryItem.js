import styles from './DirectoryLanding.module.css'
import Image from 'next/image'
import Link from 'next/link'

const CategoryItem = ({cat}) => {
  return (
    <div key={cat.name} className={styles.itemCard}>
      <div className={styles.buttonHeaderWrapper}>
        <div>
          <li className={styles.itemHeader}>
            {cat.name}
          </li>
        </div>
        <Link href={cat.path}>
          <button className={styles.itemButton}><a>Find</a></button>
        </Link>
      </div>


      <div className={styles.catImage}>
        <Image
        src={cat.image}
        layout="fill"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        />
      </div>
    </div>
  )
}

export default CategoryItem
