import styles from './SectionOne.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { InView } from 'react-intersection-observer'


const S1CardItem = ({cat}) => {
  return (
    <InView>
    {({inView, ref, entry}) => (
  <li className={styles.listOptions}>
  <Link href={cat.path}>
  <a>
  <div className={styles.listTitle}>
   <h3>{cat.name}</h3>
   </div>
    <div ref={ref} className={`${styles.listImage} ${inView ? styles.listImageInView : ""}`}>
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
)}
</InView>
)
}

export default S1CardItem
