import styles from './About.module.css'
import AboutImage from './AboutImage'

const About = ({aboutImage}) => {
  return (
    <div className={styles.wrapper}>
    <h2>Hello World</h2>
    <p>Here I am Opshopping</p>
    <AboutImage aboutImage={aboutImage} />
    </div>
  )
}

export default About
