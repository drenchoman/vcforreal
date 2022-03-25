import styles from './Filter.module.css'
import {useState} from 'react'
import arrowDown from '../../public/svgs/cardArrow.svg'
import FieldSet from './FieldSet'
import Image from 'next/image'

const CategoryFilter = ({header, changeCheck, changeFilter, checkBox}) => {

  const [filterChecked, setFilterChecked] = useState(false);

  const [state, setState]= useState({
    hype: false,
    americanThrift: false,
    unisex: false,
    japaneseThrift: false,
    women: false,
    men: false,
    inclusiveSizes: false,
    hypeSneak: false,
    jordans: false,
    preloved: false,
    madeInNz: false,
    customSizes: false,
    alterations: false,
    earrings: false,
    rings: false,
    crystals: false,
    openSaturday: false,
    openSunday: false,
    openWeekends: false,
    payByKg: false,
  })

  const handleClick = () => {
    setFilterChecked(!filterChecked);
  };

  const handleChange= (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
      console.log(value, 'value')
      setState({
        ...state,
        [e.target.name]: value
      })
      changeCheck(e);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterHeader} onClick={handleClick}>
        <span>Filter</span>
        <div className={filterChecked ? styles.arrowClicked : styles.arrow}>
          <Image
            src={arrowDown}
            width={15}
            height={15}
            alt="Arrow- Click to filter"
          />
        </div>
      </div>
      {filterChecked &&
        <div className={styles.filterDropdown}>
          <select
            className={styles.filterSelect}
            onChange={changeFilter}
            aria-label='Filter by Region'>
              <option className={styles.filterOption} value='All'>Fitler by Region</option>
              <option value='Auckland'>Auckland</option>
              <option value='Hamilton'>Hamilton</option>
              <option value='Wellington'>Wellington</option>
              <option value='Nelson'>Nelson</option>
              <option value='Christchurch'>Christchurch</option>
              <option value='Dunedin'>Dunedin</option>
          </select>
          <span className={styles.focus}></span>
            <FieldSet header={header} changeCheck={changeCheck} checkBox={checkBox}
            hype={state.hype} americanThrift={state.americanThrift} unisex={state.unisex} japaneseThrift={state.japaneseThrift}
            women={state.women} inclusiveSizes={state.inclusiveSizes} hypeSneak={state.hypeSneak} jordans={state.jordans}
            preloved={state.preloved} madeInNz={state.madeInNz} customSizes={state.customSizes} alterations={state.alterations}
            earrings={state.earrings} rings={state.rings} crystals={state.crystals} openSaturday={state.openSaturday} men={state.men} women={state.women}
            openSunday={state.openSunday} openWeekends={state.openWeekends} payByKg={state.payByKg} handleChange={handleChange}
            />

        </div>


      }
    </div>
  )
};

export default CategoryFilter
