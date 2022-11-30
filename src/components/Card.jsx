import React from 'react'
import '../styles/card.css'
import { Link } from 'react-router-dom'

const Card = ({rent}) => {
    const {id, title, cover} = rent
    
    return (
        <div className='rent_card'>
        <Link to={`/rentDescription/${id}`} >
        <div className='card'>
            <img src={cover} alt="visuel du logement" className="card_img"/>
            <span className='card_title'>{title}</span>
        </div>
        </Link>
        </div>
    );
};

export default Card;