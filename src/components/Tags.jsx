import React from 'react';
import '../styles/tags.css'

const Tags = ({tags}) => {
    
    return (
        <ul className='tag'>
            {tags.map((tag, index) => 
            <li className='tag_text' key={index}>{tag}</li>)}
        </ul>
    );
};

export default Tags;