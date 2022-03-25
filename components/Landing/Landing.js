import LandingImage from './LandingImage'
import LandingContent from './LandingContent'
import Backgroundtext from './Backgroundtext'
import styles from './Landing.module.css'

const Landing = ({landingImage, header, subHeader}) => {


  return (
  <div className={styles.landingContainer}>
    <Backgroundtext />
    <LandingImage landingImage={landingImage} />
    <LandingContent header={header} subHeader={subHeader} />
  </div>
)
}

export default Landing
