import React from 'react';

export default function PopupWithForm(props) {
    return(
    <section className={`modal modal_${props.name}`}>
        <div className="modal__container">
            <button className={`modal__close modal__close_${props.name}`}></button>
            <div className={`modal__background modal__background_${props.name}`}>
                <form action="#" className={`modal__form modal__form_${props.name}`} noValidate>
                    <h3 className="modal__title">{props.title}</h3>
                    {props.children}
                </form>
            </div>
        </div>
    </section>
    )
}