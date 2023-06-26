import React from 'react';
import imagePencil from '../images/image_pencil.svg';

function Main() {
    return(
        <main className="main">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__container">
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
    );
}

export default Main;