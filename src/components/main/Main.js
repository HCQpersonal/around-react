/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import PopupWithImage from '../popupwithimage/PopupWithImage';

export default function Main(props) {
// const []

    function handleEditAvatarClick() {
        document.querySelector('.modal_avatar').classList.add('modal_visible');
    }

    function handleEditProfileClick() {
        document.querySelector('.modal_profile').classList.add('modal_visible');
    }

    function handleAddPlaceClick() {
        document.querySelector('.modal_image').classList.add('modal_visible');
    }
    
    return(
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-elements">
                    <img className="profile__avatar" alt="User's profile." src="#" />
                    <button className="profile__avatar-button" aria-label="Update profile photo" onClick={handleEditAvatarClick}></button>
                </div>
                <div className="profile__info-set">
                    <h1 className="profile__info profile__info_name"></h1>
                    <p className="profile__info profile__info_description"></p>
                </div>
                <button className="profile__edit-button" aria-label="Edit profile" onClick={handleEditProfileClick}></button>
                <button className="profile__add-button" aria-label="Add new image" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="grid">
                <ul className="grid__photos">
                </ul>
            </section>
            <section className="modal modal_avatar">
            <div className="modal__container">
                <button className="modal__close modal__close_avatar"></button>
                <div className="modal__background modal__background_avatar">
                    <form action="#" className="modal__form modal__form_avatar" noValidate>
                    <h3 className="modal__title">Change profile picture</h3>
                        <fieldset className="modal__fieldset">
                            <label>
                                <input className="modal__input modal__input_avatar-link" id="avatar-link" name="avatar"
                                    type="url" placeholder="Profile photo link" value="" required />
                                <span className="modal__input_error" id="avatar-link-error"></span>
                            </label>
                            <button className="modal__save-btn" type="submit">Save</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
        <section className="modal modal_profile">
            <div className="modal__container">
                <button className="modal__close modal__close_profile"></button>
                <div className="modal__background">
                    <form action="#" className="modal__form modal__form_profile" noValidate>
                        <h3 className="modal__title">Edit profile</h3>
                        <fieldset className="modal__fieldset">
                            <label>
                                <input className="modal__input modal__input_name" name="name" type="text" placeholder="Name" minLength="2" maxLength="40" id="profile-name" />
                                <span className="modal__input_error" id="profile-name-error"></span>
                            </label>
                            <label>
                                <input className="modal__input modal__input_description" name="job" type="text" placeholder="About me" minLength="2" maxLength="200" id="profile-description" />
                                <span className="modal__input_error" id="profile-description-error"></span>
                            </label>
                            <button className="modal__save-btn" type="submit">Save</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
        <section className="modal modal_image">
            <div className="modal__container">
                <button className="modal__close modal__close_image"></button>
                <div className="modal__background">
                    <form action="#" className="modal__form modal__form_image" noValidate>
                    <h3 className="modal__title">New place</h3>
                        <fieldset className="modal__fieldset">
                            <label>
                                <input className="modal__input modal__input_caption" id="image-caption" name="card-caption"
                                    type="text" placeholder="Title" value="" minLength="1" maxLength="100" required />
                                <span className="modal__input_error" id="image-caption-error"></span>
                            </label>
                            <label>
                                <input className="modal__input modal__input_image-link" id="image-link" name="card-link"
                                    type="url" placeholder="Image link" value="" required />
                                <span className="modal__input_error" id="image-link-error"></span>
                            </label>
                            <button className="modal__save-btn" type="submit">Create</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
        <PopupWithImage />
        {/* <section className="modal modal_delete">
            <div className="modal__container">
                <button className="modal__close"></button>
                <div className="modal__background modal__background_delete">
                    <h3 className="modal__title">Are you sure?</h3> 
                    <button className="modal__save-btn" type="submit">Yes</button>
                </div>
            </div>
        </section> */}
        </main>
    )
}