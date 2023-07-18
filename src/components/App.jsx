import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';
// import Card from './Card.jsx';
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [imagePopup, setImagePopup] = useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setImagePopup(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card)
    setImagePopup(true)
  }

  return (
    <div className="page">
        <Header />
        <Main 
            onEditProfile= {handleEditProfileClick}
            onAddPlace = {handleAddPlaceClick}
            onEditAvatar = {handleEditAvatarClick}
            onCardClick = {handleCardClick}
        />
        <Footer />
        <PopupWithForm
            name='popup-profile'
            title='Редактировать профиль'
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
        >
            <input type="text" name="name" className="popup__input popup__input_profile_name" placeholder="Имя" minLength={2} maxLength={40} required=""/>
            <span className="popup__input-error popup__input-error_type_name"></span>
            <input type="text" name="about" className="popup__input popup__input_profile_about" placeholder="Должность" minLength={2} maxLength={200} required=""/>
            <span className="popup__input-error popup__input-error_type_about"></span>
        </PopupWithForm>

        <PopupWithForm
            name='popup-card'
            title='Новое место'
            titleButton='Создать'
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
        >
            <input type="text" name="name" className="popup__input popup__input_image_name" placeholder="Название" minLength={2} maxLength={30} required=""/>
            <span className="popup__input-error popup__input-error_type_name"></span>
            <input type="url" name="link" className="popup__input popup__input_image_link" placeholder="Ссылка на картинку" required=""/>
            <span className="popup__input-error popup__input-error_type_link"></span>
        </PopupWithForm>

        <PopupWithForm
            name='popup-delete"'
            title='Вы уверены?'
            titleButton='Да'
        />

        <PopupWithForm
            name='popup-avatar'
            title='Обновить аватар'
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
        >
            <input type="url" name="avatar" className="popup__input popup__input_image_avatar" placeholder="Ссылка на картинку" required=""/>
            <span className="popup__input-error popup__input-error_type_avatar"></span>
        </PopupWithForm>

        <ImagePopup card={selectedCard} isOpen={imagePopup} onClose={closeAllPopups}/>

        {/* <div className="popup popup-profile">
            <div className="popup__container">
                <button className="popup__button-close" type="button"></button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="popup__form" name="form-edit">
                    <input type="text" name="name" className="popup__input popup__input_profile_name" placeholder="Имя" minlength="2" maxlength="40" required/>
                    <span className="popup__input-error popup__input-error_type_name"></span>
                    <input type="text" name="about" className="popup__input popup__input_profile_about" placeholder="Должность" minlength="2" maxlength="200" required/>
                    <span className="popup__input-error popup__input-error_type_about"></span>
                    <button type="submit" className="popup__button-save">Сохранить</button>
                </form>
            </div>
        </div>
        <div className="popup popup-card">
            <div className="popup__container">
                <button className="popup__button-close" type="button"></button>
                <h2 className="popup__title">Новое место</h2>
                <form className="popup__form" name="form-edit" novalidate>
                    <div className="popup__field">
                        <input type="text" name="name" className="popup__input popup__input_image_name" placeholder="Название" minlength="2" maxlength="30" required/>
                        <span className="popup__input-error popup__input-error_type_name"></span>
                        <input type="url" name="link" className="popup__input popup__input_image_link" placeholder="Ссылка на картинку" required/>
                        <span className="popup__input-error popup__input-error_type_link"></span>
                    </div>
                    <button type="submit" className="popup__button-save">Сохранить</button>
                </form>
            </div>
        </div> */}
        {/* <div className="popup popup-image popup-image_background">
            <div className="popup-image__container">
                <button className="popup__button-close" type="button"></button>
                <img src="#" alt="#" className="popup-image__photo"/>
                <h2 className="popup-image__title"></h2>
            </div>
        </div> */}
        {/* <div className="popup popup-delete">
            <div className="popup__container">
                <button className="popup__button-close" type="button"></button>
                <h2 className="popup__title">Вы уверены?</h2>
                <form className="popup__form" novalidate>
                    <button type="submit" className="popup__button-save popup__button-save_active">Да</button>
                </form>
            </div>
        </div>
        <div className="popup popup-avatar">
            <div className="popup__container">
                <button className="popup__button-close" type="button"></button>
                <h2 className="popup__title">Обновить аватар</h2>
                <form className="popup__form" name="form-edit" novalidate>
                    <div className="popup__field">
                        <input type="url" name="avatar" className="popup__input popup__input_image_avatar" placeholder="Ссылка на картинку" required/>
                        <span className="popup__input-error popup__input-error_type_avatar"></span>
                    </div>
                    <button type="submit" className="popup__button-save">Сохранить</button>
                </form>
            </div>
        </div>
        <template id="cardTemplate">
            <article className="element">
                <button className="element__button-delete" type="button" aria-label="Удалить"></button>
                <img src="#" alt="#" className="element__image"/>
                <div className="element__title">
                    <h2 className="element__name"></h2>
                    <div className="element__group-like">
                        <button className="element__button-like" type="button" aria-label="Лайкнуть"></button>
                        <p className="element__counter-like"></p>
                    </div>
                </div>
            </article>
        </template> */}
    </div>
  );
}

export default App;
