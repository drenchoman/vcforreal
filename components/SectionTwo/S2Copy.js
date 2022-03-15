import styles from './SectionTwo.module.css'

const S2Copy = ({text}) => {
  return (
    <div className={styles.copyWrapper}>
    <h2 className={styles.header}>{text}</h2>
    <button className={styles.s2Button}>Find</button>
    </div>
  )
}

export default S2Copy
