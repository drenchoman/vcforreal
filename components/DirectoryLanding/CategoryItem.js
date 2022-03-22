import styles from './DirectoryLanding.module.css'
import Image from 'next/image'
import Link from 'next/link'

const CategoryItem = ({cat}) => {
  return (
    <div className={styles.itemCard}>
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
      <div className={styles.categoryImage}>
        <Image
        src={cat.image}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt=""
        />
      </div>
    </div>
  )
}

export default CategoryItem
