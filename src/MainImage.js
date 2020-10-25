import React from "react";

const MainImage = (props) => {
    return (
        <div className="main-image">
            <img src={props.imageName} alt={props.imageName} className='modal-main-image' />
        </div>
    );
};

export default MainImage;
