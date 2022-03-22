import styles from './DirectoryLanding.module.css'
import Categories from './Categories'


const DirectoryLanding = ({categories, subHeader}) => {
  return (
    <div className={styles.wrapper}>
    <h2 className={styles.subHeader}>{subHeader}</h2>
      <Categories categories={categories} />
    </div>
  )
}

export default DirectoryLanding
