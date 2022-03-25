import styles from './Categories.module.css'
import CategoryItem from './CategoryItem'

const CategoryGrid = ({children, dummyShops, addToCart, activeHearts, updateHeartState, heartId}) => {


  return (
    <div className={styles.cGrid}>
    {children}
    <ul className={styles.categoryGrid}>
      {dummyShops.map(shop =>
        <CategoryItem key={shop.id} shop={shop} addToCart={addToCart} activeHearts={activeHearts} updateHeartState={updateHeartState} heartId={heartId} />
      )}
    </ul>
    </div>
  )
}

export default CategoryGrid
