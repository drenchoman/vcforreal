import styles from './SectionOne.module.css'
import Image from 'next/image'
import S1Card from './S1Card'

const S1Copy = ({text, categories}) => {
  return (
  <div className={styles.curtain}>
  <div className={styles.invert}>

    <h2 className={styles.header}>
      {text}
    </h2>

      <S1Card categories={categories} />


    <button className={styles.exploreButton}>Explore</button>
    </div>
  </div>
)
}

export default S1Copy
