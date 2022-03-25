import styles from './SectionOne.module.css'
import Image from 'next/image'
import S1Card from './S1Card'
import Link from 'next/link'
import { InView } from 'react-intersection-observer'

const S1Copy = ({text, categories}) => {
  return (
    <InView>
      {({inView, ref, entry}) => (
  <div className={styles.curtain}>
  <div className={styles.invert}>

    <h2 ref={ref} className={`${styles.header} ${inView ? styles.headerInView : ""}`}>
      {text}
    </h2>

      <S1Card categories={categories} />

<Link href={'/directory'} passHref>
    <button className={styles.exploreButton}></button>
    </Link>
    </div>
  </div>
)}
</InView>
)
}


export default S1Copy
