import S1CardItem from './S1CardItem'
import styles from './SectionOne.module.css'


const S1Card = (props) => {
  const {categories} = props
  return (
  <ul className={styles.list}>
  {categories.map(cat =>
    <S1CardItem cat={cat} key={cat.name} />
  )}
  </ul>
)
}

export default S1Card
