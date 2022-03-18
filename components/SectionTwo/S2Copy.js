import styles from './SectionTwo.module.css'
import { InView } from 'react-intersection-observer'

const S2Copy = ({text}) => {
  return (
    <InView>
      {({inView, ref, entry}) => (
    <div ref={ref} className={styles.copyWrapper}>
    <h2 className={`${styles.header} ${inView ? styles.headerInView : ""}`}>{text}</h2>
    <p className={`${styles.text} ${inView ? styles.textInView : ""}`}>Over 100+ stores to browse, heart and visit</p>
    <button className={styles.s2Button}>Find</button>
    </div>
  )}
  </InView>
)
}

export default S2Copy
