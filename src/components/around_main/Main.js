/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

export default function Main() {
    return(
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-elements">
                    <img className="profile__avatar" alt="User's profile." src="#" />
                    <button className="profile__avatar-button" aria-label="Update profile photo"></button>
                </div>
                <div className="profile__info-set">
                    <h1 className="profile__info profile__info_name"></h1>
                    <p className="profile__info profile__info_description"></p>
                </div>
                <button className="profile__edit-button" aria-label="Edit profile"></button>
                <button className="profile__add-button" aria-label="Add new image"></button>
            </section>
            <section className="grid">
                <ul className="grid__photos">
                </ul>
            </section>
        </main>
    )
}