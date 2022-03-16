import styles from './SectionThree.module.css'
import Image from 'next/image'
import CTE from 'react-click-to-edit'
import ImageModal from './ImageModal'
import react, {useState, useEffect} from 'react';
const S3Image = ({heart, shops, insta, pc}) => {

  const [showModal , setShowModal] = useState(false);

  const updateModal = (e) =>{
    setShowModal(!showModal);
    
  }

  return(
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.cardName}>
          <CTE
            initialValue={shops.name}
          />

        </div>
        <div className={styles.heartContainer}>
          <div>
            <Image
              width={50}
              height={50}
              src={heart}
            />
          </div>
        </div>
      </div>
      <div className={styles.cardMiddle}>
        <div className={styles.cardRegion}>
          <CTE
            initialValue={shops.region}
          />
        </div>
        <div className={styles.cardDescription}>
          <CTE
            initialValue={shops.description}
          />
        </div>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.linksContainer}>
          <h3>Visit</h3>
          <div className={styles.linksDiv}>
              {shops.instagram && <div>
                <Image
                  width={30}
                  height={30}
                  src={insta}
                />
              </div> }
              {shops.website && <div>
                <Image
                  width={30}
                  height={30}
                  src={pc}
                />
              </div>}
          </div>

        </div>
        <div className={styles.cardImagesContainer}>
          <ul className={styles.grid}>
            <li><div onClick={updateModal}>
              <Image
                width={110}
                height={110}
                src={shops.images[0]}
              />
            </div>

              <ImageModal
                updateModal={updateModal}
                show={showModal}
                >
                  <Image
                      width={400}
                      height={300}
                      src={shops.images[0]}
                    />

                </ImageModal>


            </li>
            <li>
              <Image
                onClick={updateModal}
                width={110}
                height={110}
                src={shops.images[1]}
              />
              <ImageModal
                updateModal={updateModal}
                show={showModal}
              > <Image
                  width={400}
                  height={300}
                  src={shops.images[1]}
                />
            </ImageModal>
            </li>
            <li>
              <Image
                width={110}
                height={110}
                src={shops.images[2]}
              />
            </li>
            <li>
              <Image
                width={110}
                height={110}
                src={shops.images[3]}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default S3Image
