import React from 'react';

export default function Card(props) {
    return(        
    <>
        <li key={props.card._id} className="grid__photos-item">
            <div className="grid__photos-img-area">
                <button className="grid__photos-delete"></button>
                <div className="grid__photos-image grid__photos-image_sequoia"
                    style={{ backgroundImage: `url(${props.card.link})` }}
                    onClick={() => {
                        props.onCardClick(props.card);
                    }}>
                </div>
            </div>
            <div className="grid__photos-base">
                <h2 className="grid__photos-caption">{props.card.name}</h2>
                <div className="grid__photos-like-container">
                    <button className="grid__photos-liker"></button>
                    <p className="grid__photos-like-counter"></p>
                </div>
            </div>
        </li>
    </>
    );
}