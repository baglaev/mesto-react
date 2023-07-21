import React from 'react';
import PopupWithForm from './PopupWithForm.jsx';
import useFormValidator from '../utils/useFormValidator.js';

function EditProfilePopup({isOpen, onClose}) {
    const {values, errors, hideInput, isValid, handleChange} = useFormValidator();
    console.log(errors.name)

    return (
        <PopupWithForm
            name='popup-profile'
            title='Редактировать профиль'
            isOpen={isOpen}
            onClose={onClose}
        >
            <input type="text" name="name" className="popup__input popup__input_profile_name" placeholder="Имя" minLength={2} maxLength={40} required onChange={handleChange} />
            <span className="popup__input-error popup__input-error_type_name">{errors.name}</span>
            <input type="text" name="about" className="popup__input popup__input_profile_about" placeholder="Должность" minLength={2} maxLength={200} required onChange={handleChange} />
            <span className="popup__input-error popup__input-error_type_about">{errors.about}</span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;