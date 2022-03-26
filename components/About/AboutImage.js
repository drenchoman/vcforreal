import styles from './About.module.css'
import Image from 'next/image'

const AboutImage = ({aboutImage, alt}) => {
  return (
    <div className={styles.aboutImage}>
    <Image
      src={aboutImage}
      width={400}
      height={325}
      alt={alt}
      />

    </div>

  )
}

export default AboutImage
