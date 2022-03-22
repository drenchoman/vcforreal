import styles from './Categories.module.css'
import CategoryItem from './CategoryItem'

const CategoryGrid = ({dummyShops}) => {
  return (
    <ul className={styles.categoryGrid}>
      {dummyShops.map(shop =>
        <CategoryItem key={shop.name} shop={shop} />
      )}
    </ul>
  )
}

export default CategoryGrid
