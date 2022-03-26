import styles from './Explore.module.css'
import {useEffect, useState} from 'react'
import ExploreGrid from './ExploreGrid'
const Explore = ({gridImages}) => {


  return (
    <div className={styles.wrapper}>

      <ExploreGrid gridImages={gridImages} />

    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://picsum.photos/v2/list")
  const gridImages = await res.json();
  return {
    props:{
      gridImages
    }
  }
}

export default Explore
