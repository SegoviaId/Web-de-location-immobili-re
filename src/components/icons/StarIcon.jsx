import React from 'react';

const StarIcon = ({color}) => {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-label='starIcon'>
        <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" fill={color}/>
        </svg>
    );
};

export default StarIcon;