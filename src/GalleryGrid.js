import React from 'react'
import data from './imageData'

const GalleryGrid = props => {

    const images = data.map((image, id) => {
        return (
            <div className='column'>
                <img
                    id={id}
                    src={image.name}
                    alt={image.name}
                    key={id}
                    style={{ width: "100%" }}
                    className='hover-shadow cursor'
                    onClick={props.showModal} />
            </div>
        )
    })

    return (
        <div>
            <div className='row'>
                {images}
            </div>
        </div>
    )
}

export default GalleryGrid
