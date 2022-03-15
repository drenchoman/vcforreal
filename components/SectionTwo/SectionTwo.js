import S2Copy from './S2Copy'
import S2Image from './S2Image'
import styles from './SectionTwo.module.css'

const SectionTwo = ({tupac, text}) => {
  return(
    <div className={styles.wrapper}>
      <S2Copy text={text} />
      <S2Image tupac={tupac}/>
    </div>
    )
}

export default SectionTwo
