import styles from './SectionFour.module.css'
import Image from 'next/image'
import { InView } from 'react-intersection-observer'

const S4Image = ({className, thriftPic}) => {
  return (
    <InView>
    {({inView, ref, entry}) => (
    <div ref={ref} className={`${className} ${inView ? styles.thriftInView : ""}`}>
      <Image
        width={400}
        height={300}
        alt=""
        src={thriftPic}
      />
    </div>
  )}
  </InView>
  )
}

export default S4Image
