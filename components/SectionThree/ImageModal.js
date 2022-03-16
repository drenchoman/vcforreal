import {useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom'
import styles from './SectionThree.module.css'

function ImageModal({show, updateModal, children, title,}) {

  const [isBrowser, setIsBrowser] = useState(false);


  useEffect(() => {
    setIsBrowser(true)
    console.log(children)

  },[children]);

  const handleCloseClick = (e) => {
    e.preventDefault();
    updateModal();
  };

const modalContent = show ? (
  <div className={styles.modalOverlay}>
    <div className={styles.modal}>
      <div className={styles.modalHeader}>

        <a href="#"  onClick={handleCloseClick}>
          X
        </a>
      </div>
      <div className={styles.modalContent}>
        {children}
      </div>
    </div>

  </div>

) : null;

  if (isBrowser && show) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  }
else {
    return null;
  }
}

export default ImageModal
