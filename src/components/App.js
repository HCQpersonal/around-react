/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Header from './around_header/Header';
import Footer from './around_footer/Footer';
import Main from './around_main/Main';
import './App.css';

function App() {
  return (
    <>
        <Header />
        <Main />
        <Footer />
        <section className="modal modal_avatar">
            <div className="modal__container">
                <button className="modal__close modal__close_avatar"></button>
                <div className="modal__background modal__background_avatar">
                    <form action="#" className="modal__form modal__form_avatar" novalidate>
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
            <div className ="modal__container">
                <button className="modal__close modal__close_profile"></button>
                <div className="modal__background">
                    <form action="#" className="modal__form modal__form_profile" novalidate>
                        <h3 className="modal__title">Edit profile</h3>
                        <fieldset className="modal__fieldset">
                            <label>
                                <input className="modal__input modal__input_name" name="name" type="text" placeholder="Name" minlength="2" maxlength="40" id="profile-name" />
                                <span className="modal__input_error" id="profile-name-error"></span>
                            </label>
                            <label>
                                <input className="modal__input modal__input_description" name="job" type="text" placeholder="About me" minlength="2" maxlength="200" id="profile-description" />
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
                    <form action="#" className="modal__form modal__form_image" novalidate>
                    <h3 className="modal__title">New place</h3>
                        <fieldset className="modal__fieldset">
                            <label>
                                <input className="modal__input modal__input_caption" id="image-caption" name="card-caption"
                                    type="text" placeholder="Title" value="" minlength="1" maxlength="100" required />
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
        <section className="modal modal_photo">
            <figure className="modal__container">
                <button className="modal__close"></button>
                <img className="modal_photo__image" src="#" alt="" />
                <figcaption className="modal_photo__caption"></figcaption>
            </figure>
        </section>
        <section className="modal modal_delete">
            <div className="modal__container">
                <button className="modal__close"></button>
                <div className="modal__background modal__background_delete">
                    <h3 className="modal__title">Are you sure?</h3> 
                    <button className="modal__save-btn" type="submit">Yes</button>
                </div>
            </div>
        </section>
        <template className="grid__card-template">
            <li className="grid__photos-item">
                <div className="grid__photos-img-area">
                    <button className="grid__photos-delete"></button>
                    <div className="grid__photos-image grid__photos-image_sequoia"></div>
                </div>
                <div className="grid__photos-base">
                    <h2 className="grid__photos-caption"></h2>
                    <div className="grid__photos-like-container">
                        <button className="grid__photos-liker"></button>
                        <p className="grid__photos-like-counter"></p>
                    </div>
                </div>
            </li>
        </template>
        </>
  );
}

export default App;
