import styles from './SectionThree.module.css'
import Image from 'next/image'
import { InView } from 'react-intersection-observer'

const S3Copy = ({text, para, arrow}) => {

  return (
    <InView>
    {({inView, ref, entry}) => (
  <div ref={ref} className={styles.copyWrapper}>

      <h2 className={`${styles.header} ${inView ? styles.headerInView : ""}`}>{text}</h2>
      <p className={`${styles.cardHeader} ${inView ? styles.cardHeaderInView : ""}`}>{para}</p>

    <div className={styles.arrow}>
      <Image
        width={200}
        height={200}
        src={arrow}
        alt=""
      />
    </div>
  </div>
)}
</InView>
)
}

export default S3Copy
