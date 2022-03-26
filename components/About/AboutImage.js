import styles from './About.module.css'
import Image from 'next/image'

const AboutImage = ({aboutImage}) => {
  return (
<>
    <div className={styles.aboutImage}>
    <Image
      src={aboutImage}
      width={400}
      height={325}
      alt="My partner and I Opshopping circa 2014"
      />

    </div>
    <span className={styles.imageCaption}><strong>Above:</strong><br/>Opshopping around 2014</span>
</>
  )
}

export default AboutImage
