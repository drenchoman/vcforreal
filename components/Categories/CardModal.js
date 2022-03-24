import {Lightbox} from 'react-modal-image'
import {useState, useEffect} from 'react'
const CardModal = ({modalOpen, modalImage, handleModalClose}) => {

  const handleClose = () =>{
    setOpen(false);
    handleClose
  }

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(modalOpen){
      setOpen(true)
    } else if(modalOpen === false){
      setOpen(false)
    }
  },[modalOpen])

  return(
    <>
    {open ? <Lightbox
        medium={modalImage}
        onClose={handleClose}
        hideDownload={true}
        hideZoom={true}
    /> : ""}
    </>
  )
}

export default CardModal
