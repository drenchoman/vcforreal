import styles from './Categories.module.css'
import CategoryImage from './CategoryImage'
import CategoryItem from './CategoryItem'
import CategoryGrid from './CategoryGrid'
import CategoryFilter from './CategoryFilter'
import {useState, useEffect} from 'react'

const Categories = ({header, subHeader, catImage, addToCart, activeHearts, updateHeartState, heartId, dummyShops }) => {

  const [checkBox, setCheckBox] = useState([]);
  const [stores, setStores] = useState(dummyShops)
  const [filterParam, setFilterParam] = useState(['All'])

  const changeCheck = (e) => {
    if (e.target.checked) {
      setCheckBox(checkBox => [...checkBox, e.target.value]);
      console.log(checkBox, 'checkBox')
    } else {
      setCheckBox(checkBox.filter(item => item !== e.target.value));
      console.log('checkBox', 'checkbox else')
    }
  }

  const changeFilter = (e) => {
    setFilterParam(e.target.value)
    console.log(filterParam, 'filterParam')
  }

const returnCheckBox = (stores) => {
  let newStores = stores.filter((newItem) => {
    console.log(checkBox)
    return newItem.tags.some(tag => checkBox[tag] === true
  )
})

console.log(newStores, "newStores")
// return newStores
}

const returnFilter = (stores) => {
  let filteredArray = dummyShops.filter((item) => {
    if (item.region == filterParam) {
      return dummyShops.filter((newItem) => {
        return newItem.region == filterParam
        console.log(dummyShops, "FILTEREED")
      });
      setStores(filteredArray)
    } else if (filterParam == 'All'){
      return dummyShops.filter((newItem) => {
        return newItem
      });
    }
  })

  setStores(filteredArray)

}

useEffect (() =>{
returnFilter(stores)
returnCheckBox(stores)
console.log(stores, "DUMMY SHOPS")
},[filterParam, checkBox])


  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.textDiv}>
          <h2 className={styles.header}>{header}</h2>
          <h3 className={styles.subHeader}>{subHeader}</h3>
        </div>
        <CategoryImage catImage={catImage} />
        <CategoryFilter header={header} changeFilter={changeFilter} changeCheck={changeCheck} checkBox={checkBox} />
      </div>
      <CategoryGrid addToCart={addToCart} activeHearts={activeHearts} updateHeartState={updateHeartState} heartId={heartId} dummyShops={stores}  />
    </div>
  )
}

export default Categories
