import S1Copy from './S1Copy'
import styles from './SectionOne.module.css'

const SectionOne = ({text}) => {
  return (
    <div className={styles.wrapper}>
      <S1Copy text={text} />
    </div>
  )
}

export default SectionOne
