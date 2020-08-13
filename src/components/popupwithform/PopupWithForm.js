import React from 'react';

export default function PopupWithForm(props) {
    return(
    <>
        <section className={`modal modal_${props.name}` + (props.isOpen ? ' modal_visible' : '')}>
            <div className="modal__container">
                <button className={`modal__close modal__close_${props.name}`} onClick={props.onClose}></button>
                <div className={`modal__background modal__background_${props.name}`}>
                    <form action="#" className={`modal__form modal__form_${props.name}`} noValidate>
                        <h3 className="modal__title">{props.title}</h3>
                        {/* <Input placeholder={inputPlaceholder} onChange={inputChangeHandler}> */}
                        {props.children}
                    </form>
                </div>
            </div>
        </section>
    </>
    )
}