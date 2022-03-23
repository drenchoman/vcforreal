import styles from './Categories.module.css'
import CategoryItem from './CategoryItem'

const CategoryGrid = ({dummyShops}) => {
  return (
    <div className={styles.cGrid}>
    <ul className={styles.categoryGrid}>
      {dummyShops.map(shop =>
        <CategoryItem key={shop.name} shop={shop} />
      )}
    </ul>
    </div>
  )
}

export default CategoryGrid
