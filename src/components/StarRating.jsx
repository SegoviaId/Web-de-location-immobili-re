import React from 'react';
import '../styles/starRating.css';
import StarIcon from './icons/StarIcon';

const StarRating = ({value=0}) => {
    
    return (
        <div className='star'>
            {
            [1,2,3,4,5].map(number => 
            <StarIcon color={ value >= number ? '#FF6060' : '#E3E3E3'}
             key={number.toString()}
             />
             )
             }
        </div>
    );
};

export default StarRating;