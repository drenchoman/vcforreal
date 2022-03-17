import styles from './SectionThree.module.css'
import Image from 'next/image'

const S3Copy = ({text, para, arrow}) => {
  return (
  <div className={styles.copyWrapper}>
    <h2 className={styles.header}>{text}</h2>
    <p className={styles.cardHeader}>{para}</p>
    <div className={styles.arrow}>
      <Image
        width={200}
        height={200}
        src={arrow}
        alt=""
      />
    </div>
  </div>
)
}

export default S3Copy
