import styles from './SectionThree.module.css';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import S3ImageUpload from './S3ImageUpload';
import React, {useState} from 'react';


const S3CardImage = ({image, id}) => {

  const uploadedImage = React.useRef(null);

  const [hideImage, setHideImage] = useState(false);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file){
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file
      reader.onload = (e) => {
        current.src = e.target.result
        setHideImage(true);
      }
      reader.readAsDataURL(file)

    }
  };


  return (
    <div>
      <div className={styles.uploadWrapper}>
        <input className={styles.imageInput} id={id} type="file" accept="image/*" multiple ={false} onChange={handleImageUpload}/>
      <label htmlFor={id}>
        <img className={`${hideImage ? styles.uploadedImage : styles.uploadedImageHidden}`}
          ref={uploadedImage}
          />
      </label>
      </div>

    <div className={`${hideImage ? styles.cardImageHidden : styles.cardImage}`}>
      <label className={styles.labeli} htmlFor={id}>
      <Image
        width={150}
        height={150}
        src={image}

      />
      </label>
    </div>
    </div>
  )
}





export default S3CardImage
