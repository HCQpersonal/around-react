import React from 'react';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import './../index.css';

export default function App(props) {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);

//   const currentUser = React.useContext(CurrentUserContext);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
        console.log(card);
    }

    function closeAllPopups() {
        setIsAddPlacePopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    
    React.useEffect(() => {
        api.getUserInfo()
          .then((res) => {
            setCurrentUser(res);
            // setCurrentUser(res.owner._id);
          }).catch((err) => {
            console.log(err);
          });
      }, [currentUser]);

  return (
    <>
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page__container">
                <Header />
                <Main 
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onClosePopups={closeAllPopups}
                    isEditProfilePopupOpen={isEditProfilePopupOpen}
                    isAddPlacePopupOpen={isAddPlacePopupOpen}
                    isEditAvatarPopupOpen={isEditAvatarPopupOpen}
                    selectedCard={selectedCard}
                />            
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    </>
  );
}
