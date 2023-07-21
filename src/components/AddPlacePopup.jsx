import React from 'react';
import PopupWithForm from './PopupWithForm.jsx';

function AddPlacePopup() {
    return(
        <PopupWithForm
            name='popup-card'
            title='Новое место'
            titleButton='Создать'
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
        >
            <input type="text" name="name" className="popup__input popup__input_image_name" placeholder="Название" minLength={2} maxLength={30} required />
            <span className="popup__input-error popup__input-error_type_name"></span>
            <input type="url" name="link" className="popup__input popup__input_image_link" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error popup__input-error_type_link"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;