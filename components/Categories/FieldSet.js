import styles from './Filter.module.css'


const FieldSet = ({changeCheck, header, checkBox, hype, americanThrift, men,
unisex, women, inclusiveSizes, hypeSneak, jordans, preloved, madeInNz, customSizes, alterations,
earrings, rings, crystals, openSaturday, openSunday, openWeekends, payByKg, japaneseThrift,
handleChange}) => {

  if(header === 'Thrift & Vintage'){
    return (
        <div className={styles.filterSet}>
        <div className={styles.filterDiv}>
          <label htmlFor="hype">Hype </label>
          <input onChange={handleChange}  type='checkbox' value='Hype'  name='hype' checked={hype} id='hype'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='americanThrift'> American Thrift </label>
          <input onChange={handleChange} type='checkbox' value='American Thrift' name='americanThrift' checked={americanThrift} id='americanThrift'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='unisex'> Unisex </label>
          <input onChange={handleChange} type='checkbox' value='Unisex' name='unisex' checked={unisex} id='unisex'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='japaneseThrift'> Japanese Thrift </label>
          <input onChange={handleChange} type='checkbox' value='Japanese Thrift' name='japaneseThrift' checked={japaneseThrift} id='japaneseThrift'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='women'>Women</label>
          <input onChange={handleChange} type='checkbox' value='Women' name='women' checked={women} id='women'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='inclusive'>Inclusive Sizes</label>
          <input onChange={handleChange} type='checkbox' value='Inclusive' name='inclusiveSizes' checked={inclusiveSizes} id='inclusive'/>
        </div>
        </div>

    )
  } else if (header === 'FOOTWEAR'){
    return(
      <div className={styles.filterSet}>
        <div className={styles.filterDiv}>
          <label htmlFor="hypeSneak">Hype </label>
          <input onChange={handleChange} type='checkbox' value='Hype' name='hypeSneak' checked={hypeSneak} id='hypeSneak'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='jordans'>Jordans</label>
          <input onChange={handleChange} type='checkbox' value='Jordans' name='jordans' checked={jordans} id='jordans'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='preloved'>Preloved</label>
          <input onChange={handleChange} type='checkbox' value='Preloved' name='preloved' checked={preloved} />
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='unisex'>Unisex</label>
          <input onChange={handleChange} type='checkbox' value='Unisex' name='unisex' checked={unisex} />
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='men'>Men</label>
          <input onChange={handleChange} type='checkbox' value='Men' name='men' checked={men} />
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='women'>Women</label>
          <input onChange={handleChange} type='checkbox' value='Women' name='women' checked={women} />
        </div>
      </div>
    )
  } else if (header === 'Upcycling'){
    return(
      <div className={styles.filterSet}>
        <div className={styles.filterDiv}>
          <label htmlFor="madeInNz">Made in NZ</label>
          <input onChange={handleChange} type='checkbox' value='Made in NZ' name='madeInNz' checked={madeInNz} id='madeInNz'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='customSizes'>Custom Sizes</label>
          <input onChange={handleChange} type='checkbox' value='Made to Measure' name='customSizes' checked={customSizes} id='customSizes'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='alterations'>Alterations</label>
          <input onChange={handleChange} type='checkbox' value='Alterations' name='alterations' checked={alterations} id='alterations' />
        </div>
      </div>

    )
  } else if (header === 'Jewellery'){
    return(
      <div className={styles.filterSet}>
        <div className={styles.filterDiv}>
          <label htmlFor='earrings'>Earrings </label>
          <input onChange={handleChange} type='checkbox' value='Earrings' name='earrings' checked={earrings} id='earrings'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='rings'>Rings</label>
          <input onChange={handleChange} type='checkbox' value='Rings' name='rings' checked={rings} id='rings'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='crystals'>Crystals </label>
          <input onChange={handleChange} type='checkbox' value='Crystals' name='crystals' checked={crystals} id='crystals'/>
        </div>
      </div>
    )
  } else if (header === 'Opshops'){
    return (
      <div className={styles.filterSet}>
        <div className={styles.filterDiv}>
          <label htmlFor='openSaturday'>Open Saturday </label>
          <input onChange={handleChange} type='checkbox' value='Open Saturday' name='openSaturday' checked={openSaturday} id='openSaturday'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='openSunday'>Open Sunday</label>
          <input onChange={handleChange} type='checkbox' value='Open Sunday' name='openSunday' checked={openSunday} id='openSunday'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='openWeekends'>Open Weekends </label>
          <input onChange={handleChange} type='checkbox' value='Open Weekends' name='openWeekends' checked={openWeekends} id='openWeekends'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='payByKg'> Pay BY KG </label>
          <input onChange={handleChange} type='checkbox' value='Pay BY KG' name='payByKg' checked={payByKg} id='payByKg'/>
        </div>
      </div>
    )
  }

}

export default FieldSet
