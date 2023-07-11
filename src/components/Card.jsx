import React from "react";

function Card({card, onCardClick}) {
    return(
        <article className="element">
            <button className="element__button-delete" type="button" aria-label="Удалить"></button>
            <img src={card.link} alt={card.name} className="element__image" onClick={() => onCardClick({link: card.link, name: card.name})}/>
            <div className="element__title">
                <h2 className="element__name">{card.name}</h2>
                <div className="element__group-like">
                    <button className="element__button-like" type="button" aria-label="Лайкнуть"></button>
                    <p className="element__counter-like"></p>
                </div>
            </div>
        </article>
    )
}

export default Card;