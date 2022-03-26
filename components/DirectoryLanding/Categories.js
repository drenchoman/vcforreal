import styles from './DirectoryLanding.module.css'
import CategoryItem from './CategoryItem'

const Categories = ({categories, className}) => {
  return (
    <ul className={`${styles.cardContainer} ${className}`}>
    {categories.map(cat =>
      <CategoryItem key={cat.name} cat={cat} />
    )}
    </ul>
  )
}


export default Categories
