import styles from './SectionThree.module.css'


const S3Copy = ({text}) => {
  return (
  <div className={styles.copyWrapper}>
    <h2 className={styles.header}>{text}</h2>
  </div>
)
}

export default S3Copy
