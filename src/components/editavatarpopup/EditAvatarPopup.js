import React from 'react';
import PopupWithForm from '../popupwithform/PopupWithForm';

export function EditAvatarPopup(props) {
    const avatarRef = React.useRef('');

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: avatarRef,
        });
      }

    return (
        <PopupWithForm name="avatar" title="Change profile picture" isOpen={props.isOpen} onClose={props.onClose}  onSubmit={handleSubmit} text="Save">
            <fieldset className="modal__fieldset">
                <label>
                    {/* <Input placeholder={inputPlaceholder} onChange={inputChangeHandler}> */}
                    <input className="modal__input modal__input_avatar-link" id="avatar-link" name="avatar" value="avatar"
                        type="url" placeholder="Profile photo link" defaultValue="" required ref={avatarRef} />
                    <span className="modal__input_error" id="avatar-link-error"></span>
                </label>
            </fieldset>
        </PopupWithForm>
    )
}