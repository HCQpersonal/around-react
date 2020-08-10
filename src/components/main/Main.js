/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import PopupWithForm from '../popupwithform/PopupWithForm';
import PopupWithImage from '../popupwithimage/PopupWithImage';

export default function Main(props) {
    console.log(props)

    return(
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-elements">
                    <img className="profile__avatar" alt="User's profile." src="#" />
                    <button className="profile__avatar-button" aria-label="Update profile photo" onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__info-set">
                    <h1 className="profile__info profile__info_name"></h1>
                    <p className="profile__info profile__info_description"></p>
                </div>
                <button className="profile__edit-button" aria-label="Edit profile" onClick={props.onEditProfile}></button>
                <button className="profile__add-button" aria-label="Add new image" onClick={props.onAddPlace}></button>
            </section>
            <section className="grid">
                <ul className="grid__photos">
                </ul>
            </section>
            <PopupWithForm name="avatar" title="Change profile picture" isOpen={props.isEditAvatarPopupOpen}>
                <fieldset className="modal__fieldset">
                    <label>
                        <input className="modal__input modal__input_avatar-link" id="avatar-link" name="avatar"
                            type="url" placeholder="Profile photo link" value="" required />
                        <span className="modal__input_error" id="avatar-link-error"></span>
                    </label>
                    <button className="modal__save-btn" type="submit">Save</button>
                </fieldset>
            </PopupWithForm>
            <PopupWithForm name="profile" title="Edit profile" isOpen={props.isEditProfilePopupOpen}>
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
            </PopupWithForm>
            <PopupWithForm name="image" title="New place" isOpen={props.isAddPlacePopupOpen}>
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
            </PopupWithForm>
            <PopupWithForm name="delete" title="Are you sure?" isOpen={false}>
                <button className="modal__save-btn" type="submit">Yes</button>
            </PopupWithForm>
            <PopupWithImage />
        </main>
    )
}