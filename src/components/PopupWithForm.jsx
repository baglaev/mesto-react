import React from 'react';

function PopupWithForm({name, title, titleButton, children, isOpen, onClose}) {
    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`} onClick={onClose} >
            <div className="popup__container">
                <button className="popup__button-close" type="button" onClick={onClose}></button>
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form" name={name} noValidate="">
                    {children}
                    <button type="submit" className="popup__button-save">{titleButton || 'Сохранить'}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;