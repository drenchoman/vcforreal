import S3Copy from './S3Copy'
import S3Image from './S3Image'
import styles from './SectionThree.module.css'

const SectionThree = ({text, heart, shops, insta, pc}) => {
  return (
    <div className={styles.wrapper}>
      <S3Copy text={text} />
      <div className={styles.cardWrapper}>
      <p className={styles.cardHeader}>Customise your own card and be discovered!</p>
      <S3Image heart={heart} shops={shops} insta={insta} pc={pc} />

      </div>
    </div>
  )
}

export default SectionThree
