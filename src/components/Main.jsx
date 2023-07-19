import React, { useEffect, useState } from 'react';
import imagePencil from '../images/image_pencil.svg';
import Card from './Card.jsx';
import api from '../utils/api.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onDelete}) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getProfile(), api.getInitialCards()])
            .then(([userInfo, cards]) => {
                setUserName(userInfo.name)
                setUserDescription(userInfo.about)
                setUserAvatar(userInfo.avatar)
                cards.forEach(userId => userId = userInfo._id)
                setCards(cards)
                // userId = userInfo._id;
                // profileInfo.setUserInfo(userInfo);
                // section.renderItems(cards.reverse());
                // userId = userInfo._id;
            })
            .catch((error) => {
                console.log(`Ошибка ${error}`)
            });
    }, [])

    return(
        <main className="main">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__container">
                        <img src={userAvatar} alt="аватар пользователя" className="profile__image"/>
                        <div className="profile__image-overlay">
                            <img src={imagePencil} alt="кнопка смены аватара пользователя" className="profile__image-editing" onClick={onEditAvatar}/>
                        </div>
                    </div>
                    <div className="profile__biography">
                        <div className="profile__name">
                            <h1 className="profile__title">{userName}</h1>
                            <button className="profile__button-edit" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__job-title">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__button-add" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map(data => {
                    return (
                    <Card key = {data._id} card={data} onCardClick={onCardClick} onDelete={onDelete} />
                    // <Card card={data} />
                    )
                })}
            </section>
        </main>
    );
}

export default Main;