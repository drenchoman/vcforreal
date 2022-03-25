import styles from './Filter.module.css'
import {useState} from 'react'
import arrowDown from '../../public/svgs/cardArrow.svg'
import FieldSet from './FieldSet'
import Image from 'next/image'

const CategoryFilter = ({header, changeCheck, changeFilter, checkBox,}) => {

  const [filterChecked, setFilterChecked] = useState(false);


  const [state, setState]= useState({
    hype: false,
    americanthrift: false,
    unisex: false,
    japanesethrift: false,
    women: false,
    men: false,
    inclusivesizes: false,
    hypesneak: false,
    jordans: false,
    preloved: false,
    madeinnz: false,
    customsizes: false,
    alterations: false,
    earrings: false,
    rings: false,
    crystals: false,
    opensaturday: false,
    opensunday: false,
    openweekends: false,
    paybykg: false,
  })

  const handleClick = () => {
    setFilterChecked(!filterChecked);
  };

  const handleChange= (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
      setState({
        ...state,
        [e.target.name]: value
      })
      changeCheck(event, e.target.name);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterHeader} onClick={handleClick}>
        <span>Filter</span>
        <div className={filterChecked ? styles.arrowClicked : styles.arrow}>
          <Image
            src={arrowDown}
            width={10}
            height={10}
            alt="Arrow- Click to filter"
          />
        </div>
      </div>
      {filterChecked &&
        <div className={styles.filterDropdown}>
          <select
            className={styles.filterSelect}
            onChange={changeFilter}
            aria-label='Filter Region'>
              <option className={styles.filterOption} value='All'>Filter Region</option>
              <option value='Auckland'>Auckland</option>
              <option value='Hamilton'>Hamilton</option>
              <option value='Wellington'>Wellington</option>
              <option value='Nelson'>Nelson</option>
              <option value='Christchurch'>Christchurch</option>
              <option value='Dunedin'>Dunedin</option>
          </select>
          <span className={styles.focus}></span>
            <FieldSet header={header} changeCheck={changeCheck} checkBox={checkBox}
            hype={state.hype} americanthrift={state.americanthrift} unisex={state.unisex} japanesethrift={state.japanesethrift}
           inclusivesizes={state.inclusivesizes} hypesneak={state.hypesneak} jordans={state.jordans}
            preloved={state.preloved} madeinnz={state.madeinnz} customsizes={state.customsizes} alterations={state.alterations}
            earrings={state.earrings} rings={state.rings} crystals={state.crystals} opensaturday={state.opensaturday} men={state.men} women={state.women}
            opensunday={state.opensunday} openweekends={state.openweekends} paybykg={state.paybykg} handleChange={handleChange}
            />

        </div>


      }
    </div>

  )
};

export default CategoryFilter
