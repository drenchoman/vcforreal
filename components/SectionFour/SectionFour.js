import styles from './SectionFour.module.css'
import S4Image from './S4Image'
import { InView } from 'react-intersection-observer'

const SectionFour = ({thriftPic1, thriftPic2}) => {
  return (
    <InView>
      {({inView, ref, entry}) => (
    <div className={styles.wrapper}>
    <h2 ref={ref} className={`${styles.header} ${inView ? styles.headerInView : ""}`}>Opshopping?</h2>

      <div className={styles.thriftWrapper1}>
        <p className={styles.ctaText}>Spend your time wisely <br/>
        Use our map to find your closest store</p>

        <S4Image thriftPic={thriftPic1} className={styles.imageThrift1} />
      </div>
      <div className={styles.thriftWrapper2}>
      <p className={styles.ctaText}>Plan your route and find some bargains!</p>
        <S4Image thriftPic={thriftPic2} className={styles.imageThrift2} />
      </div>
      <button className={styles.ctaButton}>Explore</button>
    </div>
  )}
  </InView>
  )
}

export default SectionFour
