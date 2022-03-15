import styles from './SectionOne.module.css'

const S1Copy = ({text}) => {
  return (
  <div>
    <h2 className={styles.header}>
      {text}<span className={styles.nzSpan}>IN NZ</span>

    <ul className={styles.list}>
    <li className={styles.listOptions}>Opshops</li>
    <li className={styles.listOptions}>Thrift</li>
    <li className={styles.listOptions}>Vintage</li>
    </ul>
    </h2>
  </div>
)
}

export default S1Copy
