import React, { useState } from 'react'
import GalleryGrid from './GalleryGrid'
import GalleryModal from './GalleryModal'
import data from './imageData'

const ImageGallery = () => {

    const [modalVisibility, setModalVisibilty] = useState(false)
    const [currentImageID, setCurrentImageID] = useState(0)

    const showModal = e => {
        setModalVisibilty(true)
        setCurrentImageID(e.target.id)
    }

    const forward = () => {
        if (currentImageID < data.length - 1) {
            setCurrentImageID(parseInt(currentImageID) + 1)
        }
    }

    const back = () => {
        if (currentImageID > 0) {
            setCurrentImageID(parseInt(currentImageID) - 1)
        }
    }

    const hideModal = () => setModalVisibilty(false)

    return (
        <div>
            <h1>Image Gallery</h1>
            <GalleryGrid showModal={showModal} />
            <GalleryModal visible={modalVisibility} hideModal={hideModal} currentImageID={currentImageID} forward={forward} back={back} />
        </div>
    )
}

export default ImageGallery
