import styles from './SectionTwo.module.css'
import Image from 'next/image'

const S2Image = ({tupac}) => {
  return(
  <div className={styles.cubeHolder}>
    <Image
      src={tupac}
      width={500}
      height={750}
      alt="Tupac girl"
    />
  </div>
)
}

export default S2Image
