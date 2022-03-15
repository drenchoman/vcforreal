import styles from './Landing.module.css'
import arrow from '../../public/images/arrow.svg'
import Image from 'next/image'

const LandingContent = (props) => {
  return(
    <div className={styles.landingContent}>
    <h1 className={styles.header}>VINTAGE CLOTHING </h1>

    <h2 className={styles.subHeader}>And so much more </h2>
    <div className={styles.arrow}>
    <Image
      src={arrow}
      height={50}
      width={50}
      alt=""
    />
    </div>

    </div>
  )
}

export default LandingContent
