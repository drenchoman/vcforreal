import Image from 'next/image'

const NavbarFav = ({heart, className}) => {
  return(
  <div className={className}>
    <Image
      width={30}
      height={30}
      alt=''
      src={heart}
      />
  </div>
)
}

export default NavbarFav
