import styles from './Filter.module.css'


const FieldSet = ({changeCheck, header, checkBox, hype, americanthrift, men,
unisex, women, inclusivesizes, hypesneak, jordans, preloved, madeinnz, customsizes, alterations,
earrings, rings, crystals, opensaturday, opensunday, openweekends, payByKg, japanesethrift,
handleChange}) => {

  if(header === 'THRIFT & VINTAGE'){
    return (
        <div className={styles.filterSet}>
        <div className={styles.filterDiv}>
          <label htmlFor="hype">Hype </label>
          <input onChange={handleChange}  type='checkbox' value='Hype'  name='hype' checked={hype} id='hype'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='americanthrift'> American Thrift </label>
          <input onChange={handleChange} type='checkbox' value='American Thrift' name='americanthrift' checked={americanthrift} id='americanthrift'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='unisex'> Unisex </label>
          <input onChange={handleChange} type='checkbox' value='Unisex' name='unisex' checked={unisex} id='unisex'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='japanesethrift'> Japanese Thrift </label>
          <input onChange={handleChange} type='checkbox' value='Japanese Thrift' name='japanesethrift' checked={japanesethrift} id='japanesethrift'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='women'>Women</label>
          <input onChange={handleChange} type='checkbox' value='Women' name='women' checked={women} id='women'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='inclusive'>Inclusive Sizes</label>
          <input onChange={handleChange} type='checkbox' value='Inclusive' name='inclusivesizes' checked={inclusivesizes} id='inclusive'/>
        </div>
        </div>

    )
  } else if (header === 'FOOTWEAR'){
    return(
      <div className={styles.filterSet}>
        <div className={styles.filterDiv}>
          <label htmlFor="hypesneak">Hype </label>
          <input onChange={handleChange} type='checkbox' value='Hype' name='hypesneak' checked={hypesneak} id='hypesneak'/>
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
  } else if (header === 'UPCYCLING'){
    return(
      <div className={styles.filterSet}>
        <div className={styles.filterDiv}>
          <label htmlFor="madeinnz">Made in NZ</label>
          <input onChange={handleChange} type='checkbox' value='Made in NZ' name='madeinnz' checked={madeinnz} id='madeinnz'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='customsizes'>Custom Sizes</label>
          <input onChange={handleChange} type='checkbox' value='Made to Measure' name='customsizes' checked={customsizes} id='customsizes'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='alterations'>Alterations</label>
          <input onChange={handleChange} type='checkbox' value='Alterations' name='alterations' checked={alterations} id='alterations' />
        </div>
      </div>

    )
  } else if (header === 'JEWELLERY'){
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
  } else if (header === 'OPSHOPS'){
    return (
      <div className={styles.filterSet}>
        <div className={styles.filterDiv}>
          <label htmlFor='opensaturday'>Open Saturday </label>
          <input onChange={handleChange} type='checkbox' value='Open Saturday' name='opensaturday' checked={opensaturday} id='opensaturday'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='opensunday'>Open Sunday</label>
          <input onChange={handleChange} type='checkbox' value='Open Sunday' name='opensunday' checked={opensunday} id='opensunday'/>
        </div>
        <div className={styles.filterDiv}>
          <label htmlFor='openweekends'>Open Weekends </label>
          <input onChange={handleChange} type='checkbox' value='Open Weekends' name='openweekends' checked={openweekends} id='openweekends'/>
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
