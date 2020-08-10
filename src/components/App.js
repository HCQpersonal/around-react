/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import '../index.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import PopupWithImage from './popupwithimage/PopupWithImage';
import './App.css';

function App(props) {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

  return (
    <>
        <Header />
        <Main 
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            isEditProfilePopupOpen={isEditProfilePopupOpen}
            isAddPlacePopupOpen={isAddPlacePopupOpen}
            isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        />
        <Footer />
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
