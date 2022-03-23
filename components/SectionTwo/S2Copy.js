import styles from './SectionTwo.module.css'
import { InView } from 'react-intersection-observer'
import Link from 'next/link'

const S2Copy = ({text}) => {
  return (
    <InView>
      {({inView, ref, entry}) => (
    <div ref={ref} className={styles.copyWrapper}>
    <h2 className={`${styles.header} ${inView ? styles.headerInView : ""}`}>{text}</h2>
    <p className={`${styles.text} ${inView ? styles.textInView : ""}`}>Over 100+ stores to browse, heart and visit</p>
    <Link href={'/directory'}>
      <button className={styles.s2Button}><a>Find</a></button>
    </Link>
    </div>
  )}
  </InView>
)
}

export default S2Copy
