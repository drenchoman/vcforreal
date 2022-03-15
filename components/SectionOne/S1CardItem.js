import styles from './SectionOne.module.css'
import Image from 'next/image'
import Link from 'next/link'

const S1CardItem = ({cat}) => {
  return (
  <li className={styles.listOptions}>
  <Link href={cat.path}>
  <a>
  <div className={styles.listTitle}>
   <h3>{cat.name}</h3>
   </div>
    <div className={styles.listImage}>
    <Image
      src={cat.image}
      width={70}
      height={70}
      alt=""
    />
    </div>

     </a>
     </Link>
  </li>
)
}

export default S1CardItem
