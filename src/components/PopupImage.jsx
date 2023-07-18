import React from "react";

function PopupImage({card, isOpen, onClose}) {
    return(
        // <div className="popup popup-image popup-image_background">
        <div className={`popup popup-image popup-image_background ${isOpen && 'popup_opened'}`}>
            <div className="popup-image__container">
                <button className="popup__button-close" type="button" onClick={onClose}></button>
                <img src={card.link ? card.link : '#'} alt={card.name ? `${card.name}` : '#'} className="popup-image__photo"/>
                <h2 className="popup-image__title">{card.name}</h2>
            </div>
        </div>
    )
}

export default PopupImage;