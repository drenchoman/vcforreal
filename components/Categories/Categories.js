import styles from './Categories.module.css'
import CategoryImage from './CategoryImage'
import CategoryItem from './CategoryItem'
import CategoryGrid from './CategoryGrid'

const Categories = ({header, subHeader, catImage, dummyShops, addToCart, activeHearts, updateHeartState, heartId }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.textDiv}>
          <h2 className={styles.header}>{header}</h2>
          <h3 className={styles.subHeader}>{subHeader}</h3>
        </div>
        <CategoryImage catImage={catImage} />
      </div>
      <CategoryGrid dummyShops={dummyShops} addToCart={addToCart} activeHearts={activeHearts} updateHeartState={updateHeartState} heartId={heartId} />
    </div>
  )
}

export default Categories
