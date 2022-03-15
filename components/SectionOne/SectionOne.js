import S1Copy from './S1Copy'
import styles from './SectionOne.module.css'

const SectionOne = ({text, categories}) => {
  return (
    <div className={styles.wrapper}>
      <S1Copy text={text} categories={categories} />
    </div>
  )
}

export default SectionOne
