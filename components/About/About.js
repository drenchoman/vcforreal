import styles from './About.module.css'
import AboutImage from './AboutImage'
import { InView } from 'react-intersection-observer'

const About = ({aboutImage}) => {
  return (
    <div className={styles.wrapper}>
    <InView>
      {({inView, ref, entry}) => (
    <h2 ref={ref} className={`${styles.header} ${inView ? styles.headerInView : ""}`}>About us</h2>
  )}
  </InView>
    <div className={styles.textWrapper}>
      <p>This site was created as a way to share my love for Opshopping.</p>
      <AboutImage aboutImage={aboutImage} />
      <p>There are particular feelings you get when you enter an Opshop. Feelings of excitement and fervor as you uncover the treasures hidden inside.</p>
      <p>Nowadays, Opshopping (<i>thrifting if you must</i>) is as popular as ever and everyone knows someone who has a side hustle selling Vintage and Thrifted clothes.</p>
      <p>We have started to recognise the value in quality, well-made, timeless pieces.</p>
      <p>I hope this site will connect you to the modern day Opshop- Shopify Stores, Instagram reseller pages, Trade Me and Marketplace stores.</p>
      <p> As well as the OG Opshops scattered across the country, because nothing quite beats the feeling of finding a pair of jeans your size for $3.</p>
    </div>





    </div>
  )
}

export default About
