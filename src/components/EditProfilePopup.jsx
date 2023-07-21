import React from 'react';

function EditProfilePopup() {
    return (
    <PopupWithForm
            name='popup-profile'
            title='Редактировать профиль'
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
        >
            <input type="text" name="name" className="popup__input popup__input_profile_name" placeholder="Имя" minLength={2} maxLength={40} required />
            <span className="popup__input-error popup__input-error_type_name"></span>
            <input type="text" name="about" className="popup__input popup__input_profile_about" placeholder="Должность" minLength={2} maxLength={200} required />
            <span className="popup__input-error popup__input-error_type_about"></span>
        </PopupWithForm>

    )
}

export default EditProfilePopup;