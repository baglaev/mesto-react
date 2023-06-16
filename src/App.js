import './index.css';
import logoHeader from './images/logo_header.svg';
import imagePencil from './images/image_pencil.svg';

function App() {
  return (
    <div className="App">
      <body className="page">
    <header className="header">
        <img src={logoHeader} alt="логотип Mesto" className="header__logo"/>
    </header>
    <main className="main">
        <section className="profile">
            <div className="profile__info">
                <div class="profile__container">
                    <img src="<%=require('./images/avatar.png')%>" alt="аватар пользователя" className="profile__image"/>
                    <div className="profile__image-overlay">
                        <img src={imagePencil} alt="кнопка смены аватара пользователя" className="profile__image-editing"/>
                    </div>
                </div>
                <div className="profile__biography">
                    <div className="profile__name">
                        <h1 className="profile__title"></h1>
                        <button className="profile__button-edit" type="button" aria-label="Редактировать"></button>
                    </div>
                    <p className="profile__job-title"></p>
                </div>
            </div>
            <button className="profile__button-add" type="button" aria-label="Добавить"></button>
        </section>
        <section className="elements">
        </section>
    </main>
    <footer className="footer">
        <p className="footer__logo">&#169; 2023 Mesto Russia</p>
    </footer>
    <div className="popup popup-profile">
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
    </div>
    <div className="popup popup-image popup-image_background">
        <div className="popup-image__container">
            <button className="popup__button-close" type="button"></button>
            <img src="#" alt="#" className="popup-image__photo"/>
            <h2 className="popup-image__title"></h2>
        </div>
    </div>
    <div className="popup popup-delete">
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
    </template>
</body>
    </div>
  );
}

export default App;
