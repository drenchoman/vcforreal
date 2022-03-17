import styles from './SectionThree.module.css'
import ReactDOM from 'react-dom'
import Image from 'next/image'
import React from 'react'


const S3ImageUpload =({shops}) => {

  const uploadedImage = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file){
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file
      reader.onload = (e) => {
        current.src = e.target.result
        console.log(current.src)
      }
      reader.readAsDataURL(file)

    }
  };

  return (
  <div className={styles.imageUploadWrapper}>
    <input type="file" accept="image/*" multiple = "false" onChange={handleImageUpload} />
    <img className={styles.uploadedImage}
      ref={uploadedImage}
    />
  </div>

)
}

export default S3ImageUpload
