import LandingImage from './LandingImage'
import LandingContent from './LandingContent'
import styles from './Landing.module.css'
import {useEffect} from 'react'

const Landing = ({landingImage}) => {


  return (
  <div className={styles.landingContainer}>
    <LandingImage landingImage={landingImage} />
    <LandingContent />
  </div>
)
}

export default Landing
