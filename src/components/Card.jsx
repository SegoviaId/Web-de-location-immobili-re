import React from 'react'
import '../styles/card.css'

const Card = ({rent}) => {
    const {id, title, cover} = rent
    
    return (
        <div className='rent_card'>
        <a href={`/rentDescription/${id}`} >
        <div className='card'>
            <img src={cover} alt="visuel du logement" className="card_img"/>
            <span className='card_title'>{title}</span>
        </div>
        </a>
        </div>
    );
};

export default Card;