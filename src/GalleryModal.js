import React from 'react'
import MainImage from './MainImage'
import data from './imageData'

const GalleryModal = (props) => {

    return (
        <div className={props.visible === true ? "modal-visable" : "modal-hidden"}>
            <div className="modal">
                <MainImage imageName={data[props.currentImageID].name} />
                <div className="navigation">
                    <div onClick={props.back} className="back">Prev</div>
                    <div onClick={props.forward} className="forward">Next</div>
                    <button onClick={props.hideModal} className="close">X</button>
                </div>
            </div>
        </div>
    )

}

export default GalleryModal
