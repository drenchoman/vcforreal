import LandingImage from './LandingImage'
import LandingContent from './LandingContent'
import styles from './Landing.module.css'

const Landing = ({landingImage, header, subHeader}) => {


  return (
  <div className={styles.landingContainer}>
    <LandingImage landingImage={landingImage} />
    <LandingContent header={header} subHeader={subHeader} />
  </div>
)
}

export default Landing
