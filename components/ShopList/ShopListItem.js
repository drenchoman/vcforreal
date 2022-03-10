import Image from 'next/image'
import styles from './ShopListItem.module.css'

const ShopListItem = (props) => {


  const {shop} = props

  return <li className={styles.ShopListItem}>
  <div className={styles.Title}>
    <h2>{shop.name}</h2>
    <p>{shop.description}</p>
  </div>
    <div className={styles.ImageContainer}>
      <Image
        src={shop.image}
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>

    </li>
}

export default ShopListItem
