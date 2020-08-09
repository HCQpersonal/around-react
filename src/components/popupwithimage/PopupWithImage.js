import React from 'react';

export default function PopupWithImage() {
    return(
        <section className="modal modal_photo">
            <figure className="modal__container">
                <button className="modal__close"></button>
                <img className="modal_photo__image" src="#" alt="" />
                <figcaption className="modal_photo__caption"></figcaption>
            </figure>
        </section>
    )
}