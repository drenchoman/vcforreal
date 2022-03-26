import styles from './About.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Findmeajob = ({github, text, cta}) => {
  return (
    <div className={styles.jobme}>
      <h3 className={styles.subHeader}>By the way...</h3>
      <p>{text}</p>
      <div className={styles.githubwrapper}>
        <Link href='https://github.com/drenchoman/drenchoman' passHref>
        <div className={styles.github}>
          <Image
            height={30}
            width={30}
            alt="Link to Drenchoman Github"
            src={github}
          />
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Findmeajob
