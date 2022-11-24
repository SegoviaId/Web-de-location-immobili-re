import React from 'react';
import Card from './Card';
import rents from '../api/logements.json'
import '../styles/RentList.css'

const RentList = () => {
    return (
        <div className='rent_content'>
               {rents.map(rent => 
                    <Card 
                    rent={rent}
                    key={rent.id}
                    />
                    )} 
        </div>
    );
};

export default RentList;