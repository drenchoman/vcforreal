import styles from './Explore.module.css'
import {useEffect, useState} from 'react'
import ExploreGrid from './ExploreGrid'
const Explore = ({gImages}) => {


  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Explore</h2>
      <ExploreGrid gImages={gImages}/>

    </div>
  )
}


export default Explore
