import S3Copy from './S3Copy'
import S3Card from './S3Card'
import S3ImageUpload from './S3ImageUpload'
import S3Join from './S3Join'
import styles from './SectionThree.module.css'

const SectionThree = ({text, para, heart, shops, insta, pc, arrow}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>

        <S3Copy text={text} arrow={arrow} para={para} />

        <div className={styles.cardWrapper}>
          <S3Card heart={heart} shops={shops} insta={insta} pc={pc} />
          <S3Join cta="Join Now!"/>
        </div>

      </div>
    </div>
  )
}

export default SectionThree
