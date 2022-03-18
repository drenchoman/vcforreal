import Image from 'next/image';
import styles from './Landing.module.css'

const LandingImage = ({landingImage}) => {
  return (
  <div className={styles.landingImage}>
    <Image
    src={landingImage}
    layout="fill"
    alt="Indie girl with monie"
    objectFit="cover"
    objectPosition="center"
    priority
      />
  </div>
)
}

export default LandingImage
