import React from 'react';

export default function PopupWithImage(props) {
    return(
        <section className={"modal modal_photo" + (props.card ? "modal_visible" : "")}>
            <figure className="modal__container">
                {console.log(props.card)};
                <button className="modal__close" onClick={props.onClose}></button>
                <img className="modal_photo__image" src={props.card ? props.card.link : ""} alt={props.card ? props.card.name : ""} />
                <figcaption className="modal_photo__caption">{props.card ? props.card.name : ""}</figcaption>
            </figure>
        </section>
    )
}