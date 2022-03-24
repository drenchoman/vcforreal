import styles from './Card.module.css'
import Image from 'next/image'
import {useState, useRef} from 'react'
import {Lightbox} from 'react-modal-image'
import CardModal from './CardModal'
const CardImages = ({images}) => {

  const [modalOpen, setModalOpen]= useState(false);

  const [modalImage, setModalImage] = useState("")

  const handleClick = (e) => {
     setModalOpen(!modalOpen)
     setModalImage(e);
     console.log(modalImage)
  }

  const handleModalClose = () => {
    setModalImage("")
    setModalOpen(!modalOpen);
  }

  return(
    <>
      {images.map((image, index )=> (
        <>
        <li key={index} onClick={() => handleClick(image)} className={styles.imageContainer}>
          <Image
            width={115}
            height={115}
            alt=""
            src={image}
          />
        </li>

        </>
      ))}
      {modalOpen && <CardModal modalImage={modalImage} modalOpen={modalOpen} handleModalClose={handleModalClose} />}

    </>
  )
  }


export default CardImages
