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
        let checked = ((prev) => ({
        ...prev,
        [e.target.name]: e.target.checked,
      }));
      console.log(checkBox)
      setCheckBox(checked)
      console.log("change check")
  }

  const changeFilter = (e) => {
    setFilterParam(e.target.value)
  }

// Issue could be with this could check if object contains true value
// ISSSUE IS WITH MY LOGIC, CANT WORK IT OUT BUT NEARLY HAVE IT. CURRENT STATUS 8/10


const hasCategoryFilter = Object.values(checkBox).includes(true);

const returnCheckBox = (stores) => {
  if (hasCategoryFilter) {
  let newStores = stores.filter((newItem) => {
    return newItem.tags.some(tag => checkBox[tag.toLowerCase()] === true
    )
  })
} else if (hasCategoryFilter === false){
  console.log("BOOP BOOP")
  setStores(dummyShops)
  return dummyShops
} else{
  // unsure if this gets used at all
  newStores = dummyShops
  return newStores
}
console.log("checkcheck")
console.log(newStores, "NEW STORES FILTERRED")
  setStores(newStores)
  return newStores
};




// NEED TO FIX, CANT ADD MULTIPLE FILTERS

const returnFilter = (stores) => {
  let filteredArray = stores.filter((item) => {
    if (item.region == filterParam) {
      return stores.filter((newItem) => {
        return newItem.region == filterParam
      });
      setStores(filteredArray)
    } else if (filterParam == 'All'){
      return stores.filter((newItem) => {
        return newItem
      });
    }
  })

  setStores(filteredArray)
  return filteredArray
}

const updateStores = () => {
  returnFilter(stores);
  returnCheckBox(stores);
};

useEffect (() =>{
  let storesToFilter = returnCheckBox(stores);
    returnFilter(storesToFilter);


  console.log("useEffect1 triggered")


},[filterParam]);

useEffect (() => {
  let storesToFilter = returnFilter(dummyShops);
  returnCheckBox(storesToFilter);
  console.log(stores)
  console.log("<<<<<<effect 2 triggered>>>>>>>>")
  console.log(filterParam, "filterParam")

},[checkBox]);

useEffect(() => {
  setStores(dummyShops)
},[])




  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.textDiv}>
          <h2 className={styles.header}>{header}</h2>
          <h3 className={styles.subHeader}>{subHeader}</h3>
        </div>
        <CategoryImage catImage={catImage} />
      </div>
      <CategoryGrid addToCart={addToCart} activeHearts={activeHearts} updateHeartState={updateHeartState} heartId={heartId} dummyShops={stores}>
      <CategoryFilter  header={header} changeFilter={changeFilter} changeCheck={changeCheck} checkBox={checkBox} />
  </CategoryGrid>
    </div>
  )
}

export default Categories
