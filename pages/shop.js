import ShopList from '../components/ShopList'

const shops = [
  { name: "Portage Store",
    description: "An amazing store",
    image: "/images/1.jpg"
  },
    {
      name: "Good ole Vintage",
      description: "Really good, and old.",
      image: "/images/2.jpg"
    },
    {
      name: "Super Vintage Friends",
      description: "The most super vintage",
      image: "/images/3.jpg"
    },
    {
      name: "Churchi",
      description: "What even is a Churchi?",
      image: "/images/4.jpg",
    }
]

export default function Shop(){
  return (
  <main>
    <div className="lockup">
      <h1>A curation of our favourite stores</h1>
    </div>
  <ShopList shops={shops} />
  </main>
)
}
