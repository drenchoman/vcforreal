import ShopListItem from './ShopListItem'

const ShopList = (props) => {
  const {shops} = props

  return <ul role="list" className="grid">
  {shops.map( shop =>
    <ShopListItem shop={shop} key={shop.name} />)}
    </ul>

}

export default ShopList
