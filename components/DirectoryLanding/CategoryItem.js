import styles from './DirectoryLanding.module.css'
import Image from 'next/image'
import Link from 'next/link'

const CategoryItem = ({cat}) => {
  return (
    <li className={styles.itemCard}>
      <div className={styles.buttonHeaderWrapper}>
        <div>
          <h2 className={styles.itemHeader}>
            {cat.name}
          </h2>
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
    </li>
  )
}

export default CategoryItem
